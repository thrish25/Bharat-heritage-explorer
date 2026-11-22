import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { LotusEmblem } from './Ornaments';

interface HeaderProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
  onHomeClick: () => void;
  onGalleryClick?: () => void;
  onStoryClick?: () => void;
  onOpenMonument?: (monumentId: string, caveId?: 'cave_10' | 'cave_16') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onExploreClick,
  onAboutClick,
  onHomeClick,
  onGalleryClick,
  onStoryClick,
  onOpenMonument,
}) => {
  const { language, setLanguage, ui } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'about' | 'gallery'>('home');

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const handleNavClick = (tab: 'home' | 'explore' | 'about' | 'gallery', action: () => void) => {
    setActiveTab(tab);
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#151719]/95 backdrop-blur-md border-b border-[rgba(198,161,91,0.22)] transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-22">
          
          {/* 1. Left: BHARAT ROYALE Master Brand Identity */}
          <button
            onClick={() => handleNavClick('home', onHomeClick)}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left group focus:outline-none cursor-pointer min-w-0"
            aria-label="Bharat Royale Home"
          >
            <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
              <LotusEmblem className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_0_12px_rgba(224,194,123,0.35)]" />
            </div>
            <div className="min-w-0">
              <div className="font-editorial text-lg sm:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.14em] text-[#F3EBDD] group-hover:text-[#E0C27B] transition-colors leading-none truncate">
                {ui.siteTitle}
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase font-numeric font-semibold text-[#C6A15B] mt-1 sm:mt-1.5 opacity-90 truncate">
                {ui.siteSubtitle}
              </div>
            </div>
          </button>

          {/* 2. Center: Desktop Editorial Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-nav text-xs uppercase tracking-[0.16em]">
            {/* Home link */}
            <button
              onClick={() => handleNavClick('home', onHomeClick)}
              className={`relative py-2.5 transition-colors focus:outline-none cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#E0C27B] font-semibold'
                  : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
              }`}
            >
              <span>{ui.navHome}</span>
              {activeTab === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.8)]" />
              )}
            </button>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsExploreMenuOpen(true)}
              onMouseLeave={() => setIsExploreMenuOpen(false)}
            >
              <button
                onClick={() => handleNavClick('explore', onExploreClick)}
                className={`flex items-center gap-1.5 py-2.5 transition-colors focus:outline-none cursor-pointer ${
                  activeTab === 'explore'
                    ? 'text-[#E0C27B] font-semibold'
                    : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
                }`}
              >
                <span>{ui.navExplore}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C6A15B] transition-transform ${isExploreMenuOpen ? 'rotate-180' : ''}`} />
                {activeTab === 'explore' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.8)]" />
                )}
              </button>

              {/* Sanctuaries Dropdown */}
              {isExploreMenuOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#1C1F21]/98 border border-[rgba(198,161,91,0.35)] rounded-xs shadow-[0_12px_40px_rgba(0,0,0,0.95)] backdrop-blur-md py-2 z-50 animate-in fade-in-50 duration-200">
                  <div className="px-3.5 py-1.5 border-b border-[rgba(198,161,91,0.15)] text-[10px] uppercase font-numeric font-bold tracking-widest text-[#C6A15B]">
                    UNESCO World Heritage Sites
                  </div>

                  {/* 1. Hampi */}
                  <div className="border-b border-[rgba(198,161,91,0.1)] py-1">
                    <button
                      onClick={() => {
                        setIsExploreMenuOpen(false);
                        if (onOpenMonument) onOpenMonument('hampi');
                        else onExploreClick();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#242729] flex items-center justify-between text-xs text-[#F3EBDD] hover:text-[#E0C27B] transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold font-editorial">1. Hampi (Vijaya Vittala)</div>
                        <div className="text-[10px] text-[#858078] font-numeric">Karnataka • 5 Scenes • Stone Chariot</div>
                      </div>
                    </button>
                  </div>

                  {/* 2. Konark */}
                  <div className="border-b border-[rgba(198,161,91,0.1)] py-1">
                    <button
                      onClick={() => {
                        setIsExploreMenuOpen(false);
                        if (onOpenMonument) onOpenMonument('konark');
                        else onExploreClick();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#242729] flex items-center justify-between text-xs text-[#F3EBDD] hover:text-[#E0C27B] transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold font-editorial">2. Konark Sun Temple</div>
                        <div className="text-[10px] text-[#858078] font-numeric">Odisha • 5 Scenes • Celestial Sundial</div>
                      </div>
                    </button>
                  </div>

                  {/* 3. Taj Mahal */}
                  <div className="border-b border-[rgba(198,161,91,0.1)] py-1">
                    <button
                      onClick={() => {
                        setIsExploreMenuOpen(false);
                        if (onOpenMonument) onOpenMonument('tajmahal');
                        else onExploreClick();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#242729] flex items-center justify-between text-xs text-[#F3EBDD] hover:text-[#E0C27B] transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold font-editorial">3. Taj Mahal</div>
                        <div className="text-[10px] text-[#858078] font-numeric">Agra, Uttar Pradesh • 6 Scenes</div>
                      </div>
                    </button>
                  </div>

                  {/* 4. Ellora Caves */}
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setIsExploreMenuOpen(false);
                        if (onOpenMonument) onOpenMonument('ellora', 'cave_16');
                        else onExploreClick();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-[#242729] flex items-center justify-between text-xs text-[#F3EBDD] hover:text-[#E0C27B] transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold font-editorial">4. Ellora Caves (Cave 16 Kailasa)</div>
                        <div className="text-[10px] text-[#858078] font-numeric">Maharashtra • 11 Scenes • 28 Hotspots</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <button
              onClick={() => handleNavClick('about', onAboutClick)}
              className={`relative py-2.5 transition-colors focus:outline-none cursor-pointer ${
                activeTab === 'about'
                  ? 'text-[#E0C27B] font-semibold'
                  : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
              }`}
            >
              <span>{ui.navAbout}</span>
              {activeTab === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.8)]" />
              )}
            </button>

            {/* Archival Gallery Link */}
            {onGalleryClick && (
              <button
                onClick={() => handleNavClick('gallery', onGalleryClick)}
                className={`relative py-2.5 transition-colors focus:outline-none cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'text-[#E0C27B] font-semibold'
                    : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
                }`}
              >
                <span>{ui.navGallery}</span>
                {activeTab === 'gallery' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.8)]" />
                )}
              </button>
            )}
          </nav>

          {/* 3. Right: Language Selector, Heritage AI & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            {/* Language Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-[rgba(198,161,91,0.3)] bg-[#1C1F21] hover:border-[#C6A15B] text-xs font-nav text-[#F3EBDD] transition-colors focus:outline-none cursor-pointer shadow-sm"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="font-medium text-[11px] sm:text-xs">{currentLangObj.native}</span>
                <ChevronDown className={`w-3 h-3 text-[#858078] transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-[#1C1F21] border border-[rgba(198,161,91,0.35)] rounded-xs shadow-xl backdrop-blur-md py-1.5 z-50 animate-in fade-in duration-150">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-nav flex items-center justify-between transition-colors cursor-pointer ${
                        language === item.code
                          ? 'bg-[#C6A15B] text-[#151719] font-semibold'
                          : 'text-[#B8B2A6] hover:bg-[#242729] hover:text-[#F3EBDD]'
                      }`}
                    >
                      <span>{item.native}</span>
                      <span className="text-[10px] opacity-75 font-numeric uppercase">{item.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Heritage AI Button (Full text on tablet/desktop, sleek compact pill on mobile) */}
            {onStoryClick && (
              <button
                onClick={onStoryClick}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xs border border-[#C6A15B]/60 bg-[#1C1F21] hover:bg-[#242729] text-[#E0C27B] hover:text-[#F3EBDD] text-xs font-cinzel font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer group"
                title="Heritage AI — Historical & Architectural Storyteller"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] group-hover:rotate-12 transition-transform shrink-0" />
                <span className="hidden sm:inline">Heritage AI</span>
                <span className="sm:hidden text-[11px]">AI</span>
              </button>
            )}

            {/* Quick Explore Header CTA Button (Large screens) */}
            <button
              onClick={onExploreClick}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-xs bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold uppercase tracking-[0.14em] shadow-[0_2px_12px_rgba(198,161,91,0.35)] hover:shadow-[0_4px_18px_rgba(224,194,123,0.55)] transition-all cursor-pointer"
            >
              <span>{ui.exploreHeritageCTA}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#B8B2A6] hover:text-[#E0C27B] focus:outline-none cursor-pointer rounded-xs hover:bg-[#242729]"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Refined Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(198,161,91,0.25)] bg-[#181B1D]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          
          {/* Heritage AI Quick Trigger Card */}
          {onStoryClick && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onStoryClick();
              }}
              className="w-full mb-2 p-3 rounded-xs bg-gradient-to-r from-[#C6A15B]/15 via-[#E0C27B]/10 to-transparent border border-[#C6A15B]/40 text-[#E0C27B] flex items-center justify-between font-cinzel text-xs font-bold tracking-wider uppercase cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span>Heritage AI Guide</span>
              </div>
              <span className="text-[10px] text-[#B8B2A6] lowercase font-sans">tap to open →</span>
            </button>
          )}

          {/* Primary Navigation Links */}
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home', onHomeClick)}
              className={`w-full text-left px-3.5 py-2.5 text-sm font-nav font-medium rounded-xs transition-colors cursor-pointer flex items-center justify-between ${
                activeTab === 'home'
                  ? 'bg-[#C6A15B]/15 text-[#E0C27B] font-semibold border-l-2 border-[#C6A15B]'
                  : 'text-[#F3EBDD] hover:bg-[#242729] hover:text-[#E0C27B]'
              }`}
            >
              <span>{ui.navHome}</span>
              <span className="text-[#858078] text-xs">🏛️</span>
            </button>

            <button
              onClick={() => handleNavClick('explore', onExploreClick)}
              className={`w-full text-left px-3.5 py-2.5 text-sm font-nav font-medium rounded-xs transition-colors cursor-pointer flex items-center justify-between ${
                activeTab === 'explore'
                  ? 'bg-[#C6A15B]/15 text-[#E0C27B] font-semibold border-l-2 border-[#C6A15B]'
                  : 'text-[#F3EBDD] hover:bg-[#242729] hover:text-[#E0C27B]'
              }`}
            >
              <span>{ui.navExplore}</span>
              <span className="text-[#858078] text-xs">🌐</span>
            </button>

            <button
              onClick={() => handleNavClick('about', onAboutClick)}
              className={`w-full text-left px-3.5 py-2.5 text-sm font-nav font-medium rounded-xs transition-colors cursor-pointer flex items-center justify-between ${
                activeTab === 'about'
                  ? 'bg-[#C6A15B]/15 text-[#E0C27B] font-semibold border-l-2 border-[#C6A15B]'
                  : 'text-[#F3EBDD] hover:bg-[#242729] hover:text-[#E0C27B]'
              }`}
            >
              <span>{ui.navAbout}</span>
              <span className="text-[#858078] text-xs">📜</span>
            </button>

            {onGalleryClick && (
              <button
                onClick={() => handleNavClick('gallery', onGalleryClick)}
                className={`w-full text-left px-3.5 py-2.5 text-sm font-nav font-medium rounded-xs transition-colors cursor-pointer flex items-center justify-between ${
                  activeTab === 'gallery'
                    ? 'bg-[#C6A15B]/15 text-[#E0C27B] font-semibold border-l-2 border-[#C6A15B]'
                    : 'text-[#F3EBDD] hover:bg-[#242729] hover:text-[#E0C27B]'
                }`}
              >
                <span>{ui.navGallery}</span>
                <span className="text-[#858078] text-xs">🖼️</span>
              </button>
            )}
          </div>

          {/* Monument Quick Access Links */}
          <div className="pt-2 border-t border-[rgba(198,161,91,0.15)]">
            <div className="px-3.5 py-1 text-[10px] uppercase font-numeric font-bold tracking-widest text-[#C6A15B]">
              Explore Sanctuaries
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {[
                { id: 'hampi', name: '1. Hampi' },
                { id: 'konark', name: '2. Konark' },
                { id: 'tajmahal', name: '3. Taj Mahal' },
                { id: 'ellora', name: '4. Ellora' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenMonument) onOpenMonument(m.id);
                    else onExploreClick();
                  }}
                  className="px-3 py-2 bg-[#202325] hover:bg-[#282B2E] text-left text-xs font-editorial font-medium text-[#F3EBDD] hover:text-[#E0C27B] rounded-xs border border-[rgba(198,161,91,0.2)] transition-colors cursor-pointer truncate"
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
