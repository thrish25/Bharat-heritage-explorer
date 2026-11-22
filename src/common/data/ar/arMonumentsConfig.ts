/**
 * Explicit Monument-to-3D-Model & AR Configuration Registry (main integration layer)
 * Aggregates individual monument AR modules from Suchithra and Rashmi.
 */

import { ARMonumentConfig } from '../../types/ar';
import {
  HAMPI_AR_CONFIG,
  TAJ_MAHAL_AR_CONFIG,
  ELLORA_AR_CONFIG,
} from '../../../modules/suchithra';
import { KONARK_AR_CONFIG } from '../../../modules/rashmi';

export type { ARMonumentConfig };

export const AR_MONUMENTS_CONFIG: Record<string, ARMonumentConfig> = {
  hampi: HAMPI_AR_CONFIG,
  konark: KONARK_AR_CONFIG,
  tajmahal: TAJ_MAHAL_AR_CONFIG,
  'taj-mahal': TAJ_MAHAL_AR_CONFIG,
  ellora: ELLORA_AR_CONFIG,
};

/**
 * Safely resolves the AR monument configuration for any monument ID
 */
export function getARMonumentConfig(monumentId: string): ARMonumentConfig {
  const clean = (monumentId || '').toLowerCase().trim().replace(/_/g, '-');
  if (clean === 'tajmahal' || clean === 'taj-mahal' || clean === 'taj') {
    return AR_MONUMENTS_CONFIG['tajmahal'];
  }
  if (clean === 'hampi' || clean === 'vijayanagara') {
    return AR_MONUMENTS_CONFIG['hampi'];
  }
  if (clean === 'konark' || clean === 'konark-sun-temple') {
    return AR_MONUMENTS_CONFIG['konark'];
  }
  if (clean === 'ellora' || clean === 'ellora-caves' || clean === 'kailasa') {
    return AR_MONUMENTS_CONFIG['ellora'];
  }
  const found = AR_MONUMENTS_CONFIG[clean];
  if (!found) {
    console.warn(`[ARMonumentsConfig] Monument ID '${monumentId}' not mapped directly, falling back to Hampi.`);
    return AR_MONUMENTS_CONFIG['hampi'];
  }
  return found;
}

export const getARConfigForMonument = getARMonumentConfig;

export function getARAudioSrc(config: ARMonumentConfig, lang: 'en' | 'kn' | 'hi'): string {
  return `/assets/audio/ar/${config.audioPrefix}_narration_${lang}.mp3`;
}

export function getARSubtitleKey(config: ARMonumentConfig): 'hampi' | 'taj' | 'konark' | 'ellora' {
  return config.subtitleKey;
}
