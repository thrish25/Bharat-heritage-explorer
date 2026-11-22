import React from 'react';
import { Youtube, Instagram, Twitter, ShieldCheck, Landmark } from 'lucide-react';
import { LotusEmblem, CarvedCorner } from './Ornaments';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onHomeClick: () => void;
  onExploreClick?: () => void;
  onAboutClick?: () => void;
  onGalleryClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onHomeClick,
  onExploreClick,
  onAboutClick,
  onGalleryClick,
}) => {
  const { ui } = useLanguage();

  return (
    <footer className="bg-[#151719] text-[#F3EBDD] border-t border-[rgba(198,161,91,0.22)] relative overflow-hidden py-14">

      {/* Top Hairline with Center Lotus Emblem */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-[#E0C27B]" />
        <div className="px-4 bg-[#151719] -translate-y-1/2">
          <LotusEmblem className="w-7 h-7 text-[#C6A15B]" />
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C6A15B]/50 to-[#E0C27B]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[rgba(198,161,91,0.15)]">

          {/* Column 1: Brand & Philosophy (5 Cols) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <button
              onClick={onHomeClick}
              className="inline-flex items-center gap-3 group focus:outline-none cursor-pointer"
              aria-label="Bharat Royale Home"
            >
              <LotusEmblem className="w-8 h-8 text-[#C6A15B]" />
              <span className="font-editorial text-2xl font-bold tracking-[0.12em] text-[#F3EBDD] group-hover:text-[#E0C27B] transition-colors">
                {ui.siteTitle}
              </span>
            </button>

            <p className="font-body text-xs sm:text-sm text-[#B8B2A6] max-w-sm leading-relaxed mx-auto md:mx-0">
              A premier digital museum and cultural heritage archive dedicated to the permanent preservation and spatial exploration of India’s timeless architectural wonders.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-numeric text-[#C6A15B]">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>OFFICIAL SCHOLARLY DIGITAL PRESERVATION PLATFORM</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <div className="text-xs font-numeric font-semibold text-[#E0C27B] uppercase tracking-[0.2em]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-nav text-[#B8B2A6]">
              <li>
                <button onClick={onHomeClick} className="hover:text-[#E0C27B] transition-colors cursor-pointer">
                  Home Sanctuary
                </button>
              </li>
              {onExploreClick && (
                <li>
                  <button onClick={onExploreClick} className="hover:text-[#E0C27B] transition-colors cursor-pointer">
                    Destinations Grid
                  </button>
                </li>
              )}
              {onAboutClick && (
                <li>
                  <button onClick={onAboutClick} className="hover:text-[#E0C27B] transition-colors cursor-pointer">
                    About the Platform
                  </button>
                </li>
              )}
              {onGalleryClick && (
                <li>
                  <button onClick={onGalleryClick} className="hover:text-[#E0C27B] transition-colors cursor-pointer">
                    Archival Photo Gallery
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Heritage Sanctuaries & Epigraphy (4 Cols) */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <div className="text-xs font-numeric font-semibold text-[#E0C27B] uppercase tracking-[0.2em]">
              SANCTUARIES IN ARCHIVE
            </div>
            <ul className="space-y-1.5 text-xs font-body text-[#858078]">
              <li>
                <span className="text-[#F3EBDD] font-medium">Hampi Stone Chariot</span> — Vijayanagara Empire
              </li>
              <li>
                <span className="text-[#F3EBDD] font-medium">Konark Sun Temple</span> — Eastern Ganga Dynasty
              </li>
              <li>
                <span className="text-[#F3EBDD] font-medium">Taj Mahal Mausoleum</span> — Mughal Empire
              </li>
              <li>
                <span className="text-[#F3EBDD] font-medium">Ellora Caves (Cave 16 & 10)</span> — Rashtrakuta Dynasty
              </li>
            </ul>

            <div className="pt-2 text-[11px] font-numeric text-[#858078]">
              Grounded in Archaeological Survey of India (ASI) & UNESCO World Heritage documentation.
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-numeric text-[#858078] gap-3">
          <p>© {new Date().getFullYear()} {ui.siteTitle} (BHARAT ROYALE). {ui.footerRights}</p>

          <button
            onClick={onHomeClick}
            className="hover:text-[#E0C27B] transition-colors font-cinzel tracking-wider cursor-pointer"
          >
            {ui.footerBackToTop} ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
