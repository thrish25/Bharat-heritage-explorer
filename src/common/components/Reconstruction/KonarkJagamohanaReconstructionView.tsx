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
  CheckCircle2,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface KonarkJagamohanaReconstructionViewProps {
  onBackToTour: () => void;
  onOpenHeritageStory?: () => void;
}

export const KonarkJagamohanaReconstructionView: React.FC<KonarkJagamohanaReconstructionViewProps> = ({
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
                <span>Konark Sun Temple</span>
                <span>/</span>
                <span className="text-[#1C1F21] font-semibold">Sanctum Complex (Vimana, Jagamohana &amp; Natamandira)</span>
              </div>
              <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#1C1F21] tracking-wide">
                Konark Sun Temple — Historical Architectural Reconstruction
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
            KONARK SUN TEMPLE COMPLEX
          </h2>

          <p className="font-playfair text-base sm:text-xl text-[#9D7B54] italic max-w-2xl mx-auto leading-relaxed">
            Reconstructing the lost 229-foot Vimana Shikhara (Sanctum Tower), the central Jagamohana (Assembly Hall), and the front Natamandira (Dance Pavilion) based on Percy Brown&apos;s conjectural architectural survey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-sans text-[#1C1F21]/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              Konark Sun Temple Complex, Puri District, Odisha
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              Constructed c. 1250 CE (King Narasimhadeva I, Eastern Ganga Dynasty)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              UNESCO World Heritage Site (1984, Ref #242)
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
                Drag the vertical divider horizontally or use Left / Right arrow keys to compare present-day conserved ruins with the fully reconstructed 13th-century temple complex.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#9D7B54]">
              <Compass className="w-4 h-4 text-[#C6A15B]" />
              <span>Camera: Northeast Vista (Full Axial Perspective)</span>
            </div>
          </div>

          {/* Draggable Comparison Component */}
          <ImageComparisonSlider
            beforeImage="/assets/monuments/konark/reconstruction/jagamohana-before.png"
            beforeLabel="BEFORE"
            afterImage="/assets/monuments/konark/reconstruction/jagamohana-after.png"
            afterLabel="RECONSTRUCTED"
            initialPosition={50}
          />

          {/* Mandatory Historical Accuracy & Architectural Interpretation Disclosure */}
          <div className="p-4 bg-[#B8B2A6]/15 border-l-4 border-[#C6A15B] rounded-r-xs flex items-start gap-3 shadow-xs">
            <Info className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed text-[#1C1F21]">
              <div className="font-cinzel font-bold text-[#1C1F21] tracking-wide uppercase text-[11px]">
                Historical Accuracy &amp; Interpretation Disclosure
              </div>
              <p className="italic font-playfair text-sm text-[#1C1F21] leading-relaxed">
                &ldquo;AI-generated historical architectural interpretation based on historical documentation, architectural studies and available archaeological evidence. Some reconstructed details remain interpretative and are not claimed as verified historical facts.&rdquo;
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
              ABOUT THE HISTORICAL VIEW
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs text-xs">
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Architectural Ensemble</span>
              <span className="font-cinzel font-semibold text-sm text-[#1C1F21]">Vimana, Jagamohana &amp; Natamandira</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Architectural Orders</span>
              <span className="font-sans font-medium text-sm text-[#1C1F21]">Kalinga Rekha Deula &amp; Pidha Deula</span>
            </div>
            <div>
              <span className="font-bold text-[#9D7B54] uppercase tracking-wider block text-[10px]">Patron Dynasty</span>
              <span className="font-cinzel font-semibold text-sm text-[#C6A15B]">Eastern Ganga Dynasty (King Narasimhadeva I)</span>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-[#1C1F21]/90 font-serif">
            <p>
              The <strong>Sun Temple of Konark</strong> (Surya Deula), erected circa <strong>1250 CE</strong> under the illustrious monarch <strong>King Narasimhadeva I</strong>, represents the supreme climax of the medieval Kalinga architectural school. Aligned precisely along the celestial solar axis facing the Bay of Bengal, the sacred sanctuary was planned with three grand ceremonial structures arranged sequentially from East to West:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs space-y-2">
                <div className="font-cinzel font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                  1. Front: Natamandira
                </div>
                <div className="font-bold text-sm text-[#1C1F21]">Hall of Dance &amp; Music</div>
                <p className="text-xs text-[#1C1F21]/80 leading-relaxed font-sans">
                  The detached eastern pavilion where the <em>Devadasis</em> offered ritual dance to Surya. Reconstructed with an open hypostyle pillared hall, bracket dancer sculptures, and a stepped pyramidal <em>Pidha</em> roof crowned by an <em>amalaka</em> and <em>kalasa</em> finial.
                </p>
              </div>

              <div className="p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs space-y-2">
                <div className="font-cinzel font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                  2. Center: Jagamohana
                </div>
                <div className="font-bold text-sm text-[#1C1F21]">Audience &amp; Assembly Hall</div>
                <p className="text-xs text-[#1C1F21]/80 leading-relaxed font-sans">
                  The massive 128-foot (39m) pyramidal assembly hall (<em>Pidha Deula</em>). Reconstructed with its three stepped tiers (<em>potalas</em>), recessed <em>alasakanya</em> female musician terraces, and crowning <em>mastaka</em>, with all modern scaffolding removed.
                </p>
              </div>

              <div className="p-4 bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs space-y-2">
                <div className="font-cinzel font-bold text-xs uppercase tracking-wider text-[#C6A15B]">
                  3. Rear: Vimana Shikhara
                </div>
                <div className="font-bold text-sm text-[#1C1F21]">Colossal Sanctum Tower</div>
                <p className="text-xs text-[#1C1F21]/80 leading-relaxed font-sans">
                  The legendary lost 229-foot (70m) curvilinear tower (<em>Rekha Deula / Bada Deula</em>) housing the presiding solar deity. Reconstructed soaring behind the Jagamohana with fluted rathas, projecting <em>Gajasimha</em> lion, and giant crowning <em>amalaka-shila</em>.
                </p>
              </div>
            </div>

            <p>
              This reconstruction synthesizes the famous conjectural survey by <strong>Percy Brown (1942)</strong>, the palm-leaf architectural manuscripts translated by <strong>Alice Boner (1972)</strong>, Archaeological Survey of India (ASI) measured excavations, and research by <strong>Dr. Ratnakar Mohapatra (2023)</strong>. By integrating the rear Vimana Shikhara and the front Natamandira alongside the Jagamohana, visitors can observe the colossal scale and spiritual harmony of Konark as originally conceived in the 13th century.
            </p>
          </div>
        </section>

        {/* 5. Architectural Anatomy & Documentation Matrix */}
        <section className="bg-white border border-[#C6A15B]/40 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#C6A15B]/30 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-[#C6A15B]">
                Comparative Archaeology
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
                ARCHITECTURAL ANATOMY &amp; EVIDENCE MATRIX
              </h3>
            </div>
            <Layers className="w-6 h-6 text-[#C6A15B]" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#C6A15B]/30">
              <thead className="bg-[#F3EBDD] font-cinzel font-bold text-[#1C1F21] uppercase tracking-wider border-b border-[#C6A15B]/30">
                <tr>
                  <th className="p-3 border-r border-[#C6A15B]/20">Complex Section</th>
                  <th className="p-3 border-r border-[#C6A15B]/20">In-Situ Present Condition (Before)</th>
                  <th className="p-3 border-r border-[#C6A15B]/20">Past Architectural Visualization (After)</th>
                  <th className="p-3">Archaeological Evidence &amp; Sources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C6A15B]/20 font-sans text-[#1C1F21]/90">
                <tr className="hover:bg-[#F3EBDD]/50">
                  <td className="p-3 font-semibold text-[#1C1F21] border-r border-[#C6A15B]/20">
                    Rear Vimana Shikhara (Sanctum Tower)
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#858078]">
                    Completely collapsed in 16th–17th centuries; only the ruined plinth and sand-filled basement remain.
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#1C1F21] font-medium">
                    Colossal 229-foot (70m) Rekha Deula curvilinear shikhara soaring above the Jagamohana, with fluted rathas, projecting rampant Gajasimha lion, and crowning amalaka &amp; golden kalasa.
                  </td>
                  <td className="p-3 text-[#9D7B54]">
                    Percy Brown (1942, Plate CVII); Alice Boner palm-leaf manuscripts; Lingaraja Temple (Bhubaneswar) prototype; ASI foundation measurements.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3EBDD]/50">
                  <td className="p-3 font-semibold text-[#1C1F21] border-r border-[#C6A15B]/20">
                    Central Jagamohana (Assembly Hall)
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#858078]">
                    Standing 128-foot structure; interior filled with sand; exterior walls covered with modern steel scaffolding; missing crowning kalasa.
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#1C1F21] font-medium">
                    All modern scaffolding removed; three intact potala tiers; alasakanya female musician terraces; fully restored mastaka with fluted ghanta, amalaka, and kalasa.
                  </td>
                  <td className="p-3 text-[#9D7B54]">
                    Extant in-situ structure; Dr. R. Mohapatra (2023); ASI 1906–1910 conservation photography; Silpa Prakasa treatises.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3EBDD]/50">
                  <td className="p-3 font-semibold text-[#1C1F21] border-r border-[#C6A15B]/20">
                    Front Natamandira (Dance Pavilion)
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#858078]">
                    Roofless hypostyle hall plinth with surviving carved pillar stumps, friezes of dancers, and eastern Gajasimha guardian monoliths.
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#1C1F21] font-medium">
                    Complete hypostyle pavilion with carved chlorite and khondalite pillars, bracket dancer figures, and a stepped pyramidal Pidha roof with crowning amalaka and kalasa.
                  </td>
                  <td className="p-3 text-[#9D7B54]">
                    Percy Brown conjectural reconstruction; ASI clearance excavations (1906–1909); Jagannath Puri Natamandira structural parallels.
                  </td>
                </tr>
                <tr className="hover:bg-[#F3EBDD]/50">
                  <td className="p-3 font-semibold text-[#1C1F21] border-r border-[#C6A15B]/20">
                    Sacred Axial Approach &amp; Gardens
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#1C1F21]">
                    Present-day archaeological park with lawns, red hibiscus hedges, stone pathways, and modern visitors.
                  </td>
                  <td className="p-3 border-r border-[#C6A15B]/20 text-[#1C1F21] font-medium">
                    Maintained with exact camera perspective, foreground foliage, and visitor scale, demonstrating the monumental harmony of the entire sacred complex.
                  </td>
                  <td className="p-3 text-[#9D7B54]">
                    Present-day photographic documentation; ASI Master Plan 1998–2022.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Curatorial Bibliography & Archival References */}
        <section className="bg-[#F3EBDD] border border-[#C6A15B]/30 rounded-xs p-6 text-xs space-y-3">
          <div className="flex items-center gap-2 text-[#9D7B54] font-cinzel font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#C6A15B]" />
            <span>Documentary References &amp; Primary Sources</span>
          </div>
          <ul className="space-y-1.5 text-[#1C1F21]/80 list-disc list-inside">
            <li>
              <strong>Percy Brown (1942):</strong> <em>Indian Architecture (Buddhist and Hindu Periods)</em>, Plate CVII: &ldquo;Conjectural Reconstruction of the Sun Temple at Konarak (13th Century)&rdquo;, Taraporevala Sons &amp; Co., Bombay.
            </li>
            <li>
              <strong>Dr. Ratnakar Mohapatra (2023):</strong> <em>Study on Art and Architectural Pattern of the Sun Temple of Konark in Eastern India</em>, Journal of Heritage Studies.
            </li>
            <li>
              <strong>Alice Boner, S. R. Sharma &amp; R. P. Das (1972):</strong> <em>New Light on the Sun Temple of Konarka: Unpublished Four Palm-leaf Manuscripts Relating to the Construction of the Temple</em>, Chaukhamba Sanskrit Sansthan.
            </li>
            <li>
              <strong>Archaeological Survey of India (ASI):</strong> <em>Konarak</em> (World Heritage Series), Directorate General of Archaeology, New Delhi.
            </li>
            <li>
              <strong>James Fergusson (1876):</strong> <em>History of Indian and Eastern Architecture</em>, Volume II, London.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
