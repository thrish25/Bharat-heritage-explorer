import { ViewerEngineType } from '../../types';
import { HAMPI_SCENES, DEFAULT_HAMPI_SCENE_ID } from './scenes';

export const HAMPI_CONFIG = {
  id: 'hampi',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Hampi',
    kn: 'ಹಂಪಿ',
    hi: 'हम्पी',
  },
  viewpointCount: 5,
  hotspotCount: 20,
  originalSourceDirectory: 'hampi-heritage-explorer-export/',
  originalPanoramaPath: 'public/assets/monuments/hampi/panoramas/',
  originalAudioPath: 'public/assets/monuments/hampi/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'fully_integrated',
};

export { HAMPI_SCENES, DEFAULT_HAMPI_SCENE_ID };
