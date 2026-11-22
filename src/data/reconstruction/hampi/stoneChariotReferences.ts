/**
 * Hampi Stone Chariot — Reference Images Register
 * Royal Indian Heritage Platform
 * 
 * Formal catalog of historical calotypes, museum archival prints,
 * modern high-resolution ground truth, and field survey imagery.
 * 
 * Strict provenance, archival identifier verification, and local asset audit enforced.
 * External archives are explicitly distinguished from locally available image files.
 */

import type { ReferenceImage } from '../types.ts';

export const HAMPI_STONE_CHARIOT_REFERENCES: Record<string, ReferenceImage> = {
  'IMG-HIST-1856-GREENLAW-01': {
    referenceId: 'IMG-HIST-1856-GREENLAW-01',
    sourceId: 'SRC-PHOTO-06',
    title: 'Stone Chariot in the Vittala Temple with Intact Brick Superstructure',
    creator: 'Colonel Alexander John Greenlaw (1818–1870), 60th Native Infantry, Madras Army',
    captureYear: 1856,
    processMedium: 'Waxed-paper calotype negative (30 x 40 cm negative; 1910 exhibition print)',
    repositoryArchive: 'Alkazi Collection of Photography (ACP 98.48.0001) / Victoria and Albert Museum (1910 Prints)',
    archivalIdentifier: 'Alkazi Collection ACP 98.48.0001 / V&A Indian Dept 1910',
    originalSourceUrl: 'https://collections.vam.ac.uk/',
    hasLocalAsset: false,
    isSuitableForGeminiInput: false,
    verificationStatus: 'VERIFIED',
    primaryRole: 'SUPERSTRUCTURE_GUIDE',
    imageOrientation: 'landscape',
    cameraViewpoint: 'Northwest oblique frontal elevation across the Vittala courtyard',
    visibleArchitecturalDetails: [
      'Stepped pyramidal brick-and-mortar Dravidian vimana superstructure resting on the flat stone roof.',
      'Tiered tower silhouette tapering to a domical sikhara and eroded crest.',
      'Definitive absence of guardian elephant sculptures in front of the entrance steps in 1856.',
      'Chariot entrance balustrades showing pre-existing damage where draft animals stood.',
      'Four granite wheels and molded plinth in authentic 19th-century courtyard soil level.'
    ],
    intendedUse: 'Principal historical baseline guiding the missing upper brick vimana superstructure silhouette, tier massing, and ~1:1 visual proportional ratio relative to the granite body.',
    licensingRestrictions: {
      underlyingWorkLicense: 'Public Domain (author died 1870; work created 1856)',
      digitalScanTerms: 'Institutional terms apply for museum digital scans (V&A / Alkazi Foundation); scholarly reference permitted with credit.',
      attributionRequirement: 'Photo: Col. Alexander John Greenlaw (1856) / Alkazi Collection of Photography / Victoria and Albert Museum'
    },
    usageWarning: 'External archival record (not stored locally). Must NOT be labeled as a locally available image or passed directly as a local file input to Gemini API. Paper calotype grain obscures fine stucco details.'
  },

  'IMG-HIST-1856-NEILL-02': {
    referenceId: 'IMG-HIST-1856-NEILL-02',
    sourceId: 'SRC-PHOTO-07',
    title: 'Temple of Vithoba with an Idol Car of Stone',
    creator: 'Dr. Andrew Charles Brisbane Neill (1814–1891), Surgeon, Madras Medical Service',
    captureYear: 1856,
    processMedium: 'Albumen print from calotype negative (26.2 x 34.9 cm image on 43.0 x 58.0 cm mount)',
    repositoryArchive: 'Royal Collection Trust (UK)',
    archivalIdentifier: 'Royal Collection Trust RCIN 2603956',
    originalSourceUrl: 'https://www.rct.uk/collection/2603956/temple-of-vithoba-with-an-idol-car-of-stone',
    hasLocalAsset: false,
    isSuitableForGeminiInput: false,
    verificationStatus: 'VERIFIED',
    primaryRole: 'SUPERSTRUCTURE_GUIDE',
    imageOrientation: 'landscape',
    cameraViewpoint: 'Northwest oblique three-quarter perspective showing front steps and northern chariot flank',
    visibleArchitecturalDetails: [
      'Stepped brick-and-mortar vimana superstructure crowning the chariot flat roof.',
      'Independent photographic corroboration of the multi-tiered superstructure silhouette.',
      'Definitive absence of the modern guardian stone elephants in front of the staircase.',
      'Granite wheels, stone axles, and molded adhisthana plinth in authentic 19th-century state.'
    ],
    intendedUse: 'Independent cross-verification of the brick superstructure silhouette from a distinct camera station. Guides the missing upper superstructure.',
    licensingRestrictions: {
      underlyingWorkLicense: 'Public Domain (captured 1856; author died 1891; published 1866)',
      digitalScanTerms: 'Subject to Royal Collection Trust terms: digital scan copyright © Royal Collection Enterprises Limited / His Majesty King Charles III. Scholarly reference permitted with citation.',
      attributionRequirement: 'Photo: Dr. A. C. Brisbane Neill (1856–57) / Royal Collection Trust (RCIN 2603956)'
    },
    usageWarning: 'External archival record (not stored locally). Must NOT be labeled as a locally available image or passed directly as a local file input to Gemini API.'
  },

  'IMG-MOD-2016-DARSI-03': {
    referenceId: 'IMG-MOD-2016-DARSI-03',
    sourceId: 'SRC-ASI-01',
    title: 'Stone Chariot, Hampi (Present-Day High-Resolution Ground Truth)',
    creator: 'Ankit Darsi',
    captureYear: 2016,
    processMedium: 'High-resolution digital photography (Nikon DSLR, RAW capture)',
    repositoryArchive: 'Wikimedia Commons',
    archivalIdentifier: 'Wikimedia Commons File:Stone_chariot,_Hampi.jpg (Page ID: 51921389)',
    originalSourceUrl: 'https://commons.wikimedia.org/wiki/File:Stone_chariot,_Hampi.jpg',
    hasLocalAsset: true,
    localAssetPath: 'public/images/monuments/hampi_chariot.jpg',
    isSuitableForGeminiInput: true,
    verificationStatus: 'VERIFIED',
    primaryRole: 'SURVIVING_GRANITE_REFERENCE',
    imageOrientation: 'landscape',
    cameraViewpoint: 'Oblique northwest perspective capturing the north flank and entrance steps, aligning with the 1856 archival angle',
    visibleArchitecturalDetails: [
      'Sub-millimeter granite surface texture of surviving adhisthana plinth, moldings, and relief friezes.',
      'Intact concentric floral carvings on front and rear north wheels.',
      'Modern addition: Two guardian stone elephants flanking entrance steps.',
      'Surviving in-situ relief carvings of draft animal hindquarters on balustrades behind elephants.',
      'Flat top roof slab with bare masonry platform where superstructure once rested.'
    ],
    intendedUse: 'Reference ONLY for the authentic surviving 16th-century granite structure (granite ashlar texture, wheels, axles, plinth moldings, and carved narrative friezes). Must NOT be used as reference for the missing superstructure.',
    licensingRestrictions: {
      underlyingWorkLicense: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
      digitalScanTerms: 'Free culture license permitting adaptation and reuse with proper attribution and share-alike licensing.',
      attributionRequirement: 'Photo: Ankit Darsi / Wikimedia Commons / CC BY-SA 4.0'
    },
    usageWarning: 'Modern ground truth. Contains modern additions (guardian elephants, cemented axle joints) and lacks the superstructure. Must only be used as a reference for surviving granite fabric.'
  },

  'IMG-PANO-2022-VITTALA-04': {
    referenceId: 'IMG-PANO-2022-VITTALA-04',
    sourceId: 'SRC-UNESCO-02',
    title: 'Vijaya Vittala Temple Courtyard 360° Equirectangular Panorama',
    creator: 'Royal Heritage Platform Curatorial Integration Team',
    captureYear: 2022,
    processMedium: 'Equirectangular spherical photographic panorama',
    repositoryArchive: 'Royal Heritage Platform Public Assets',
    archivalIdentifier: 'HAMPI-PANO-VITTALA-01',
    originalSourceUrl: 'public/assets/monuments/hampi/panoramas/vittala_temple.jpg',
    hasLocalAsset: true,
    localAssetPath: 'public/assets/monuments/hampi/panoramas/vittala_temple.jpg',
    isSuitableForGeminiInput: false,
    verificationStatus: 'VERIFIED',
    primaryRole: 'ENVIRONMENT_BENCHMARK',
    imageOrientation: 'equirectangular',
    cameraViewpoint: 'Central quadrangle camera station facing the Stone Chariot with 360° visual field of the courtyard, Maha-Mandapa, and eastern gopuram',
    visibleArchitecturalDetails: [
      'Full spatial relationship between the Stone Chariot, the Maha-Mandapa hypostyle hall, and the eastern Raja Gopuram.',
      'Authentic lighting, sun angle, and courtyard flagstone environment.'
    ],
    intendedUse: 'Spatial coordinate reference benchmark for the platform 360-degree exploration. Strictly protected against all modification.',
    licensingRestrictions: {
      underlyingWorkLicense: 'Internal Platform Integrated Asset / Open Educational Heritage',
      digitalScanTerms: 'Protected project asset; protected against modification or deletion.',
      attributionRequirement: 'Royal Heritage Platform Architectural Documentation'
    },
    usageWarning: 'Protected core asset for 360-degree virtual tour. DO NOT MODIFY, OVERWRITE, OR PASS AS A GENERATIVE PROMPT CANVAS.'
  },

  'IMG-ARCH-IN-SITU-HORSE-05': {
    referenceId: 'IMG-ARCH-IN-SITU-HORSE-05',
    sourceId: 'SRC-ASI-PUB-03',
    title: 'In-Situ Relief Detail of Draft Animal Hind Legs on Entrance Balustrades',
    creator: 'Archaeological Survey of India / Hampi Heritage Inventory',
    captureYear: 2018,
    processMedium: 'Macro digital architectural documentation',
    repositoryArchive: 'ASI Hampi Circle Field Documentation & Longhurst Survey Archive',
    archivalIdentifier: 'ASI-HC-ARCH-BALUSTRADE-03',
    originalSourceUrl: 'https://asihampicircle.in/',
    hasLocalAsset: true,
    localAssetPath: '_scripts/inspection_front/horse_raw_crop.jpg',
    isSuitableForGeminiInput: false,
    verificationStatus: 'VERIFIED',
    primaryRole: 'ARCHAEOLOGICAL_EVIDENCE',
    imageOrientation: 'landscape',
    cameraViewpoint: 'Lateral close-up view behind modern elephant flank looking at granite balustrade wall',
    visibleArchitecturalDetails: [
      'Chiseled stone relief depicting the muscular hind leg, hock, and falling tail of a draft quadruped.',
      'Broken granite joint where the protruding animal forepart severed.'
    ],
    intendedUse: 'Archaeological research record documenting the surviving in-situ draft animal hind leg relief on the balustrade. Excluded from the first reconstruction target.',
    licensingRestrictions: {
      underlyingWorkLicense: 'Government of India Archaeological Heritage Citation',
      digitalScanTerms: 'Scholarly citation under fair practice for archaeological research.',
      attributionRequirement: 'Archaeological Survey of India (ASI) Hampi Circle Survey Records'
    },
    usageWarning: 'Research documentation only. The draft animal is strictly excluded from the first reconstruction target.'
  }
};
