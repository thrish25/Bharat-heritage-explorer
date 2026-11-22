/**
 * Hampi Stone Chariot — Architectural Reconstruction Specification
 * Royal Indian Heritage Platform
 * 
 * Formal specification governing the historical digital reconstruction
 * of the missing brick-and-mortar vimana superstructure.
 * 
 * SCOPE AUDIT (PHASE 2.1):
 * Single perspective target: Northwest Oblique Three-Quarter View.
 * Sole active reconstruction target: Missing brick-and-mortar vimana superstructure.
 * The existing granite structure, entrance staircase, balustrades, elephants,
 * wheels, axles, and plinth remain 100% unaltered.
 * 
 * Visual generation parameters (camera, lighting, framing) are strictly segregated
 * from documented historical facts.
 */

import type { ReconstructionSpecification } from '../types.ts';

export const HAMPI_STONE_CHARIOT_SPECIFICATION: ReconstructionSpecification = {
  specificationId: 'SPEC-HAMPI-CHARIOT-VIMANA-01',
  monumentId: 'hampi-stone-chariot',

  // 1. Reconstruction Objective (Sole Target: Upper Vimana)
  reconstructionObjective: (
    'Historically restore ONLY the documented missing multi-tiered brick-and-mortar Dravidian vimana ' +
    'superstructure crowning the flat granite roof terrace of the Hampi Stone Chariot, while preserving ' +
    '100% of the authentic surviving granite structure, plinth, wheels, axles, entrance, balustrades, and carvings in-situ.'
  ),

  // 2. Historical Time Context
  historicalTimeContext: (
    '16th Century CE (c. 1510–1529 CE, Reign of Emperor Krishnadevaraya, Tuluva Dynasty, Vijayanagara Empire). ' +
    'Prior to the destruction of the capital in 1565 CE and prior to modern colonial interventions.'
  ),

  // 3. Target Architectural Component (Single Active Target)
  targetArchitecturalComponent: (
    'COMP-06-BRICK-VIMANA: Multi-tiered stepped pyramidal brick-and-mortar Dravidian superstructure ' +
    'crowned with a domical shikhara, situated upon the flat roof terrace above the kapota cornice.'
  ),

  // 4. Preserved Existing Components (100% Fabric Locked)
  preservedExistingComponents: [
    'COMP-01-PLINTH (Molded granite adhisthana plinth and narrative relief friezes)',
    'COMP-02-WHEELS-AXLES (Four monolithic stone wheels with lotus petal carvings and stone axles)',
    'COMP-03-SANCTUM-CELLA (Granite walls of the Garuda sanctum cella and west-facing portal)',
    'COMP-04-PILLARS-BRACKETS (Corner monolithic pilasters and pushpapotika lotus corbel brackets)',
    'COMP-05-ROOF-CORNICE (Cantilevered granite kapota cornice with underside simulated rafters)',
    'COMP-07-DRAFT-HORSES (In-situ granite entrance balustrade walls and surviving hindquarter reliefs remain untouched)',
    'COMP-08-GUARDIAN-ELEPHANTS (Existing guardian elephant sculptures remain untouched in-situ in this first target)',
    'COMP-09-DECORATIVE-FRIEZES (Continuous bas-relief friezes of battle elephants, horses, and vyalas)'
  ],

  // 5. Missing Components to Restore (Vimana Superstructure ONLY)
  missingComponentsToRestore: [
    'COMP-06-BRICK-VIMANA (Stepped pyramidal brick-and-mortar Dravidian vimana superstructure crowning the flat granite roof terrace)'
  ],

  // 6. Historical Reference Identifiers
  historicalReferenceIdentifiers: [
    'IMG-HIST-1856-GREENLAW-01 (Primary archival calotype baseline proving standing superstructure in 1856)',
    'IMG-HIST-1856-NEILL-02 (Royal Collection Trust RCIN 2603956 independent archival corroboration)',
    'IMG-MOD-2016-DARSI-03 (High-resolution 3840x2560 modern ground-truth canvas for surviving granite fabric)'
  ],

  // 7. Evidence-Backed Architectural Features (Classified by Rigor)
  evidenceBackedFeatures: [
    'VERIFIED: Stepped brick-and-mortar superstructure silhouette resting on the flat roof documented in 1856 calotype photography.',
    'VERIFIED: Rounded/domical crowning cupola (shikhara) capping the stepped pyramidal tower.',
    'VERIFIED: Construction in fired brick masonry bonded with lime mortar (chunam).',
    'VERIFIED: Surviving authentic 16th-century granite ashlar chassis, wheels, axles, pilasters, and kapota cornice preserved in-situ.',
    'PROBABLE: Visual height ratio of the superstructure approximately equal to the granite body height (~1:1 visual ratio, estimated from 1856 calotypes; not a measured metric).',
    'PROBABLE: Two to three receding storeys (talas) articulated with miniature pavilion moldings (kutas and shalas) conforming to contemporary 16th-century Vijayanagara Dravidian brick shrines.',
    'PROBABLE: Weathered off-white lime plaster (sudha) surface finish with subtle exposed pale terracotta brick patination.'
  ],

  // 8. Uncertain Architectural Features
  uncertainFeatures: [
    'Exact metric height of the lost superstructure in meters (unmeasured prior to loss; must rely on proportional visual ratio).',
    'Micro-stucco figural deity sculptures inside the vimana niches (unresolvable from 1856 calotype paper grain; must NOT be fabricated).',
    'Intact physical condition of terminal stupi/kalasa finial (apex exhibited an eroded stub in 1856 calotypes).',
    'Draft animal forequarter anatomy and original consecrated Garuda idol (both strictly excluded from active reconstruction target).'
  ],

  // 9. Forbidden Visual Modifications
  forbiddenVisualModifications: [
    'No alteration or redesign of the entrance staircase or granite balustrades.',
    'No reconstruction or invention of missing draft horses.',
    'No alteration or relocation of the guardian stone elephants in this first reconstruction target.',
    'No modification of the authentic surviving granite plinth, wheels, axles, pilasters, or cornice.',
    'No fantasy architecture, extra towers, gopurams, or imaginary pavilions.',
    'No fabricated deity sculptures inside the vimana niches.',
    'No modern infrastructure: barricades, chains, concrete steps, electric wiring, or contemporary crowds.',
    'No arbitrary CGI paint schemes (bright vermilion, electric blue, or gold leaf).',
    'No full 360-degree panorama synthesis; target a single perspective historical image only.'
  ],

  // 10. Recommended Viewpoint
  recommendedViewpoint: {
    name: 'Northwest Oblique Three-Quarter Perspective View',
    angleDescription: 'Perspective camera position stationed in the northwest quadrangle of the Vitthala courtyard facing southeast toward the chariot front and northern flank.',
    yawRange: '-45° to -50° relative to chariot western axial entrance',
    pitchRange: '-3° to 0° (eye-level pedestrian perspective)',
    fieldOfView: 'approx. 65° to 75° rectilinear horizontal FOV',
    matchingArchivalReferenceId: 'IMG-HIST-1856-GREENLAW-01 / IMG-HIST-1856-NEILL-02',
    matchingModernReferenceId: 'IMG-MOD-2016-DARSI-03',
    rationale: (
      'This viewpoint is the sole camera station with verified 1856 archival calotype coverage showing the standing ' +
      'superstructure, and directly matches the ultra-sharp 3840x2560 modern ground-truth photograph (Darsi 2016). ' +
      'It captures the plinth, north wheels, western entrance steps, and full upper roof terrace simultaneously.'
    )
  },

  // 11. Visual Generation Configuration (Segregated from Historical Facts)
  visualConfig: {
    cameraAngle: 'Northwest Oblique Three-Quarter View (Yaw ~ -48° relative to west axis)',
    cameraElevation: 'Pedestrian eye level (~1.6m elevation above courtyard flagstones)',
    cameraDistance: 'Medium distance (~15–20m from monument northwest corner)',
    cameraFraming: 'Full monument framing centered on the Stone Chariot with ample vertical headroom above the roofline for the restored vimana',
    lightingCondition: 'Warm directional sunlight casting crisp 45° architectural cast shadows from the southeast',
    solarPosition: 'Low morning/afternoon sun vector highlighting granite relief carvings and vimana tier articulation',
    atmosphericAppearance: 'Clear dry-season Hampi sky with subtle warm atmospheric haze; no dramatic CGI clouds',
    recommendedAspectRatio: '3:2 landscape or 16:9 landscape (matching base image 3840x2560)',
    targetResolution: 'High-resolution composite (3840x2560 pixels)',
    isHistoricalFact: false
  },

  // 12. Image-Generation Limitations
  imageGenerationLimitations: [
    'Single perspective target only: Full 360-degree historical equirectangular panorama synthesis is strictly prohibited, as >270° of the surrounding space is unrecorded.',
    'Granite fabric must be preserved through precise alpha-mask compositing or strict pixel-level inpainting constraints, not complete image re-generation.',
    'Generative synthesis is strictly and exclusively confined to the upper bounding envelope above the flat granite roof terrace for the vimana superstructure. Ground-level elements, entrance balustrades, staircase, wheels, and courtyard remain 100% untouched.'
  ],

  // 13. Mandatory Disclosure Statement
  mandatoryDisclosure: (
    'AI-generated architectural interpretation based on available historical photographs, ' +
    'archaeological information and documented architectural evidence. Uncertain details may ' +
    'involve visual interpretation and are not claimed as verified historical facts.'
  )
};
