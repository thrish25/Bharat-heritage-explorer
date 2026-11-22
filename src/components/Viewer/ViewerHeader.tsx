import React from 'react';
import { X, Landmark, ChevronRight, Sparkles, Smartphone } from 'lucide-react';
import { Monument, Scene, SceneDemo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface ViewerHeaderProps {
  currentMonument: Monument;
  currentScene: Scene | SceneDemo;
  onSelectMonument: (monument: Monument) => void;
  onExit: () => void;
  onOpenReconstruction?: (target?: 'vishwakarma' | 'kailasa') => void;
  onOpenAR?: () => void;
  onOpenHeritageStory?: () => void;
}

export const ViewerHeader: React.FC<ViewerHeaderProps> = ({
  currentMonument,
  currentScene,
  onSelectMonument,
  onExit,
  onOpenReconstruction,
  onOpenAR,
  onOpenHeritageStory,
}) => {
  const { t, ui } = useLanguage();

  return (
    <header className="absolute top-0 left-0 right-0 z-30 viewer-glass-header border-b border-[rgba(198,161,91,0.25)] text-[#F3EBDD] px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Monument Title & Current Viewpoint Breadcrumb */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-[#1C1F21] flex items-center justify-center border border-[rgba(198,161,91,0.4)]">
              <Landmark className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-numeric tracking-widest text-[#B8B2A6]">
                <span>{ui.unescoSite}</span>
                <ChevronRight className="w-3 h-3 text-[#C6A15B]/70" />
                <span className="text-[#F3EBDD] font-semibold">{t(currentMonument.name)}</span>
              </div>
              <h2 className="font-editorial text-sm sm:text-base font-bold text-[#F3EBDD] tracking-wide truncate max-w-[280px] sm:max-w-md">
                {t(currentScene.title)}
              </h2>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenAR && (
              <button
                type="button"
                onClick={onOpenAR}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1C1F21] text-[#E0C27B] font-cinzel text-[10px] font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/50 shadow cursor-pointer"
                title="Inspect 3D Monument in AR"
              >
                <Smartphone className="w-3 h-3 text-[#C6A15B]" />
                <span>AR</span>
              </button>
            )}

            {onOpenReconstruction && (
              <button
                type="button"
                onClick={() => {
                  if (currentMonument.id === 'ellora') {
                    const isCave10 = currentScene.id === 'cave10_interior' || currentScene.id.startsWith('c10');
                    onOpenReconstruction(isCave10 ? 'vishwakarma' : 'kailasa');
                  } else {
                    onOpenReconstruction();
                  }
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] font-cinzel text-[10px] font-bold tracking-wider uppercase rounded-xs border border-[#F3EBDD]/60 shadow cursor-pointer"
                title="Explore the Past — Historical Architectural Visualization"
              >
                <Sparkles className="w-3 h-3 text-[#151719]" />
                <span>EXPLORE THE PAST</span>
              </button>
            )}

            {onOpenHeritageStory && (
              <button
                type="button"
                onClick={onOpenHeritageStory}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1C1F21] text-[#E0C27B] font-cinzel text-[10px] font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/50 shadow cursor-pointer"
                title="Ask Heritage AI"
              >
                <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                <span>Heritage AI</span>
              </button>
            )}

            <button
              onClick={onExit}
              className="p-1.5 text-[#B8B2A6] hover:text-[#F3EBDD] bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] rounded-xs cursor-pointer"
              aria-label={ui.viewerReturnToMuseum}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: AR MODEL, EXPLORE THE PAST Button, Heritage AI, Language Selector & Exit Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* AR Model Button */}
          {onOpenAR && (
            <button
              type="button"
              onClick={onOpenAR}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1F21] hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/60 hover:border-[#E0C27B] shadow-[0_2px_10px_rgba(198,161,91,0.25)] hover:shadow-[0_4px_16px_rgba(224,194,123,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              title="Inspect 3D Monument in Augmented Reality"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform" />
              <span>AR MODEL</span>
            </button>
          )}

          {/* Main Navigation Button: EXPLORE THE PAST (All 4 Monuments) */}
          {onOpenReconstruction && (
            <button
              type="button"
              onClick={() => {
                if (currentMonument.id === 'ellora') {
                  const isCave10 = currentScene.id === 'cave10_interior' || currentScene.id.startsWith('c10');
                  onOpenReconstruction(isCave10 ? 'vishwakarma' : 'kailasa');
                } else {
                  onOpenReconstruction();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[#F3EBDD]/60 shadow-[0_2px_12px_rgba(198,161,91,0.35)] hover:shadow-[0_4px_18px_rgba(224,194,123,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              title="Explore the Past — Historical Architectural Visualization"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#151719] group-hover:rotate-12 transition-transform" />
              <span>EXPLORE THE PAST</span>
            </button>
          )}

          {/* Heritage AI Button */}
          {onOpenHeritageStory && (
            <button
              type="button"
              onClick={onOpenHeritageStory}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1C1F21] hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/60 hover:border-[#E0C27B] shadow-[0_2px_10px_rgba(198,161,91,0.25)] hover:shadow-[0_4px_16px_rgba(224,194,123,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              title="Ask Heritage AI — Expert Historian & Architectural Storyteller"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform" />
              <span>HERITAGE AI</span>
            </button>
          )}

          <LanguageSelector variant="dark" />

          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1F21]/90 hover:bg-[#242729] text-[#F3EBDD] border border-[rgba(198,161,91,0.4)] hover:border-[#C6A15B] text-xs font-semibold tracking-wider uppercase rounded-xs transition-all shadow-xs cursor-pointer"
          >
            <X className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{ui.viewerReturnToMuseum}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
