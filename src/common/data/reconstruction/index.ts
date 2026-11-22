/**
 * Historical Digital Reconstruction Data Module — Public API
 * Royal Indian Heritage Platform
 */

export type * from './types.ts';

// Hampi Stone Chariot Exports
export {
  HAMPI_STONE_CHARIOT_IDENTITY,
  HAMPI_STONE_CHARIOT_PERIOD,
  HAMPI_STONE_CHARIOT_COMPONENTS
} from './hampi/stoneChariot.ts';

export {
  HAMPI_STONE_CHARIOT_SOURCES
} from './hampi/stoneChariotSources.ts';

export {
  HAMPI_STONE_CHARIOT_REFERENCES
} from './hampi/stoneChariotReferences.ts';

export {
  HAMPI_STONE_CHARIOT_CONSTRAINTS,
  HAMPI_STONE_CHARIOT_UNCERTAINTIES
} from './hampi/stoneChariotConstraints.ts';

export {
  HAMPI_STONE_CHARIOT_SPECIFICATION
} from './hampi/stoneChariotSpecification.ts';

export {
  buildStoneChariotReconstructionPrompt
} from './hampi/stoneChariotPrompt.ts';
