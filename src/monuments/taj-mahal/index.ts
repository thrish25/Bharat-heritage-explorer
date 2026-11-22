import { ViewerEngineType } from '../../types';

export const TAJ_MAHAL_CONFIG = {
  id: 'tajmahal',
  engine: 'pannellum' as ViewerEngineType,
  name: {
    en: 'Taj Mahal',
    kn: 'ತಾಜ್ ಮಹಲ್',
    hi: 'ताज महल',
  },
  viewpointCount: 6,
  hotspotCount: 22,
  originalSourceDirectory: 'taj-mahal-explorer/',
  originalPanoramaPath: 'taj-mahal-explorer/assets/panoramas/',
  originalAudioPath: 'taj-mahal-explorer/assets/audio/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'ready_for_asset_linking',
};

