import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Headphones, Music, ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import { audioManager, AudioPlaybackState } from '../../services/AudioManager';

interface FullscreenAudioPopupProps {
  trackTitle: string;
  audioUrl?: string;
  transcriptText?: string;
  trackId?: string;
  hasAmbientMusic?: boolean;
  isAmbientPlaying?: boolean;
  onToggleAmbient?: () => void;
}

export const FullscreenAudioPopup: React.FC<FullscreenAudioPopupProps> = ({
  trackTitle,
  audioUrl,
  transcriptText,
  trackId,
  hasAmbientMusic = false,
  isAmbientPlaying = false,
  onToggleAmbient,
}) => {
  const { language, setLanguage, ui } = useLanguage();
  const [audioState, setAudioState] = useState<AudioPlaybackState>(audioManager.getState());
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    return audioManager.subscribe((state) => {
      setAudioState(state);
    });
  }, []);

  const handleTogglePlay = () => {
    if (audioState.isPlaying) {
      audioManager.pause();
    } else if (audioState.isPaused) {
      audioManager.resume();
    } else if (audioState.hasRealSource) {
      audioManager.retryAutoplay();
    } else {
      audioManager.play(audioUrl, trackId || trackTitle, trackTitle, transcriptText, language);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    audioManager.setVolume(newVol);
    if (audioState.isMuted && newVol > 0) {
      audioManager.toggleMute();
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  const displayTitle = audioState.activeTrackTitle || trackTitle;

  return (
    <div className="absolute bottom-6 left-6 z-40 pointer-events-auto select-none transition-all">
      <div className="bg-[#151719]/95 border border-[#C6A15B]/60 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.85)] backdrop-blur-md p-3 max-w-[420px] flex flex-col gap-2.5 text-[#F3EBDD]">

        {/* Top Header Row with Minimize Toggle */}
        <div className="flex items-center justify-between gap-2 border-b border-[#C6A15B]/20 pb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <Headphones className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8B2A6] truncate">
              {ui.viewerAudioGuide}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Language Switcher Pills */}
            <div className="flex items-center gap-0.5 bg-[#1C1F21] p-0.5 rounded border border-[#C6A15B]/30">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded-xs transition-colors cursor-pointer ${
                    language === l.code
                      ? 'bg-[#C6A15B] text-[#151719]'
                      : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMinimized((prev) => !prev)}
              className="p-1 text-[#B8B2A6] hover:text-[#F3EBDD] rounded cursor-pointer"
              title={isMinimized ? 'Expand Audio Controls' : 'Minimize'}
            >
              {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Minimized or Expanded View */}
        {!isMinimized && (
          <>
            {/* Active Narration Track */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <button
                  onClick={handleTogglePlay}
                  className="w-8 h-8 rounded-full bg-[#C6A15B] hover:bg-[#E0C27B] text-[#151719] flex items-center justify-center transition-transform hover:scale-105 shadow shrink-0 cursor-pointer"
                  title={audioState.isPlaying ? 'Pause Narration' : 'Play Narration'}
                >
                  {audioState.isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>
                <div className="min-w-0">
                  <p className="font-cinzel text-xs font-bold text-[#F3EBDD] truncate" title={displayTitle}>
                    {displayTitle}
                  </p>
                  <span className="text-[10px] text-[#B8B2A6]/80 font-mono">
                    {audioState.isPlaying ? 'Playing Narration' : audioState.isPaused ? 'Paused' : 'Ready'}
                  </span>
                </div>
              </div>

              {/* Volume & Mute */}
              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={audioState.isMuted ? 0 : audioState.volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 audio-volume-slider"
                  aria-label="Volume"
                />
                <button
                  onClick={() => audioManager.toggleMute()}
                  className="p-1 text-[#B8B2A6] hover:text-[#F3EBDD] cursor-pointer"
                  title={audioState.isMuted ? 'Unmute' : 'Mute'}
                >
                  {audioState.isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-[#C6A15B]" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Independent Ambient Om Background Resonator Toggle (Ellora) */}
            {hasAmbientMusic && onToggleAmbient && (
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#C6A15B]/20 bg-[#1C1F21]/40 px-2 py-1.5 rounded-sm">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${isAmbientPlaying ? 'text-[#E0C27B] animate-pulse' : 'text-[#858078]'}`}>
                    ॐ
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-cinzel font-bold text-[#F3EBDD]">
                      108 Hz Om Sacred Drone
                    </span>
                    <span className="text-[9px] text-[#B8B2A6]">
                      Cavern Basalt Acoustic Resonator
                    </span>
                  </div>
                </div>

                <button
                  onClick={onToggleAmbient}
                  className={`px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isAmbientPlaying
                      ? 'bg-[#C6A15B] text-[#151719] font-bold shadow-[0_0_8px_rgba(227,185,99,0.5)]'
                      : 'bg-[#1C1F21] text-[#B8B2A6] border border-[#C6A15B]/40 hover:text-[#F3EBDD]'
                  }`}
                >
                  {isAmbientPlaying ? 'Drone ON' : 'Drone OFF'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
