import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Eye, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LotusDivider } from './Ornaments';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const { ui } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'hampi',
      image: '/images/hampi.jpg',
      alt: 'Hampi Vijaya Vittala Temple and Stone Chariot in Golden Hour Sunset',
      caption: 'Vijaya Vittala Temple & Stone Chariot, Hampi • Karnataka',
      era: 'Vijayanagara Empire • 16th Century CE',
    },
    {
      id: 'konark',
      image: '/images/konark.jpg',
      alt: 'Konark Sun Temple Celestial Chariot Sundial Wheel & Jagamohana',
      caption: 'Surya Deula & Celestial Sundial Wheel, Konark • Odisha',
      era: 'Eastern Ganga Dynasty • 13th Century CE',
    },
    {
      id: 'tajmahal',
      image: '/images/tajmahal.jpg',
      alt: 'Taj Mahal Symmetrical Reflection Framed Through Red Sandstone Arch',
      caption: 'Mughal Imperial Marble Mausoleum, Agra • Uttar Pradesh',
      era: 'Mughal Empire • 17th Century CE',
    },
    {
      id: 'ellora',
      image: '/images/ellora.jpg',
      alt: 'Ellora Caves Monolithic Kailasa Temple Top-Down Aerial Vista',
      caption: 'Kailasa Monolithic Temple (Cave 16), Ellora • Maharashtra',
      era: 'Rashtrakuta Dynasty • 8th Century CE',
    },
  ];

  // Auto-advance slides smoothly every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#151719] text-[#F3EBDD] border-b border-[rgba(198,161,91,0.22)] min-h-[500px] sm:min-h-[620px] lg:min-h-[700px] flex flex-col justify-between">
      
      {/* 1. Cinematic Panoramic Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-10000 ease-linear"
            />
          </div>
        ))}

        {/* Sophisticated Dark Atmospheric Charcoal Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151719] via-[#151719]/80 via-45% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-[#151719]/40 via-20% to-[#151719]/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(21,23,25,0.7)_0%,transparent_70%)] z-10 pointer-events-none" />
      </div>

      {/* 2. Master Hero Content Area */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1F21]/90 border border-[#C6A15B]/50 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0C27B] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-numeric font-semibold tracking-[0.2em] uppercase text-[#E0C27B]">
              BHARAT ROYALE • DIGITAL ARCHIVE
            </span>
          </div>

          {/* Editorial Headline (Calibrated to 26-28px on mobile, 40-64px on desktop) */}
          <h1 className="font-editorial text-[1.65rem] sm:text-4xl lg:text-[4rem] font-bold tracking-[-0.01em] leading-[1.12] sm:leading-[1.08] text-[#F3EBDD] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            Ancient Civilization.<br />
            <span className="gold-editorial-heading">Timeless Stories.</span><br />
            Digital Exploration.
          </h1>

          {/* Elegant Ornamental Divider */}
          <div className="w-full max-w-sm">
            <LotusDivider className="my-0.5 sm:my-1 justify-start" />
          </div>

          {/* Meaningful Introduction (14-16px on mobile) */}
          <p className="font-body text-sm sm:text-base lg:text-lg text-[#B8B2A6] leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Explore India’s monumental architectural triumphs through precision 360° spatial photogrammetry, scholarly archaeological dossiers, and scientifically evidence-based digital reconstructions.
          </p>

          {/* Active Slide Geodetic Meta */}
          <div className="inline-block py-1.5 px-3 rounded-xs bg-[#1C1F21]/85 border-l-2 border-[#C6A15B] text-[11px] sm:text-xs font-nav text-[#E0C27B] backdrop-blur-xs">
            <span className="font-semibold">{slides[currentSlide].caption}</span>
            <span className="text-[#858078] ml-2 text-[10px] sm:text-[11px] font-numeric">({slides[currentSlide].era})</span>
          </div>

          {/* Call-to-Action Group */}
          <div className="pt-1 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.14em] rounded-xs shadow-[0_4px_20px_rgba(198,161,91,0.35)] hover:shadow-[0_6px_30px_rgba(224,194,123,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-h-[44px]"
            >
              <Eye className="w-4 h-4 text-[#151719]" />
              <span>EXPLORE SANCTUARIES</span>
              <ArrowRight className="w-4 h-4 text-[#151719] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Hero Bottom Telemetry Ribbon & Slide Controls */}
      <div className="relative z-20 border-t border-[rgba(198,161,91,0.18)] bg-[#151719]/90 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Key Statistics Grid in Montserrat */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center sm:text-left">
            <div>
              <div className="font-numeric text-xl sm:text-2xl font-bold text-[#E0C27B]">4</div>
              <div className="text-[10px] sm:text-xs font-nav text-[#858078] uppercase tracking-wider">
                UNESCO World Heritage Sites
              </div>
            </div>

            <div>
              <div className="font-numeric text-xl sm:text-2xl font-bold text-[#E0C27B]">27</div>
              <div className="text-[10px] sm:text-xs font-nav text-[#858078] uppercase tracking-wider">
                360° Spherical Panoramas
              </div>
            </div>

            <div>
              <div className="font-numeric text-xl sm:text-2xl font-bold text-[#E0C27B]">28</div>
              <div className="text-[10px] sm:text-xs font-nav text-[#858078] uppercase tracking-wider">
                Verified Hotspots & Telemetry
              </div>
            </div>

            <div>
              <div className="font-numeric text-xl sm:text-2xl font-bold text-[#E0C27B]">4</div>
              <div className="text-[10px] sm:text-xs font-nav text-[#858078] uppercase tracking-wider">
                Archaeological Restorations
              </div>
            </div>
          </div>

          {/* Slide Selector Indicators & Next/Prev Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous monument view"
              className="p-1.5 rounded-full border border-[#C6A15B]/30 bg-[#1C1F21] text-[#B8B2A6] hover:text-[#E0C27B] hover:border-[#C6A15B] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 h-1.5 bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.8)]'
                      : 'w-1.5 h-1.5 bg-[#858078]/50 hover:bg-[#F3EBDD]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              aria-label="Next monument view"
              className="p-1.5 rounded-full border border-[#C6A15B]/30 bg-[#1C1F21] text-[#B8B2A6] hover:text-[#E0C27B] hover:border-[#C6A15B] transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
