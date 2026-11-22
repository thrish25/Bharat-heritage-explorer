import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { CarvedCorner } from './Ornaments';
import { useLanguage } from '../context/LanguageContext';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const { ui } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen) return null;

  const galleryItems = [
    {
      title: 'Bilateral Symmetry across Charbagh Pool',
      monument: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: '/assets/monuments/taj-mahal/reconstruction/taj-mahal-before.jpg',
      caption: 'Flawlessly symmetrical white Makrana marble facade reflected across the central reflecting pool in the modern Charbagh paradise garden.',
    },
    {
      title: 'Historical Dense Charbagh Canopy (c. 1890s)',
      monument: 'Taj Mahal (Historical View)',
      location: 'Agra, Uttar Pradesh',
      image: '/assets/monuments/taj-mahal/reconstruction/taj-mahal-after.jpg',
      caption: 'Authentic c. 1890s Detroit Publishing Co. photochrome print (Library of Congress) from the Great Gate terrace, documenting the lush pre-Curzon Mughal garden canopy before the 1908 lawn remodeling.',
    },
    {
      title: 'Kailasa Temple Monolithic Excavation',
      monument: 'Ellora Caves, Cave 16',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
      image: '/assets/monuments/ellora/reconstruction/kailasa-before.png',
      caption: 'The entire multi-storey monolithic temple complex chiseled top-down from a single volcanic basalt cliff face under the Rashtrakuta Dynasty.',
    },
    {
      title: 'Kailasa Temple — Radiant White Chunam Sheen',
      monument: 'Ellora Caves (Historical View)',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
      image: '/assets/monuments/ellora/reconstruction/kailasa-after.png',
      caption: 'Historical architectural visualization showing the original brilliant white lime plaster finish that gave the temple its sacred identity as Mount Kailasa.',
    },
    {
      title: 'Vishwakarma Chaitya & Monolithic Buddha',
      monument: 'Ellora Caves, Cave 10',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
      image: '/assets/monuments/ellora/reconstruction/vishwakarma-buddha-before.png',
      caption: 'The celebrated Carpenter’s Cave featuring ribbed rock-cut cathedral vaulting and a colossal 15-foot monolithic Buddha in vyakhyana mudra.',
    },
    {
      title: 'Celestial Solar Chariot Sundial Wheel',
      monument: 'Konark Sun Temple',
      location: 'Puri, Odisha',
      image: '/images/konark.jpg',
      caption: '24 colossal sundial wheels engineered from khondalite stone acting as precise astronomical solar chronometers.',
    },
    {
      title: 'Konark Sun Temple — Restored 227ft Rekha Deula',
      monument: 'Konark Sun Temple (Historical View)',
      location: 'Puri, Odisha',
      image: '/assets/monuments/konark/reconstruction/jagamohana-after.png',
      caption: 'Past architectural visualization representing the lost 227-foot soaring curvilinear sanctuary tower (Rekha Deula) crowned by the monumental golden kalasa finial.',
    },
    {
      title: 'The Royal Stone Chariot (Garuda Shrine)',
      monument: 'Vijaya Vittala Temple, Hampi',
      location: 'Vijayanagara, Karnataka',
      image: '/assets/monuments/hampi/reconstruction/stone-chariot-before.png',
      caption: 'Dedicated to Garuda, this world-renowned stone chariot features intricately carved granite monoliths with revolving stone wheels commissioned under King Krishnadevaraya.',
    },
    {
      title: 'Stone Chariot — Restored Dravidian Brick Shikhara',
      monument: 'Vijaya Vittala Temple (Historical View)',
      location: 'Vijayanagara, Karnataka',
      image: '/assets/monuments/hampi/reconstruction/stone-chariot-after.png',
      caption: 'Historical visualization representing the original brick-and-mortar gopura superstructure documented in 1856 Alexander Greenlaw photographs before its 19th-century dismantling.',
    },
  ];

  const currentItem = galleryItems[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#1C1F21] border border-[rgba(198,161,91,0.35)] rounded-xs shadow-2xl overflow-hidden flex flex-col">

        {/* Corner Accents */}
        <CarvedCorner position="tl" />
        <CarvedCorner position="tr" />
        <CarvedCorner position="bl" />
        <CarvedCorner position="br" />

        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[rgba(198,161,91,0.2)] flex items-center justify-between bg-[#151719]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A15B] font-numeric font-semibold">
              {ui.galleryBadge}
            </span>
            <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#F3EBDD]">
              {ui.galleryTitle}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label={ui.galleryClose}
            className="w-8 h-8 rounded-full border border-[rgba(198,161,91,0.4)] hover:border-[#E0C27B] text-[#F3EBDD] hover:text-[#E0C27B] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Active Image Stage */}
        <div className="relative aspect-[16/9] w-full bg-[#151719] overflow-hidden flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            aria-label={ui.galleryPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1F21]/90 border border-[rgba(198,161,91,0.4)] text-[#E0C27B] hover:text-[#F3EBDD] hover:border-[#E0C27B] hover:scale-105 flex items-center justify-center transition-all focus:outline-none cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            aria-label={ui.galleryNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1C1F21]/90 border border-[rgba(198,161,91,0.4)] text-[#E0C27B] hover:text-[#F3EBDD] hover:border-[#E0C27B] hover:scale-105 flex items-center justify-center transition-all focus:outline-none cursor-pointer shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="p-5 bg-[#151719] border-t border-[rgba(198,161,91,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#C6A15B] font-numeric">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentItem.monument} • {currentItem.location}</span>
            </div>
            <h4 className="font-editorial text-base font-bold text-[#F3EBDD]">
              {currentItem.title}
            </h4>
            <p className="text-xs text-[#B8B2A6] max-w-2xl font-body">
              {currentItem.caption}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Select photo ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? 'w-5 bg-[#C6A15B]' : 'bg-[#858078]/40 hover:bg-[#B8B2A6]'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
