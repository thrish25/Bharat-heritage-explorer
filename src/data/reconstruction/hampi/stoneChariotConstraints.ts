/**
 * Hampi Stone Chariot — Reconstruction Constraints & Rules
 * Royal Indian Heritage Platform
 * 
 * Enforces mandatory preservation of surviving granite fabric,
 * defines the single active target zone for upper vimana restoration,
 * and sets strict negative constraints against architectural fabulation.
 * 
 * SCOPE AUDIT (PHASE 2.1):
 * The missing brick-and-mortar vimana is the SOLE active reconstruction target.
 * All ground-level elements, entrance steps, balustrades, elephants, and surroundings
 * remain 100% unaltered.
 */

import type { ReconstructionConstraint, UncertaintyDescription } from '../types.ts';

export const HAMPI_STONE_CHARIOT_CONSTRAINTS: ReconstructionConstraint[] = [
  // 1. Mandatory Preservation Constraints
  {
    id: 'CONST-PRESERVE-01-GRANITE-CHASSIS',
    category: 'MANDATORY_PRESERVATION',
    title: 'Preserve Authentic Granite Chassis and Plinth Fabric',
    description: 'The entire existing granite adhisthana plinth, moldings, and continuous relief friezes of battle elephants, Arabian horses, and vyalas must remain 100% unaltered in position, texture, and form.',
    rationale: 'The lower plinth is authentic surviving 16th-century imperial Vijayanagara craftsmanship in excellent archaeological condition.',
    appliesToComponentIds: ['COMP-01-PLINTH', 'COMP-09-DECORATIVE-FRIEZES']
  },
  {
    id: 'CONST-PRESERVE-02-WHEELS-AXLES',
    category: 'MANDATORY_PRESERVATION',
    title: 'Preserve Existing Wheel Positions, Carvings, and Axles',
    description: 'The four monolithic stone wheels, their concentric radiating lotus petal carvings, hub bosses, and cylindrical stone axles must remain precisely in their authentic surviving locations and orientations.',
    rationale: 'The wheels are genuine 16th-century stone carvings. No wheel repositioning, replacement, or artificial rotation animation is permissible.',
    appliesToComponentIds: ['COMP-02-WHEELS-AXLES']
  },
  {
    id: 'CONST-PRESERVE-03-STONE-TEXTURES',
    category: 'MANDATORY_PRESERVATION',
    title: 'Preserve Authentic Weathered Chloritic Granite Textures',
    description: 'All surviving stone surfaces must retain their authentic natural gray-green chloritic granite texture and atmospheric patina. Synthetic smoothing, recoloring, or marble-like polishing of the granite is strictly prohibited.',
    rationale: 'Preserving authentic material materiality is essential for archaeological credibility.',
    appliesToComponentIds: ['COMP-01-PLINTH', 'COMP-02-WHEELS-AXLES', 'COMP-03-SANCTUM-CELLA', 'COMP-04-PILLARS-BRACKETS', 'COMP-05-ROOF-CORNICE']
  },
  {
    id: 'CONST-PRESERVE-04-STRUCTURAL-PROPORTIONS',
    category: 'MANDATORY_PRESERVATION',
    title: 'Maintain Authentic Structural Proportions and Alignment',
    description: 'The dimensional proportions between the plinth, chariot body, wheels, and roof platform must remain locked to the authentic base ground-truth photograph without distortion.',
    rationale: 'Altering structural scale or perspective vectors produces architectural distortion.',
    appliesToComponentIds: ['COMP-01-PLINTH', 'COMP-03-SANCTUM-CELLA', 'COMP-04-PILLARS-BRACKETS', 'COMP-05-ROOF-CORNICE']
  },
  {
    id: 'CONST-PRESERVE-05-CAMERA-PERSPECTIVE',
    category: 'MANDATORY_PRESERVATION',
    title: 'Lock to Verified Northwest Oblique Three-Quarter Viewpoint',
    description: 'The digital reconstruction must strictly utilize the verified northwest oblique camera station corresponding to Colonel Greenlaw 1856, Dr. Neill 1856, and Ankit Darsi 2016.',
    rationale: 'Archival photographic evidence exists exclusively from this angle. Synthesizing unrecorded angles would require fabricating unseen architectural surfaces.',
    appliesToComponentIds: ['COMP-05-ROOF-CORNICE', 'COMP-06-BRICK-VIMANA']
  },
  {
    id: 'CONST-PRESERVE-06-ENTRANCE-GROUND-FABRIC',
    category: 'MANDATORY_PRESERVATION',
    title: 'Preserve Existing Entrance Steps, Balustrades, and Ground Fabric',
    description: 'The entrance staircase, balustrades, ground-level elements, and existing monument surroundings must remain untouched in the first reconstruction target. The active reconstruction is strictly confined to restoring the upper vimana superstructure above the flat granite roof.',
    rationale: 'Scope boundary: The first reconstruction target is strictly and solely the missing brick vimana superstructure. Ground elements are not modified.',
    appliesToComponentIds: ['COMP-01-PLINTH', 'COMP-07-DRAFT-HORSES', 'COMP-08-GUARDIAN-ELEPHANTS']
  },

  // 2. Sole Active Reconstruction Target Constraint
  {
    id: 'CONST-TARGET-01-BRICK-VIMANA-RESTORATION',
    category: 'RECONSTRUCTION_TARGET',
    title: 'Restore Only the Documented Missing Brick-and-Mortar Superstructure',
    description: 'Digital restoration is strictly confined to the upper vimana resting on the flat stone terrace above the kapota cornice, conforming to the stepped pyramidal silhouette documented in 1856 photography.',
    rationale: 'The upper brick vimana is the only major documented structural loss of the monument and the sole active target for Phase 2.',
    appliesToComponentIds: ['COMP-06-BRICK-VIMANA']
  },

  // 3. Negative Constraints (Visual Restrictions)
  {
    id: 'CONST-RESTRICT-01-NO-FANTASY-ARCHITECTURE',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Fantasy Architecture and Extraneous Towers',
    description: 'No additional towers, pavilions, gopurams, spires, or imaginary Dravidian structures may be added to or around the Stone Chariot.',
    rationale: 'Reconstruction must reflect historically documented reality, not artistic fantasy.',
    appliesToComponentIds: ['COMP-06-BRICK-VIMANA']
  },
  {
    id: 'CONST-RESTRICT-02-NO-INVENTED-SCULPTURES',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Fabricated Figural Sculptures in Vimana Niches',
    description: 'No specific deity figures, mythological scenes, or imaginary stucco sculptures may be invented for the vimana niches. Only standard Dravidian architectural moldings matching surviving 16th-century Vijayanagara shrines are permissible.',
    rationale: 'Micro-sculptural details cannot be resolved from 1856 calotype grain and must not be fabricated.',
    appliesToComponentIds: ['COMP-06-BRICK-VIMANA']
  },
  {
    id: 'CONST-RESTRICT-03-NO-EXAGGERATED-DIMENSIONS',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Exaggerated Heights or Distorted Proportions',
    description: 'The height of the restored superstructure must strictly observe the visual ~1:1 elevation ratio relative to the granite body as documented in 1856 calotypes. Towering spires or exaggerated vertical scales are strictly forbidden.',
    rationale: 'Historical calotypes establish the proportional bounding envelope.',
    appliesToComponentIds: ['COMP-06-BRICK-VIMANA']
  },
  {
    id: 'CONST-RESTRICT-04-NO-ENTRANCE-OR-ANIMAL-ALTERATIONS',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Redesigning Entrance, Reconstructing Horses, or Relocating Elephants',
    description: 'Do not redesign the entrance staircase or alter the granite balustrades. Do not attempt to reconstruct missing horses or fabricate free-standing draft animals. Do not relocate or alter the guardian elephants in this first reconstruction target.',
    rationale: 'The first reconstruction target is strictly and exclusively the missing upper vimana superstructure. Ground-level elements remain as documented in present-day in-situ ground truth.',
    appliesToComponentIds: ['COMP-07-DRAFT-HORSES', 'COMP-08-GUARDIAN-ELEPHANTS']
  },
  {
    id: 'CONST-RESTRICT-05-NO-MODERN-ELEMENTS',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Modern Infrastructure, Buildings, or Crowds',
    description: 'No modern visitor pathways, metal chains, barricades, signage, modern apparel, or crowds of people may be introduced into the reconstructed scene.',
    rationale: 'The objective is pure historical architectural visualization.',
    appliesToComponentIds: ['COMP-01-PLINTH']
  },
  {
    id: 'CONST-RESTRICT-06-NO-ARBITRARY-COLOURS',
    category: 'VISUAL_RESTRICTION',
    title: 'Prohibit Synthetic, Saturated Modern Color Schemes',
    description: 'Do not apply arbitrary polychrome painting (e.g. bright blue, vermilion, green, or gold gilding) across the monument. The base reconstruction must maintain natural granite and weathered lime-wash tones.',
    rationale: 'No surviving color map exists for the monument. Fabricating arbitrary color schemes produces misleading CGI fantasy.',
    appliesToComponentIds: ['COMP-06-BRICK-VIMANA']
  }
];

