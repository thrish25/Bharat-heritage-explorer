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
  Scroll,
  Columns,
  Maximize2,
} from 'lucide-react';
import { ImageComparisonSlider } from './ImageComparisonSlider';

interface KailasaReconstructionViewProps {
  onBackToTour: () => void;
  onOpenHeritageStory?: () => void;
}

export const KailasaReconstructionView: React.FC<KailasaReconstructionViewProps> = ({
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
                <span className="text-[#1C1F21] font-semibold">Cave 16 (Kailasa Temple)</span>
              </div>
              <h1 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#1C1F21] tracking-wide">
                Kailasa Monolithic Temple — Ellora Caves (Cave 16)
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
            <span>Ellora Caves Archaeological Reconstruction Archive</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1F21] leading-tight">
            KAILASA TEMPLE (CAVE 16, ELLORA)
          </h2>

          <p className="font-playfair text-base sm:text-xl text-[#9D7B54] italic max-w-2xl mx-auto leading-relaxed">
            Historical architectural reconstruction and archaeological documentation of the world&apos;s largest top-down monolithic rock-cut temple, commissioned by Rashtrakuta Emperor Krishna I.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-sans text-[#1C1F21]/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              Cave 16, Ellora Caves, Chhatrapati Sambhaji Nagar, Maharashtra
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              Commissioned c. 756–774 CE (Rashtrakuta Dynasty, King Krishna I)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              UNESCO World Heritage Site (Ellora Caves, 1983, Ref #243)
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
                Drag the vertical divider horizontally or use Left / Right arrow keys to compare present-day weathered basalt stone with the historically reconstructed 8th-century temple complex.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#9D7B54]">
              <Compass className="w-4 h-4 text-[#C6A15B]" />
              <span>Camera: High-Angle Cliffside Vista (West Courtyard Axis)</span>
            </div>
          </div>

          {/* Draggable Comparison Component */}
          <ImageComparisonSlider
            beforeImage="/assets/monuments/ellora/reconstruction/kailasa-before.png"
            beforeLabel="PRESENT DAY (EXPOSED BASALT)"
            afterImage="/assets/monuments/ellora/reconstruction/kailasa-after.png"
            afterLabel="PAST ARCHITECTURAL VISUALIZATION"
            initialPosition={50}
          />

          {/* Mandatory Historical Accuracy & Architectural Interpretation Disclosure */}
          <div className="p-4 bg-[#1C1F21]/5 border-l-4 border-[#C6A15B] rounded-r-xs space-y-1">
            <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#1C1F21] uppercase tracking-wider">
              <Info className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>Mandatory Historical Accuracy &amp; Architectural Interpretation Disclosure</span>
            </div>
            <p className="font-sans text-xs text-[#5C4532] leading-relaxed italic">
              &quot;AI-generated historical architectural interpretation based on historical documentation, architectural studies and available archaeological evidence. Some reconstructed details remain interpretative and are not claimed as verified historical facts.&quot;
            </p>
          </div>
        </section>

        {/* 4. Complete Historical & Architectural Facts of Kailasa Temple, Ellora Caves */}
        <section className="space-y-8 pt-4">
          <div className="border-b border-[#C6A15B]/30 pb-3">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1F21]">
              Historical &amp; Architectural Facts — Kailasa Temple (Cave 16, Ellora)
            </h3>
            <p className="font-sans text-xs text-[#9D7B54]">
              Comprehensive archaeological and engineering analysis of the rock-cut monument at Ellora Caves, Maharashtra.
            </p>
          </div>

          {/* Grid of Key Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fact 1: Patronage and Epigraphical Record */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Scroll className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  1. Royal Patronage &amp; Epigraphy (Baroda Plates 812 CE)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                Kailasa Temple was commissioned in the mid-8th century CE by <strong>King Krishna I</strong> (reigned c. 756–774 CE) of the <strong>Rashtrakuta Dynasty</strong>, following the consolidation of the empire by his predecessor Dantidurga. Its construction is immortalized in the <strong>Baroda Copper Plates of 812 CE</strong> issued by King Karka II:
                <em className="block my-2 pl-3 border-l-2 border-[#C6A15B] text-[#1C1F21] font-playfair">
                  &quot;When the gods travelling in celestial cars beheld it, they were struck with wonder and said: &apos;This temple of Shiva is self-existent; in an artful work like this, no human skill could have been displayed...&apos; Even the architect who built it was suddenly astonished, saying: &apos;Oh, how was it that I made it?&apos;&quot;
                </em>
              </p>
            </div>

            {/* Fact 2: Monolithic Top-Down Engineering */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  2. Top-Down Quarrying Mastery (200,000+ Tonnes)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                Unlike structural temples built by assembling stones from bottom to top, Kailasa is a <strong>pure monolith excavated entirely from the top downward</strong> out of the living Deccan trap basalt hill of Charanandri. Master stonemasons cut three deep vertical trenches into the sloping rock cliff (over 50m deep, 33m wide, and 30m tall), quarrying an estimated <strong>200,000 to 400,000 tonnes of basalt rock</strong> to isolate an enormous central rock core before sculpting the multi-tiered temple downward without joints, cement, or scaffolding.
              </p>
            </div>

            {/* Fact 3: The Dravidian Vimana Superstructure */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  3. Dravidian Tritala Vimana (32.6 Metres High)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                The main temple follows the classical southern <strong>Dravidian architectural style</strong> (strongly influenced by the Pallava Shore Temple at Mahabalipuram and the Chalukyan Virupaksha Temple at Pattadakal). The towering sanctuary tower (<em>Tritala Vimana</em>) rises 32.6 metres (107 feet) in three diminishing tiers, adorned with miniature pavilion shrines (<em>kutas</em> and <em>shalas</em>), kudu arch motifs, pilasters, and an crowning <strong>octagonal dome (shikhara)</strong> topped by a monolithic stupika finial.
              </p>
            </div>

            {/* Fact 4: Aerial Rock Bridges & Spatial Axis */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  4. The Aerial Rock Sky-Bridges &amp; Courtyard Axis
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                The complex is arranged along a strict east-west axis: a two-storeyed <strong>Gopuram entrance gateway</strong>, a two-storeyed <strong>Nandi Mandapa</strong>, and the 16-pillared <strong>Sabha Mandapa</strong>. Originally, pilgrims and priests walked between the upper storeys of these structures across <strong>monolithic rock sky-bridges</strong> suspended high above the open courtyard. The front bridge connecting the Gopuram to the Nandi pavilion collapsed in the 19th century (leaving structural socket scars), while the rear bridge connecting the Nandi Mandapa to the hall remains intact today.
              </p>
            </div>

            {/* Fact 5: Dhvajastambhas and Monolithic Courtyard Guardians */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Columns className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  5. Colossal Dhvajastambha Victory Pillars (16.5m)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                Flanking the courtyard are two towering freestanding monolithic pillars (<em>Dhvajastambha</em> / <em>Kirti Stambha</em>) rising 16.5 metres (54 feet) high. Sculpted directly out of the living courtyard rock without joints, they feature square bases, sixteen-sided fluted shafts, capital mouldings, and were originally crowned by large trishula (trident) emblems of Shiva. Two life-sized monolithic guardian elephants stand adjacent to them in the courtyard.
              </p>
            </div>

            {/* Fact 6: Elephant Plinth Caryatids (Upapitha) */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  6. Elephant &amp; Lion Plinth Frieze (Upapitha)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                The entire monolithic temple rests on a towering 8-metre-high basement plinth (<em>upapitha</em>) carved with a continuous, monumental frieze of life-sized fighting elephants, roaring lions, and mythical <em>vyala</em> beasts. Each creature is sculpted in high dynamic relief, appearing as living caryatids physically bearing the enormous weight of the temple complex on their massive shoulders.
              </p>
            </div>

            {/* Fact 7: The Historical White Lime Plaster (Chunam) */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  7. Historical White Lime Plaster (Chunam / Vajralepa)
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                Archaeological documentation by the Archaeological Survey of India (ASI) confirms that Kailasa Temple was historically coated in a durable, polished white shell-lime plaster (<em>chunam</em> or <em>vajralepa stucco</em>) with subtle painted details. This plaster protected the porous vesicular basalt from rainwater infiltration and gave the intricate carvings a smooth, luminous finish. Substantial physical fragments of this white plaster still adhere today in sheltered cornices, the Nandi Mandapa ceiling, and upper niches.
              </p>
            </div>

            {/* Fact 8: Perimeter Cloisters & Narrative Relief Panels */}
            <div className="p-6 bg-white border border-[#C6A15B]/30 rounded-xs shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-[#1C1F21]">
                <div className="w-7 h-7 rounded-xs bg-[#1C1F21] text-[#E0C27B] flex items-center justify-center border border-[#C6A15B]/40 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-cinzel text-base font-bold">
                  8. Perimeter Cloistered Galleries &amp; Narrative Epic Reliefs
                </h4>
              </div>
              <p className="font-sans text-xs text-[#5C4532] leading-relaxed">
                The vertical cliff walls enclosing the courtyard pit were excavated into two-storeyed pillared cloisters containing monumental bas-relief narrative cycles. The southern court displays continuous narrative panels of the <strong>Ramayana</strong> across multiple horizontal tiers, while the northern court displays the <strong>Mahabharata</strong>. The western facade of the main plinth houses the masterwork relief of <strong>Ravananugraha</strong>, depicting the multi-armed demon king Ravana attempting to shake the mountain while Shiva calmly presses his toe down to anchor it.
              </p>
            </div>
          </div>

          {/* 5. Documented Architecture vs Archaeological Verification Table */}
          <div className="bg-white border border-[#C6A15B]/30 rounded-xs p-6 shadow-xs space-y-4">
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1F21] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
              Kailasa Temple (Cave 16) — Architectural Feature Matrix
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b border-[#C6A15B]/40 bg-[#F3EBDD] text-[#1C1F21] font-cinzel">
                    <th className="py-2.5 px-3">Architectural Component</th>
                    <th className="py-2.5 px-3">Location &amp; Historical Evidence</th>
                    <th className="py-2.5 px-3">Dimensions &amp; Archaeological Detail</th>
                    <th className="py-2.5 px-3">Reconstruction Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C6A15B]/20 text-[#5C4532]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">Vimana Superstructure</td>
                    <td className="py-2.5 px-3">Main sanctuary tower over sanctum sanctorum (Garbhagriha).</td>
                    <td className="py-2.5 px-3">32.6m (107 ft) high, 3-tiered Dravidian pyramidal tower with octagonal dome.</td>
                    <td className="py-2.5 px-3 text-[#2E7D32] font-semibold">Fully Intact &amp; Conserved</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">Aerial Rock Sky-Bridge</td>
                    <td className="py-2.5 px-3">Suspended rock bridge between Gopuram entrance and Nandi Mandapa.</td>
                    <td className="py-2.5 px-3">Monolithic span over open courtyard; collapsed 19th c. (fracture sockets visible).</td>
                    <td className="py-2.5 px-3 text-[#2E7D32] font-semibold">Reconnected in Reconstruction</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">Dhvajastambha Pillars</td>
                    <td className="py-2.5 px-3">Courtyard north and south of the central axis.</td>
                    <td className="py-2.5 px-3">16.5m (54 ft) freestanding monolithic pillars carved in-situ.</td>
                    <td className="py-2.5 px-3 text-[#2E7D32] font-semibold">Intact &amp; Restored with Finials</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">Elephant Plinth (Upapitha)</td>
                    <td className="py-2.5 px-3">Supporting base around the entire Sabha Mandapa and Vimana.</td>
                    <td className="py-2.5 px-3">Continuous 8m high sculpted frieze of life-sized elephants and lions.</td>
                    <td className="py-2.5 px-3 text-[#2E7D32] font-semibold">Restored Ivory Tusks &amp; Details</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">White Plaster (Chunam)</td>
                    <td className="py-2.5 px-3">Exteriors and interiors of monolithic carved structures.</td>
                    <td className="py-2.5 px-3">Polished shell-lime stucco; documented in Baroda plates; physical patches intact.</td>
                    <td className="py-2.5 px-3 text-[#2E7D32] font-semibold">Depicted in Historical White Plaster</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#1C1F21]">Excavated Pit Cliff Walls</td>
                    <td className="py-2.5 px-3">Perimeter trench surrounding the monolithic temple.</td>
                    <td className="py-2.5 px-3">50m long × 33m wide × 30m vertical quarry cliff with cloistered galleries.</td>
                    <td className="py-2.5 px-3 text-[#C6A15B] font-semibold">Preserved In-Situ Volcanic Basalt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
