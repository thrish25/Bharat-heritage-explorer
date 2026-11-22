import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Headphones, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import { audioManager, AudioPlaybackState } from '../../services/AudioManager';

interface AudioPlayerProps {
  trackTitle: string;
  durationString?: string;
  audioUrl?: string;
  transcriptText?: string;
  trackId?: string;
  onSeek?: (percentage: number) => void;
  hasAmbientMusic?: boolean;
  isAmbientPlaying?: boolean;
  onToggleAmbient?: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  trackTitle,
  durationString = '2:15',
  audioUrl,
  transcriptText,
  trackId,
  hasAmbientMusic = false,
  isAmbientPlaying = false,
  onToggleAmbient,
}) => {
  const { language, setLanguage, ui } = useLanguage();
  const [audioState, setAudioState] = useState<AudioPlaybackState>(audioManager.getState());

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
    } else {
      audioManager.play(audioUrl, trackId || trackTitle, trackTitle, transcriptText, language);
    }
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    audioManager.seek(pct);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    audioManager.setVolume(newVol);
    if (audioState.isMuted && newVol > 0) {
      audioManager.toggleMute();
    }
  };

  const formatSeconds = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  const displayTitle = audioState.activeTrackTitle || trackTitle;

  return (
    <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[500px] z-30 pointer-events-auto">
      <div className="viewer-panel-surface p-3.5 rounded-sm shadow-2xl border border-[#C6A15B]/35 flex flex-col gap-2.5">
        {/* Autoplay Blocked Fallback Notification Banner */}
        {audioState.autoplayBlocked && (
          <div className="bg-[#C6A15B]/20 border border-[#C6A15B]/60 px-3 py-2 rounded-sm flex items-center justify-between gap-2 text-xs text-[#F3EBDD]">
            <div className="flex items-center gap-1.5 min-w-0">
              <Volume2 className="w-4 h-4 text-[#E0C27B] shrink-0 animate-pulse" />
              <span className="truncate">Browser paused audio autoplay</span>
            </div>
            <button
              onClick={() => {
                if (audioState.hasRealSource) {
                  audioManager.retryAutoplay();
                } else {
                  audioManager.play(audioUrl, trackId || trackTitle, trackTitle, transcriptText, language);
                }
              }}
              className="px-2.5 py-1 bg-[#C6A15B] hover:bg-[#E0C27B] text-[#151719] font-bold text-[11px] uppercase tracking-wider rounded-sm shrink-0 transition-transform active:scale-95 cursor-pointer shadow"
            >
              Play Introduction
            </button>
          </div>
        )}

        {/* Track Metadata & Controls Row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Play/Pause Button */}
            <button
              onClick={handleTogglePlay}
              className="w-9 h-9 rounded-full bg-[#C6A15B] hover:bg-[#E0C27B] text-[#151719] flex items-center justify-center transition-transform hover:scale-105 shadow-md focus:outline-none shrink-0 cursor-pointer"
              title={audioState.isPlaying ? 'Pause Audio Guide' : 'Play Audio Guide'}
              aria-label={audioState.isPlaying ? 'Pause Audio Guide' : 'Play Audio Guide'}
            >
              {audioState.isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            {/* Track Info */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-[#B8B2A6]">
                <Headphones className="w-3 h-3 text-[#C6A15B]" />
                <span>{ui.viewerAudioGuide}</span>
                {/* Language Selection Pills */}
                <div className="flex items-center gap-0.5 ml-1 bg-[#151719]/60 p-0.5 rounded border border-[#C6A15B]/30">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      className={`px-1.5 py-0.2 rounded-sm text-[9px] font-bold transition-colors cursor-pointer ${
                        language === l.code
                          ? 'bg-[#C6A15B] text-[#151719]'
                          : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
                      }`}
                      title={l.label}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                {/* Om Ambient Resonator Toggle (Ellora) */}
                {hasAmbientMusic && onToggleAmbient && (
                  <button
                    onClick={onToggleAmbient}
                    className={`ml-1 px-1.5 py-0.5 rounded-sm text-[9px] font-bold transition-all flex items-center gap-1 cursor-pointer border ${
                      isAmbientPlaying
                        ? 'bg-[#C6A15B] text-[#151719] border-[#E0C27B] shadow-[0_0_8px_rgba(227,185,99,0.5)]'
                        : 'bg-[#151719]/60 text-[#B8B2A6] border-[#C6A15B]/30 hover:text-[#F3EBDD]'
                    }`}
                    title={isAmbientPlaying ? 'Stop 108 Hz Om Ambient Resonator' : 'Start 108 Hz Om Ambient Resonator'}
                  >
                    <span className={isAmbientPlaying ? 'animate-pulse text-xs' : 'text-xs'}>ॐ</span>
                    <span className="hidden xs:inline">Om Drone</span>
                  </button>
                )}
              </div>
              <p className="font-cinzel text-xs font-bold text-[#F3EBDD] truncate mt-0.5" title={displayTitle}>
                {displayTitle}
              </p>
            </div>
          </div>

          {/* Right Action Icons (Volume Control, Mute, Restart) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Smooth Volume Slider */}
            <div className="hidden xs:flex items-center gap-1.5 px-1.5 py-1 bg-[#151719]/50 rounded border border-[#C6A15B]/20" title={`Volume: ${Math.round((audioState.isMuted ? 0 : audioState.volume) * 100)}%`}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={audioState.isMuted ? 0 : audioState.volume}
                onChange={handleVolumeChange}
                className="audio-volume-slider"
                aria-label="Volume Slider"
              />
            </div>

            <button
              onClick={() => audioManager.toggleMute()}
              className="p-1.5 text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#151719]/60 rounded-sm transition-colors cursor-pointer"
              title={audioState.isMuted ? 'Unmute' : 'Mute'}
              aria-label={audioState.isMuted ? 'Unmute' : 'Mute'}
            >
              {audioState.isMuted ? (
                <VolumeX className="w-4 h-4 text-[#C6A15B]" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => audioManager.seek(0)}
              className="p-1.5 text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#151719]/60 rounded-sm transition-colors cursor-pointer"
              title="Restart Audio"
              aria-label="Restart Audio"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress Bar & Time */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#B8B2A6] shrink-0 w-8 text-right">
            {formatSeconds(audioState.currentTime)}
          </span>
          <div
            onClick={handleTrackClick}
            className="audio-scrubber-track flex-1 cursor-pointer"
            title="Click to seek"
          >
            <div
              className="audio-scrubber-fill"
              style={{ width: `${audioState.progress}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#858078] shrink-0 w-8">
            {audioState.hasRealSource && audioState.duration
              ? formatSeconds(audioState.duration)
              : durationString}
          </span>
        </div>
      </div>
    </div>
  );
};
