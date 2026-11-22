import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight, LayoutGrid, StretchHorizontal } from 'lucide-react';
import { Scene, SceneDemo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface SceneSelectorProps {
  scenes: (Scene | SceneDemo)[];
  activeSceneId: string;
  onSelectScene: (sceneId: string) => void;
}

export const SceneSelector: React.FC<SceneSelectorProps> = ({
  scenes,
  activeSceneId,
  onSelectScene,
}) => {
  const { t, ui } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeCardRef = useRef<HTMLButtonElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  // Check scroll boundary state
  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons, scenes.length]);

  // Auto-scroll active card into view
  useEffect(() => {
    if (activeCardRef.current && scrollContainerRef.current && !isGridView) {
      activeCardRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeSceneId, isGridView]);

  // Horizontal scroll buttons
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 260;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Convert mouse wheel to horizontal scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollContainerRef.current || isGridView) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.stopPropagation();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 px-2 sm:px-6 pointer-events-none scene-selector-container">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="viewer-panel-surface p-2.5 sm:p-3.5 rounded-sm shadow-2xl border border-[#C6A15B]/30 backdrop-blur-md">
          {/* Header Bar: Title, Count, Navigation Controls, View Toggle */}
          <div className="flex items-center justify-between mb-2 px-1 text-xs">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-widest text-[#B8B2A6]">
              <Camera className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{ui.viewerViewpointsTitle}</span>
              <span className="text-[11px] px-2 py-0.5 rounded-sm bg-[#C6A15B]/20 text-[#F3EBDD] border border-[#C6A15B]/40 font-mono">
                0{scenes.findIndex((s) => s.id === activeSceneId) + 1} / 0{scenes.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-[10px] text-[#858078] tracking-wider uppercase">
                {ui.viewerSanctuariesCount} (Press 1–{scenes.length})
              </span>

              {/* Grid / Filmstrip View Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGridView((prev) => !prev);
                }}
                className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold text-[#B8B2A6] hover:text-[#F3EBDD] bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] hover:border-[#C6A15B] rounded-xs transition-all cursor-pointer"
                title={isGridView ? 'Switch to Filmstrip View' : 'Show All in Grid View'}
              >
                {isGridView ? (
                  <>
                    <StretchHorizontal className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="hidden sm:inline">Filmstrip</span>
                  </>
                ) : (
                  <>
                    <LayoutGrid className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="hidden sm:inline">All ({scenes.length})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Viewpoints Content: Either Full Grid (all visible) or Carousel with Chevrons */}
          {isGridView ? (
            /* Responsive Grid View: 100% of scenes visible simultaneously */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 max-h-64 overflow-y-auto pt-1 royal-scene-scrollbar">
              {scenes.map((scene, idx) => {
                const isActive = scene.id === activeSceneId;
                const thumb = 'thumbnailUrl' in scene ? scene.thumbnailUrl : scene.image;
                return (
                  <button
                    key={scene.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectScene(scene.id);
                    }}
                    className={`group relative h-20 rounded-sm overflow-hidden border text-left transition-all duration-200 focus:outline-none cursor-pointer ${
                      isActive
                        ? 'border-[#C6A15B] ring-2 ring-[#C6A15B] shadow-lg shadow-[#C6A15B]/30 scale-[1.02]'
                        : 'border-[#C6A15B]/25 hover:border-[#C6A15B]/70 opacity-80 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={t(scene.title)}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent" />

                    <span className="absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold uppercase rounded-sm bg-[#151719]/90 text-[#C6A15B] border border-[#C6A15B]/40">
                      0{idx + 1}
                    </span>

                    <div className="absolute bottom-1 left-1.5 right-1.5">
                      <p className="font-cinzel text-[11px] font-bold text-[#F3EBDD] truncate group-hover:text-[#E0C27B]">
                        {t(scene.title)}
                      </p>
                      <p className="text-[9px] text-[#B8B2A6] truncate">
                        {t(scene.subtitle)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Carousel View with Left & Right Chevrons and Horizontal Scrollbar */
            <div className="relative flex items-center">
              {/* Left Scroll Button */}
              {canScrollLeft && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScroll('left');
                  }}
                  className="absolute -left-2 z-10 p-1.5 rounded-full bg-[#151719]/95 border border-[#C6A15B] text-[#C6A15B] hover:text-[#F3EBDD] hover:bg-[#1C1F21] shadow-xl transition-all cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {/* Viewpoints Horizontal Carousel */}
              <div
                ref={scrollContainerRef}
                onWheel={handleWheel}
                className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1.5 pt-0.5 royal-scene-scrollbar w-full"
              >
                {scenes.map((scene, idx) => {
                  const isActive = scene.id === activeSceneId;
                  const thumb = 'thumbnailUrl' in scene ? scene.thumbnailUrl : scene.image;
                  return (
                    <button
                      key={scene.id}
                      ref={isActive ? activeCardRef : null}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectScene(scene.id);
                      }}
                      className={`group relative flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-44 xl:w-48 h-20 rounded-sm overflow-hidden border text-left transition-all duration-200 focus:outline-none cursor-pointer ${
                        isActive
                          ? 'border-[#C6A15B] ring-2 ring-[#C6A15B] shadow-lg shadow-[#C6A15B]/25 opacity-100 scale-[1.02]'
                          : 'border-[#C6A15B]/25 hover:border-[#C6A15B]/70 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={t(scene.title)}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/60 to-transparent" />

                      {/* Scene Number Badge */}
                      <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase rounded-sm bg-[#151719]/90 text-[#C6A15B] border border-[#C6A15B]/40 font-mono">
                        0{idx + 1}
                      </span>

                      {/* Scene Title Text */}
                      <div className="absolute bottom-1.5 left-2 right-2">
                        <p className="font-cinzel text-xs font-bold text-[#F3EBDD] truncate group-hover:text-[#E0C27B]">
                          {t(scene.title)}
                        </p>
                        <p className="text-[10px] text-[#B8B2A6] truncate">
                          {t(scene.subtitle)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Scroll Button */}
              {canScrollRight && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScroll('right');
                  }}
                  className="absolute -right-2 z-10 p-1.5 rounded-full bg-[#151719]/95 border border-[#C6A15B] text-[#C6A15B] hover:text-[#F3EBDD] hover:bg-[#1C1F21] shadow-xl transition-all cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
