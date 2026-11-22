import { Language } from '../types';

export interface AudioPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentTime: number; // in seconds
  duration: number; // in seconds
  progress: number; // 0 to 100
  volume: number; // 0 to 1
  isMuted: boolean;
  activeTrackId: string | null;
  activeTrackTitle: string;
  hasRealSource: boolean;
  autoplayBlocked: boolean; // True if browser policy blocked unprompted autoplay
}

type AudioStateListener = (state: AudioPlaybackState) => void;

class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<AudioStateListener> = new Set();
  private simulatedInterval: number | null = null;
  private keepAliveInterval: number | null = null;
  private fadeInterval: number | null = null;
  private pendingTranscript: string | null = null;
  private pendingLanguage: Language = 'en';
  private activeLanguage: Language = 'en';
  private currentPlaySequence = 0;
  private isFading = false;

  private state: AudioPlaybackState = {
    isPlaying: false,
    isPaused: false,
    currentTime: 0,
    duration: 135,
    progress: 0,
    volume: 1.0,
    isMuted: false,
    activeTrackId: null,
    activeTrackTitle: '',
    hasRealSource: false,
    autoplayBlocked: false,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();
      this.audio.preload = 'metadata';
      this.attachAudioEvents();
    }
  }

  private attachAudioEvents(): void {
    if (!this.audio) return;

    this.audio.addEventListener('play', () => {
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.state.autoplayBlocked = false;
      this.notify();
    });

    this.audio.addEventListener('pause', () => {
      // Only report pause if we aren't in the middle of a smooth cross-fade to a new track
      if (!this.isFading) {
        this.state.isPlaying = false;
        this.state.isPaused = this.audio!.currentTime > 0 && !this.audio!.ended;
        this.notify();
      }
    });

    this.audio.addEventListener('ended', () => {
      this.clearFade();
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.state.currentTime = 0;
      this.state.progress = 0;
      this.notify();
    });

    this.audio.addEventListener('timeupdate', () => {
      if (this.audio && this.audio.duration && !this.isFading) {
        this.state.currentTime = this.audio.currentTime;
        this.state.duration = this.audio.duration;
        this.state.progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.notify();
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('AudioManager: HTML5 Audio load error or missing file:', e);
      this.clearFade();
      if (this.pendingTranscript) {
        const text = this.pendingTranscript;
        const lang = this.pendingLanguage;
        this.pendingTranscript = null;
        this.playSpeechSynthesis(text, lang);
        return;
      }
      this.state.isPlaying = false;
      this.state.hasRealSource = false;
      this.notify();
    });
  }

  /**
   * Smoothly fade volume out over fadeDurationMs (default 120ms) to prevent clicks and abrupt cuts
   */
  private fadeOut(fadeDurationMs = 120): Promise<void> {
    return new Promise((resolve) => {
      this.clearFade();
      if (!this.audio || this.audio.paused || this.audio.volume <= 0.01) {
        if (this.audio) this.audio.volume = 0;
        resolve();
        return;
      }

      this.isFading = true;
      const startVolume = this.audio.volume;
      const steps = 6;
      const stepTime = Math.max(16, Math.floor(fadeDurationMs / steps));
      let currentStep = 0;

      this.fadeInterval = window.setInterval(() => {
        currentStep++;
        const factor = Math.max(0, 1 - currentStep / steps);
        if (this.audio) {
          this.audio.volume = startVolume * factor;
        }

        if (currentStep >= steps) {
          this.clearFade();
          if (this.audio) this.audio.volume = 0;
          this.isFading = false;
          resolve();
        }
      }, stepTime);
    });
  }

  /**
   * Smoothly fade volume in from 0 to target volume over fadeDurationMs (default 150ms)
   */
  private fadeIn(targetVolume: number, fadeDurationMs = 150): void {
    this.clearFade();
    if (!this.audio) return;

    if (this.state.isMuted) {
      this.audio.volume = 0;
      return;
    }

    this.isFading = true;
    this.audio.volume = 0;
    const steps = 6;
    const stepTime = Math.max(16, Math.floor(fadeDurationMs / steps));
    let currentStep = 0;

    this.fadeInterval = window.setInterval(() => {
      currentStep++;
      const factor = Math.min(1, currentStep / steps);
      if (this.audio) {
        this.audio.volume = targetVolume * factor;
      }

      if (currentStep >= steps) {
        this.clearFade();
        if (this.audio) this.audio.volume = targetVolume;
        this.isFading = false;
      }
    }, stepTime);
  }

  private clearFade(): void {
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
    this.isFading = false;
  }

  /**
   * Internal helper to start SpeechSynthesis with simulated progress and keep-alive
   */
  private playSpeechSynthesis(transcriptText: string, language?: Language): boolean {
    if (
      !transcriptText ||
      transcriptText.trim().length === 0 ||
      typeof window === 'undefined' ||
      !('speechSynthesis' in window)
    ) {
      return false;
    }
    this.state.hasRealSource = true;
    try {
      window.speechSynthesis.cancel();
      const lang = language || 'en';
      const utterance = new SpeechSynthesisUtterance(transcriptText);
      this.currentUtterance = utterance;

      // Configure language and pitch/rate
      if (lang === 'kn') {
        utterance.lang = 'kn-IN';
      } else if (lang === 'hi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-IN';
      }

      utterance.rate = lang === 'en' ? 0.95 : 0.88;
      utterance.volume = this.state.isMuted ? 0 : this.state.volume;

      // Estimate duration based on word count
      const wordCount = transcriptText.split(/\s+/).filter(Boolean).length;
      const estDuration = Math.max(8, Math.round(wordCount / (lang === 'en' ? 2.5 : 2.0)));
      this.state.duration = estDuration;
      this.state.currentTime = 0;
      this.state.progress = 0;

      utterance.onstart = () => {
        this.state.isPlaying = true;
        this.state.isPaused = false;
        this.startSimulatedTimer();
        this.startSpeechKeepAlive();
        this.notify();
      };

      utterance.onend = () => {
        this.stopSimulatedTimer();
        this.stopSpeechKeepAlive();
        this.currentUtterance = null;
        this.state.isPlaying = false;
        this.state.isPaused = false;
        this.state.currentTime = 0;
        this.state.progress = 0;
        this.notify();
      };

      utterance.onerror = (e) => {
        console.warn('AudioManager: Speech synthesis error:', e);
        this.stopSimulatedTimer();
        this.stopSpeechKeepAlive();
        this.currentUtterance = null;
        this.state.isPlaying = false;
        this.notify();
      };

      window.speechSynthesis.speak(utterance);
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.notify();
      return true;
    } catch (err) {
      console.warn('AudioManager: Failed to start speech synthesis:', err);
      this.state.hasRealSource = false;
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.startSimulatedTimer();
      this.notify();
      return false;
    }
  }

  /**
   * Play narration stream with exclusive single-playback enforcement, smooth volume transitions,
   * and automatic speech synthesis fallback.
   */
  public async play(
    audioUrl?: string,
    trackId?: string,
    title = 'Narration Guide',
    transcriptText?: string,
    language: Language = 'en',
    forceReplay = false
  ): Promise<void> {
    const seq = ++this.currentPlaySequence;

    // Prevention of duplicate playback: If the exact same track in the same language is already active
    if (
      !forceReplay &&
      trackId &&
      this.state.activeTrackId === trackId &&
      this.activeLanguage === language &&
      (this.state.isPlaying || this.state.isPaused)
    ) {
      if (this.state.isPaused) {
        this.resume();
      }
      return;
    }

    // 1. Natural museum guide transition: Smoothly fade out currently playing audio
    if (this.state.isPlaying && this.audio && !this.audio.paused) {
      await this.fadeOut(110);
      if (seq !== this.currentPlaySequence) return;
    } else {
      this.clearFade();
    }

    // 2. Clear previous speech synthesis immediately
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    this.currentUtterance = null;
    this.stopSimulatedTimer();
    this.stopSpeechKeepAlive();

    this.state.activeTrackId = trackId || null;
    this.state.activeTrackTitle = title;
    this.state.autoplayBlocked = false;
    this.activeLanguage = language;
    this.pendingTranscript = transcriptText?.trim() || null;
    this.pendingLanguage = language;

    if (audioUrl && audioUrl.trim().length > 0 && this.audio) {
      this.state.hasRealSource = true;
      try {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.src = audioUrl;
        const targetVol = this.state.isMuted ? 0 : this.state.volume;
        this.audio.volume = 0; // Start at 0 for seamless fade-in

        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (seq !== this.currentPlaySequence) return;
              this.fadeIn(targetVol, 140);
            })
            .catch((err: any) => {
              if (err?.name === 'AbortError') return;

              console.warn('AudioManager: Autoplay was prevented by browser or file missing:', err);
              if (
                err &&
                (err.name === 'NotAllowedError' ||
                  (typeof err.message === 'string' && err.message.toLowerCase().includes('interact')))
              ) {
                this.state.isPlaying = false;
                this.state.autoplayBlocked = true;
                this.notify();
                return;
              }

              // Fallback to Web SpeechSynthesis if MP3 fails to load
              if (this.pendingTranscript && seq === this.currentPlaySequence) {
                const text = this.pendingTranscript;
                const lang = this.pendingLanguage;
                this.pendingTranscript = null;
                this.playSpeechSynthesis(text, lang);
              } else {
                this.state.isPlaying = false;
                this.notify();
              }
            });
        }
      } catch (err) {
        console.warn('AudioManager: Unable to play audio source:', err);
        if (this.pendingTranscript && seq === this.currentPlaySequence) {
          const text = this.pendingTranscript;
          const lang = this.pendingLanguage;
          this.pendingTranscript = null;
          this.playSpeechSynthesis(text, lang);
        } else {
          this.state.hasRealSource = false;
          this.notify();
        }
      }
    } else if (
      transcriptText &&
      transcriptText.trim().length > 0 &&
      typeof window !== 'undefined' &&
      'speechSynthesis' in window
    ) {
      // Speech Synthesis for monuments/hotspots without recorded audio files (e.g. Konark and Ellora non-MP3 hotspots)
      this.playSpeechSynthesis(transcriptText, language);
    } else {
      // Demonstration / Simulated playback if no real file or synthesis is connected yet
      this.state.hasRealSource = false;
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.startSimulatedTimer();
      this.notify();
    }
  }

  public retryAutoplay(): void {
    if (this.audio && this.state.hasRealSource) {
      this.state.autoplayBlocked = false;
      const targetVol = this.state.isMuted ? 0 : this.state.volume;
      this.audio.volume = 0;
      this.audio.play()
        .then(() => this.fadeIn(targetVol, 140))
        .catch((err) => {
          console.warn('AudioManager: Retry autoplay failed:', err);
        });
    }
  }

  public pause(): void {
    if (this.currentUtterance && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      this.state.isPlaying = false;
      this.state.isPaused = true;
      this.stopSimulatedTimer();
      this.notify();
    } else if (this.audio && this.state.hasRealSource) {
      this.fadeOut(80).then(() => {
        if (this.audio) this.audio.pause();
        this.state.isPlaying = false;
        this.state.isPaused = true;
        this.stopSimulatedTimer();
        this.notify();
      });
    } else {
      this.state.isPlaying = false;
      this.state.isPaused = true;
      this.stopSimulatedTimer();
      this.notify();
    }
  }

  public resume(): void {
    this.state.autoplayBlocked = false;
    if (this.currentUtterance && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.startSimulatedTimer();
      this.notify();
    } else if (this.audio && this.state.hasRealSource) {
      const targetVol = this.state.isMuted ? 0 : this.state.volume;
      this.audio.volume = 0;
      this.audio.play()
        .then(() => this.fadeIn(targetVol, 120))
        .catch(() => {});
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.notify();
    } else {
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.startSimulatedTimer();
      this.notify();
    }
  }

  /**
   * Stop playback cleanly.
   * If smooth = true, smoothly fades volume to 0 over 120ms before resetting.
   */
  public async stop(smooth = false): Promise<void> {
    const seq = ++this.currentPlaySequence;
    this.stopSimulatedTimer();
    this.stopSpeechKeepAlive();

    if (smooth && this.state.isPlaying && this.audio && !this.audio.paused) {
      await this.fadeOut(110);
      if (seq !== this.currentPlaySequence) return;
    } else {
      this.clearFade();
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    this.currentUtterance = null;

    if (this.audio) {
      try {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.removeAttribute('src');
      } catch {}
    }
    this.state.isPlaying = false;
    this.state.isPaused = false;
    this.state.currentTime = 0;
    this.state.progress = 0;
    this.state.activeTrackId = null;
    this.notify();
  }

  public seek(percentage: number): void {
    const clamped = Math.max(0, Math.min(100, percentage));
    this.state.progress = clamped;

    if (this.audio && this.state.hasRealSource && this.audio.duration) {
      this.audio.currentTime = (clamped / 100) * this.audio.duration;
      this.state.currentTime = this.audio.currentTime;
    } else {
      this.state.currentTime = (clamped / 100) * this.state.duration;
    }
    this.notify();
  }

  public setVolume(vol: number): void {
    const clamped = Math.max(0, Math.min(1, vol));
    this.state.volume = clamped;
    if (this.audio && !this.isFading) {
      this.audio.volume = this.state.isMuted ? 0 : clamped;
    }
    if (this.currentUtterance) {
      this.currentUtterance.volume = this.state.isMuted ? 0 : clamped;
    }
    this.notify();
  }

  public toggleMute(): void {
    this.state.isMuted = !this.state.isMuted;
    if (this.audio && !this.isFading) {
      this.audio.volume = this.state.isMuted ? 0 : this.state.volume;
    }
    if (this.currentUtterance) {
      this.currentUtterance.volume = this.state.isMuted ? 0 : this.state.volume;
    }
    this.notify();
  }

  public getState(): AudioPlaybackState {
    return { ...this.state };
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener({ ...this.state });
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener({ ...this.state });
      } catch (err) {
        console.error('AudioManager listener error:', err);
      }
    });
  }

  private startSimulatedTimer(): void {
    this.stopSimulatedTimer();
    this.simulatedInterval = window.setInterval(() => {
      if (this.state.progress >= 100) {
        this.stop();
        return;
      }
      this.state.progress = Math.min(100, this.state.progress + 1);
      this.state.currentTime = (this.state.progress / 100) * this.state.duration;
      this.notify();
    }, 600);
  }

  private stopSimulatedTimer(): void {
    if (this.simulatedInterval !== null) {
      clearInterval(this.simulatedInterval);
      this.simulatedInterval = null;
    }
  }

  private startSpeechKeepAlive(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    this.stopSpeechKeepAlive();
    this.keepAliveInterval = window.setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);
  }

  private stopSpeechKeepAlive(): void {
    if (this.keepAliveInterval !== null) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
}

export const audioManager = new AudioManager();
