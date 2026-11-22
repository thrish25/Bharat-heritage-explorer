/**
 * Hampi Stone Chariot — Reusable Reconstruction Prompt Template
 * Royal Indian Heritage Platform
 *
 * Prepares structured, dynamically composed prompt payloads
 * for future Google Gemini image-generation API calls.
 *
 * AUDIT & SCOPE ENFORCEMENT (PHASE 2.1):
 * 1. Verified facts are strictly separated from probable interpretations.
 * 2. Uncertain features are NOT converted into mandatory generation instructions.
 * 3. Unsupported claims are completely excluded.
 * 4. Existing granite fabric is explicitly protected.
 * 5. The missing brick vimana is the SOLE active reconstruction target.
 * 6. Single NW-oblique architectural visualization target (NO 360° panoramas).
 * 7. Output is explicitly disclosed as an architectural interpretation, not an exact reproduction.
 *
 * NO API KEYS OR ACTIVE NETWORK CALLS ARE CONTAINED IN THIS MODULE.
 */

import type {
  MonumentIdentity,
  ReconstructionSpecification,
  ReconstructionConstraint,
  ReferenceImage,
  ReconstructionPromptTemplate,
  VisualGenerationConfig
} from '../types.ts';

export function buildStoneChariotReconstructionPrompt(
  identity: MonumentIdentity,
  spec: ReconstructionSpecification,
  constraints: ReconstructionConstraint[],
  references: Record<string, ReferenceImage>
): ReconstructionPromptTemplate {
  // 1. VERIFIED HISTORICAL FACTS (Directly supported by primary archaeological & archival evidence)
  const historicalFacts: string[] = [
    `Monument & Typology: ${identity.name.en} (${identity.typology}), located in the sacred center of Vijayanagara, Hampi, Karnataka, India.`,
    `Historical Era: Imperial Vijayanagara Dravidian architecture, 16th Century CE, reign of Emperor Krishnadevaraya (1509–1529 CE).`,
    `Original Dedication: Consecrated Garuda-mandapa (Garuda shrine) axially positioned facing the sanctum of the Vijaya Vittala Temple.`,
    `Authentic Surviving Granite Fabric: The molded adhisthana plinth, four concentric lotus-carved monolithic wheels, cylindrical stone axles, corner wall pilasters with pushpapotika brackets, and cantilevered kapota cornice are authentic 16th-century granite fabric preserved in-situ.`,
    `Documented Superstructure Presence: Primary archival calotype photography from 1856 (Col. Alexander Greenlaw, Dr. A. C. B. Neill / Royal Collection Trust RCIN 2603956) proves conclusively that a stepped pyramidal Dravidian superstructure stood on the flat granite roof.`,
    `Superstructure Material: Constructed of fired clay brick masonry bonded with lime mortar (chunam).`,
    `Superstructure Crowning Form: Terminated in a rounded domical shikhara (cupola) crowning element.`
  ];

  // 2. PROBABLE ARCHITECTURAL INTERPRETATIONS (Supported by credible comparative analysis)
  const probableInterpretations: string[] = [
    `Proportional Height Ratio: Archival 1856 perspective photographs indicate a visual height ratio approximately equal to the granite shrine body (~1:1 visual ratio; not an engineered metric measurement).`,
    `Storey Composition (Talas): Stepped profile reflects two to three receding storeys (talas) articulated with miniature Dravidian pavilion moldings (kutas and shalas), conforming to surviving contemporary 16th-century Vijayanagara brick shrines (e.g. Hazara Rama subsidiary shrines).`,
    `Surface Plaster: Finish composed of weathered, aged off-white lime plaster (sudha) with subtle exposed pale terracotta brick patination, harmonizing with the natural chloritic granite patina below.`
  ];

  // 3. VISUAL GENERATION CONFIGURATION (Rendering choices, NOT historical facts)
  const visualConfig: VisualGenerationConfig = {
    cameraAngle: 'Northwest Oblique Three-Quarter View (Yaw ~ -48° relative to west entrance axis)',
    cameraElevation: 'Pedestrian eye-level perspective (~1.6m elevation above courtyard flagstones)',
    cameraDistance: 'Medium distance (~15–20m from monument northwest corner)',
    cameraFraming: 'Full monument framing centered on the Stone Chariot with generous vertical headroom above the roofline for the restored vimana',
    lightingCondition: 'Warm directional sunlight casting crisp 45° architectural cast shadows from the southeast',
    solarPosition: 'Low morning/afternoon sun vector highlighting granite relief carvings and vimana tier articulation',
    atmosphericAppearance: 'Clear dry-season Hampi sky with subtle warm atmospheric haze; no dramatic CGI clouds',
    recommendedAspectRatio: '3:2 landscape or 16:9 landscape (matching base image 3840x2560, ~1.5:1 ratio)',
    targetResolution: '3840x2560 pixels (high-resolution composite)',
    isHistoricalFact: false
  };

  // 4. IMAGE-GENERATION INSTRUCTIONS (Operational directives for the composite visualization)
  const imageGenerationInstructions: string[] = [
    `Base Image Canvas: Use the verified 3840x2560 modern ground-truth photograph (Darsi 2016 / IMG-MOD-2016-DARSI-03) as the immutable base canvas for surviving granite fabric.`,
    `Restoration Target Bounding Box: Confine generative synthesis strictly and exclusively to the upper bounding envelope above the flat granite roof terrace.`,
    `Preserve Surviving Granite Structure: Lock 100% of the surviving granite plinth, wheels, axles, wall pilasters, cornice, entrance staircase, and balustrades without alteration.`,
    `Viewpoint Consistency: Align the reconstructed superstructure geometry with the northwest oblique three-quarter perspective.`,
    `Lighting Integration: Match the natural directional sunlight vector and ambient color temperature of the base photograph.`,
    `Courtyard Context: Keep the surrounding dressed granite flagstone courtyard and distant Vittala colonnades unchanged.`
  ];

  // 5. NEGATIVE CONSTRAINTS (Strictly prohibited modifications and fabulations)
  const negativeConstraints: string[] = [
    `DO NOT alter, redesign, or reconstruct the entrance staircase or granite balustrades.`,
    `DO NOT reconstruct or invent missing draft horses or free-standing animals.`,
    `DO NOT alter or relocate the guardian stone elephants in this first reconstruction target.`,
    `DO NOT modify the authentic surviving granite plinth, wheels, axles, pilasters, or cornice.`,
    `DO NOT add fantasy architecture, extra towers, gopurams, or imaginary pavilions.`,
    `DO NOT invent specific deity sculptures or figural statuary inside the vimana niches.`,
    `DO NOT generate exaggerated superstructure heights exceeding the documented ~1:1 visual ratio.`,
    `DO NOT introduce modern elements: barricades, chains, concrete steps, electric wiring, signs, or contemporary visitors.`,
    `DO NOT apply arbitrary modern CGI paint schemes (bright vermilion, electric blue, or gold leaf).`,
    `DO NOT generate a 360-degree panorama; target a single fixed perspective architectural visualization.`
  ];

  // 6. MANDATORY DISCLOSURE STATEMENT
  const mandatoryDisclosure = (
    'AI-generated architectural interpretation based on available historical photographs, ' +
    'archaeological information and documented architectural evidence. Uncertain details may ' +
    'involve visual interpretation and are not claimed as verified historical facts.'
  );

  // 7. COMPOSED PROMPT TEXT (Assembled payload with clear demarcations)
  const composedPromptText = [
    `[DISCLOSURE]`,
    mandatoryDisclosure,
    ``,
    `[OBJECTIVE]`,
    `Digitally restore ONLY the missing brick-and-mortar Dravidian vimana superstructure resting on the flat stone roof terrace of the Hampi Stone Chariot, while preserving 100% of the surviving granite chassis, wheels, plinth, entrance, and courtyard fabric.`,
    ``,
    `[VERIFIED HISTORICAL FACTS]`,
    ...historicalFacts.map(f => `- ${f}`),
    ``,
    `[PROBABLE ARCHITECTURAL INTERPRETATIONS]`,
    ...probableInterpretations.map(p => `- ${p}`),
    ``,
    `[VISUAL GENERATION CONFIGURATION (RENDERING CHOICES — NOT HISTORICAL FACTS)]`,
    `- Camera Angle: ${visualConfig.cameraAngle}`,
    `- Camera Elevation: ${visualConfig.cameraElevation}`,
    `- Framing: ${visualConfig.cameraFraming}`,
    `- Lighting: ${visualConfig.lightingCondition}`,
    `- Atmosphere: ${visualConfig.atmosphericAppearance}`,
    `- Recommended Aspect Ratio: ${visualConfig.recommendedAspectRatio}`,
    ``,
    `[OPERATIONAL GENERATION INSTRUCTIONS]`,
    ...imageGenerationInstructions.map(i => `- ${i}`),
    ``,
    `[STRICT NEGATIVE CONSTRAINTS]`,
    ...negativeConstraints.map(n => `- ${n}`)
  ].join('\n');

  return {
    templateId: 'PROMPT-HAMPI-CHARIOT-VIMANA-RECON-V2-AUDITED',
    monumentId: identity.id,
    historicalFacts,
    probableInterpretations,
    imageGenerationInstructions,
    negativeConstraints,
    visualConfig,
    recommendedAspectRatio: visualConfig.recommendedAspectRatio,
    colorAndAtmosphereGuideline: (
      'Natural historical Indian daylight: warm directional golden sunlight, crisp architectural cast shadows, ' +
      'authentic weathered gray-green chloritic granite patina on surviving chassis, aged off-white lime-plaster finish on brick superstructure.'
    ),
    mandatoryDisclosure,
    composedPromptText
  };
}
