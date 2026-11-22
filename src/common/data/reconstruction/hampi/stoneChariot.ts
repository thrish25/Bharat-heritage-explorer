/**
 * Hampi Stone Chariot — Master Historical Data Repository
 * Royal Indian Heritage Platform
 *
 * Comprehensive structured dataset converting audited Phase 1.1 / 2.1 research
 * into application-ready architectural components, classifications,
 * and preservation guidelines.
 *
 * SCOPE AUDIT (PHASE 2.1):
 * The missing brick-and-mortar vimana (COMP-06) is the SOLE active reconstruction target.
 * All surviving granite structures, entrance steps, balustrades, wheels, axles,
 * plinth, and present-day elements remain 100% unaltered.
 */

import type {
  MonumentIdentity,
  HistoricalPeriod,
  ArchitecturalComponent
} from '../types.ts';

export const HAMPI_STONE_CHARIOT_IDENTITY: MonumentIdentity = {
  id: 'hampi-stone-chariot',
  name: {
    en: 'Stone Chariot (Garuda Shrine)',
    kn: 'ಕಲ್ಲಿನ ರಥ (ಗರುಡ ಮಂದಿರ)',
    hi: 'प्रस्तर रथ (गरुड़ मंदिर)'
  },
  complex: 'Vijaya Vittala Temple Complex, Sacred Centre',
  location: {
    district: 'Vijayanagara District',
    state: 'Karnataka',
    country: 'India'
  },
  architecturalStyle: 'Imperial Vijayanagara Dravidian Composite Architecture',
  typology: 'Ratha-vimana / Garuda-mandapa (Axial Subsidiary Processional Shrine)',
  religiousDedication: 'Garuda (Divine eagle-mount of Lord Vishnu / Vitthala)',
  unescoReference: 'UNESCO World Heritage Site Ref. 241 (Inscribed 1986)',
  conservationAuthority: 'Archaeological Survey of India (ASI), Hampi Circle',
  epigraphicalAttribution: 'Attributed to the reign of Emperor Krishnadevaraya (1509–1529 CE), Tuluva Dynasty'
};

export const HAMPI_STONE_CHARIOT_PERIOD: HistoricalPeriod = {
  era: 'Vijayanagara Imperial Golden Age',
  dynasty: 'Tuluva Dynasty',
  rulingMonarch: 'Emperor Krishnadevaraya',
  approximateCentury: '16th Century CE (c. 1510–1529 CE)',
  evidenceClassification: 'PROBABLE',
  chronologyNotes: 'General 16th-century era is verified by epigraphical and architectural typology. Inscriptions at Vitthala record endowments in 1513 and 1516 CE; the exact foundation year of the chariot shrine is unrecorded.'
};

