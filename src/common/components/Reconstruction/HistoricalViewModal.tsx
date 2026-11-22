import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Compass,
  Landmark,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
  ExternalLink,
  MapPin,
  Calendar,
  AlertCircle,
  X
} from 'lucide-react';
import { Monument } from '../../types';
import { ImageComparisonSlider } from './ImageComparisonSlider';
import {
  HISTORICAL_VIEW_DATABASE,
  HistoricalViewContent,
  ArchitecturalElement,
  HistoricalReference
} from '../../data/historicalViewData';

interface HistoricalViewModalProps {
  initialMonument: Monument;
  initialTarget?: 'vishwakarma' | 'kailasa';
  onBackToTour: () => void;
  onReturnToMuseum?: () => void;
  onOpenHeritageStory?: () => void;
  onSelectMonument?: (monument: Monument) => void;
}

export const HistoricalViewModal: React.FC<HistoricalViewModalProps> = ({
  initialMonument,
  initialTarget = 'kailasa',
  onBackToTour,
  onReturnToMuseum,
  onOpenHeritageStory,
  onSelectMonument,
}) => {
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>(initialMonument.id);
  const [elloraTarget, setElloraTarget] = useState<'kailasa' | 'vishwakarma'>(initialTarget);

  // Sync if initialMonument prop changes
  useEffect(() => {
    setSelectedMonumentId(initialMonument.id);
  }, [initialMonument.id]);

  // Determine current active database key
  const activeKey =
    selectedMonumentId === 'ellora'
      ? elloraTarget === 'vishwakarma'
        ? 'ellora_vishwakarma'
        : 'ellora_kailasa'
      : selectedMonumentId === 'taj-mahal' || selectedMonumentId === 'tajmahal'
      ? 'tajmahal'
      : selectedMonumentId;

  const currentContent: HistoricalViewContent =
    HISTORICAL_VIEW_DATABASE[activeKey] || HISTORICAL_VIEW_DATABASE.hampi;

  const getCategoryBadge = (category: ArchitecturalElement['category']) => {
    switch (category) {
      case 'DOCUMENTED FACT':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-cinzel font-bold tracking-wider uppercase bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/30">
            <CheckCircle2 className="w-3 h-3" />
            Documented Fact
          </span>
        );
      case 'ARCHITECTURAL INTERPRETATION':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-cinzel font-bold tracking-wider uppercase bg-[#C6A15B]/15 text-[#9D7B54] border border-[#C6A15B]/40">
            <Layers className="w-3 h-3" />
            Architectural Interpretation
          </span>
        );
      case 'VISUAL REPRESENTATION':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-cinzel font-bold tracking-wider uppercase bg-[#1565C0]/10 text-[#1565C0] border border-[#1565C0]/30">
            <Sparkles className="w-3 h-3" />
            Visual Representation
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F9F6F0] text-[#2A1D13] font-sans selection:bg-[#C6A15B]/30 selection:text-[#2A1D13]">
      {/* 1. Museum Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#C6A15B]/30 shadow-xs px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Breadcrumb & Monument Identity */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/60 shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-[#9D7B54]">
                  <span>Royal Heritage Platform</span>
                  <span>/</span>
                  <span className="text-[#2A1D13] font-semibold">{currentContent.title}</span>
                  <span>/</span>
                  <span className="text-[#C6A15B] font-bold">Historical View</span>
                </div>
                <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#1C1F21] tracking-wide">
                  HISTORICAL VIEW
                </h1>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              {onOpenHeritageStory && (
                <button
                  type="button"
                  onClick={onOpenHeritageStory}
                  className="min-w-[42px] min-h-[42px] flex items-center justify-center bg-[#1C1F21] text-[#E0C27B] rounded-xs border border-[#C6A15B]/60 active:scale-95 transition-transform"
                  title="Ask Heritage AI"
                  aria-label="Ask Heritage AI"
                >
                  <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                </button>
              )}
              <button
                type="button"
                onClick={onBackToTour}
                className="min-w-[42px] min-h-[42px] flex items-center justify-center bg-[#1C1F21] text-[#F3EBDD] rounded-xs border border-[#C6A15B] active:scale-95 transition-transform"
                title="Back to 360° Tour"
                aria-label="Back to 360° Tour"
              >
                <ArrowLeft className="w-4 h-4 text-[#E0C27B]" />
              </button>
              {onReturnToMuseum && (
                <button
                  type="button"
                  onClick={onReturnToMuseum}
                  className="min-w-[42px] min-h-[42px] flex items-center justify-center bg-[#1C1F21] text-[#B8B2A6] hover:text-[#F3EBDD] rounded-xs border border-[rgba(198,161,91,0.4)] active:scale-95 transition-transform"
                  title="Return to Museum"
                  aria-label="Return to Museum"
                >
                  <X className="w-4 h-4 text-[#C6A15B]" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Action Buttons: Heritage AI, Back to 360° Tour & Return to Museum */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {onOpenHeritageStory && (
              <button
                type="button"
                onClick={onOpenHeritageStory}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1C1F21] hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-bold tracking-wider uppercase rounded-xs border border-[#C6A15B]/70 hover:border-[#E0C27B] shadow-[0_2px_10px_rgba(198,161,91,0.25)] hover:shadow-[0_4px_16px_rgba(224,194,123,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                title="Ask Heritage AI — Expert Historian & Architectural Storyteller"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform" />
                <span>HERITAGE AI</span>
              </button>
            )}

            <button
              type="button"
              onClick={onBackToTour}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1F21] hover:bg-[#242729] text-[#F3EBDD] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs border border-[#C6A15B] shadow-sm hover:shadow-md transition-all cursor-pointer group shrink-0"
              title="Return to 360° Exploration"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E0C27B] group-hover:-translate-x-1 transition-transform" />
              <span>Back to 360° Tour</span>
            </button>

            {onReturnToMuseum && (
              <button
                type="button"
                onClick={onReturnToMuseum}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1C1F21]/90 hover:bg-[#242729] text-[#F3EBDD] border border-[rgba(198,161,91,0.4)] hover:border-[#C6A15B] text-xs font-semibold tracking-wider uppercase rounded-xs transition-all shadow-xs cursor-pointer shrink-0 group"
                title="Exit to Museum Main Platform"
              >
                <X className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-90 transition-transform" />
                <span>Return to Museum</span>
              </button>
            )}
          </div>
        </div>

        {/* Ellora Caves Sub-target Selector (Cave 16 vs Cave 10) */}
        {selectedMonumentId === 'ellora' && (
          <div className="max-w-7xl mx-auto pt-2.5 mt-2 border-t border-[#C6A15B]/20 flex items-center justify-center gap-2">
            <span className="text-[11px] font-cinzel font-semibold text-[#9D7B54] uppercase tracking-wider">
              Ellora Sanctuary Target:
            </span>
            <button
              type="button"
              onClick={() => setElloraTarget('kailasa')}
              className={`px-3 py-1 text-xs font-cinzel font-bold rounded-xs border transition-all cursor-pointer ${
                elloraTarget === 'kailasa'
                  ? 'bg-[#1C1F21] text-[#E0C27B] border-[#C6A15B]'
                  : 'bg-white text-[#5C4532] border-[#C6A15B]/30 hover:border-[#C6A15B]'
              }`}
            >
              Cave 16 • Kailasa Temple
            </button>
            <button
              type="button"
              onClick={() => setElloraTarget('vishwakarma')}
              className={`px-3 py-1 text-xs font-cinzel font-bold rounded-xs border transition-all cursor-pointer ${
                elloraTarget === 'vishwakarma'
                  ? 'bg-[#1C1F21] text-[#E0C27B] border-[#C6A15B]'
                  : 'bg-white text-[#5C4532] border-[#C6A15B]/30 hover:border-[#C6A15B]'
              }`}
            >
              Cave 10 • Vishwakarma Buddha
            </button>
          </div>
        )}
      </header>

      {/* Main Museum Editorial Stage */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
        {/* 2. Hero Title & Metadata Badge Bar */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#C6A15B]/15 text-[#1C1F21] border border-[#C6A15B]/50 rounded-full text-xs font-cinzel font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Past Architectural Visualization</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1F21] leading-tight">
            HISTORICAL VIEW
          </h2>

          <p className="font-playfair text-base sm:text-xl text-[#9D7B54] italic max-w-3xl mx-auto leading-relaxed">
            {currentContent.subTitle} — Explore the Monument&apos;s Earlier Appearance
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-sans text-[#2A1D13]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              {currentContent.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              {currentContent.period}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              {currentContent.unescoRef}
            </span>
          </div>
        </section>

        {/* 3. Interactive Historical Visualization Image Viewer */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#C6A15B]/30 pb-2 gap-1">
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1F21]">
                Interactive Architectural Comparison
              </h3>
              <p className="font-sans text-xs text-[#9D7B54]">
                Drag the divider handle horizontally or toggle Side-by-Side to examine the monument&apos;s past architectural appearance.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#9D7B54]">
              <Compass className="w-4 h-4 text-[#C6A15B]" />
              <span>{currentContent.cameraAngle}</span>
            </div>
          </div>

          {/* Image Comparison Slider Component */}
          <ImageComparisonSlider
            beforeImage={currentContent.beforeImage}
            beforeLabel={currentContent.beforeLabel}
            afterImage={currentContent.afterImage}
            afterLabel={currentContent.afterLabel}
            initialPosition={50}
          />

          {/* Mandatory Historical Accuracy & Interpretation Disclosure */}
          <div className="p-4 bg-white border-l-4 border-[#C6A15B] rounded-r-xs flex items-start gap-3 shadow-xs">
            <Info className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs leading-relaxed text-[#2A1D13]">
              <div className="font-cinzel font-bold text-[#1C1F21] tracking-wide uppercase text-[11px] flex items-center gap-2">
                <span>Historical Interpretation &amp; Archaeological Method</span>
              </div>
              <p className="italic font-playfair text-xs sm:text-sm text-[#5C4532] leading-relaxed">
                &ldquo;{currentContent.disclosure}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-sans">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  <strong>Documented Facts:</strong> Supported by primary archival &amp; epigraphic records.
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  <strong>Architectural Interpretation:</strong> Grounded in surviving canons &amp; surveys.
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#1565C0]" />
                  <strong>Visual Representation:</strong> Elements depicted in this historical visualization.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION A: A BRIEF HISTORY */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-[#C6A15B]/30 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
                Section A • Historical Context
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
                A Glimpse into History
              </h3>
            </div>
            <div className="w-9 h-9 rounded-xs bg-[#F9F6F0] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#3E2723] leading-relaxed font-sans font-normal">
            {currentContent.glimpseIntoHistory}
          </p>
        </section>

        {/* 5. SECTION B: ARCHITECTURAL ELEMENTS IN THIS HISTORICAL VIEW */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
                Section B • Curatorial Analysis
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
                Understanding the Historical Architecture
              </h3>
              <p className="text-xs text-[#9D7B54] font-sans mt-0.5">
                Detailed examination of structural components visually depicted in this historical visualization.
              </p>
            </div>
            <div className="w-9 h-9 rounded-xs bg-[#F9F6F0] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <Landmark className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-5">
            {currentContent.architecturalElements.map((elem, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-[#F9F6F0] border border-[#C6A15B]/35 rounded-xs space-y-3.5 hover:border-[#C6A15B] transition-colors"
              >
                {/* Header: Element Title, Category Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#C6A15B]/25">
                  <div className="space-y-0.5">
                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1F21]">
                      {idx + 1}. {elem.name}
                    </h4>
                    {elem.sanskritOrPersianName && (
                      <span className="text-xs font-playfair italic text-[#9D7B54] block">
                        Classical Term: {elem.sanskritOrPersianName}
                      </span>
                    )}
                  </div>
                  <div>{getCategoryBadge(elem.category)}</div>
                </div>

                {/* Grid: Function & Characteristics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-cinzel font-bold text-[#9D7B54] uppercase tracking-wider text-[10px] block">
                      Original Purpose &amp; Function:
                    </span>
                    <p className="text-[#3E2723] leading-relaxed font-sans">{elem.originalFunction}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-cinzel font-bold text-[#9D7B54] uppercase tracking-wider text-[10px] block">
                      Architectural Characteristics:
                    </span>
                    <p className="text-[#3E2723] leading-relaxed font-sans">{elem.characteristics}</p>
                  </div>
                </div>

                {/* Sub-Card: Representation in Image & Archaeological Evidence */}
                <div className="p-3.5 bg-white border border-[#C6A15B]/25 rounded-xs space-y-2 text-xs">
                  <div>
                    <span className="font-cinzel font-bold text-[#1C1F21] uppercase tracking-wider text-[10px] block">
                      Representation in this Historical View:
                    </span>
                    <p className="text-[#2A1D13] leading-relaxed font-sans">{elem.representationInImage}</p>
                  </div>

                  <div className="pt-2 border-t border-[#C6A15B]/15">
                    <span className="font-cinzel font-bold text-[#9D7B54] uppercase tracking-wider text-[10px] block">
                      Historical &amp; Archaeological Evidence:
                    </span>
                    <p className="text-[#5C4532] italic font-sans leading-relaxed">{elem.evidence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SECTION C: VERIFIED HISTORICAL REFERENCES */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
                Section C • Documentary Verification
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
                Historical Evidence & References
              </h3>
              <p className="text-xs text-[#9D7B54] font-sans mt-0.5">
                Official institutional records, monographs, and academic surveys supporting these historical explanations.
              </p>
            </div>
            <div className="w-9 h-9 rounded-xs bg-[#F9F6F0] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentContent.references.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F9F6F0] border border-[#C6A15B]/35 rounded-xs space-y-2.5 flex flex-col justify-between hover:border-[#C6A15B] transition-all"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-cinzel font-bold text-[11px] text-[#9D7B54] uppercase tracking-wider">
                      {ref.institution}
                    </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#1565C0] hover:text-[#0D47A1] text-[11px] font-sans font-semibold underline underline-offset-2 cursor-pointer"
                      title={`Visit official publication: ${ref.title}`}
                    >
                      <span>Official Source</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>

                  <h5 className="font-cinzel text-sm font-bold text-[#1C1F21] leading-snug">
                    {ref.title}
                  </h5>
                </div>

                <div className="pt-2 border-t border-[#C6A15B]/20 text-[11px] text-[#5C4532] font-sans leading-relaxed">
                  <strong className="text-[#2A1D13] font-semibold">Supports: </strong>
                  {ref.supports}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
