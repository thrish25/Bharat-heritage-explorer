import React from 'react';
import { HeritageCard } from './HeritageCard';
import { MONUMENTS } from '../data/monuments';
import { Monument } from '../types';
import { JaliBackgroundPattern } from './Ornaments';
import { useLanguage } from '../context/LanguageContext';

interface HeritageGridProps {
  onExploreMonument: (
    monument: Monument,
    caveId?: 'cave_10' | 'cave_16',
    openReconstruction?: boolean,
    reconstructionType?: 'vishwakarma' | 'kailasa'
  ) => void;
  onOpenARMonument?: (monument: Monument) => void;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({ onExploreMonument, onOpenARMonument }) => {
  const { ui } = useLanguage();

  return (
    <section
      id="explore-destinations"
      className="py-16 sm:py-24 bg-[#151719] text-[#F3EBDD] border-b border-[rgba(198,161,91,0.22)] relative overflow-hidden"
    >
      {/* Subtle Jali Background Pattern */}
      <JaliBackgroundPattern className="opacity-4" />

      {/* Radial Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_25%,_rgba(36,39,41,0.5)_0%,_transparent_70%)]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading with Editorial Styling (26-30px on mobile) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-xs font-numeric font-semibold text-[#C6A15B] tracking-[0.25em] uppercase mb-2 sm:mb-3">
            ARCHAEOLOGICAL ARCHIVE
          </div>

          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3EBDD] mb-3 sm:mb-4">
            Curated Heritage Sanctuaries
          </h2>

          <div className="w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mb-4 sm:mb-5" />

          <p className="font-body text-sm sm:text-base text-[#B8B2A6] max-w-xl mx-auto leading-relaxed">
            {ui.destinationsSubtitle}
          </p>
        </div>

        {/* Curated Monuments in Balanced Responsive Grid (Single-column on narrow screens, 2-col on tablet, 4-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {MONUMENTS.map((monument) => (
            <HeritageCard
              key={monument.id}
              monument={monument}
              layoutMode="4col"
              onExplore={onExploreMonument}
              onOpenAR={onOpenARMonument}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
