import React, { useState, useRef, useCallback } from 'react';
import { RotateCcw, Sparkles, Layers, Columns2, Sliders, Info, ShieldCheck, ArrowLeftRight } from 'lucide-react';

interface ImageComparisonSliderProps {
  beforeImage: string;
  beforeLabel?: string;
  afterImage: string;
  afterLabel?: string;
  initialPosition?: number; // 0 to 100
  className?: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  beforeImage,
  beforeLabel = 'PRESENT DAY (AUTHENTIC)',
  afterImage,
  afterLabel = 'PAST ARCHITECTURAL VISUALIZATION',
  initialPosition = 50,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [isBeforeLoaded, setIsBeforeLoaded] = useState(false);
  const [isAfterLoaded, setIsAfterLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isAllLoaded = isBeforeLoaded && isAfterLoaded;

  // Handle position calculation from clientX
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Pointer drag events with full pointer capture (supports mouse, touch, stylus)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  const resetComparison = () => {
    setSliderPosition(50);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Top Toolbar: View Mode Switcher & Quick Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-1">
        <div className="flex items-center gap-2">
          <div className="inline-flex p-0.5 bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] rounded-md">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-cinzel font-semibold rounded-md transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] shadow-xs font-bold'
                  : 'text-[#B8B2A6] hover:text-[#E0C27B]'
              }`}
              title="Interactive Draggable Split Slider"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Split Slider</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('sideBySide')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-cinzel font-semibold rounded-md transition-all cursor-pointer ${
                viewMode === 'sideBySide'
                  ? 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] shadow-xs font-bold'
                  : 'text-[#B8B2A6] hover:text-[#E0C27B]'
              }`}
              title="Parallel Side-by-Side Dual View"
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* Reset Slider Control */}
        {viewMode === 'slider' && (
          <div className="flex items-center">
            <button
              type="button"
              onClick={resetComparison}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-cinzel font-bold transition-all cursor-pointer shadow-xs ${
                sliderPosition === 50
                  ? 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] border-[#C6A15B]'
                  : 'bg-[#242729] text-[#F3EBDD] border-[rgba(198,161,91,0.3)] hover:bg-[#292C2E]'
              }`}
              title="Reset slider to central 50/50 comparison"
            >
              <RotateCcw className="w-3.5 h-3.5 text-inherit" />
              <span>Reset Slider</span>
            </button>
          </div>
        )}
      </div>

      {/* Main View Area */}
      {viewMode === 'slider' ? (
        /* 1. INTERACTIVE SPLIT SLIDER MODE */
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Present Day vs Past Architectural Visualization Comparison Slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative w-full h-[360px] sm:h-[500px] md:h-[640px] overflow-hidden select-none cursor-ew-resize rounded-lg border border-[rgba(198,161,91,0.3)] shadow-[0_16px_40px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-[#C6A15B] bg-[#151719] touch-none"
        >
          {/* Loading Skeleton Placeholder Overlay */}
          {!isAllLoaded && (
            <div className="absolute inset-0 z-30 bg-[#151719] flex flex-col items-center justify-center p-6 text-center animate-pulse">
              <div className="w-12 h-12 rounded-full border-2 border-[rgba(198,161,91,0.2)] border-t-[#C6A15B] animate-spin mb-3" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#E0C27B] tracking-wider">
                Loading Historical Archives...
              </span>
              <span className="text-[11px] text-[#B8B2A6] mt-1">
                Fetching high-resolution authentic and reconstructed views
              </span>
            </div>
          )}

          {/* Layer 1: Left / BEFORE Image (Present-Day Authentic Viewport) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none p-2 sm:p-4">
            <img
              src={beforeImage}
              alt={beforeLabel}
              onLoad={() => setIsBeforeLoaded(true)}
              className="max-w-full max-h-full object-contain pointer-events-none transition-transform"
              loading="eager"
              draggable={false}
            />

            {/* Top-Left Badge: BEFORE (Responsive) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#1C1F21]/90 text-[#F3EBDD] border border-[rgba(198,161,91,0.4)] rounded-md font-cinzel text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#B8B2A6]" />
                <span className="hidden sm:inline">{beforeLabel}</span>
                <span className="sm:hidden">Present</span>
              </span>
            </div>
          </div>

          {/* Layer 2: Right / RECONSTRUCTED Image (Revealed from Right with clipPath) */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none p-2 sm:p-4"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            }}
          >
            <img
              src={afterImage}
              alt={afterLabel}
              onLoad={() => setIsAfterLoaded(true)}
              className="max-w-full max-h-full object-contain pointer-events-none transition-transform"
              loading="eager"
              draggable={false}
            />

            {/* Top-Right Badge: RECONSTRUCTED (Responsive) */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#1C1F21]/95 text-[#F3EBDD] border border-[#E0C27B]/60 rounded-md font-cinzel text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#E0C27B]" />
                <span className="hidden sm:inline">{afterLabel}</span>
                <span className="sm:hidden">Past View</span>
              </span>
            </div>
          </div>

          {/* Vertical Divider Bar */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none transition-shadow"
            style={{
              left: `${sliderPosition}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {/* Hairline Antique Gold Vertical Bar */}
            <div className="w-[3px] h-full bg-gradient-to-b from-[#E0C27B] via-[#F3EBDD] to-[#C6A15B] shadow-[0_0_14px_rgba(224,194,123,0.9),0_0_5px_rgba(0,0,0,0.9)]" />

            {/* Central Circular Drag Handle Medallion */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C1F21] border-2 border-[#E0C27B] shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_16px_rgba(224,194,123,0.6)] flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-95 cursor-ew-resize touch-manipulation"
              title="Drag horizontally to compare"
            >
              <div className="flex items-center justify-center gap-1 text-[#E0C27B] text-[10px] sm:text-xs font-bold select-none">
                <span>◀</span>
                <div className="w-[1.5px] h-3.5 sm:h-4 bg-[#C6A15B]/70" />
                <span>▶</span>
              </div>
            </div>

            {/* Bottom Slide Hint Pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#1C1F21]/90 border border-[rgba(198,161,91,0.4)] rounded-full text-[10px] text-[#E0C27B] whitespace-nowrap pointer-events-none shadow-md hidden sm:block">
              Slide to Compare
            </div>
          </div>
        </div>
      ) : (
        /* 2. PARALLEL SIDE-BY-SIDE DUAL VIEW MODE */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card 1: BEFORE */}
          <div className="relative bg-[#1C1F21] border border-[rgba(198,161,91,0.25)] rounded-lg p-3 shadow-md flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(198,161,91,0.2)] mb-2">
              <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-bold tracking-wider text-[#F3EBDD] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B8B2A6]" />
                {beforeLabel}
              </span>
            </div>
            <div className="relative h-[280px] sm:h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden bg-[#151719] rounded-md p-2">
              <img
                src={beforeImage}
                alt={beforeLabel}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Card 2: RECONSTRUCTED */}
          <div className="relative bg-[#1C1F21] border border-[rgba(198,161,91,0.35)] rounded-lg p-3 shadow-md flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b border-[rgba(198,161,91,0.2)] mb-2">
              <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-bold tracking-wider text-[#E0C27B] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#E0C27B]" />
                {afterLabel}
              </span>
            </div>
            <div className="relative h-[280px] sm:h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden bg-[#151719] rounded-md p-2">
              <img
                src={afterImage}
                alt={afterLabel}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}

      {/* Helper Interaction Instructions */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#B8B2A6] font-sans">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>
            {viewMode === 'slider'
              ? 'Drag the central divider horizontally or use Left / Right arrow keys to compare'
              : 'Viewing both architectural perspectives side-by-side with original proportions preserved'}
          </span>
        </div>
        <div className="text-[11px] text-[#858078]">
          Original image proportions strictly preserved (zero stretching)
        </div>
      </div>
    </div>
  );
};
