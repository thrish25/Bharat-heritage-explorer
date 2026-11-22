import { ViewerEngineType } from '../../types';
import { ELLORA_SCENES, DEFAULT_ELLORA_SCENE_ID } from './scenes';

export const ELLORA_CONFIG = {
  id: 'ellora',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Ellora Caves',
    kn: 'ಎಲ್ಲೋರಾ ಗುಹೆಗಳು',
    hi: 'एलोरा की गुफाएँ',
  },
  viewpointCount: 11,
  hotspotCount: 22,
  originalSourceDirectory: 'ellora/',
  originalPanoramaPath: 'public/assets/monuments/ellora/panoramas/',
  originalAudioPath: 'public/assets/monuments/ellora/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'fully_integrated',
};

export { ELLORA_SCENES, DEFAULT_ELLORA_SCENE_ID };
