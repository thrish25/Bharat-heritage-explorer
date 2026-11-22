/**
 * Historical Digital Reconstruction Architecture — Types & Schemas
 * Royal Indian Heritage Platform
 * 
 * Formal TypeScript definitions for historical data repositories,
 * archaeological evidence modeling, reference asset mappings,
 * and AI-directed architectural reconstruction constraints.
 */

export type EvidenceClassification =
  | 'VERIFIED'
  | 'PROBABLE'
  | 'UNCERTAIN'
  | 'UNSUPPORTED';

export type ArchitecturalComponentCategory =
  | 'SURVIVING_GRANITE'
  | 'MISSING_SUPERSTRUCTURE'
  | 'UNCERTAIN_DETAIL';

export type ConstraintCategory =
  | 'MANDATORY_PRESERVATION'
  | 'RECONSTRUCTION_TARGET'
  | 'VISUAL_RESTRICTION';

export interface MonumentIdentity {
  id: string;
  name: {
    en: string;
    kn: string;
    hi: string;
  };
  complex: string;
  location: {
    district: string;
    state: string;
    country: string;
  };
  architecturalStyle: string;
  typology: string;
  religiousDedication: string;
  unescoReference: string;
  conservationAuthority: string;
  epigraphicalAttribution: string;
}

export interface HistoricalPeriod {
  era: string;
  dynasty: string;
  rulingMonarch: string;
  approximateCentury: string;
  evidenceClassification: EvidenceClassification;
  chronologyNotes: string;
}

export interface ArchitecturalComponent {
  componentId: string;
  componentName: string;
  traditionalDravidianTerm?: string;
  category: ArchitecturalComponentCategory;
  material: string;
  constructionTechnique: string;
  architecturalDescription: string;
  evidenceClassification: EvidenceClassification;
  supportingSourceIds: string[];
  historicalConfidence: string;
  sixteenthCenturyCondition: string;
  eighteenFiftySixCondition: string;
  presentDayCondition: string;
  reconstructionInstructions: string;
  prohibitedModifications: string[];
  isPreservedFabric: boolean;
  isTargetForReconstruction: boolean;
}

export interface HistoricalSource {
  sourceId: string;
  title: string;
  authorOrOrganization: string;
  publicationYear: number | string;
  sourceType: string;
  sourceUrl: string;
  archivalShelfmark?: string;
  relevantSection?: string;
  confidenceLevel: EvidenceClassification;
  verifiedClaims: string[];
  downgradedOrCorrectedClaims?: string[];
  verificationNotes: string;
}

export interface ReferenceImageLicensing {
  underlyingWorkLicense: string;
  digitalScanTerms: string;
  attributionRequirement: string;
}

export type ReferenceImageRole =
  | 'SUPERSTRUCTURE_GUIDE'
  | 'SURVIVING_GRANITE_REFERENCE'
  | 'ENVIRONMENT_BENCHMARK'
  | 'ARCHAEOLOGICAL_EVIDENCE';

export interface ReferenceImage {
  referenceId: string;
  sourceId: string;
  title: string;
  creator: string;
  captureYear: number | string;
  processMedium: string;
  repositoryArchive: string;
  archivalIdentifier?: string;
  originalSourceUrl: string;
  hasLocalAsset: boolean;
  localAssetPath?: string;
  isSuitableForGeminiInput: boolean;
  verificationStatus: 'VERIFIED' | 'NEEDS_VERIFICATION';
  primaryRole: ReferenceImageRole;
  imageOrientation: 'landscape' | 'portrait' | 'equirectangular';
  cameraViewpoint: string;
  visibleArchitecturalDetails: string[];
  intendedUse: string;
  licensingRestrictions: ReferenceImageLicensing;
  usageWarning?: string;
}

export interface ReconstructionConstraint {
  id: string;
  category: ConstraintCategory;
  title: string;
  description: string;
  rationale: string;
  appliesToComponentIds: string[];
}

export interface UncertaintyDescription {
  id: string;
  featureName: string;
  classification: 'UNCERTAIN' | 'UNSUPPORTED';
  issueDescription: string;
  evidenceAssessment: string;
  reconstructionInstruction: string;
}

export interface RecommendedViewpoint {
  name: string;
  angleDescription: string;
  yawRange: string;
  pitchRange: string;
  fieldOfView: string;
  matchingArchivalReferenceId: string;
  matchingModernReferenceId: string;
  rationale: string;
}

/**
 * Visual Generation Configuration
 * 
 * Explicitly separates rendering, lighting, camera framing, and composition
 * parameters from objective historical facts. None of these parameters are
 * described or treated as historically documented facts.
 */
export interface VisualGenerationConfig {
  cameraAngle: string;
  cameraElevation: string;
  cameraDistance: string;
  cameraFraming: string;
  lightingCondition: string;
  solarPosition: string;
  atmosphericAppearance: string;
  recommendedAspectRatio: string;
  targetResolution: string;
  isHistoricalFact: false;
}

export interface ReconstructionSpecification {
  specificationId: string;
  monumentId: string;
  reconstructionObjective: string;
  historicalTimeContext: string;
  targetArchitecturalComponent: string;
  preservedExistingComponents: string[];
  missingComponentsToRestore: string[];
  historicalReferenceIdentifiers: string[];
  evidenceBackedFeatures: string[];
  uncertainFeatures: string[];
  forbiddenVisualModifications: string[];
  recommendedViewpoint: RecommendedViewpoint;
  visualConfig: VisualGenerationConfig;
  imageGenerationLimitations: string[];
  mandatoryDisclosure: string;
}

export interface ReconstructionPromptTemplate {
  templateId: string;
  monumentId: string;
  historicalFacts: string[];
  probableInterpretations: string[];
  imageGenerationInstructions: string[];
  negativeConstraints: string[];
  visualConfig: VisualGenerationConfig;
  recommendedAspectRatio: string;
  colorAndAtmosphereGuideline: string;
  mandatoryDisclosure: string;
  composedPromptText: string;
}
