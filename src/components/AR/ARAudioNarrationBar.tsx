import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Square, Mic, MicOff, Sparkles, Volume2, Globe } from 'lucide-react';
import { ARMonumentConfig, getARAudioSrc, getARSubtitleKey } from '../../data/ar/arMonumentsConfig';
import subtitlesDataRaw from '../../data/ar/subtitlesData.json';

interface SubtitleCue {
  start: number;
  end: number;
  text: string;
}

const subtitlesData = subtitlesDataRaw as unknown as Record<string, Record<string, SubtitleCue[]>>;

interface ARAudioNarrationBarProps {
  config: ARMonumentConfig;
  language: 'en' | 'kn' | 'hi';
  onLanguageChange: (lang: 'en' | 'kn' | 'hi') => void;
  onOpenAssistant: () => void;
  onVoiceQuestion?: (question: string) => void;
  onFeedbackToast?: (message: string) => void;
  onResetView?: () => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

export const ARAudioNarrationBar: React.FC<ARAudioNarrationBarProps> = ({
  config,
  language,
  onLanguageChange,
  onOpenAssistant,
  onVoiceQuestion,
  onFeedbackToast,
  onResetView,
  audioRef,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeSubtitle, setActiveSubtitle] = useState<string>('');
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const recognitionRef = useRef<any>(null);
  const animFrameRef = useRef<number | null>(null);

  const defaultPrompt = {
    en: "Press Play or tap Voice to begin the AI heritage narration.",
    kn: "ಧ್ವನಿ ವಿವರಣೆ ಪ್ರಾರಂಭಿಸಲು ಪ್ಲೇ ಅಥವಾ ವಾಯ್ಸ್ ಒತ್ತಿ.",
    hi: "धरोहर विवरण शुरू करने के लिए प्ले या वॉइस दबाएं।",
  }[language];

  // Helper: Format seconds to M:SS
  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Sync subtitle cues using actual audio playback timestamp
  const syncSubtitleCue = useCallback((time: number, lang: 'en' | 'kn' | 'hi', monConfig: ARMonumentConfig) => {
    const subKey = getARSubtitleKey(monConfig);
    const cues = subtitlesData[subKey]?.[lang];
    if (!cues || !Array.isArray(cues) || cues.length === 0) {
      return;
    }

    const matched = cues.find((c) => time >= c.start && time <= c.end);
    if (matched) {
      setActiveSubtitle(matched.text);
    }
  }, []);

  // Set up audio source and lifecycle
  useEffect(() => {
    const audioSrc = getARAudioSrc(config, language);
    let audio = audioRef.current;

    if (!audio) {
      audio = new Audio();
      audio.preload = 'metadata';
      audioRef.current = audio;
    }

    // Stop and reset on monument or language change
    audio.pause();
    audio.src = audioSrc;
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsPaused(false);
    setAudioError(null);
    setActiveSubtitle(defaultPrompt);

    const handleLoadedMetadata = () => {
      setDuration(audio?.duration || 0);
      setAudioError(null);
    };

    const handleTimeUpdate = () => {
      if (!audio) return;
      const cur = audio.currentTime;
      setCurrentTime(cur);
      syncSubtitleCue(cur, language, config);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setAudioError(null);
    };

    const handlePause = () => {
      if (!audio) return;
      if (audio.currentTime > 0 && !audio.ended) {
        setIsPlaying(false);
        setIsPaused(true);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
      setActiveSubtitle(defaultPrompt);
    };

    const handleError = (e: any) => {
      console.warn('[ARAudioNarrationBar] Audio load error:', e);
      setIsPlaying(false);
      setIsPaused(false);
      setAudioError('Narration audio track could not be loaded.');
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [config.id, config.audioPrefix, language, defaultPrompt, syncSubtitleCue, audioRef]);

  // High-precision RAF loop when playing for smooth subtitle synchronization
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const checkCue = () => {
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        syncSubtitleCue(audio.currentTime, language, config);
      }
      animFrameRef.current = requestAnimationFrame(checkCue);
    };

    animFrameRef.current = requestAnimationFrame(checkCue);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, language, config, syncSubtitleCue, audioRef]);

  // Audio Playback Controls
  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        setIsPaused(true);
        onFeedbackToast?.('⏸ Narration paused');
      } else {
        await audio.play();
        setIsPlaying(true);
        setIsPaused(false);
        onFeedbackToast?.('▶ Playing narration');
      }
    } catch (err) {
      console.warn('[ARAudioNarrationBar] Playback error:', err);
      setAudioError('Tap again to enable audio playback.');
    }
  };

  const handleReplay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.currentTime = 0;
      await audio.play();
      setIsPlaying(true);
      setIsPaused(false);
      onFeedbackToast?.('↺ Replaying narration from start');
    } catch (err) {
      console.warn('[ARAudioNarrationBar] Replay error:', err);
    }
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    setActiveSubtitle(defaultPrompt);
    onFeedbackToast?.('⏹ Narration stopped');
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const target = ratio * duration;
    audio.currentTime = target;
    setCurrentTime(target);
    syncSubtitleCue(target, language, config);
  };

  // Language Switching Handler
  const handleSelectLanguage = (newLang: 'en' | 'kn' | 'hi') => {
    if (newLang === language) return;
    const audio = audioRef.current;
    const wasPlaying = isPlaying;

    onLanguageChange(newLang);
    const langNames = { en: 'English', kn: 'ಕನ್ನಡ', hi: 'हिन्दी' };
    onFeedbackToast?.(`🌐 Language: ${langNames[newLang]}`);

    if (audio) {
      const newSrc = `/assets/audio/ar/${config.audioPrefix}_narration_${newLang}.mp3`;
      audio.pause();
      audio.src = newSrc;
      audio.currentTime = 0;
      if (wasPlaying) {
        audio.play().catch((err) => console.warn('[ARAudioNarrationBar] Auto-resume error:', err));
      }
    }
  };

  // Web Speech API Voice Command & Assistant Engine
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsListening(true);
        onFeedbackToast?.('🎙️ Listening... Speak a command or question');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (e: any) => {
        setIsListening(false);
        if (e.error === 'not-allowed') {
          onFeedbackToast?.('⚠️ Microphone permission denied. Please allow microphone access.');
        } else if (e.error !== 'no-speech') {
          console.warn('[ARAudioNarrationBar] Speech recognition error:', e.error);
        }
      };

      recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript.trim().toLowerCase();
        console.log(`[ARAudioNarrationBar] Recognized transcript: "${transcript}"`);

        // Check if command is a playback or language directive
        if (transcript.includes('play') || transcript.includes('start') || transcript.includes('shuru') || transcript.includes('chalu') || transcript.includes('ಪ್ರಾರಂಭಿಸಿ')) {
          handlePlayPause();
        } else if (transcript.includes('pause') || transcript.includes('hold') || transcript.includes('roko') || transcript.includes('ruko') || transcript.includes('ವಿರಾಮ')) {
          const audio = audioRef.current;
          if (audio) {
            audio.pause();
            setIsPlaying(false);
            setIsPaused(true);
            onFeedbackToast?.('⏸ Narration paused by voice');
          }
        } else if (transcript.includes('resume') || transcript.includes('continue') || transcript.includes('ಮುಂದುವರಿಸಿ')) {
          handlePlayPause();
        } else if (transcript.includes('replay') || transcript.includes('restart') || transcript.includes('again') || transcript.includes('dobara') || transcript.includes('ಮತ್ತೆ')) {
          handleReplay();
        } else if (transcript.includes('stop') || transcript.includes('band') || transcript.includes('end') || transcript.includes('ನಿಲ್ಲಿಸಿ')) {
          handleStop();
        } else if (transcript.includes('english') || transcript.includes('angrezi')) {
          handleSelectLanguage('en');
        } else if (transcript.includes('kannada') || transcript.includes('kannad') || transcript.includes('ಕನ್ನಡ')) {
          handleSelectLanguage('kn');
        } else if (transcript.includes('hindi') || transcript.includes('हिन्दी')) {
          handleSelectLanguage('hi');
        } else if (transcript.includes('reset') || transcript.includes('center')) {
          onResetView?.();
          onFeedbackToast?.('🔄 Camera view reset');
        } else {
          // If not a recognized audio playback keyword, route to conversational AI Heritage Assistant!
          onFeedbackToast?.(`🤖 Asking Heritage Assistant: "${transcript}"`);
          onVoiceQuestion?.(transcript);
        }
      };
    } catch (err) {
      console.warn('[ARAudioNarrationBar] Speech init error:', err);
      setSpeechSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, [language, config.audioPrefix, onFeedbackToast, onVoiceQuestion, onResetView, audioRef]);

  const handleToggleVoiceRecognition = () => {
    if (!speechSupported) {
      onFeedbackToast?.('Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.');
      return;
    }

    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (isListening) {
      try {
        recognition.stop();
      } catch (e) {}
      setIsListening(false);
    } else {
      try {
        recognition.lang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
        recognition.start();
      } catch (err) {
        console.warn('[ARAudioNarrationBar] Recognition start error:', err);
      }
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full flex flex-col gap-2 pointer-events-auto select-none">
      {/* 1. Live Synchronized Subtitles Card with High Readability */}
      <div className="w-full bg-[#121416]/94 border border-[rgba(198,161,91,0.35)] rounded-xs p-2.5 sm:p-3.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.9)] transition-all">
        <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-[rgba(198,161,91,0.15)] text-[10px] sm:text-[11px] font-numeric tracking-wider text-[#C6A15B] uppercase">
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : isPaused ? 'bg-amber-400' : 'bg-[#858078]'}`} />
            <span className="font-semibold">
              {isPlaying
                ? (language === 'kn' ? 'ಲೈವ್ ವಿವರಣೆ ಪ್ರಸಾರವಾಗುತ್ತಿದೆ' : language === 'hi' ? 'सजीव विवरण चालू है' : 'Live Synchronized Narration')
                : isPaused
                ? (language === 'kn' ? 'ವಿವರಣೆ ವಿರಾಮಗೊಂಡಿದೆ' : language === 'hi' ? 'विवरण रुका हुआ है' : 'Narration Paused')
                : (language === 'kn' ? 'ಎಐ ಗೈಡ್ ಸಿದ್ಧವಾಗಿದೆ' : language === 'hi' ? 'एಐ गाइड तैयार है' : 'AI Guide Ready')}
            </span>
          </div>

          <div className="text-[#858078] text-[10px] font-numeric font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Subtitle Cue Text with 14-16px High-Contrast Legibility */}
        <p className="font-editorial text-sm sm:text-base text-[#F3EBDD] font-medium leading-relaxed min-h-[38px] flex items-center transition-opacity duration-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
          {activeSubtitle || defaultPrompt}
        </p>
      </div>

      {/* 2. Integrated Storytelling & Audio Control Bar */}
      <div className="w-full bg-[#151719]/96 border border-[rgba(198,161,91,0.4)] rounded-xs p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.95)] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-3">
        
        {/* Left: Guide Avatar & Playback Controls */}
        <div className="flex items-center gap-2">
          <div className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C6A15B] shrink-0 transition-transform ${
            isPlaying ? 'ring-2 ring-[#C6A15B] shadow-[0_0_12px_rgba(224,194,123,0.5)] scale-105' : 'opacity-85'
          }`}>
            <img
              src="/assets/images/ar/guide-avatar.jpg"
              alt="Heritage Guide Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Primary Audio Controls: Play/Pause, Replay, Stop */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePlayPause}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-xs font-cinzel text-xs font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer ${
                isPlaying
                  ? 'bg-[#242729] text-[#E0C27B] border border-[#C6A15B]/60 hover:bg-[#1C1F21]'
                  : 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] hover:from-[#B8B2A6] hover:to-[#E0C27B]'
              }`}
              title={isPlaying ? 'Pause Narration' : isPaused ? 'Resume Narration' : 'Play Narration'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'Pause' : isPaused ? 'Resume' : 'Play'}</span>
            </button>

            <button
              type="button"
              onClick={handleReplay}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] border border-[rgba(198,161,91,0.3)] rounded-xs transition-all cursor-pointer"
              title="Replay Narration"
              aria-label="Replay"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleStop}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] border border-[rgba(198,161,91,0.3)] rounded-xs transition-all cursor-pointer"
              title="Stop Narration"
              aria-label="Stop"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>

        {/* Center: Timeline Scrub Track */}
        <div className="w-full sm:flex-1 order-3 sm:order-2 flex items-center gap-2 px-1 py-1">
          <div
            onClick={handleSeek}
            className="relative flex-1 h-2.5 bg-[#121416] rounded-full overflow-hidden border border-[rgba(198,161,91,0.25)] cursor-pointer group"
            title="Click or tap to seek narration timestamp"
          >
            <div
              className="h-full bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] rounded-full transition-all duration-100 group-hover:brightness-125"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-numeric text-[#B8B2A6] shrink-0 min-w-[54px] text-right">
            {formatTime(currentTime)}
          </span>
        </div>

        {/* Right: Language Switcher, Voice Mic & Ask AI */}
        <div className="flex items-center gap-1.5 order-2 sm:order-3">
          {/* Trilingual Toggle Pills */}
          <div className="flex items-center bg-[#151719] p-0.5 rounded-xs border border-[rgba(198,161,91,0.3)]">
            {(['en', 'kn', 'hi'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => handleSelectLanguage(l)}
                className={`px-2 py-1.5 min-h-[32px] text-[10px] sm:text-[11px] font-numeric font-bold rounded-xs transition-all cursor-pointer ${
                  language === l
                    ? 'bg-[#C6A15B] text-[#151719] shadow-xs'
                    : 'text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#242729]'
                }`}
                title={`Switch narration to ${l === 'en' ? 'English' : l === 'kn' ? 'Kannada' : 'Hindi'}`}
              >
                {l === 'en' ? 'EN' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
              </button>
            ))}
          </div>

          {/* Voice Command Mic Trigger Button */}
          <button
            type="button"
            onClick={handleToggleVoiceRecognition}
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 min-h-[38px] rounded-xs font-cinzel text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse shadow-[0_0_15px_rgba(225,29,72,0.6)]'
                : 'bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] border border-[rgba(198,161,91,0.4)]'
            }`}
            title={isListening ? 'Listening... Tap to stop' : 'Voice Command: Tap and speak'}
            aria-label="Voice Command"
          >
            {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isListening ? 'Listening' : 'Voice'}</span>
          </button>

          {/* Ask AI Heritage Assistant Trigger Button */}
          <button
            type="button"
            onClick={onOpenAssistant}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 min-h-[38px] bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/60 hover:border-[#E0C27B] shadow-xs transition-all cursor-pointer group"
            title="Ask AI Heritage Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>

      </div>

      {/* Audio Error Banner */}
      {audioError && (
        <div className="w-full text-center py-1 px-3 bg-red-900/60 border border-red-500/40 rounded-xs text-[11px] text-red-200">
          {audioError}
        </div>
      )}
    </div>
  );
};
