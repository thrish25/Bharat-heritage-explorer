/**
 * Historical Data Repository & Reconstruction Validator
 * Royal Indian Heritage Platform
 *
 * AUDIT SUITE (PHASE 2.1):
 * Programmatically audits and validates:
 * 1. The vimana is the SOLE active reconstruction target (no balustrades, no horses, no elephant removal).
 * 2. Cross-reference integrity: all Source IDs and Reference IDs resolve.
 * 3. Evidence classification conformity (VERIFIED, PROBABLE, UNCERTAIN, UNSUPPORTED).
 * 4. Separation of visual generation choices (camera, lighting) from objective historical facts.
 * 5. Detection of unsupported numerical measurements masquerading as verified facts.
 * 6. Explicit cataloging of historical gaps and uncertainties.
 * 7. Physical on-disk verification of all declared local reference image assets.
 * 8. External archive references are not incorrectly classified as local files.
 * 9. Inclusion of mandatory interpretation disclosure in prompt outputs.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  HAMPI_STONE_CHARIOT_IDENTITY,
  HAMPI_STONE_CHARIOT_PERIOD,
  HAMPI_STONE_CHARIOT_COMPONENTS,
  HAMPI_STONE_CHARIOT_SOURCES,
  HAMPI_STONE_CHARIOT_REFERENCES,
  HAMPI_STONE_CHARIOT_CONSTRAINTS,
  HAMPI_STONE_CHARIOT_UNCERTAINTIES,
  HAMPI_STONE_CHARIOT_SPECIFICATION,
  buildStoneChariotReconstructionPrompt
} from './index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../../');

interface ValidationReport {
  timestamp: string;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  errors: string[];
  warnings: string[];
  summary: {
    sourcesCount: number;
    componentsCount: number;
    activeTargetsCount: number;
    referencesCount: number;
    constraintsCount: number;
    uncertaintiesCount: number;
    localAssetsVerifiedCount: number;
  };
}

export function validateReconstructionData(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  let totalChecks = 0;
  let passedChecks = 0;

  function assert(condition: boolean, passMsg: string, failMsg: string) {
    totalChecks++;
    if (condition) {
      passedChecks++;
    } else {
      errors.push(failMsg);
    }
  }

  // --------------------------------------------------------------------------
  // Check 1: Identity & Period Integrity
  // --------------------------------------------------------------------------
  assert(
    !!HAMPI_STONE_CHARIOT_IDENTITY.id && !!HAMPI_STONE_CHARIOT_IDENTITY.name.en,
    'Monument identity has valid ID and title',
    'Monument identity is missing ID or primary name'
  );

  assert(
    ['VERIFIED', 'PROBABLE', 'UNCERTAIN', 'UNSUPPORTED'].includes(
      HAMPI_STONE_CHARIOT_PERIOD.evidenceClassification
    ),
    'Period classification uses valid 4-tier enum',
    `Invalid period classification: ${HAMPI_STONE_CHARIOT_PERIOD.evidenceClassification}`
  );

  // --------------------------------------------------------------------------
  // Check 2: Sources Integrity & Source ID Resolution
  // --------------------------------------------------------------------------
  const knownSourceIds = new Set(Object.keys(HAMPI_STONE_CHARIOT_SOURCES));

  assert(
    knownSourceIds.size >= 10,
    `Source register contains ${knownSourceIds.size} sources (>= 10)`,
    `Insufficient sources in register: found ${knownSourceIds.size}`
  );

  for (const [sId, source] of Object.entries(HAMPI_STONE_CHARIOT_SOURCES)) {
    assert(
      source.sourceId === sId,
      `Source ID key matches record for ${sId}`,
      `Source ID mismatch: key=${sId}, record=${source.sourceId}`
    );
    assert(
      !!source.title && !!source.sourceUrl,
      `Source ${sId} has title and URL`,
      `Source ${sId} missing title or URL`
    );
    assert(
      ['VERIFIED', 'PROBABLE', 'UNCERTAIN', 'UNSUPPORTED'].includes(source.confidenceLevel),
      `Source ${sId} uses valid confidence level`,
      `Source ${sId} invalid confidence level: ${source.confidenceLevel}`
    );
    assert(
      source.verifiedClaims.length > 0,
      `Source ${sId} has documented verified claims`,
      `Source ${sId} missing verified claims list`
    );
  }

  // --------------------------------------------------------------------------
  // Check 3: Components Integrity & Traceable Source Linking
  // --------------------------------------------------------------------------
  assert(
    HAMPI_STONE_CHARIOT_COMPONENTS.length >= 8,
    `Components catalog contains ${HAMPI_STONE_CHARIOT_COMPONENTS.length} components`,
    `Insufficient components cataloged: ${HAMPI_STONE_CHARIOT_COMPONENTS.length}`
  );

  // TASK 1 ENFORCEMENT: The vimana is the SOLE active reconstruction target
  const activeTargets = HAMPI_STONE_CHARIOT_COMPONENTS.filter(c => c.isTargetForReconstruction);
  assert(
    activeTargets.length === 1,
    `Exactly ONE active reconstruction target exists (found: ${activeTargets.length})`,
    `SCOPE VIOLATION: Expected exactly 1 active reconstruction target, found ${activeTargets.length}: ${activeTargets.map(c => c.componentId).join(', ')}`
  );

  assert(
    activeTargets[0]?.componentId === 'COMP-06-BRICK-VIMANA',
    'Active reconstruction target is strictly COMP-06-BRICK-VIMANA',
    `SCOPE VIOLATION: Active reconstruction target is ${activeTargets[0]?.componentId}, expected COMP-06-BRICK-VIMANA`
  );

  for (const comp of HAMPI_STONE_CHARIOT_COMPONENTS) {
    assert(
      !!comp.componentId && !!comp.componentName,
      `Component ${comp.componentId} has valid ID and name`,
      `Component missing ID or name: ${JSON.stringify(comp)}`
    );

    assert(
      ['SURVIVING_GRANITE', 'MISSING_SUPERSTRUCTURE', 'UNCERTAIN_DETAIL'].includes(comp.category),
      `Component ${comp.componentId} category is valid`,
      `Component ${comp.componentId} invalid category: ${comp.category}`
    );

    assert(
      ['VERIFIED', 'PROBABLE', 'UNCERTAIN', 'UNSUPPORTED'].includes(comp.evidenceClassification),
      `Component ${comp.componentId} classification is valid`,
      `Component ${comp.componentId} invalid classification: ${comp.evidenceClassification}`
    );

    // Verify all supporting source IDs resolve
    assert(
      comp.supportingSourceIds.length > 0,
      `Component ${comp.componentId} has supporting sources`,
      `Component ${comp.componentId} has NO supporting source IDs`
    );

    for (const srcId of comp.supportingSourceIds) {
      assert(
        knownSourceIds.has(srcId),
        `Component ${comp.componentId} source ${srcId} resolves`,
        `Component ${comp.componentId} references UNRESOLVED source ID: ${srcId}`
      );
    }

    // Verify no balustrade or draft horses are in active reconstruction
    if (comp.componentId === 'COMP-07-DRAFT-HORSES') {
      assert(
        !comp.isTargetForReconstruction,
        'Draft horses are EXCLUDED from active reconstruction target',
        'SCOPE VIOLATION: Draft horses incorrectly flagged for reconstruction'
      );
    }

    // Verify guardian elephants are not in active reconstruction
    if (comp.componentId === 'COMP-08-GUARDIAN-ELEPHANTS') {
      assert(
        !comp.isTargetForReconstruction,
        'Guardian elephants are EXCLUDED from active reconstruction target',
        'SCOPE VIOLATION: Guardian elephants incorrectly flagged for reconstruction'
      );
    }

    // Verify no unmeasured metric height claims are marked as VERIFIED
    if (comp.componentId === 'COMP-06-BRICK-VIMANA') {
      const desc = comp.architecturalDescription.toLowerCase();
      assert(
        !desc.includes('exact height: 3.2m') && !desc.includes('height of 3.2 meters as a verified fact'),
        'Vimana component avoids unsupported exact metric height assertions',
        'Vimana component incorrectly asserts unmeasured metric height as a verified fact'
      );
      assert(
        desc.includes('~1:1') || desc.includes('proportional'),
        'Vimana component correctly uses proportional visual ratio',
        'Vimana component missing proportional visual ratio reference'
      );
    }

    // Verify preservation rules
    if (comp.isPreservedFabric) {
      assert(
        !comp.isTargetForReconstruction,
        `Preserved component ${comp.componentId} is NOT flagged for reconstruction`,
        `Preserved component ${comp.componentId} incorrectly flagged for reconstruction!`
      );
    }
  }

  // --------------------------------------------------------------------------
  // Check 4: Reference Images Audit & Local Asset Verification
  // --------------------------------------------------------------------------
  const knownRefIds = new Set(Object.keys(HAMPI_STONE_CHARIOT_REFERENCES));
  let localAssetsVerified = 0;

  for (const [rId, ref] of Object.entries(HAMPI_STONE_CHARIOT_REFERENCES)) {
    assert(
      ref.referenceId === rId,
      `Reference ID key matches record for ${rId}`,
      `Reference ID mismatch: key=${rId}, record=${ref.referenceId}`
    );

    assert(
      knownSourceIds.has(ref.sourceId),
      `Reference ${rId} source ${ref.sourceId} resolves`,
      `Reference ${rId} has UNRESOLVED source ID: ${ref.sourceId}`
    );

    assert(
      ['VERIFIED', 'NEEDS_VERIFICATION'].includes(ref.verificationStatus),
      `Reference ${rId} has valid verification status: ${ref.verificationStatus}`,
      `Reference ${rId} invalid verification status: ${ref.verificationStatus}`
    );

    assert(
      !!ref.primaryRole,
      `Reference ${rId} has assigned primary role`,
      `Reference ${rId} missing primaryRole`
    );

    // Verify role assignment rules
    if (rId === 'IMG-MOD-2016-DARSI-03') {
      assert(
        ref.primaryRole === 'SURVIVING_GRANITE_REFERENCE',
        'Modern photo (Darsi 2016) is role SURVIVING_GRANITE_REFERENCE only',
        `Modern photo has wrong primary role: ${ref.primaryRole}`
      );
      assert(
        ref.isSuitableForGeminiInput === true,
        'Modern photo is marked suitable for Gemini base input',
        'Modern photo should be suitable for Gemini input'
      );
    }

    if (rId.includes('1856')) {
      assert(
        ref.primaryRole === 'SUPERSTRUCTURE_GUIDE',
        `Archival 1856 photo ${rId} is role SUPERSTRUCTURE_GUIDE`,
        `Archival photo ${rId} has wrong primary role: ${ref.primaryRole}`
      );
    }

    // Verify local vs external asset classification
    if (ref.hasLocalAsset) {
      assert(
        !!ref.localAssetPath,
        `Reference ${rId} declares local asset path`,
        `Reference ${rId} has hasLocalAsset=true but missing localAssetPath`
      );

      const resolvedPath = path.resolve(PROJECT_ROOT, ref.localAssetPath || '');
      const exists = fs.existsSync(resolvedPath);
      assert(
        exists,
        `Local asset file exists on disk for ${rId} at ${ref.localAssetPath}`,
        `LOCAL ASSET FILE MISSING ON DISK: ${resolvedPath} for reference ${rId}`
      );
      if (exists) localAssetsVerified++;
    } else {
      assert(
        !ref.localAssetPath,
        `External reference ${rId} correctly leaves localAssetPath undefined`,
        `External reference ${rId} has hasLocalAsset=false but set localAssetPath: ${ref.localAssetPath}`
      );
      assert(
        ref.isSuitableForGeminiInput === false,
        `External archive reference ${rId} is NOT marked suitable for local Gemini input`,
        `External archive reference ${rId} incorrectly marked suitable for local Gemini input without local file`
      );
    }
  }

  // --------------------------------------------------------------------------
  // Check 5: Constraints & Uncertainties Mapping
  // --------------------------------------------------------------------------
  const knownComponentIds = new Set(HAMPI_STONE_CHARIOT_COMPONENTS.map(c => c.componentId));

  // Check target constraints: exactly 1 target constraint
  const targetConstraints = HAMPI_STONE_CHARIOT_CONSTRAINTS.filter(c => c.category === 'RECONSTRUCTION_TARGET');
  assert(
    targetConstraints.length === 1,
    `Exactly ONE target constraint exists (found: ${targetConstraints.length})`,
    `SCOPE VIOLATION: Expected 1 reconstruction target constraint, found ${targetConstraints.length}`
  );
  assert(
    targetConstraints[0]?.id === 'CONST-TARGET-01-BRICK-VIMANA-RESTORATION',
    'Target constraint is CONST-TARGET-01-BRICK-VIMANA-RESTORATION',
    `Wrong target constraint: ${targetConstraints[0]?.id}`
  );

  for (const constraint of HAMPI_STONE_CHARIOT_CONSTRAINTS) {
    for (const cId of constraint.appliesToComponentIds) {
      assert(
        knownComponentIds.has(cId),
        `Constraint ${constraint.id} applies to valid component ${cId}`,
        `Constraint ${constraint.id} references UNKNOWN component ID: ${cId}`
      );
    }
  }

  assert(
    HAMPI_STONE_CHARIOT_UNCERTAINTIES.length >= 5,
    `Uncertainty register contains ${HAMPI_STONE_CHARIOT_UNCERTAINTIES.length} items (>= 5)`,
    `Insufficient items in uncertainty register: ${HAMPI_STONE_CHARIOT_UNCERTAINTIES.length}`
  );

  // --------------------------------------------------------------------------
  // Check 6: Specification & Viewpoint Mapping
  // --------------------------------------------------------------------------
  const spec = HAMPI_STONE_CHARIOT_SPECIFICATION;
  assert(
    spec.monumentId === HAMPI_STONE_CHARIOT_IDENTITY.id,
    'Specification monumentId matches monument identity',
    `Specification monumentId mismatch: ${spec.monumentId} vs ${HAMPI_STONE_CHARIOT_IDENTITY.id}`
  );

  // Check that missingComponentsToRestore contains ONLY COMP-06
  assert(
    spec.missingComponentsToRestore.length === 1 &&
    spec.missingComponentsToRestore[0].includes('COMP-06-BRICK-VIMANA'),
    'Specification missingComponentsToRestore contains ONLY the vimana superstructure',
    `SCOPE VIOLATION: missingComponentsToRestore contains: ${spec.missingComponentsToRestore.join(', ')}`
  );

  // Check that reconstructionObjective does NOT include balustrade restoration
  assert(
    !spec.reconstructionObjective.toLowerCase().includes('return the entrance') &&
    !spec.reconstructionObjective.toLowerCase().includes('balustrades to their pre-modern'),
    'Specification reconstructionObjective excludes balustrade restoration',
    'SCOPE VIOLATION: reconstructionObjective incorrectly includes balustrade restoration'
  );

  // Check separation of visual choices from historical facts
  assert(
    spec.visualConfig.isHistoricalFact === false,
    'Specification visualConfig is explicitly marked isHistoricalFact: false',
    'Specification visualConfig must have isHistoricalFact: false'
  );

  // Check mandatory disclosure is present
  assert(
    spec.mandatoryDisclosure.includes('AI-generated architectural interpretation'),
    'Specification contains mandatory disclosure statement',
    'Specification missing mandatory disclosure statement'
  );

  // --------------------------------------------------------------------------
  // Check 7: Prompt Builder Execution & Guardrail Enforcement
  // --------------------------------------------------------------------------
  const prompt = buildStoneChariotReconstructionPrompt(
    HAMPI_STONE_CHARIOT_IDENTITY,
    spec,
    HAMPI_STONE_CHARIOT_CONSTRAINTS,
    HAMPI_STONE_CHARIOT_REFERENCES
  );

  assert(
    prompt.historicalFacts.length > 0,
    `Prompt template contains ${prompt.historicalFacts.length} verified historical facts`,
    'Prompt template has no historical facts'
  );

  // Verify historical facts do not claim camera or lighting as historical facts
  for (const fact of prompt.historicalFacts) {
    const lower = fact.toLowerCase();
    assert(
      !lower.includes('golden hour') && !lower.includes('eye-level') && !lower.includes('yaw'),
      'Historical facts do not mix rendering/camera parameters with historical evidence',
      `Fact inappropriately contains rendering choice: ${fact}`
    );
  }

  assert(
    prompt.probableInterpretations.length > 0,
    `Prompt template contains ${prompt.probableInterpretations.length} probable interpretations`,
    'Prompt template has no probable interpretations'
  );

  assert(
    prompt.visualConfig.isHistoricalFact === false,
    'Prompt template visualConfig has isHistoricalFact: false',
    'Prompt visualConfig must have isHistoricalFact: false'
  );

  assert(
    prompt.imageGenerationInstructions.length > 0,
    `Prompt template contains ${prompt.imageGenerationInstructions.length} image generation instructions`,
    'Prompt template has no image generation instructions'
  );

  assert(
    prompt.negativeConstraints.length > 0,
    `Prompt template contains ${prompt.negativeConstraints.length} negative constraints`,
    'Prompt template has no negative constraints'
  );

  // Verify negative constraints prohibit balustrade, horse, or elephant modifications
  const negJoined = prompt.negativeConstraints.join(' ');
  assert(
    negJoined.includes('entrance') && negJoined.includes('horses') && negJoined.includes('elephants'),
    'Negative constraints explicitly prohibit altering entrance, horses, and elephants',
    'Negative constraints missing explicit prohibitions on entrance, horses, or elephants'
  );

  // Verify mandatory disclosure is in prompt
  assert(
    prompt.mandatoryDisclosure.includes('AI-generated architectural interpretation'),
    'Prompt template contains mandatory disclosure statement',
    'Prompt template missing mandatory disclosure'
  );

  assert(
    prompt.composedPromptText.includes('[DISCLOSURE]') &&
    prompt.composedPromptText.includes('[VERIFIED HISTORICAL FACTS]') &&
    prompt.composedPromptText.includes('[PROBABLE ARCHITECTURAL INTERPRETATIONS]') &&
    prompt.composedPromptText.includes('[VISUAL GENERATION CONFIGURATION (RENDERING CHOICES — NOT HISTORICAL FACTS)]'),
    'Composed prompt text has all audited sections clearly demarcated',
    'Composed prompt text missing required structural demarcations'
  );

  return {
    timestamp: new Date().toISOString(),
    totalChecks,
    passedChecks,
    failedChecks: errors.length,
    errors,
    warnings,
    summary: {
      sourcesCount: knownSourceIds.size,
      componentsCount: HAMPI_STONE_CHARIOT_COMPONENTS.length,
      activeTargetsCount: activeTargets.length,
      referencesCount: knownRefIds.size,
      constraintsCount: HAMPI_STONE_CHARIOT_CONSTRAINTS.length,
      uncertaintiesCount: HAMPI_STONE_CHARIOT_UNCERTAINTIES.length,
      localAssetsVerifiedCount: localAssetsVerified
    }
  };
}

// Direct execution when invoked via CLI
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  console.log('='.repeat(70));
  console.log('HAMPI STONE CHARIOT: RECONSTRUCTION DATA VALIDATION (AUDIT SUITE 2.1)');
  console.log('='.repeat(70));

  const report = validateReconstructionData();
  console.log(`Timestamp:        ${report.timestamp}`);
  console.log(`Total Checks:     ${report.totalChecks}`);
  console.log(`Passed Checks:    ${report.passedChecks}`);
  console.log(`Failed Checks:    ${report.failedChecks}`);
  console.log('\nEntity Counts:');
  console.log(`  - Authoritative Sources:       ${report.summary.sourcesCount}`);
  console.log(`  - Architectural Components:    ${report.summary.componentsCount}`);
  console.log(`  - Active Reconstruction Target:${report.summary.activeTargetsCount} (COMP-06-BRICK-VIMANA)`);
  console.log(`  - Reference Images:            ${report.summary.referencesCount}`);
  console.log(`  - Local Assets Verified:       ${report.summary.localAssetsVerifiedCount}`);
  console.log(`  - Reconstruction Constraints:  ${report.summary.constraintsCount}`);
  console.log(`  - Cataloged Uncertainties:     ${report.summary.uncertaintiesCount}`);

  if (report.errors.length > 0) {
    console.error('\nVALIDATION ERRORS:');
    report.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
    process.exit(1);
  } else {
    console.log('\n>>> ALL AUDIT & INTEGRITY CHECKS PASSED (100%) <<<');
    process.exit(0);
  }
}
