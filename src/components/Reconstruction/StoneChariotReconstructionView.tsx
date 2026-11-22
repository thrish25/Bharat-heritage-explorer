import React from 'react';
import {
  ArrowLeft,
  Compass,
  Landmark,
  ShieldCheck,
  BookOpen,
  Camera,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
  ExternalLink,
  MapPin,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface StoneChariotReconstructionViewProps {
  onBackToTour: () => void;
  onOpenHeritageStory?: () => void;
}

export const StoneChariotReconstructionView: React.FC<StoneChariotReconstructionViewProps> = ({
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
                <span>Hampi</span>
                <span>/</span>
                <span className="text-[#1C1F21] font-semibold">Vijaya Vittala Complex</span>
              </div>
              <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#1C1F21] tracking-wide">
                Hampi Stone Chariot — Architectural Reconstruction
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
            <span>Digital Architectural Reconstruction Archive</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1F21] leading-tight">
            HAMPI STONE CHARIOT
          </h2>

          <p className="font-playfair text-base sm:text-xl text-[#9D7B54] italic max-w-2xl mx-auto leading-relaxed">
            Reconstructing the lost 16th-century brick-and-mortar Dravidian vimana over the monolithic granite Garuda shrine.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-sans text-[#1C1F21]/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              Vijaya Vittala Temple Complex, Hampi, Karnataka
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              Constructed c. 1509–1529 CE (Emperor Krishnadevaraya)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              UNESCO World Heritage Site (1986, Ref #241)
            </span>
          </div>
        </section>

        {/* 3. Interactive Before-and-After Comparison Slider */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#C6A15B]/30 pb-2">
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1F21]">
                Interactive Architectural Comparison
              </h3>
              <p className="font-sans text-xs text-[#9D7B54]">
                Drag the slider handle horizontally to compare the surviving in-situ monument with the reconstructed superstructure.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#9D7B54]">
              <Compass className="w-4 h-4 text-[#C6A15B]" />
              <span>Camera: West Facing Elevation</span>
            </div>
          </div>

          {/* Draggable Comparison Component */}
          <ImageComparisonSlider
            beforeImage="/assets/monuments/hampi/reconstruction/stone-chariot-before.png"
            beforeLabel="BEFORE"
            afterImage="/assets/monuments/hampi/reconstruction/stone-chariot-after.png"
            afterLabel="RECONSTRUCTED"
            initialPosition={50}
          />

          {/* Section: Mandatory Historical Accuracy Disclosure */}
          <div className="p-4 bg-[#B8B2A6]/15 border-l-4 border-[#C6A15B] rounded-r-xs flex items-start gap-3 shadow-xs">
            <Info className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed text-[#1C1F21]">
              <div className="font-cinzel font-bold text-[#1C1F21] tracking-wide uppercase text-[11px]">
                Historical Accuracy & Interpretation Disclosure
              </div>
              <p className="italic font-playfair text-sm text-[#1C1F21] leading-relaxed">
                &ldquo;AI-generated historical architectural interpretation based on available historical photographs, archaeological information and documented architectural evidence. Some details remain uncertain and are not claimed as verified historical facts.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* 4. Section 5: ABOUT THE RECONSTRUCTION */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3">
            <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
              Curatorial Overview
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
              ABOUT THE RECONSTRUCTION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs text-xs">
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Monument</span>
              <span className="font-cinzel font-semibold text-sm text-[#1C1F21]">Hampi Stone Chariot (Garuda Shrine)</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Location</span>
              <span className="font-sans font-medium text-sm text-[#1C1F21]">Vijaya Vittala Temple Complex, Hampi, Karnataka</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Reconstruction Target</span>
              <span className="font-cinzel font-semibold text-sm text-[#C6A15B]">Missing upper brick-and-mortar vimana</span>
            </div>
          </div>

          <div className="prose text-xs sm:text-sm text-[#1C1F21]/85 leading-relaxed space-y-3 font-sans">
            <p>
              The Hampi Stone Chariot is historically an independent shrine dedicated to <strong>Garuda</strong>, the vahana (mount) of Lord Vishnu, situated along the central east-west processional axis of the magnificent Vijaya Vittala sanctuary. While popularly celebrated for its intricately sculpted modular granite chariot body and four independent stone axles, early archival photographic evidence proves that the flat roof slab was originally crowned by a multi-tiered, stepped pyramidal brick-and-mortar tower (<em>vimana</em>) in classical southern Dravidian architectural style.
            </p>
            <p>
              This digital reconstruction focuses <strong>strictly on interpreting this missing upper architectural portion</strong>. The digital visualization restores the volumetric massing and ornamental cornice silhouette of the brick superstructure while maintaining complete fidelity to the original granite foundation.
            </p>
          </div>

          {/* Subsection: WHAT HAS BEEN PRESERVED */}
          <div className="pt-4 border-t border-[#C6A15B]/25 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#1C1F21] tracking-wide uppercase">
                WHAT HAS BEEN PRESERVED (SURVIVING ORIGINAL FABRIC)
              </h4>
            </div>

            <p className="text-xs text-[#9D7B54]">
              In accordance with international conservation ethics and project constraints (<code>CONST-PRESERVE-06</code>), the following surviving elements are strictly preserved without alteration:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {[
                { title: 'Granite Chariot Body & Base', desc: 'Surviving ashlar masonry, plinth moldings, and friezes remain authentic.' },
                { title: 'Stone Wheels & Axles', desc: 'All 4 independently sculpted granite wheels and 20th-century conservation mortar joints are preserved.' },
                { title: 'Existing Relief Carvings', desc: 'Bas-relief dancers, mythical yalis, and floral motifs are untouched.' },
                { title: 'Entrance & Balustrades', desc: 'Present-day stone steps and damaged side balustrades remain in situ.' },
                { title: 'Guardian Elephants', desc: 'The two elephant sculptures introduced in modern conservation remain at the entrance.' },
                { title: 'Present-Day Surroundings', desc: 'The paved stone courtyard and Vittala Ranga Mantapa backdrop are unaltered.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-cinzel text-xs font-bold text-[#1C1F21]">{item.title}</h5>
                    <p className="text-[11px] text-[#1C1F21]/70 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section 6: EVIDENCE BEHIND THE RECONSTRUCTION */}
        <section className="space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
                Scholarly Grounds & Citations
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
                EVIDENCE BEHIND THE RECONSTRUCTION
              </h3>
            </div>
            <span className="text-xs text-[#9D7B54]">
              Audited Historical Repository: Phase 2.1
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Evidence Card 1: 1856 Calotype Photographs */}
            <div className="bg-white border border-[#C6A15B]/50 rounded-xs p-5 shadow-xs space-y-3 relative group hover:border-[#E0C27B] transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 bg-[#F3EBDD] border border-[#C6A15B]/40 text-[#1C1F21] font-mono text-[10px] rounded-xs">
                  SRC-PHOTO-06 &amp; SRC-PHOTO-07
                </span>
                <span className="inline-flex items-center gap-1 text-[#C6A15B] font-cinzel text-[11px] font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  1856 Primary Calotypes
                </span>
              </div>

              <h4 className="font-cinzel text-base font-bold text-[#1C1F21]">
                Alexander Greenlaw (1856) &amp; Dr. A.C.B. Neill (1856–57)
              </h4>

              <p className="font-sans text-xs text-[#1C1F21]/80 leading-relaxed">
                The earliest photographic survey of Hampi by Colonel Alexander Greenlaw (preserved in the Alkazi Collection and V&amp;A) and the independent plate by Dr. Neill (Royal Collection Trust RCIN 2603956) provide conclusive photographic proof of the intact stepped pyramidal brick vimana crowning the stone chariot roof before it collapsed or was dismantled in the late 19th century.
              </p>

              <div className="pt-2 border-t border-[#C6A15B]/20 text-[11px] text-[#9D7B54] flex items-center justify-between">
                <span>Confidence: VERIFIED</span>
                <span className="italic">Visual Proportion: ~1:1 Height Ratio</span>
              </div>
            </div>

            {/* Evidence Card 2: ASI Documentation */}
            <div className="bg-white border border-[#C6A15B]/50 rounded-xs p-5 shadow-xs space-y-3 relative group hover:border-[#E0C27B] transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 bg-[#F3EBDD] border border-[#C6A15B]/40 text-[#1C1F21] font-mono text-[10px] rounded-xs">
                  SRC-ASI-01 &amp; SRC-ASI-PUB-03
                </span>
                <span className="inline-flex items-center gap-1 text-[#C6A15B] font-cinzel text-[11px] font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  Archaeological Survey of India
                </span>
              </div>

              <h4 className="font-cinzel text-base font-bold text-[#1C1F21]">
                A.H. Longhurst (1917) &amp; ASI Hampi Inventory
              </h4>

              <p className="font-sans text-xs text-[#1C1F21]/80 leading-relaxed">
                Superintendent A.H. Longhurst&apos;s monograph <em>Hampi Ruins Described and Illustrated</em> (1917) records the chariot as a dedicated shrine to Garuda, noting the absence of the brick superstructure by the early 20th century. Modern ASI documentation confirms traces of lime stucco and mineral pigments in sheltered undercuts, indicating the brick tower was originally plastered.
              </p>

              <div className="pt-2 border-t border-[#C6A15B]/20 text-[11px] text-[#9D7B54] flex items-center justify-between">
                <span>Confidence: VERIFIED</span>
                <span className="italic">Plaster &amp; Conservation Baseline</span>
              </div>
            </div>

            {/* Evidence Card 3: Michell & Fritz Architectural Survey */}
            <div className="bg-white border border-[#C6A15B]/50 rounded-xs p-5 shadow-xs space-y-3 relative group hover:border-[#E0C27B] transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 bg-[#F3EBDD] border border-[#C6A15B]/40 text-[#1C1F21] font-mono text-[10px] rounded-xs">
                  SRC-ACAD-05
                </span>
                <span className="inline-flex items-center gap-1 text-[#C6A15B] font-cinzel text-[11px] font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  Architectural Inventory
                </span>
              </div>

              <h4 className="font-cinzel text-base font-bold text-[#1C1F21]">
                George Michell &amp; John M. Fritz (2001) Field Survey
              </h4>

              <p className="font-sans text-xs text-[#1C1F21]/80 leading-relaxed">
                The American Institute of Indian Studies inventory documents Structure V-14 (Garuda Shrine), recording measured ground plans, corner pilasters, pushpapotika floral brackets, and flexured kapota cornice. Most critically, physical field surveys document recessed sockets along the upper granite terrace designed specifically to anchor upper brick masonry.
              </p>

              <div className="pt-2 border-t border-[#C6A15B]/20 text-[11px] text-[#9D7B54] flex items-center justify-between">
                <span>Confidence: VERIFIED</span>
                <span className="italic">Structural Mortise &amp; Sockets</span>
              </div>
            </div>

            {/* Evidence Card 4: Vijayanagara Dravidian Typology */}
            <div className="bg-white border border-[#C6A15B]/50 rounded-xs p-5 shadow-xs space-y-3 relative group hover:border-[#E0C27B] transition-all">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 bg-[#F3EBDD] border border-[#C6A15B]/40 text-[#1C1F21] font-mono text-[10px] rounded-xs">
                  SRC-ACAD-08 &amp; SRC-UNESCO-02
                </span>
                <span className="inline-flex items-center gap-1 text-[#C6A15B] font-cinzel text-[11px] font-bold">
                  <Landmark className="w-3.5 h-3.5" />
                  Comparative Typology
                </span>
              </div>

              <h4 className="font-cinzel text-base font-bold text-[#1C1F21]">
                16th-Century Imperial Dravida Shikhara Parallels
              </h4>

              <p className="font-sans text-xs text-[#1C1F21]/80 leading-relaxed">
                Comparative analysis of surviving 16th-century Vijayanagara shrines across the Sacred Centre establishes the standard architectural formula: multi-tiered stepped talas decorated with miniature kuta and shala pavilions, terminating in a square or circular griva neck, domical shikhara, and crowning stupi/kalasha.
              </p>

              <div className="pt-2 border-t border-[#C6A15B]/20 text-[11px] text-[#9D7B54] flex items-center justify-between">
                <span>Confidence: PROBABLE</span>
                <span className="italic">Classical Dravidian Kantha &amp; Shikhara</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section 7: HOW THE RECONSTRUCTION WAS DEVELOPED */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3">
            <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
              Scientific Workflow
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
              HOW THE RECONSTRUCTION WAS DEVELOPED
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Historical Reference Study',
                desc: 'Review and catalog available 1856 calotype photographs, ASI field monographs, and UNESCO World Heritage documentation.',
              },
              {
                step: '02',
                title: 'Architectural Analysis',
                desc: 'Identify the missing upper brick vimana while segregating surviving granite fabric (chassis, plinth, wheels, and guardian elephants).',
              },
              {
                step: '03',
                title: 'Visual Interpretation',
                desc: 'Synthesize an image-based architectural interpretation grounded strictly in audited historical dimensions and comparative Dravidian typology.',
              },
              {
                step: '04',
                title: 'Before-and-After Comparison',
                desc: 'Provide an accessible, interactive comparison tool allowing visitors to evaluate present-day conservation against the proposed historical form.',
              },
            ].map((st, i) => (
              <div key={i} className="p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-2xl font-extrabold text-[#C6A15B]/70">{st.step}</span>
                  <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                </div>
                <div>
                  <h5 className="font-cinzel text-xs font-bold text-[#1C1F21] mb-1.5">{st.title}</h5>
                  <p className="text-[11px] text-[#1C1F21]/75 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#9D7B54] italic border-t border-[#C6A15B]/20 pt-3">
            Note: This project does not claim that a custom AI model was trained. The reconstruction leverages historical architectural evidence, authoritative photographic archives, and generative visual synthesis to visualize the lost vimana for digital museum education.
          </p>
        </section>

        {/* 7. Section 8: WHAT IS NOT INVENTED (SCHOLARLY HONESTY) */}
        <section className="p-6 bg-[#B8B2A6]/15 border border-[#C6A15B]/40 rounded-xs space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#C6A15B]" />
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#1C1F21] tracking-wide uppercase">
              Scholarly Honesty: What Has NOT Been Invented
            </h4>
          </div>

          <p className="text-xs text-[#1C1F21]/80 leading-relaxed">
            In academic heritage preservation, distinguishing documented fact from speculative interpretation is essential. This digital reconstruction explicitly rejects fabricating unverified details:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✕</span>
              <span><strong>Exact Metric Height:</strong> Proportions are based on the ~1:1 visual ratio in 1856 calotypes, not arbitrary millimetric claims.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✕</span>
              <span><strong>Exact Number of Tiers:</strong> Interpreted as 2 to 3 stepped Dravidian talas matching silhouette evidence rather than dogmatic speculation.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✕</span>
              <span><strong>Unverified Finials:</strong> No fanciful gold leaf or unverified deities have been introduced without archaeological warrant.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✕</span>
              <span><strong>Missing Draft Animals:</strong> The fragmented horse legs remain broken as preserved in situ; whole horses are not fabricated.</span>
            </div>
          </div>
        </section>

        {/* 8. Bottom Action: Return to 360° Tour */}
        <section className="text-center pt-4 pb-12">
          <button
            type="button"
            onClick={onBackToTour}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#1C1F21] hover:bg-[#242729] text-[#F3EBDD] font-cinzel text-sm font-bold uppercase tracking-widest rounded-xs border-2 border-[#C6A15B] shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#E0C27B] group-hover:-translate-x-1 transition-transform" />
            <span>Return to 360° Virtual Tour</span>
          </button>
        </section>
      </main>
    </div>
  );
};
