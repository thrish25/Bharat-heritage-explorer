export { KONARK_SCENES, DEFAULT_KONARK_SCENE_ID } from './scenes';

export const KONARK_CONFIG = {
  id: 'konark',
  engine: 'pannellum' as const,
  name: {
    en: 'Konark Sun Temple',
    kn: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
    hi: 'कोणार्क सूर्य मंदिर',
  },
  viewpointCount: 5,
  hotspotCount: 18,
  originalSourceDirectory: 'konark-sun-temple---360°-virtual-exploration (1)/',
  originalPanoramaPath: 'public/assets/monuments/konark/panoramas/',
  audioLanguagesAvailable: ['en', 'kn', 'hi'] as const,
  integrationStatus: 'integrated',
};
