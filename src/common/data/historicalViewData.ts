/**
 * Historical View & Architectural Analysis Archive
 * Royal Indian Heritage Platform
 *
 * Academically rigorous, image-grounded architectural explanations
 * across Hampi, Taj Mahal, Ellora Caves, and Konark Sun Temple.
 */

export interface ArchitecturalElement {
  name: string;
  sanskritOrPersianName?: string;
  originalFunction: string;
  characteristics: string;
  representationInImage: string;
  evidence: string;
  category: 'DOCUMENTED FACT' | 'ARCHITECTURAL INTERPRETATION' | 'VISUAL REPRESENTATION';
}

export interface HistoricalReference {
  institution: string;
  title: string;
  url: string;
  supports: string;
}

export interface HistoricalViewContent {
  monumentId: string;
  subTarget?: string;
  title: string;
  subTitle: string;
  location: string;
  period: string;
  unescoRef: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  cameraAngle: string;
  glimpseIntoHistory: string;
  architecturalElements: ArchitecturalElement[];
  references: HistoricalReference[];
  disclosure: string;
}

export const HISTORICAL_VIEW_DATABASE: Record<string, HistoricalViewContent> = {
  // 1. TAJ MAHAL
  tajmahal: {
    monumentId: 'tajmahal',
    title: 'Taj Mahal (Rauza-i Munawwara)',
    subTitle: 'Mughal Imperial Mausoleum & Riverfront Charbagh Paradise Garden',
    location: 'Agra, Uttar Pradesh, India',
    period: 'Constructed 1631–1648 CE (Emperor Shah Jahan, Mughal Dynasty)',
    unescoRef: 'UNESCO World Heritage Site (1983, Ref #252)',
    beforeImage: '/assets/monuments/taj-mahal/reconstruction/taj-mahal-before.jpg',
    afterImage: '/assets/monuments/taj-mahal/reconstruction/taj-mahal-after.jpg',
    beforeLabel: 'PRESENT DAY (MODERN GARDENS)',
    afterLabel: 'PAST HISTORICAL VIEW (c. 1890s)',
    cameraAngle: 'Axial Vista • Great Gate (Darwaza-i Rauza) to Tomb Terrace',
    glimpseIntoHistory:
      'Commissioned in 1631 CE by the fifth Mughal Emperor Shah Jahan for his consort Mumtaz Mahal and completed in 1648 CE, the Taj Mahal stands on the southern bank of the Yamuna River. This comparison contrasts the modern manicured tourist grounds with a rare late-19th-century Detroit Publishing Company photochrome print (c. 1890s) captured from the upper terrace of the Great Gate (Darwaza-i Rauza). It reveals the historical, densely wooded Charbagh paradise garden with fruit orchards and cypress trees prior to Lord Curzon\'s 1908 British lawn remodeling.',
    architecturalElements: [
      {
        name: 'Historical Overgrown Mughal Charbagh & Cypress Canopy',
        sanskritOrPersianName: 'Charbagh / Sarv (Cypress Canopy)',
        originalFunction: 'Four-fold Islamic paradise garden evoking the lush, fruit-bearing orchards and shaded avenues of Quranic Jannat.',
        characteristics: 'Quadrants originally planted with sweet-scented flowering shrubs, citrus, pomegranate trees, and tall Italian cypresses symbolizing eternity.',
        representationInImage: 'The historical 1890s view displays dense, mature tree canopies completely filling the parterres, in dramatic contrast to the sparse modern open lawns introduced under Viceroy Lord Curzon in 1908.',
        evidence: 'Historical photochrome archives (Library of Congress / Detroit Publishing Co., c. 1895-1900, LC-DIG-ppmsca-08655); Ebba Koch, The Complete Taj Mahal (2006).',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Central Reflecting Canal & Al-Hawd al-Kawthar',
        sanskritOrPersianName: 'Nahr-i Bihisht / Al-Hawd al-Kawthar',
        originalFunction: 'Axial water channel representing the celestial river of abundance, with five fountains and a central raised marble reservoir.',
        characteristics: 'Linear red sandstone watercourses equipped with 24 copper fountain jets running north-south from the Great Gate to the mausoleum terrace.',
        representationInImage: 'Clearly visible running straight along the central axis, mirroring the pristine dome and minarets in both present and historical views.',
        evidence: 'Court chronicle Padshahnama by Abdul Hamid Lahori; Begley & Desai (1989); ASI conservation reports.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Elevated Vantage Point from Great Gate (Darwaza-i Rauza)',
        sanskritOrPersianName: 'Darwaza-i Rauza',
        originalFunction: 'Monumental ceremonial gateway transition separating the worldly caravanserais (Jilaukhana) from the sacred funerary garden.',
        characteristics: 'Octagonal domed corner towers and monumental red sandstone pishtaq framing the perfect axial view of the marble tomb.',
        representationInImage: 'The historical view was photographed from the high roof terrace of the Great Gate, giving an elevated panoramic overview of the entire garden grid and floodplains behind.',
        evidence: 'Detroit Publishing Co. collection, Library of Congress (Ref #10029); ASI historical photography archives.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Pure White Makrana Marble Mausoleum (Rauza-i Munawwara)',
        sanskritOrPersianName: 'Rauza-i Munawwara / Hasht Bihisht',
        originalFunction: 'Principal imperial tomb chamber housing the sacred cenotaphs of Mumtaz Mahal and Emperor Shah Jahan.',
        characteristics: 'Flawless bilateral symmetry, chamfered octagonal plan (hasht bihisht / eight paradises), and central soaring pishtaq portals with marble stalactite vaulting (muqarnas).',
        representationInImage: 'Preserved in authentic architectural form in both periods, showing the luminous Makrana marble dome against the northern Yamuna horizon.',
        evidence: 'Court chronicle Padshahnama by Abdul Hamid Lahori; Geological surveys confirm high-purity calcite marble quarried from Makrana, Rajasthan.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Four Outward-Canted Freestanding Minarets',
        sanskritOrPersianName: 'Manar',
        originalFunction: 'Aesthetic framing of the mausoleum and structural equilibrium across the marble plinth.',
        characteristics: '40-meter-high, three-tiered cylindrical minarets crowned with open chhatri pavilions, engineered with a deliberate 2-to-3-degree outward cant (lean) to protect the tomb from collapse during earthquakes.',
        representationInImage: 'Symmetrically framing the corners of the square marble plinth without distortion in both historic and contemporary photographs.',
        evidence: 'Archaeological Survey of India (ASI) structural monitoring reports and trigonometric alignment surveys.',
        category: 'DOCUMENTED FACT'
      }
    ],
    references: [
      {
        institution: 'Library of Congress Prints & Photographs Division',
        title: 'Agra. Taj-Mahal (c. 1890–1900 Detroit Publishing Co. Photochrome Print)',
        url: 'https://www.loc.gov/pictures/item/2004666358/',
        supports: 'Authentic 1890s elevated photochrome documenting pre-Curzon garden canopy from the Great Gate.'
      },
      {
        institution: 'UNESCO World Heritage Centre',
        title: 'Taj Mahal (Official World Heritage Listing No. 252)',
        url: 'https://whc.unesco.org/en/list/252/',
        supports: 'Statement of Outstanding Universal Value, Mughal architectural chronology, and conservation parameters.'
      },
      {
        institution: 'Archaeological Survey of India (ASI)',
        title: 'Taj Mahal, Agra — Official Architectural Monograph & History',
        url: 'https://asi.nic.in/',
        supports: 'Structural measurements, garden evolution records, minaret cant data, and Makrana marble composition.'
      },
      {
        institution: 'Harvard University / Aga Khan Program for Islamic Architecture',
        title: 'Taj Mahal: The Illumined Tomb (W.E. Begley & Z.A. Desai, 1989)',
        url: 'https://www.jstor.org/stable/2520338',
        supports: 'Primary seventeenth-century court translations from Abdul Hamid Lahori\'s Padshahnama and garden hydraulics.'
      }
    ],
    disclosure:
      'Direct historical photo comparison between present-day photography and an authentic c. 1890s Detroit Publishing Co. photochrome print (Library of Congress) taken from the Great Gate before Lord Curzon\'s 1908 garden remodeling. Both images capture authentic historical states of the monument.'
  },

  // 2. HAMPI — STONE CHARIOT
  hampi: {
    monumentId: 'hampi',
    title: 'Hampi Stone Chariot (Garuda Shrine)',
    subTitle: 'Vijayanagara Imperial Dravidian Shrine & Missing Brick Vimana',
    location: 'Vijaya Vittala Temple Complex, Hampi, Bellary District, Karnataka',
    period: 'Constructed c. 1509–1529 CE (Emperor Krishnadevaraya, Vijayanagara Empire)',
    unescoRef: 'UNESCO World Heritage Site (1986, Ref #241)',
    beforeImage: '/assets/monuments/hampi/reconstruction/stone-chariot-before.png',
    afterImage: '/assets/monuments/hampi/reconstruction/stone-chariot-after.png',
    beforeLabel: 'PRESENT DAY (IN-SITU FABRIC)',
    afterLabel: 'PAST ARCHITECTURAL VISUALIZATION',
    cameraAngle: 'West Facing Elevation • Axial Approach from Vittala Mantapa',
    glimpseIntoHistory:
      'Erected in the early sixteenth century during the glorious reign of Emperor Krishnadevaraya of the Vijayanagara Empire, the Hampi Stone Chariot is historically an independent shrine dedicated to Garuda, the divine vahana of Lord Vishnu. Positioned on the east-west axial processional alignment of the magnificent Vijaya Vittala sanctuary, it represents a sacred processional vehicle carved from modular granite blocks. Following the sack of Vijayanagara in 1565 CE, the complex was abandoned. While the granite chariot withstood centuries, its crowning multi-tiered brick-and-mortar tower survived until the late nineteenth century before being lost.',
    architecturalElements: [
      {
        name: 'Lost Dravidian Vimana Superstructure',
        sanskritOrPersianName: 'Tritala Brick Vimana / Shikhara',
        originalFunction: 'Sacred sanctum tower crowning the Garuda shrine chamber and symbolizing the spiritual axis mundi.',
        characteristics: 'Stepped pyramidal superstructure built of kiln-fired clay bricks and hydraulic lime plaster, featuring miniature corner shrines (kutas), barrel-vaulted pavilions (shalas), and a crowning domical finial.',
        representationInImage: 'Reconstructed resting upon the flat granite roof slab based strictly on 19th-century calotype photographs, restoring its ~1:1 volumetric proportion with the stone base.',
        evidence: 'Alexander Greenlaw\'s 1856 calotype (Alkazi Collection) and Dr. A.C.B. Neill\'s 1856 photograph (Royal Collection Trust RCIN 2603956) prove the brick tower was intact before late 19th-century dismantling.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Modular Granite Chariot Body & Plinth',
        sanskritOrPersianName: 'Adhishthana / Upapitha',
        originalFunction: 'Base shrine chamber simulating a four-wheeled ceremonial chariot carrying Garuda facing the Vittala sanctum.',
        characteristics: 'Assembled from interlocking chlorite and granite slabs with precision ashlar joints, adorned with bas-relief friezes of courtiers, musicians, mythical vyalas, and battle processions.',
        representationInImage: 'Preserved authentic granite structure maintained in-situ without modification.',
        evidence: 'Physical masonry in-situ documented by A.H. Longhurst (1917) and George Michell (1995).',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Four Independently Sculpted Wheels & Stone Axles',
        sanskritOrPersianName: 'Chakra & Aksha',
        originalFunction: 'Celestial wheels representing the cosmic movement of time and ritual processional mobility.',
        characteristics: 'Intricately carved stone discs with sixteen radial spokes and central floral hubs, mounted on stone axle pins.',
        representationInImage: 'Preserved authentic stone wheels shown in their original placement.',
        evidence: 'In-situ physical wheels; early British surveys record that wheels were originally rotatable until mortared by colonial conservators to protect against tourist wear.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Balustraded Entrance Steps & Elephant Guardians',
        sanskritOrPersianName: 'Sopana & Gaja Guardians',
        originalFunction: 'Entrance stairway granting access to the interior Garuda shrine cella.',
        characteristics: 'Stone steps flanked by sculpted elephant monoliths brought from another precinct during early 20th-century repairs, replacing the original broken horse sculptures.',
        representationInImage: 'Preserved as currently consolidated in-situ.',
        evidence: 'A.H. Longhurst (1917) Hampi Ruins Described and Illustrated; tail fragments of original horses remain visible behind the elephants.',
        category: 'DOCUMENTED FACT'
      }
    ],
    references: [
      {
        institution: 'UNESCO World Heritage Centre',
        title: 'Group of Monuments at Hampi (Official Listing No. 241)',
        url: 'https://whc.unesco.org/en/list/241/',
        supports: 'Inscribed heritage boundaries, Vijayanagara chronology, and universal value criteria.'
      },
      {
        institution: 'Archaeological Survey of India (ASI)',
        title: 'Hampi Mini Circle & World Heritage Inventory',
        url: 'https://asi.nic.in/',
        supports: 'Measured drawings of Vittala complex, mortar joint analysis, and brick composition of lost vimanas.'
      },
      {
        institution: 'Royal Collection Trust (UK)',
        title: 'The Stone Car, Vittala Temple, Hampi (Dr. A.C.B. Neill, 1856, RCIN 2603956)',
        url: 'https://www.rct.uk/collection/2603956/the-stone-car-vittala-temple-hampi-vijayanagara',
        supports: 'Primary photographic evidence confirming the presence, height, and stepped pyramidal tiers of the intact brick vimana.'
      },
      {
        institution: 'Government Press Madras / Archaeological Survey',
        title: 'Hampi Ruins Described and Illustrated (A.H. Longhurst, 1917)',
        url: 'https://archive.org/details/hampiruinsdescri00long',
        supports: 'Architectural documentation of Garuda dedication, horse balustrade fragments, and late 19th-century loss of the upper tower.'
      }
    ],
    disclosure:
      'AI-assisted historical visualization based on 1856 calotype photography, archaeological surveys, and documented Vijayanagara architectural evidence. While the existence of the brick vimana is proven, specific decorative plaster motifs remain an architectural interpretation.'
  },

  // 3. ELLORA — KAILASA TEMPLE (Cave 16)
  ellora_kailasa: {
    monumentId: 'ellora',
    subTarget: 'kailasa',
    title: 'Kailasa Monolithic Temple (Cave 16)',
    subTitle: 'Rashtrakuta Top-Down Rock-Cut Monolith & Historical White Lime Plaster',
    location: 'Cave 16, Ellora Caves, Chhatrapati Sambhaji Nagar, Maharashtra',
    period: 'Carved c. 756–774 CE (King Krishna I, Rashtrakuta Dynasty)',
    unescoRef: 'UNESCO World Heritage Site (1983, Ref #243)',
    beforeImage: '/assets/monuments/ellora/reconstruction/kailasa-before.png',
    afterImage: '/assets/monuments/ellora/reconstruction/kailasa-after.png',
    beforeLabel: 'PRESENT DAY (EXPOSED BASALT)',
    afterLabel: 'PAST ARCHITECTURAL VISUALIZATION',
    cameraAngle: 'High-Angle Cliffside Vista • West Courtyard Axis',
    glimpseIntoHistory:
      'Excavated from a single basaltic cliff face in the eighth century CE under Rashtrakuta Emperor Krishna I, the Kailasa Temple (Cave 16) is the world\'s largest top-down monolithic rock-cut monument. Over 200,000 tonnes of volcanic rock were chiseled away by master sculptors working downward without scaffolding to reveal a multi-storeyed Dravidian temple complex representing Mount Kailash. Originally covered in radiant white shell-lime plaster (vajralepa) to evoke Shiva\'s snow-clad Himalayan mountain, the temple served as an imperial pilgrimage sanctuary. Centuries of monsoon weathering gradually stripped the plaster, revealing the raw basalt beneath.',
    architecturalElements: [
      {
        name: 'Historical White Shell-Lime Plaster',
        sanskritOrPersianName: 'Chunam / Vajralepa Stucco',
        originalFunction: 'Sacred symbolic manifestation of snowy Mount Kailash and protective waterproofing over vesicular volcanic basalt.',
        characteristics: 'Polished shell-lime stucco (chunam) applied over chisel marks, accentuating fine sculptural contours with subtle pigment embellishments.',
        representationInImage: 'The temple complex is shown fully cloaked in its historical white plaster coating rather than exposed dark basalt rock.',
        evidence: 'Baroda copper-plate grant of Karka II (812 CE); physical plaster fragments survive intact in sheltered undercuts, Nandi Mandapa ceiling, and upper friezes.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Monolithic Dravidian Tritala Vimana',
        sanskritOrPersianName: 'Tritala Vimana & Shikhara',
        originalFunction: 'Main sanctuary tower housing the monolithic Svayambhu Shiva lingam in the Garbhagriha.',
        characteristics: 'Rises 32.6 meters (107 ft) in three diminishing pyramidal tiers decorated with miniature kutas, shalas, and an octagonal dome crowned by a stupika finial.',
        representationInImage: 'Rendered with intact white plaster finish and golden crowning kalasa finial.',
        evidence: 'Completely intact monolithic architecture documented by James Burgess (1883) and ASI.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Monolithic Aerial Rock Sky-Bridges',
        sanskritOrPersianName: 'Shila Setu',
        originalFunction: 'Suspended rock walkways connecting upper levels of the Gopuram, Nandi Mandapa, and Sabha Mandapa.',
        characteristics: 'Living rock bridges carved without joints 9 meters above the open courtyard.',
        representationInImage: 'Visually reconnects the front sky-bridge between the Gopuram and Nandi Mandapa, which collapsed in the 19th century.',
        evidence: 'Visible socket mortises and fracture scars on the Gopuram and Nandi Mandapa; the rear bridge connecting the Nandi Mandapa to the hall remains standing today.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Colossal Freestanding Dhvajastambha Victory Pillars',
        sanskritOrPersianName: 'Dhvajastambha / Kirti Stambha',
        originalFunction: 'Monolithic ceremonial victory pillars honoring Shiva and commemorating Rashtrakuta military triumphs.',
        characteristics: 'Two 16.5-meter (54 ft) freestanding monolithic pillars carved directly out of the quarry floor with fluted shafts and trishula emblems.',
        representationInImage: 'Depicted standing intact on the courtyard floor with pristine sculpted contours and tridents.',
        evidence: 'Surviving in-situ monolithic pillars documented by ASI.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Monumental Elephant & Lion Plinth',
        sanskritOrPersianName: 'Upapitha Caryatids',
        originalFunction: 'Symbolic foundation plinth depicting cosmic beasts bearing the temple on their backs.',
        characteristics: '8-meter-high sculpted frieze of life-sized elephants, lions, and mythical vyalas carved in deep dynamic relief.',
        representationInImage: 'Rendered with intact ivory tusks and crisp anatomical detailing.',
        evidence: 'Surviving in-situ rock carvings documented by ASI.',
        category: 'DOCUMENTED FACT'
      }
    ],
    references: [
      {
        institution: 'UNESCO World Heritage Centre',
        title: 'Ellora Caves (Official World Heritage Listing No. 243)',
        url: 'https://whc.unesco.org/en/list/243/',
        supports: 'Inscribed boundaries, Rashtrakuta chronology, and monolithic rock-cut criteria.'
      },
      {
        institution: 'Archaeological Survey of India (ASI)',
        title: 'Ellora Caves — Monolithic Marvels & Cave 16 Monograph',
        url: 'https://asi.nic.in/',
        supports: 'Physical dimensions (32.6m vimana), archaeological plaster analysis, and rock quarrying measurements.'
      },
      {
        institution: 'Ministry of Culture, Government of India',
        title: 'Indian Culture Portal — Kailasa Temple, Ellora',
        url: 'https://indiaculture.gov.in/',
        supports: 'National cultural repository records on Rashtrakuta King Krishna I and epigraphic records.'
      },
      {
        institution: 'Archaeological Survey of Western India',
        title: 'Report on the Elura Cave Temples (James Burgess, 1883)',
        url: 'https://archive.org/details/reportoneluracav00burg',
        supports: 'Primary measured architectural drawings, documentation of fallen sky-bridge sockets, and surviving white plaster traces.'
      }
    ],
    disclosure:
      'Historical architectural visualization depicting the 8th-century white plaster finish (chunam) and reconnected entrance sky-bridge. The monolithic body remains authentic; reconnected elements are based on physical fracture scars and architectural evidence.'
  },

  // 4. ELLORA — VISHWAKARMA BUDDHA SHRINE (Cave 10)
  ellora_vishwakarma: {
    monumentId: 'ellora',
    subTarget: 'vishwakarma',
    title: 'Vishwakarma Chaitya Hall (Cave 10)',
    subTitle: '7th-Century Post-Gupta Monolithic Preaching Buddha & Stupa Shrine',
    location: 'Cave 10, Ellora Caves, Maharashtra',
    period: 'Carved c. 650–700 CE (Post-Gupta / Early Rashtrakuta Period)',
    unescoRef: 'UNESCO World Heritage Site (1983, Ref #243)',
    beforeImage: '/assets/monuments/ellora/reconstruction/vishwakarma-buddha-before.png',
    afterImage: '/assets/monuments/ellora/reconstruction/vishwakarma-buddha-after.png',
    beforeLabel: 'PRESENT DAY (IN-SITU ROCK)',
    afterLabel: 'PAST ARCHITECTURAL VISUALIZATION',
    cameraAngle: 'Frontal Nave Elevation • Focus on Central Shrine Iconography',
    glimpseIntoHistory:
      'Known as the Carpenter\'s Cave (Sutar Jhopadi) due to its rock-cut ribs mimicking wooden carpentry, Cave 10 is Ellora\'s only Buddhist chaitya-griha (worship hall). Carved in the late seventh century CE, it integrates an apsidal vaulted prayer nave with a colossal fifteen-foot monolithic seated Buddha fronting a high relic stupa. Functioning as a sacred congregational hall for Buddhist monks and pilgrims along trade routes, the monument survived centuries intact, though surface details of hands and drapery suffered natural erosion.',
    architecturalElements: [
      {
        name: 'Colossal Preaching Buddha in Dharmachakra Mudra',
        sanskritOrPersianName: 'Dharmachakra Pravartana Buddha',
        originalFunction: 'Principal devotional icon turning the Wheel of the Law in the presence of attending deities.',
        characteristics: '15-foot high Buddha seated in bhadrasana (regal posture) with hands in dharmachakra pravartana mudra, backed by a relief carving of the sacred Bodhi tree.',
        representationInImage: 'Restores the hand gestures, facial serenity, and crisp drapery folds.',
        evidence: 'Iconographic parallels in Ajanta Cave 26 and Kanheri Cave 3; ASI documentation of western Indian Buddhist caves.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Attendant Bodhisattvas (Avalokiteshvara & Maitreya)',
        sanskritOrPersianName: 'Bodhisattva Parivara',
        originalFunction: 'Celestial guardian companions representing universal compassion and future enlightenment.',
        characteristics: 'Life-sized standing reliefs holding flywhisks (chauris), lotuses, and stupa crowns.',
        representationInImage: 'Depicted with intact crowns, jewelry, and drapery contours.',
        evidence: 'In-situ rock carvings flanking the central throne.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Monolithic Stupa Core & Vaulted Ribbed Ceiling',
        sanskritOrPersianName: 'Chaitya Stupa & Vakra Ribs',
        originalFunction: 'Relic shrine harmonizing early aniconic stupa worship with anthropomorphic icon veneration.',
        characteristics: 'Cylindrical drum with hemispherical dome, crowned by an apsidal vault with rock-cut rafters simulating wooden bent-timber architecture.',
        representationInImage: 'Preserved monolithic structure rendered with crisp architectural definition.',
        evidence: 'Fully surviving rock-cut architecture documented by James Fergusson (1876).',
        category: 'DOCUMENTED FACT'
      }
    ],
    references: [
      {
        institution: 'UNESCO World Heritage Centre',
        title: 'Ellora Caves (Official World Heritage Listing No. 243)',
        url: 'https://whc.unesco.org/en/list/243/',
        supports: 'Chronology of Western Indian Buddhist rock-cut architecture and criteria.'
      },
      {
        institution: 'Archaeological Survey of India (ASI)',
        title: 'Ellora Cave 10 (Vishwakarma) Monograph',
        url: 'https://asi.nic.in/',
        supports: 'Measured plans, stupa dimensions, and iconography of the seated Buddha in bhadrasana.'
      },
      {
        institution: 'W.H. Allen & Co. London',
        title: 'The Cave Temples of India (James Fergusson & James Burgess, 1880)',
        url: 'https://archive.org/details/cavetemplesofind00ferg',
        supports: 'Documentation of wooden-ribbed stone chaitya vaulting and post-Gupta stylistic evolution.'
      }
    ],
    disclosure:
      'Historical sculptural visualization depicting restored facial contours, hand mudras, and drapery. The monolithic rock-cut cave is authentic and preserved in-situ.'
  },

  // 5. KONARK — SUN TEMPLE
  konark: {
    monumentId: 'konark',
    title: 'Konark Sun Temple Complex',
    subTitle: '13th-Century Kalinga Chariot, Soaring Vimana & Conserved Jagamohana',
    location: 'Konark, Puri District, Odisha, India',
    period: 'Constructed c. 1250 CE (King Narasimhadeva I, Eastern Ganga Dynasty)',
    unescoRef: 'UNESCO World Heritage Site (1984, Ref #242)',
    beforeImage: '/assets/monuments/konark/reconstruction/jagamohana-before.png',
    afterImage: '/assets/monuments/konark/reconstruction/jagamohana-after.png',
    beforeLabel: 'PRESENT DAY (CONSERVED RUINS)',
    afterLabel: 'PAST ARCHITECTURAL VISUALIZATION',
    cameraAngle: 'Northeast Vista • Full Axial Perspective from Perimeter Lawns',
    glimpseIntoHistory:
      'Conceived in 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty as a monumental stone chariot for Surya, the Hindu Sun God, Konark is the crowning jewel of Kalinga temple architecture. Situated on the Bay of Bengal, the sanctuary originally consisted of a colossal 229-foot sanctum tower (Vimana), an assembly hall (Jagamohana), and a detached dance pavilion (Natamandira). Structural instability, subsiding coastal soil, and historical sieges caused the towering sanctum to collapse in the late sixteenth or seventeenth century, leaving the 128-foot Jagamohana as the complex\'s surviving centerpiece.',
    architecturalElements: [
      {
        name: 'Lost Soaring Vimana Shikhara (Sanctum Tower)',
        sanskritOrPersianName: 'Bada Deula / Rekha Deula',
        originalFunction: 'Towering sanctuary housing the presiding deity Surya along the primary east-west solar alignment.',
        characteristics: 'Conjectural height of 229 feet (70 meters), soaring in curvilinear Rekha Deula form with vertical fluted rathas, projecting rampant Gajasimha lions, and a massive crowning amalaka stone and golden kalasa.',
        representationInImage: 'Reconstructed soaring behind the Jagamohana, restoring the true original silhouette of the sacred chariot complex.',
        evidence: 'Conjectural architectural survey drawings by Percy Brown (1942, Plate CVII); Palm-leaf manuscripts translated by Alice Boner (1972); Lingaraja Temple (Bhubaneswar) architectural canons; surviving foundation plinth measurements by ASI.',
        category: 'ARCHITECTURAL INTERPRETATION'
      },
      {
        name: 'Central Conserved Jagamohana (Assembly Hall)',
        sanskritOrPersianName: 'Mukhasala / Pidha Deula',
        originalFunction: 'Hypostyle assembly hall for pilgrims facing the sanctum.',
        characteristics: '128-foot stepped pyramidal tower in three diminishing potala tiers, decorated with life-sized chlorite statues of female celestial musicians (Alasakanyas), crowned by a massive bell-shaped ghanta and amalaka.',
        representationInImage: 'Modern steel scaffolding has been digitally removed to reveal the unobstructed facade with its restored crowning kalasa.',
        evidence: 'Surviving in-situ 128-foot structure conserved by ASI (sand-filled in 1906); 1906–1910 clearance photographs.',
        category: 'DOCUMENTED FACT'
      },
      {
        name: 'Front Natamandira (Dance Pavilion)',
        sanskritOrPersianName: 'Natamandira / Nritya Mandapa',
        originalFunction: 'Elevated open festival hall for ritual devotional dance (Odissi) performances dedicated to Surya.',
        characteristics: 'Hypostyle pavilion carved with intricate figures of dancers and musicians on chlorite pillars, topped by a stepped pyramidal pidha roof.',
        representationInImage: 'Complete roofed pavilion depicted in the foreground-midground.',
        evidence: 'Surviving excavated plinth and pillars in-situ; structural parallels with the Natamandira of Jagannath Temple in Puri; ASI clearance excavations (1906–1909).',
        category: 'ARCHITECTURAL INTERPRETATION'
      },
      {
        name: 'The 24 Cosmic Chariot Wheels & Seven Galloping Horses',
        sanskritOrPersianName: 'Surya Ratha Chakra & Saptashva',
        originalFunction: 'Symbolizes the time-keeping chariot of the Sun God drawn across the heavens.',
        characteristics: 'High plinth carved with 24 monumental stone wheels (9 feet 9 inches in diameter) functioning as precise sundials, pulled by 7 spirited stone horses.',
        representationInImage: 'Preserved authentic stone plinth and wheels depicted in-situ.',
        evidence: 'In-situ surviving architectural fabric documented by ASI.',
        category: 'DOCUMENTED FACT'
      }
    ],
    references: [
      {
        institution: 'UNESCO World Heritage Centre',
        title: 'Sun Temple, Konârak (Official Listing No. 242)',
        url: 'https://whc.unesco.org/en/list/242/',
        supports: 'Inscribed world heritage boundaries, Kalinga architectural significance, and conservation status.'
      },
      {
        institution: 'Archaeological Survey of India (ASI)',
        title: 'Konarak World Heritage Monograph & Conservation History',
        url: 'https://asi.nic.in/',
        supports: 'Measured drawings of Jagamohana, plinth dimensions, and 1906 interior sand-filling records.'
      },
      {
        institution: 'Taraporevala Sons & Co., Bombay',
        title: 'Indian Architecture (Buddhist and Hindu Periods) — Percy Brown (1942)',
        url: 'https://archive.org/details/indianarchitectu00brow',
        supports: 'Plate CVII: Conjectural Reconstruction of the Sun Temple at Konarak (13th Century).'
      },
      {
        institution: 'Chaukhamba Sanskrit Sansthan',
        title: 'New Light on the Sun Temple of Konarka (Alice Boner, S.R. Sharma & R.P. Das, 1972)',
        url: 'https://archive.org/details/newlightonsuntem0000bone',
        supports: 'Unpublished palm-leaf architectural manuscripts detailing original temple measurements and construction treatises.'
      }
    ],
    disclosure:
      'AI-assisted historical visualization synthesizing conjectural surveys by Percy Brown (1942), palm-leaf architectural treatises translated by Alice Boner (1972), and ASI excavation measurements. The rear Vimana tower and Natamandira roof are architectural interpretations, while the central Jagamohana is conserved in-situ.'
  }
};
