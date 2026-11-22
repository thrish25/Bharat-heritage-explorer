import { Monument } from '../types';
import {
  HAMPI_MONUMENT,
  HAMPI_SCENES,
  DEFAULT_HAMPI_SCENE_ID,
  HAMPI_CONFIG,
  TAJ_MAHAL_MONUMENT,
  TAJ_MAHAL_SCENES,
  DEFAULT_TAJ_MAHAL_SCENE_ID,
  TAJ_MAHAL_CONFIG,
  ELLORA_MONUMENT,
  ELLORA_SCENES,
  DEFAULT_ELLORA_SCENE_ID,
  ELLORA_CONFIG,
} from '../../modules/thrisha';
import {
  KONARK_MONUMENT,
  KONARK_SCENES,
  DEFAULT_KONARK_SCENE_ID,
  KONARK_CONFIG,
} from '../../modules/rashmi';

/**
 * Master Curated Heritage Sanctuaries Catalog (main integration layer)
 * Aggregates all sovereign monument modules from Thrisha and Rashmi.
 */
export const MONUMENTS: Monument[] = [
  HAMPI_MONUMENT,
  KONARK_MONUMENT,
  TAJ_MAHAL_MONUMENT,
  ELLORA_MONUMENT,
];

// Backward-compatible individual exports
export {
  HAMPI_MONUMENT,
  HAMPI_SCENES,
  DEFAULT_HAMPI_SCENE_ID,
  HAMPI_CONFIG,
  KONARK_MONUMENT,
  KONARK_SCENES,
  DEFAULT_KONARK_SCENE_ID,
  KONARK_CONFIG,
  TAJ_MAHAL_MONUMENT,
  TAJ_MAHAL_SCENES,
  DEFAULT_TAJ_MAHAL_SCENE_ID,
  TAJ_MAHAL_CONFIG,
  ELLORA_MONUMENT,
  ELLORA_SCENES,
  DEFAULT_ELLORA_SCENE_ID,
  ELLORA_CONFIG,
};
