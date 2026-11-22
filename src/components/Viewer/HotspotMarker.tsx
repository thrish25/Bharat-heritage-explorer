import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { HotspotDemo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface HotspotMarkerProps {
  hotspot: HotspotDemo;
  onClick: (hotspot: HotspotDemo) => void;
  isSelected?: boolean;
}

export const HotspotMarker: React.FC<HotspotMarkerProps> = ({
  hotspot,
  onClick,
  isSelected = false,
}) => {
  const { t } = useLanguage();

  return (
    <div
      style={{
        position: 'absolute',
        top: hotspot.position.top,
        left: hotspot.position.left,
        transform: 'translate(-50%, -50%)',
      }}
      className="z-10 group cursor-pointer"
      onClick={() => onClick(hotspot)}
    >
      {/* Outer Radiating Ping Ring */}
      <div className="absolute inset-0 rounded-full bg-[#C6A15B] hotspot-ping-effect" />

      {/* Main Interactive Button with Gold Pulsing Ring */}
      <button
        className={`relative w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 focus:outline-none ${
          isSelected
            ? 'bg-[#F3EBDD] border-[#C6A15B] text-[#1C1F21] scale-110 shadow-lg shadow-[#C6A15B]/60'
            : 'bg-[#1C1F21] border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#151719] hotspot-pulse-ring'
        }`}
        aria-label={t(hotspot.title)}
      >
        <Sparkles className="w-4 h-4 fill-current" />
      </button>

      {/* Hover Tooltip Card */}
      <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 translate-y-full opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-30">
        <div className="whitespace-nowrap px-3 py-1.5 rounded-sm bg-[#151719]/95 border border-[#C6A15B]/50 shadow-xl text-center">
          <div className="text-[9px] uppercase tracking-widest text-[#B8B2A6] font-semibold">
            {hotspot.category}
          </div>
          <div className="font-cinzel text-xs font-bold text-[#F3EBDD]">
            {t(hotspot.title)}
          </div>
        </div>
      </div>
    </div>
  );
};