export const HAMPI_STONE_CHARIOT_UNCERTAINTIES: UncertaintyDescription[] = [
  {
    id: 'UNCERT-01-HORSE-FOREQUARTERS',
    featureName: 'Draft Horse Forequarter Anatomy',
    classification: 'UNCERTAIN',
    issueDescription: 'Original draft animal heads, necks, manes, and pulling harnesses broke away before 1856 and have zero surviving documentation.',
    evidenceAssessment: 'Surviving in-situ reliefs document hind legs and tails only. Forequarters are completely lost.',
    reconstructionInstruction: 'DO NOT RECONSTRUCT in the active target. The first reconstruction is strictly confined to the upper vimana superstructure; the entrance and balustrades are excluded from active reconstruction.'
  },
  {
    id: 'UNCERT-02-VIMANA-MICRO-RELIEFS',
    featureName: 'Vimana Niche Stucco Deities',
    classification: 'UNCERTAIN',
    issueDescription: 'The micro-stucco figural reliefs inside the brick vimana niches are blurred by the paper grain of 1856 calotypes.',
    evidenceAssessment: 'Macro-massing and stepped tiers are verified; specific deity identities in niches are unresolvable.',
    reconstructionInstruction: 'Render classical architectural Dravidian pavilion moldings (kutas, salas) without inventing individual deity statuary.'
  },
  {
    id: 'UNCERT-03-SUPERSTRUCTURE-EXACT-HEIGHT',
    featureName: 'Exact Metric Superstructure Height',
    classification: 'UNSUPPORTED',
    issueDescription: 'Specific metric figures like 3.2 meters are unmeasured estimates rather than surveyed facts.',
    evidenceAssessment: 'The superstructure was destroyed before modern laser scanning or measured elevations were created.',
    reconstructionInstruction: 'Use proportional visual scaling (~1:1 ratio relative to granite body) extracted from 1856 calotype photography.'
  },
  {
    id: 'UNCERT-04-GARUDA-IDOL',
    featureName: 'Consecrated Garuda Cult Idol',
    classification: 'UNCERTAIN',
    issueDescription: 'The original consecrated idol was lost post-1565. Its exact dimensions, material (stone vs bronze), and iconography are unrecorded.',
    evidenceAssessment: 'Dedication to Garuda is attested by Agamic axial layout, but the physical idol is lost.',
    reconstructionInstruction: 'Leave the interior cella shadowed or show an empty altar pedestal; do not fabricate an invented deity figure.'
  },
  {
    id: 'UNCERT-05-ELEPHANT-PROVENANCE',
    featureName: 'Provenance of Added Guardian Elephants',
    classification: 'UNSUPPORTED',
    issueDescription: 'Popular guidebooks claim the elephants were brought from the Elephant Stables or another temple.',
    evidenceAssessment: 'Archival transfer logs contain zero records of where the elephants originated.',
    reconstructionInstruction: 'DO NOT RELOCATE OR MODIFY in the active target. Elephants remain in their present-day in-situ position for this first reconstruction; state in educational research metadata that their provenance is unrecorded.'
  },
  {
    id: 'UNCERT-06-ANCIENT-WHEEL-ROLLING',
    featureName: 'Active Wheel Rolling in Ancient Festivals',
    classification: 'UNSUPPORTED',
    issueDescription: 'Popular claims assert the stone wheels were rotated during annual temple car festivals.',
    evidenceAssessment: 'Stone axles on a static stone shrine cannot bear rolling vehicle motion; unrecorded in Hindu Agamas.',
    reconstructionInstruction: 'Maintain wheels in authentic static positions; do not assert historical festival rotation.'
  },
  {
    id: 'UNCERT-07-FULL-POLYCHROME-MAP',
    featureName: 'Full-Body Polychrome Color Scheme',
    classification: 'UNSUPPORTED',
    issueDescription: 'Claims of a specific full-body paint scheme (vermilion, ultramarine blue, lampblack) across every molding.',
    evidenceAssessment: 'Microscopic traces of lime wash and ochre exist, but no complete color map survives.',
    reconstructionInstruction: 'Maintain natural granite and weathered lime-wash textures for visual reconstruction.'
  }
];
