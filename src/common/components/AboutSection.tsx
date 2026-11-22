import React from 'react';
import {
  Box,
  Compass,
  Headphones,
  Globe,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Landmark,
} from 'lucide-react';
import { KonarkWheelWatermark, CarvedCorner, JaliBackgroundPattern, LotusDivider } from './Ornaments';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const { ui } = useLanguage();

  const corePillars = [
    {
      icon: Box,
      title: '360° Spherical Exploration',
      subtitle: 'Precision Photogrammetry',
      description:
        'Ultra-high-definition equirectangular spherical views across Hampi, Konark Sun Temple, Taj Mahal, and Ellora Caves, calibrated to authentic human eye-level field-of-view.',
    },
    {
      icon: Compass,
      title: 'Architectural Hotspots',
      subtitle: 'Epigraphical & Iconographic Dossiers',
      description:
        'Spatially anchored waypoints on temple carvings, monolithic spires, and inscriptions, synchronized with dedicated audio narration and ASI documentation.',
    },
    {
      icon: Layers,
      title: 'Explore the Past',
      subtitle: 'Historical Architectural Visualizations',
      description:
        'Interactive split-slider comparisons matching current surviving stone against verified archival photographs and architectural evidence across all four monuments.',
    },
    {
      icon: Sparkles,
      title: 'Heritage AI Storyteller',
      subtitle: 'Gemini RAG Archival Intelligence',
      description:
        'An expert conversational AI historian grounded in verified archival knowledge bases with direct citations from UNESCO, ASI, and primary court chronicles.',
    },
    {
      icon: Headphones,
      title: 'Natural Museum Audio Guide',
      subtitle: 'Continuous Guided Flow',
      description:
        'Museum-grade audio narration with smooth acoustic cross-fades between ambient scene introductions and selected architectural hotspot explanations.',
    },
    {
      icon: Globe,
      title: 'Trilingual Living Archive',
      subtitle: 'English • ಕನ್ನಡ • हिन्दी',
      description:
        'Scholarly architectural audio guides, epigraphical analysis, and localized interactive dossiers across English, Kannada, and Hindi.',
    },
  ];

  return (
    <section
      id="about-section"
      className="py-20 sm:py-28 bg-[#151719] text-[#F3EBDD] border-b border-[rgba(198,161,91,0.22)] relative overflow-hidden"
    >
      {/* Subtle Jali Background Pattern */}
      <JaliBackgroundPattern className="opacity-4" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Master Museum Archival Plaque */}
        <div className="relative bg-[#1C1F21] border border-[rgba(198,161,91,0.25)] rounded-xs overflow-hidden p-7 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">

          {/* Delicate Carved Indian Gold Corner Brackets */}
          <CarvedCorner position="tl" />
          <CarvedCorner position="tr" />
          <CarvedCorner position="bl" />
          <CarvedCorner position="br" />

          {/* Double Inset Border Ring */}
          <div className="absolute inset-[4px] border border-[rgba(198,161,91,0.12)] rounded-xs pointer-events-none z-10" />

          {/* Konark Stone Sun Wheel Watermark in Corner */}
          <div className="absolute -right-24 -top-24 sm:-right-16 sm:-top-16 pointer-events-none opacity-10 z-0">
            <KonarkWheelWatermark className="w-96 h-96 sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* 1. Left: Architectural Monograph Photographic Display */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-xs overflow-hidden border border-[rgba(198,161,91,0.35)] shadow-[0_16px_45px_rgba(0,0,0,0.9)] group bg-[#151719]">
                <CarvedCorner position="tl" />
                <CarvedCorner position="tr" />
                <CarvedCorner position="bl" />
                <CarvedCorner position="br" />

                <img
                  src="/images/about-hampi.jpg"
                  alt="Hampi Vijaya Vittala Stone Chariot at Sunset"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151719]/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#151719]/90 border border-[rgba(198,161,91,0.25)] rounded-xs backdrop-blur-xs">
                  <div className="text-[10px] font-numeric uppercase tracking-widest text-[#C6A15B] font-semibold">
                    SCHOLARLY PRESERVATION ARCHIVE
                  </div>
                  <div className="text-xs font-editorial text-[#F3EBDD] font-bold">
                    Hampi • Konark Sun Temple • Taj Mahal • Ellora Caves
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Center & Right: Editorial Presentation & Platform Philosophy */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-2">
                <div className="text-xs font-numeric font-semibold text-[#C6A15B] tracking-[0.2em] uppercase">
                  BHARAT ROYALE ARCHIVAL REPOSITORY
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3EBDD] leading-tight">
                  Preserving India’s Civilizational Monuments Through Precision Digital Archiving
                </h2>
              </div>

              {/* Gold Divider */}
              <div className="w-24 h-[1.5px] bg-gradient-to-r from-[#C6A15B] to-transparent" />

              <p className="font-body text-sm sm:text-base text-[#B8B2A6] leading-relaxed">
                Bharat Royale is an integrated digital museum and archival research platform dedicated to the permanent preservation, interactive 360° documentation, and scholarly exploration of India’s most monumental architectural landmarks: the imperial granite sanctuaries of <strong className="text-[#E0C27B] font-semibold">Hampi</strong>, the celestial solar chariot of <strong className="text-[#E0C27B] font-semibold">Konark Sun Temple</strong>, the <strong className="text-[#E0C27B] font-semibold">Taj Mahal</strong>, and the monolithic rock-cut wonders of <strong className="text-[#E0C27B] font-semibold">Ellora Caves</strong>.
              </p>

              <p className="font-body text-xs sm:text-sm text-[#858078] leading-relaxed">
                Every virtual viewpoint is enriched with natural museum audio guides, interactive architectural hotspots, and our verified <strong className="text-[#F3EBDD]">Explore the Past</strong> module—featuring evidence-based historical comparisons like Hampi’s brick superstructure, Konark’s lost 227-foot Rekha Deula shikhara, the 1890s pre-Curzon Taj Mahal Charbagh, and Kailasa’s radiant white lime plaster—complemented by on-demand historical inquiry through <strong className="text-[#F3EBDD]">Heritage AI</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {onLearnMoreClick && (
                  <button
                    onClick={onLearnMoreClick}
                    className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold uppercase tracking-[0.16em] rounded-xs shadow-[0_4px_18px_rgba(198,161,91,0.35)] transition-all cursor-pointer"
                  >
                    <span>EXPLORE ALL SANCTUARIES</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#151719] group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* 3. Lower Row: Six Architectural Pillars */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[rgba(198,161,91,0.18)]">
            {corePillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#242729] border border-[rgba(198,161,91,0.15)] rounded-xs p-5 hover:border-[#C6A15B]/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xs bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] flex items-center justify-center mb-4 group-hover:border-[#E0C27B] transition-colors shadow-xs">
                    <IconComp className="w-5 h-5 text-[#C6A15B] group-hover:text-[#E0C27B]" />
                  </div>
                  <div className="font-editorial text-sm font-bold text-[#F3EBDD] mb-1">
                    {item.title}
                  </div>
                  <div className="text-[10px] font-numeric uppercase tracking-wider text-[#C6A15B] font-semibold mb-2">
                    {item.subtitle}
                  </div>
                  <p className="font-body text-xs text-[#858078] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
