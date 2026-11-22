import React from 'react';
import { MapPin, ArrowRight, Sparkles, Eye, Compass, Smartphone } from 'lucide-react';
import { Monument } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { CarvedCorner } from './Ornaments';

interface HeritageCardProps {
  monument: Monument;
  layoutMode?: '2col' | '4col';
  onExplore: (
    monument: Monument,
    caveId?: 'cave_10' | 'cave_16',
    openReconstruction?: boolean,
    reconstructionType?: 'vishwakarma' | 'kailasa'
  ) => void;
  onOpenAR?: (monument: Monument) => void;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ monument, layoutMode = '4col', onExplore, onOpenAR }) => {
  const { t, ui } = useLanguage();

  const getCategoryDetails = () => {
    switch (monument.id) {
      case 'ellora':
        return {
          category: 'Rock-Cut Monolithic Excavation',
          accent: 'Rashtrakuta Dynasty • 8th c. CE',
          stats: '11 Panoramas • 28 Hotspots',
        };
      case 'hampi':
        return {
          category: 'Dravidian Temple Chariot',
          accent: 'Vijayanagara Empire • 16th c. CE',
          stats: '5 Panoramas • Stone Chariot',
        };
      case 'konark':
        return {
          category: 'Kalinga Solar Chronometer',
          accent: 'Eastern Ganga Dynasty • 13th c. CE',
          stats: '5 Panoramas • 24 Sundials',
        };
      case 'taj-mahal':
      default:
        return {
          category: 'Mughal Classical Marble',
          accent: 'Mughal Empire • 17th c. CE',
          stats: '6 Panoramas • Charbagh Pool',
        };
    }
  };

  const meta = getCategoryDetails();
  const is2Col = layoutMode === '2col';

  return (
    <div className="group relative bg-[#292C2E] border border-[rgba(198,161,91,0.22)] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-400 hover:border-[#E0C27B] hover:shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_20px_rgba(198,161,91,0.25)] hover:-translate-y-1.5">

      {/* Subtle Carved Indian Gold Corner Brackets */}
      <CarvedCorner position="tl" />
      <CarvedCorner position="tr" />
      <CarvedCorner position="bl" />
      <CarvedCorner position="br" />

      {/* Double Inset Border Ring */}
      <div className="absolute inset-[3px] border border-[rgba(198,161,91,0.12)] rounded-xs pointer-events-none z-10 group-hover:border-[rgba(224,194,123,0.35)] transition-colors" />

      {/* Top Media Container: Well-Proportioned Authentic Photograph */}
      <div>
        <div
          onClick={() => onExplore(monument)}
          className={`relative w-full overflow-hidden bg-[#151719] cursor-pointer group/img transition-all ${
            is2Col
              ? 'h-60 sm:h-68 md:h-76'
              : 'h-52 sm:h-56 md:h-60'
          }`}
          title={`Click to explore ${t(monument.name)} in 360°`}
        >
          <img
            src={monument.image}
            alt={t(monument.name)}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/img:scale-106"
            loading="lazy"
          />

          {/* Minimal Atmospheric Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#292C2E] via-[#292C2E]/20 to-transparent pointer-events-none" />

          {/* Top Left Category Badge */}
          <div className="absolute top-2.5 left-2.5 z-20">
            <span className="px-2.5 py-1 rounded-full bg-[#151719]/90 border border-[rgba(198,161,91,0.35)] text-[10px] font-numeric font-bold tracking-wider text-[#E0C27B] uppercase backdrop-blur-md shadow-md">
              {meta.category}
            </span>
          </div>

          {/* Top Right Scene Count Badge */}
          <div className="absolute top-2.5 right-2.5 z-20">
            <span className="px-2.5 py-1 rounded-full bg-[#151719]/90 border border-[rgba(198,161,91,0.25)] text-[10px] font-numeric font-medium text-[#B8B2A6] backdrop-blur-md shadow-md">
              {monument.viewpointCount || 5} Scenes
            </span>
          </div>

          {/* Interactive Hover Reveal Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/25 backdrop-blur-[1px]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151719]/95 border border-[#C6A15B] text-xs font-cinzel font-bold text-[#E0C27B] shadow-2xl tracking-wider uppercase transform -translate-y-1 group-hover/img:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>EXPLORE 360° TOUR</span>
            </span>
          </div>
        </div>

        {/* Card Content Plaque with Comfortable Padding */}
        <div className={`space-y-3.5 z-10 bg-[#292C2E] ${is2Col ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>

          {/* Location Badge */}
          <div className="flex items-center justify-between text-xs text-[#858078] font-numeric">
            <div className="flex items-center gap-1.5 text-[#C6A15B] font-medium min-w-0">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span className="truncate">{t(monument.location)}</span>
            </div>
            <span className="text-[11px] shrink-0 font-medium text-[#B8B2A6] ml-2">{meta.accent.split('•')[0].trim()}</span>
          </div>

          {/* Monument Title in Editorial Serif (19-22px on mobile) */}
          <h3 className={`font-editorial font-bold tracking-tight text-[#F3EBDD] group-hover:text-[#E0C27B] transition-colors leading-snug ${
            is2Col ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}>
            {t(monument.name)}
          </h3>

          {/* Contextual Description (14px, readable) */}
          <p className="font-body text-sm text-[#B8B2A6] leading-relaxed line-clamp-3 min-h-[44px]">
            {t(monument.shortDescription)}
          </p>
        </div>
      </div>

      {/* Card Actions Bottom Section */}
      <div className={`pt-0 border-t border-[rgba(198,161,91,0.15)] mt-2 ${is2Col ? 'p-5 sm:p-6' : 'p-4 sm:p-5'}`}>
        {monument.id === 'ellora' ? (
          <div className="pt-3 w-full flex flex-col gap-2.5">
            {/* 1. Virtual Exploration Caves */}
            <div className={`grid gap-2 w-full ${is2Col ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'}`}>
              <button
                onClick={() => onExplore(monument, 'cave_16')}
                className="min-h-[40px] px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-semibold uppercase tracking-wider rounded-xs border border-[rgba(198,161,91,0.4)] shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                title="Explore Cave 16 (Kailasa Temple) — 7 Scenes"
              >
                <span>🛕</span>
                <span className="truncate">{is2Col ? 'Cave 16 • Kailasa' : 'Cave 16 Kailasa'}</span>
              </button>
              <button
                onClick={() => onExplore(monument, 'cave_10')}
                className="min-h-[40px] px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-semibold uppercase tracking-wider rounded-xs border border-[rgba(198,161,91,0.4)] shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                title="Explore Cave 10 (Carpenter's Cave) — 4 Scenes"
              >
                <span>☸️</span>
                <span className="truncate">{is2Col ? 'Cave 10 • Chaitya' : 'Cave 10 Chaitya'}</span>
              </button>
            </div>

            {/* 2. AR Model & Reconstruction Buttons */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {onOpenAR && (
                <button
                  type="button"
                  onClick={() => onOpenAR(monument)}
                  className="min-h-[38px] px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-semibold uppercase tracking-wider rounded-xs border border-[rgba(198,161,91,0.35)] shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  title="Inspect Kailasa Temple in 3D & Augmented Reality"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>AR MODEL</span>
                </button>
              )}
              <button
                onClick={() => onExplore(monument, 'cave_16', true, 'kailasa')}
                className="min-h-[38px] inline-flex items-center justify-center gap-1.5 px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] font-cinzel text-xs font-semibold tracking-wider rounded-xs border border-[rgba(198,161,91,0.3)] shadow-xs transition-all cursor-pointer"
                title="Explore the Past — Historical Architectural Visualization of Kailasa Temple"
              >
                <Sparkles className="w-3 h-3 text-[#E0C27B]" />
                <span>EXPLORE PAST</span>
              </button>
            </div>

            <div className="flex items-center justify-center pt-1 border-t border-[rgba(198,161,91,0.12)]">
              <button
                onClick={() => onExplore(monument)}
                className="min-h-[30px] text-xs font-numeric text-[#B8B2A6] hover:text-[#E0C27B] tracking-wider uppercase underline cursor-pointer"
              >
                All 11 Viewpoints
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-3 w-full flex flex-col gap-2.5">
            {/* Primary Action: 360° Virtual Tour (Visually Prominent, Touch-friendly 42px) */}
            <button
              onClick={() => onExplore(monument)}
              className="w-full min-h-[42px] group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.12em] rounded-xs shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#151719]" />
              <span>{ui.exploreBtn} 360° Tour</span>
              <ArrowRight className="w-4 h-4 text-[#151719] group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Actions: AR Model & Reconstruction (Visually Quieter Charcoal) */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {onOpenAR && (
                <button
                  type="button"
                  onClick={() => onOpenAR(monument)}
                  className="min-h-[38px] inline-flex items-center justify-center gap-1.5 px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] text-xs font-cinzel font-semibold tracking-wider rounded-xs border border-[rgba(198,161,91,0.35)] shadow-xs transition-all cursor-pointer"
                  title={`Inspect ${t(monument.name)} in 3D & Augmented Reality`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>AR MODEL</span>
                </button>
              )}
              <button
                onClick={() => onExplore(monument, undefined, true)}
                className="min-h-[38px] inline-flex items-center justify-center gap-1.5 px-2.5 py-2 bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] hover:text-[#F3EBDD] text-xs font-cinzel font-semibold tracking-wider rounded-xs border border-[rgba(198,161,91,0.3)] shadow-xs transition-all cursor-pointer"
                title={`Explore the Past — Historical Architectural Visualization of ${t(monument.name)}`}
              >
                <Sparkles className="w-3 h-3 text-[#E0C27B]" />
                <span>EXPLORE PAST</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