export const HAMPI_STONE_CHARIOT_COMPONENTS: ArchitecturalComponent[] = [
  // =========================================================================
  // GROUP A: SURVIVING GRANITE STRUCTURE (AUTHENTIC EXISTING FABRIC)
  // =========================================================================
  {
    componentId: 'COMP-01-PLINTH',
    componentName: 'Molded Granite Plinth and Sub-base',
    traditionalDravidianTerm: 'Upapitha and Adhisthana',
    category: 'SURVIVING_GRANITE',
    material: 'Dressed gray chloritic granite ashlar blocks',
    constructionTechnique: 'Horizontal courses of precision-cut interlocking stone masonry with concealed mortise joints',
    architecturalDescription: 'Rectangular molded stone socle featuring stylized lotus petal moldings (padma), beaded astragals, and continuous processional narrative relief friezes.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-ASI-01', 'SRC-ACAD-05', 'SRC-PHOTO-06'],
    historicalConfidence: 'High — 100% authentic surviving 16th-century stone fabric preserved in-situ.',
    sixteenthCenturyCondition: 'Carved multi-tiered platform with continuous friezes of battle elephants, galloping cavalry with foreign grooms, mythical vyalas, and lotus petals, coated in lime wash with painted accents.',
    eighteenFiftySixCondition: 'Completely preserved in-situ; courtyard ground level slightly higher due to accumulated soil (Greenlaw 1856, Neill 1856).',
    presentDayCondition: 'Fully preserved, cleaned, and stabilized in-situ by ASI with protective cordoned apron.',
    reconstructionInstructions: 'Must remain 100% unaltered. Authentic surviving fabric must not be replaced, modified, or recolored.',
    prohibitedModifications: [
      'Do not modify existing stone plinth geometry.',
      'Do not alter or smooth granite surface carvings.',
      'Do not change plinth height or ground-contact level.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-02-WHEELS-AXLES',
    componentName: 'Four Monolithic Lotus Wheels and Stone Axles',
    traditionalDravidianTerm: 'Ratha Cakra and Aksha',
    category: 'SURVIVING_GRANITE',
    material: 'Carved high-density chloritic granite',
    constructionTechnique: 'Four circular stone discs mounted on cylindrical stone shafts passing through the chassis undercarriage; central hubs carved with radiating lotus petal bosses',
    architecturalDescription: 'Four freestanding stone wheels carved with concentric radiating lotus petal spokes and beaded rims, mounted on cylindrical granite axles fitted through chassis sleeves.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-ASI-01', 'SRC-ASI-PUB-03', 'SRC-PHOTO-07'],
    historicalConfidence: 'High — Authentic 16th-century lapidary engineering preserved in-situ.',
    sixteenthCenturyCondition: 'Engineered with independent stone axles passing through chassis sleeves with intentional lapidary clearance, representing processional temple ratha wheels. Carved with radiating lotus petals and concentric beaded bands.',
    eighteenFiftySixCondition: 'Completely preserved in-situ in authentic positions (Greenlaw 1856, Neill 1856).',
    presentDayCondition: 'Fully preserved. Axles were mortared/cemented in the 20th century by ASI to halt tourist rotation and protect granite pins from frictional wear.',
    reconstructionInstructions: 'Must remain 100% unaltered. Wheel geometry and surface carvings are authentic 16th-century originals.',
    prohibitedModifications: [
      'Do not animate or rotate wheels.',
      'Do not alter wheel positions or radial petal carvings.',
      'Do not remove stone axles or hubcaps.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-03-SANCTUM-CELLA',
    componentName: 'Main Granite Shrine Body and Inner Cella',
    traditionalDravidianTerm: 'Garbhagriha / Garuda-pitha',
    category: 'SURVIVING_GRANITE',
    material: 'Dressed granite wall panels and corner pilasters',
    constructionTechnique: 'Modular dressed granite wall slabs joined with concealed interlocking dry joints; west-facing axial portal aligned with Lord Vitthalas sanctum',
    architecturalDescription: 'Square granite shrine chamber elevated above the plinth, enclosed by recessed wall panels and crowned with horizontal beam trabeation.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-ASI-01', 'SRC-ASI-PUB-03', 'SRC-ACAD-05'],
    historicalConfidence: 'High for structure; cult idol lost.',
    sixteenthCenturyCondition: 'Consecrated shrine chamber housing an idol of Garuda facing Lord Vitthala along an unbroken east-west visual axis.',
    eighteenFiftySixCondition: 'Enclosed granite cella intact; interior empty, idol already lost following 1565 destruction.',
    presentDayCondition: 'Intact granite walls and pilasters. Empty interior cella protected by ASI cordons.',
    reconstructionInstructions: 'Cella exterior walls must remain unaltered. Interior must remain shadowed or depicted with an empty pedestal.',
    prohibitedModifications: [
      'Do not fabricate an invented deity sculpture inside the cella.',
      'Do not modify cella doorway dimensions or wall positions.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-04-PILLARS-BRACKETS',
    componentName: 'Corner Pilasters and Pushpapotika Brackets',
    traditionalDravidianTerm: 'Kanta-stambha and Pushpapotika-bodigai',
    category: 'SURVIVING_GRANITE',
    material: 'Carved monolithic granite',
    constructionTechnique: 'Corner pilasters with multi-faceted shafts, bell capitals, and double-curved corbel brackets terminating in downward lotus buds',
    architecturalDescription: 'Slender monolithic granite wall pilasters carved with classic Vijayanagara Dravidian pushpapotika brackets supporting the overhanging stone roof cornice.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-ACAD-05', 'SRC-ASI-01', 'SRC-ASI-BK-04'],
    historicalConfidence: 'High — Preserved in-situ in exceptional archaeological condition.',
    sixteenthCenturyCondition: 'Finely chiseled Dravidian bracket capitals supporting the stone roof cornice.',
    eighteenFiftySixCondition: 'Intact in-situ.',
    presentDayCondition: 'Fully preserved in-situ in exceptional condition.',
    reconstructionInstructions: 'Must remain 100% unaltered. Authentic Vijayanagara masonry.',
    prohibitedModifications: [
      'Do not alter pilaster profiles or bracket shapes.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-05-ROOF-CORNICE',
    componentName: 'Horizontal Overhanging Cornice and Roof Terrace',
    traditionalDravidianTerm: 'Kapota and Prastara',
    category: 'SURVIVING_GRANITE',
    material: 'Dressed granite roof slabs with flexured drip-edge',
    constructionTechnique: 'Cantilevered granite eaves with carved simulated rafters on underside; upper surface features masonry sockets where brick superstructure was seated',
    architecturalDescription: 'Gracefully flexured granite kapota drip-eave carved with underside simulated timber rafters and horseshoe arch motifs (kudus); flat upper roof terrace provides foundation for the superstructure.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-PHOTO-06', 'SRC-PHOTO-07', 'SRC-ACAD-05'],
    historicalConfidence: 'High — In-situ surviving granite element.',
    sixteenthCenturyCondition: 'Cantilevered stone cornice supporting the masonry bed of the brick-and-stucco Dravidian vimana superstructure.',
    eighteenFiftySixCondition: 'Supporting the intact brick-and-mortar superstructure (Greenlaw 1856, Neill 1856).',
    presentDayCondition: 'Flat bare stone terrace exposed to the sky; socket scars and masonry bedding lines remain visible on top.',
    reconstructionInstructions: 'The granite cornice must remain unchanged; the flat upper terrace is the exact geometric foundation plane for digital vimana reconstruction.',
    prohibitedModifications: [
      'Do not alter the granite kapota cornice or its underside rafter carvings.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-09-DECORATIVE-FRIEZES',
    componentName: 'Bas-Relief Friezes of Warriors, Arab Horses, and Vyalas',
    traditionalDravidianTerm: 'Pitha-bandha and Pattika bas-reliefs',
    category: 'SURVIVING_GRANITE',
    material: 'Carved granite panels',
    constructionTechnique: 'Low-relief bas-relief carvings integrated directly into the granite plinth courses',
    architecturalDescription: 'Continuous narrative sculptural friezes carved into the adhisthana depicting marching battle elephants, Arabian cavalry horses led by foreign grooms, and mythical leogryphs (vyalas).',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-ASI-01', 'SRC-ACAD-05', 'SRC-ASI-BK-04'],
    historicalConfidence: 'High — Authentic 16th-century narrative carving preserved in-situ.',
    sixteenthCenturyCondition: 'Processional friezes reflecting Vijayanagara cosmopolitan life: soldiers, imported Arabian horses led by foreign grooms, and mythical vyalas.',
    eighteenFiftySixCondition: 'Preserved in-situ with natural patina.',
    presentDayCondition: 'Fully preserved in-situ in sharp relief.',
    reconstructionInstructions: 'Must remain 100% unaltered. Preserved original Vijayanagara craftsmanship.',
    prohibitedModifications: [
      'Do not alter, replace, or resculpt narrative friezes.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },

  // =========================================================================
  // GROUP B: MISSING SUPERSTRUCTURE (SOLE ACTIVE RECONSTRUCTION TARGET)
  // =========================================================================
  {
    componentId: 'COMP-06-BRICK-VIMANA',
    componentName: 'Lost Multi-Tiered Brick and Stucco Dravidian Superstructure',
    traditionalDravidianTerm: 'Vimana / Shikhara / Stupika',
    category: 'MISSING_SUPERSTRUCTURE',
    material: 'High-fired clay brick masonry in lime mortar (chunam) surfaced with molded lime plaster (sudha)',
    constructionTechnique: 'Stepped pyramidal Dravidian storeys (talas) detailed with miniature pavilions (kutas, shalas) crowned by a domical shikhara and terminal apex',
    architecturalDescription: 'Stepped pyramidal Dravidian tower crowning the flat stone roof, rising with proportional visual height approximately equal to the granite body (~1:1 visual ratio), composed of 2 to 3 receding storeys (talas) and crowned with a domical shikhara and terminal apex.',
    evidenceClassification: 'PROBABLE',
    supportingSourceIds: ['SRC-PHOTO-06', 'SRC-PHOTO-07', 'SRC-ASI-BK-04', 'SRC-ASI-PUB-03', 'SRC-ACAD-05'],
    historicalConfidence: 'VERIFIED for existence, brick-and-mortar material, stepped silhouette, and domical crowning cupola (Greenlaw 1856, Neill 1856, Longhurst 1917). PROBABLE for 2–3 tala count, miniature kuta/shala articulation, and ~1:1 visual proportional ratio. UNCERTAIN for micro-stucco niche reliefs and intact stupi condition.',
    sixteenthCenturyCondition: 'Composite Dravidian vimana tower of sculpted brick and plaster rising above the dark granite socle, coated in lime wash with architectural moldings.',
    eighteenFiftySixCondition: 'DOCUMENTED AS STANDING AND INTACT in both Colonel Greenlaws 1856 calotype (V&A/Alkazi) and Dr. Neills 1856 albumen print (RCIN 2603956). Exhibited weathered plaster and minor shrub growth.',
    presentDayCondition: 'COMPLETELY MISSING. Lost or removed between 1856 and 1917 (absent in Longhurst 1917).',
    reconstructionInstructions: 'SOLE ACTIVE RECONSTRUCTION TARGET. Reconstruct the missing superstructure resting on the flat granite roof terrace above the kapota cornice. Conforming strictly to the outer stepped silhouette and ~1:1 visual proportional envelope documented in 1856 photography. Miniature pavilion articulation (kutas and shalas) must reflect contemporary 16th-century Vijayanagara Dravidian brick shrines without inventing unsupported deity sculptures in niches.',
    prohibitedModifications: [
      'Do not invent exaggerated heights beyond the ~1:1 visual ratio.',
      'Do not invent specific deity sculptures in niches.',
      'Do not add modern or fantasy spires.',
      'Do not alter any part of the surviving granite shrine body, cornice, plinth, wheels, or entrance.'
    ],
    isPreservedFabric: false,
    isTargetForReconstruction: true
  },

  // =========================================================================
  // GROUP C: GROUND ELEMENTS & UNCERTAIN COMPONENTS (NOT IN ACTIVE TARGET)
  // =========================================================================
  {
    componentId: 'COMP-08-GUARDIAN-ELEPHANTS',
    componentName: 'Front Guardian Stone Elephants (Present-Day In-Situ Fabric)',
    traditionalDravidianTerm: 'Gaja-dwarapala (Secondary placement)',
    category: 'SURVIVING_GRANITE',
    material: 'Carved granite',
    constructionTechnique: 'Freestanding monolithic elephant carvings placed abutting entrance balustrades',
    architecturalDescription: 'Two caparisoned stone elephants standing at the foot of the entrance balustrades. Historically proven to be secondary additions placed here between 1857 and 1916.',
    evidenceClassification: 'VERIFIED',
    supportingSourceIds: ['SRC-PHOTO-06', 'SRC-PHOTO-07', 'SRC-ASI-PUB-03', 'SRC-ACAD-08'],
    historicalConfidence: 'High — Absence in 1856 and presence in 1917 are verified by photographs and survey.',
    sixteenthCenturyCondition: 'NOT PRESENT on the Stone Chariot in the 16th century.',
    eighteenFiftySixCondition: 'DEFINITIVELY ABSENT. Proven by Colonel Greenlaws 1856 calotype and Dr. Neills 1856 photograph (RCIN 2603956), showing completely clear ground.',
    presentDayCondition: 'Two caparisoned stone elephants stand in front of the staircase.',
    reconstructionInstructions: 'DO NOT ALTER OR RELOCATE. Strictly excluded from the first reconstruction target. The first reconstruction focuses exclusively on restoring the missing upper brick vimana above the flat stone roof; all ground-level elements, including the entrance steps and guardian elephants, remain as documented in present-day in-situ ground truth.',
    prohibitedModifications: [
      'Do not alter or relocate the guardian elephants in the first reconstruction target.',
      'Do not assert unverified folklore claims regarding origin from the Elephant Stables.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-07-DRAFT-HORSES',
    componentName: 'Original Carved Draft Animals on Balustrades (Horses)',
    traditionalDravidianTerm: 'Ashva-sopana / Ratha-turaga',
    category: 'SURVIVING_GRANITE',
    material: 'Carved granite',
    constructionTechnique: 'Relief carvings integrated directly into the granite entrance balustrades',
    architecturalDescription: 'Carved reliefs of draft animal hindquarters (hind legs, hocks, tails) surviving on the entrance balustrade walls behind the modern elephants. Forequarters broke away centuries ago.',
    evidenceClassification: 'PROBABLE',
    supportingSourceIds: ['SRC-ASI-PUB-03', 'SRC-ASI-01', 'SRC-ASI-BK-04'],
    historicalConfidence: 'Verified for surviving in-situ hindquarters; probable for horse typology; uncertain for complete forequarters.',
    sixteenthCenturyCondition: 'Two draft animals sculpted pulling the celestial chariot of Garuda toward the main temple.',
    eighteenFiftySixCondition: 'Already broken prior to 1856. Greenlaw 1856 and Neill 1856 show damaged balustrades without protruding animal heads. No elephants were present.',
    presentDayCondition: 'Partially obscured behind modern elephant sculptures. Reliefs of hind legs, hocks, and tails survive in-situ on the balustrades.',
    reconstructionInstructions: 'DO NOT RECONSTRUCT. Strictly excluded from the first reconstruction target. The surviving granite balustrades and in-situ hind leg reliefs remain completely untouched. No missing horse forequarters or free-standing horses are to be reconstructed.',
    prohibitedModifications: [
      'Do not attempt to reconstruct missing draft horse forequarters in the active target.',
      'Do not alter or redesign the granite entrance balustrades.'
    ],
    isPreservedFabric: true,
    isTargetForReconstruction: false
  },
  {
    componentId: 'COMP-10-POLYCHROME-SURFACE',
    componentName: 'Original Painted Plaster and Surface Coating',
    traditionalDravidianTerm: 'Sudha-lepana and Chitra-varna',
    category: 'UNCERTAIN_DETAIL',
    material: 'Slaked shell-lime plaster (chunam) and mineral pigments',
    constructionTechnique: 'Thin burnished lime wash applied over stone and brickwork with mineral pigment accents',
    architecturalDescription: 'Historical surface finish comprising burnished lime plaster with natural mineral pigments. Microscopic traces survive in crevices, but no complete color map exists.',
    evidenceClassification: 'UNCERTAIN',
    supportingSourceIds: ['SRC-ASI-01', 'SRC-ASI-BK-04'],
    historicalConfidence: 'Verified for existence of ancient plaster and pigment traces; uncertain for full-body color mapping.',
    sixteenthCenturyCondition: 'Coated in fine lime plaster with painted pigment accents.',
    eighteenFiftySixCondition: 'Outer plaster coat weathered away; faded pigment in sheltered recesses.',
    presentDayCondition: 'Trace microscopic pigment flecks in deep undercuts beneath chassis.',
    reconstructionInstructions: 'Maintain natural granite and aged lime-wash textures for visual reconstruction. Do not apply speculative synthetic modern CGI colors.',
    prohibitedModifications: [
      'Do not apply saturated, multi-colored modern CGI paint schemes across the monument.'
    ],
    isPreservedFabric: false,
    isTargetForReconstruction: false
  }
];
