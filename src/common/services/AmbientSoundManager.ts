/**
 * Ellora Caves — Sacred Basalt Cavern Acoustic Resonator
 * Web Audio API procedural synthesis of ancient rock-cut temple acoustics.
 *
 * Fundamental: 108 Hz sacred Om drone with 54 Hz sub-bass resonance,
 * 216.4 Hz harmonic overtone, and cavern wind resonance filter.
 *
 * Completely decoupled from spoken narration AudioManager:
 * - Operates on an independent Web Audio signal chain
 * - Independent ON/OFF toggle and volume controls
 * - Persists smoothly across scene navigation within Ellora
 */

export interface AmbientSoundState {
  isPlaying: boolean;
  volume: number;
}

type AmbientListener = (state: AmbientSoundState) => void;

export class AmbientSoundManager {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private volume = 0.45;
  private masterGain: GainNode | null = null;
  private volumeGain: GainNode | null = null;
  private oscillators: (OscillatorNode | AudioBufferSourceNode)[] = [];
  private listeners: Set<AmbientListener> = new Set();

  private initContext(): boolean {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) {
        console.warn('Web Audio API is not supported in this browser.');
        return false;
      }
      this.ctx = new AudioCtx();
    }
    return true;
  }

  public getState(): AmbientSoundState {
    return {
      isPlaying: this.isPlaying,
      volume: this.volume,
    };
  }

  public subscribe(listener: AmbientListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error('Error in AmbientSoundManager listener:', err);
      }
    });
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      if (!this.initContext() || !this.ctx) return;

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Stop any existing nodes before restarting
      this.stopImmediate();

      const now = this.ctx.currentTime;

      // Master fade gain node for smooth envelope transitions
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.35, now + 2.0);

      // Volume gain node for user level control
      this.volumeGain = this.ctx.createGain();
      this.volumeGain.gain.setValueAtTime(this.volume, now);

      this.masterGain.connect(this.volumeGain);
      this.volumeGain.connect(this.ctx.destination);

      // Low basalt stone cavern filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, now);
      filter.Q.setValueAtTime(3.0, now);
      filter.connect(this.masterGain);

      // 1. Deep 108 Hz fundamental sacred drone (Om frequency)
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108.0, now);
      const gain1 = this.ctx.createGain();
      gain1.gain.setValueAtTime(0.42, now);
      osc1.connect(gain1);
      gain1.connect(filter);
      osc1.start(now);
      this.oscillators.push(osc1);

      // 2. Sub-bass subterranean ground resonance (54 Hz)
      const oscSub = this.ctx.createOscillator();
      oscSub.type = 'sine';
      oscSub.frequency.setValueAtTime(54.0, now);
      const gainSub = this.ctx.createGain();
      gainSub.gain.setValueAtTime(0.32, now);
      oscSub.connect(gainSub);
      gainSub.connect(this.masterGain);
      oscSub.start(now);
      this.oscillators.push(oscSub);

      // 3. Tanpura / Bell harmonic overtone (216.4 Hz)
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(216.4, now);
      const gain2 = this.ctx.createGain();
      gain2.gain.setValueAtTime(0.12, now);
      osc2.connect(gain2);
      gain2.connect(filter);
      osc2.start(now);
      this.oscillators.push(osc2);

      // 4. Subtle rock-cut chasm ambient whisper (filtered white noise)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.08;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(180, now);
      noiseFilter.Q.setValueAtTime(4.0, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.06, now);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);
      whiteNoise.start(now);
      this.oscillators.push(whiteNoise);

      this.isPlaying = true;
      this.notify();
    } catch (err) {
      console.warn('Web Audio synthesis failed or blocked by browser autoplay policy:', err);
      this.isPlaying = false;
      this.notify();
    }
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;
      if (this.masterGain) {
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      }

      setTimeout(() => {
        this.stopImmediate();
      }, 850);
    } catch (e) {
      this.stopImmediate();
    }

    this.isPlaying = false;
    this.notify();
  }

  private stopImmediate() {
    this.oscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this.oscillators = [];
    if (this.masterGain) {
      try {
        this.masterGain.disconnect();
      } catch (e) {}
      this.masterGain = null;
    }
  }

  public setVolume(newVolume: number) {
    this.volume = Math.max(0, Math.min(1, newVolume));
    if (this.volumeGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.volumeGain.gain.setValueAtTime(this.volume, now);
    }
    this.notify();
  }
}

export const ambientSoundManager = new AmbientSoundManager();
