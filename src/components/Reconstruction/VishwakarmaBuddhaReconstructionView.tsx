import React from 'react';
import {
  ArrowLeft,
  Compass,
  Landmark,
  ShieldCheck,
  BookOpen,
  Sparkles,
  MapPin,
  Calendar,
  Info,
} from 'lucide-react';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface VishwakarmaBuddhaReconstructionViewProps {
  onBackToTour: () => void;
  onOpenHeritageStory?: () => void;
}

export const VishwakarmaBuddhaReconstructionView: React.FC<VishwakarmaBuddhaReconstructionViewProps> = ({
  onBackToTour,
  onOpenHeritageStory,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F3EBDD] text-[#1C1F21] font-sans selection:bg-[#C6A15B]/30 selection:text-[#1C1F21]">
      {/* 1. Museum Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F3EBDD]/95 backdrop-blur-md border-b border-[#C6A15B]/30 shadow-xs px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Breadcrumb & Monument Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/60 shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-[#9D7B54]">
                <span>Royal Heritage Platform</span>
                <span>/</span>
                <span>Ellora Caves</span>
                <span>/</span>
                <span className="text-[#1C1F21] font-semibold">Cave 10 (Vishwakarma)</span>
              </div>
              <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#1C1F21] tracking-wide">
                Vishwakarma Cave Buddha Shrine — Sculptural Reconstruction
              </h1>
            </div>
          </div>

          {/* Action Buttons: Heritage AI & Return to 360° Tour */}
          <div className="flex items-center gap-2.5 shrink-0">
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
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E0C27B] group-hover:-translate-x-1 transition-transform" />
              <span>Back to 360° Tour</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Museum Editorial Stage */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
        {/* 2. Hero Title & Metadata Badge Bar */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B8B2A6]/25 text-[#1C1F21] border border-[#C6A15B]/50 rounded-full text-xs font-cinzel font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Digital Archaeological Reconstruction Archive</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1F21] leading-tight">
            VISHWAKARMA BUDDHA SHRINE
          </h2>

          <p className="font-playfair text-base sm:text-xl text-[#9D7B54] italic max-w-2xl mx-auto leading-relaxed">
            Reconstructing the 7th-century rock-cut monolithic Preaching Buddha, celestial arch, and attendant Bodhisattvas in Cave 10.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-sans text-[#1C1F21]/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              Cave 10 (Vishwakarma), Ellora Caves, Maharashtra
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              Carved c. 650–700 CE (Post-Gupta / Early Rashtrakuta Period)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              UNESCO World Heritage Site (1983, Ref #243)
            </span>
          </div>
        </section>

        {/* 3. Interactive Before-and-After Comparison Slider */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#C6A15B]/30 pb-2">
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1F21]">
                Interactive Sculptural & Architectural Comparison
              </h3>
              <p className="font-sans text-xs text-[#9D7B54]">
                Drag the slider handle horizontally or use Left / Right arrow keys to compare present-day in-situ sculpture with restored 7th-century details.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#9D7B54]">
              <Compass className="w-4 h-4 text-[#C6A15B]" />
              <span>Camera: Frontal Nave Elevation</span>
            </div>
          </div>

          {/* Draggable Comparison Component */}
          <ImageComparisonSlider
            beforeImage="/assets/monuments/ellora/reconstruction/vishwakarma-buddha-before.png"
            beforeLabel="BEFORE"
            afterImage="/assets/monuments/ellora/reconstruction/vishwakarma-buddha-after.png"
            afterLabel="RECONSTRUCTED"
            initialPosition={50}
          />

          {/* Mandatory Historical Accuracy & Sculptural Interpretation Disclosure */}
          <div className="p-4 bg-[#B8B2A6]/15 border-l-4 border-[#C6A15B] rounded-r-xs flex items-start gap-3 shadow-xs">
            <Info className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed text-[#1C1F21]">
              <div className="font-cinzel font-bold text-[#1C1F21] tracking-wide uppercase text-[11px]">
                Historical Accuracy & Interpretation Disclosure
              </div>
              <p className="italic font-playfair text-sm text-[#1C1F21] leading-relaxed">
                &ldquo;AI-generated historical architectural and sculptural interpretation based on available historical and archaeological evidence. Some restored details remain interpretative and are not claimed as verified historical facts.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 4. Section: ABOUT THE RECONSTRUCTION */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3">
            <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
              Curatorial Monograph
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
              ABOUT THE RECONSTRUCTION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs text-xs">
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Monument</span>
              <span className="font-cinzel font-semibold text-sm text-[#1C1F21]">Cave 10 (Vishwakarma) Stupa Shrine</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Location</span>
              <span className="font-sans font-medium text-sm text-[#1C1F21]">Ellora Caves, Maharashtra, India</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Iconography</span>
              <span className="font-cinzel font-semibold text-sm text-[#C6A15B]">Colossal Preaching Buddha & Bodhisattvas</span>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#1C1F21]/90 font-serif">
            <p>
              Cave 10, revered as <strong>Vishwakarma</strong> or the <em>&ldquo;Carpenter&apos;s Cave&rdquo;</em>, represents the culmination of Buddhist rock-cut sanctuary design in Western India. Excavated circa <strong>650–700 CE</strong> during the transition from the Kalachuris to the early Rashtrakutas, it is the sole Chaitya prayer hall among Ellora&apos;s 34 caves.
            </p>
            <p>
              At the sanctum&apos;s focal point stands a colossal 15-foot high monolithic sculpture of <strong>Buddha Shakyamuni</strong> carved directly from the living basalt rock of the hemispherical relic stupa. He is depicted in <em>pralambapadasana</em> (seated with legs pendant on a carved lotus footstool) upon a royal lion throne (<em>simhasana</em>), his hands formed in the sacred <em>Dharmachakra Pravartana Mudra</em>—commemorating the turning of the wheel of cosmic law during his First Sermon at the Deer Park in Sarnath.
            </p>
            <p>
              The digital reconstruction restores worn surface details eroded across thirteen centuries of atmospheric exposure while strictly respecting the underlying rock-cut geometry:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-xs font-sans text-[#1C1F21]">
              <li>
                <strong>Complete Dharmachakra Mudra & Hands:</strong> Full anatomical restoration of the Buddha&apos;s damaged hands and eroded fingers at chest level, recreating the canonical turning of the wheel of cosmic law with distinct, slender, fully formed fingers, palms, and wrists.
              </li>
              <li>
                <strong>Serene Facial Contours:</strong> Subtle restoration of the meditative half-closed elongated eyes, gentle smile, aquiline nasal bridge, elongated earlobes, and snail-curl <em>ushnisha</em> finial.
              </li>
              <li>
                <strong>Monastic Sanghati Drapery:</strong> Delicate restoration of the gossamer-thin robe clinging to the seated body with refined Post-Gupta folds.
              </li>
              <li>
                <strong>Celestial Prabhavali Arch:</strong> Chiseled definition restored to the flying <em>gandharva</em> couples holding victory garlands and sacred Bodhi tree foliage.
              </li>
              <li>
                <strong>Flanking Bodhisattva Attendants:</strong> Fine articulation restored to <em>Avalokiteshvara</em> (holding the fly-whisk and lotus) on the left and <em>Vajrapani</em> on the right.
              </li>
              <li>
                <strong>Basalt Integrity:</strong> Zero gold gilding or artificial paints; the natural volcanic basalt grain and cathedral light filtering from the chaitya sun window remain completely preserved.
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Return Button at Bottom */}
        <div className="text-center pt-4 pb-8">
          <button
            type="button"
            onClick={onBackToTour}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1C1F21] hover:bg-[#242729] text-[#F3EBDD] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs border border-[#C6A15B] shadow-md hover:shadow-lg transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#E0C27B] group-hover:-translate-x-1 transition-transform" />
            <span>Return to 360° Cave Exploration</span>
          </button>
        </div>
      </main>
    </div>
  );
};
