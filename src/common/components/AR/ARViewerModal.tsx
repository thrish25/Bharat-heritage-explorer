import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Landmark, ChevronRight, Eye, Info } from 'lucide-react';
import { Monument, Language } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { getARConfigForMonument } from '../../data/ar/arMonumentsConfig';
import { ARModelViewer, ARModelViewerHandle } from './ARModelViewer';
import { ARAudioNarrationBar } from './ARAudioNarrationBar';
import { ARAssistantDrawer } from './ARAssistantDrawer';

interface ARViewerModalProps {
  monument: Monument;
  onClose: () => void;
  onOpenVirtualTour?: (monument: Monument) => void;
  onOpenReconstruction?: (monument: Monument, target?: 'vishwakarma' | 'kailasa') => void;
}

export const ARViewerModal: React.FC<ARViewerModalProps> = ({
  monument,
  onClose,
  onOpenVirtualTour,
  onOpenReconstruction,
}) => {
  const { t, ui, language, setLanguage } = useLanguage();
  const arConfig = getARConfigForMonument(monument.id);

  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);
  const [pendingVoiceQuestion, setPendingVoiceQuestion] = useState<string | undefined>(undefined);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const viewerRef = useRef<ARModelViewerHandle | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setFeedbackToast(msg);
    toastTimerRef.current = window.setTimeout(() => {
      setFeedbackToast(null);
    }, 4000);
  }, []);

  // Strict resource cleanup on close and unmount
  const handleExit = useCallback(() => {
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
      } catch (e) {}
      audioRef.current = null;
    }
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setIsAssistantOpen(false);
    setPendingVoiceQuestion(undefined);
    onClose();
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isAssistantOpen) {
          setIsAssistantOpen(false);
        } else {
          handleExit();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleExit, isAssistantOpen]);

  // Teardown when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.removeAttribute('src');
          audioRef.current.load();
        } catch (e) {}
        audioRef.current = null;
      }
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  if (!arConfig) {
    return (
      <div className="fixed inset-0 z-50 bg-[#121416] flex flex-col items-center justify-center p-6 text-center text-[#F3EBDD]">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
          <Info className="w-6 h-6" />
        </div>
        <h2 className="font-editorial text-2xl font-bold mb-2">AR Model Not Configured</h2>
        <p className="text-sm text-[#B8B2A6] mb-6">
          No 3D AR model configuration was found for &quot;{monument.name.en}&quot;.
        </p>
        <button
          type="button"
          onClick={handleExit}
          className="px-5 py-2.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
        >
          {ui.viewerReturnToMuseum}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#121416] text-[#F3EBDD] flex flex-col overflow-hidden select-none animate-fade-in">
      {/* Main 3D AR Model Canvas Container */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <ARModelViewer ref={viewerRef} config={arConfig}>
          {/* 1. Master Floating Top Navigation Bar (WebXR DOM Overlay Compatible) */}
          <header className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-30 pointer-events-none flex items-center justify-between gap-2">
            {/* Left: Monument Title & UNESCO Badge */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#121416]/92 border border-[rgba(198,161,91,0.35)] rounded-xs px-2 py-1 sm:px-3 sm:py-2 backdrop-blur-md shadow-lg pointer-events-auto shrink min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xs bg-[#1C1F21] flex items-center justify-center border border-[rgba(198,161,91,0.4)] shadow-xs shrink-0">
                <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A15B]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <h2 className="font-editorial text-xs sm:text-sm font-bold text-[#F3EBDD] tracking-wide truncate max-w-[100px] sm:max-w-[240px]">
                    {t(arConfig.name)}
                  </h2>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#C6A15B]/20 border border-[rgba(198,161,91,0.4)] text-[8px] font-numeric font-bold tracking-wider text-[#E0C27B] uppercase shrink-0">
                    AR
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[9px] uppercase font-numeric tracking-widest text-[#B8B2A6] truncate">
                  <span>{ui.unescoSite}</span>
                  <ChevronRight className="w-2.5 h-2.5 text-[#C6A15B]/70 shrink-0" />
                  <span className="text-[#F3EBDD] font-semibold truncate">{t(monument.name)}</span>
                </div>
              </div>
            </div>

            {/* Right: Trilingual Selector, Cross-Nav Buttons & Exit */}
            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              {/* Clearly visible Trilingual Language Toggle Buttons */}
              <div className="flex items-center bg-[#151719]/95 border border-[rgba(198,161,91,0.4)] rounded-xs p-0.5 shadow-md">
                {(['en', 'kn', 'hi'] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLanguage(l as Language);
                      showToast(`🌐 Language: ${l === 'en' ? 'English' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}`);
                    }}
                    className={`px-1.5 sm:px-2.5 py-1 text-[10px] sm:text-xs font-numeric font-bold rounded-xs transition-all cursor-pointer ${
                      language === l
                        ? 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] shadow-xs'
                        : 'text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#242729]'
                    }`}
                    title={`Switch to ${l === 'en' ? 'English' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}`}
                  >
                    <span className="inline sm:hidden">{l === 'en' ? 'EN' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}</span>
                    <span className="hidden sm:inline">{l === 'en' ? 'English' : l === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}</span>
                  </button>
                ))}
              </div>

              {/* Cross Navigation: 360° Tour (desktop/tablet) */}
              {onOpenVirtualTour && (
                <button
                  type="button"
                  onClick={() => {
                    handleExit();
                    onOpenVirtualTour(monument);
                  }}
                  className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1C1F21]/90 hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[rgba(198,161,91,0.4)] shadow-md transition-all cursor-pointer"
                  title="360° Virtual Tour"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>360° TOUR</span>
                </button>
              )}

              {/* Exit / Return to Museum */}
              <button
                type="button"
                onClick={handleExit}
                className="min-w-[34px] sm:min-w-[38px] min-h-[34px] sm:min-h-[38px] p-1.5 sm:px-2.5 sm:py-1.5 bg-[#1C1F21]/95 hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] border border-[rgba(198,161,91,0.4)] rounded-xs shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-1 active:scale-95 shrink-0"
                aria-label="Exit AR Viewer"
                title="Exit AR Viewer"
              >
                <X className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                <span className="text-[11px] font-cinzel font-bold uppercase hidden sm:inline">EXIT</span>
              </button>
            </div>
          </header>

          {/* 2. Bottom Controls Hint Badge (Non-blocking desktop hint) */}
          <div className="absolute top-20 left-3 sm:left-6 z-20 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151719]/80 border border-[rgba(198,161,91,0.2)] backdrop-blur-md text-[11px] text-[#B8B2A6]">
            <span className="text-[#E0C27B]">🖱️</span>
            <span>Drag to orbit • Scroll to zoom • Right-click to pan</span>
          </div>

          {/* 3. Bottom Integrated Subtitles & Narration Controls Bar */}
          <div className="absolute bottom-3 left-2 right-2 sm:left-6 sm:right-6 max-w-4xl mx-auto z-30 pointer-events-none">
            <ARAudioNarrationBar
              config={arConfig}
              language={language}
              onLanguageChange={(l) => setLanguage(l as Language)}
              onOpenAssistant={() => setIsAssistantOpen(true)}
              onVoiceQuestion={(question) => {
                setPendingVoiceQuestion(question);
                setIsAssistantOpen(true);
              }}
              onFeedbackToast={(msg) => showToast(msg)}
              onResetView={() => viewerRef.current?.resetView()}
              audioRef={audioRef}
            />
          </div>

          {/* 4. Conversational AI Heritage Assistant Drawer */}
          <ARAssistantDrawer
            isOpen={isAssistantOpen}
            onClose={() => setIsAssistantOpen(false)}
            config={arConfig}
            language={language}
            initialQuestion={pendingVoiceQuestion}
            onClearInitialQuestion={() => setPendingVoiceQuestion(undefined)}
          />

          {/* 5. Voice Command & Feedback Toast HUD */}
          {feedbackToast && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full bg-[#1C1F21]/95 border border-[#C6A15B] text-[#E0C27B] text-xs font-cinzel font-semibold tracking-wide shadow-2xl backdrop-blur-md animate-fade-in pointer-events-none">
              {feedbackToast}
            </div>
          )}
        </ARModelViewer>
      </main>
    </div>
  );
};
