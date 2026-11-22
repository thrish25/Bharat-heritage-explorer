/**
 * Taj Mahal Audio Narration Manifest
 * Trilingual narration: English (en), Kannada (kn), Hindi (hi)
 * Covers the 6 panoramic viewpoints across Charbagh, Riverside, Terrace, Mosque, Ambulatory & Cenotaphs
 */

export interface TajAudioTrackMetadata {
  trackId: string;
  category: 'scene_intro' | 'hotspot';
  sources: {
    en: string;
    kn: string;
    hi: string;
  };
}

export const TAJ_MAHAL_AUDIO_MANIFEST: TajAudioTrackMetadata[] = [
  {
    trackId: 'scene_3_charbagh_garden',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_3_charbagh_garden.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_3_charbagh_garden.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_3_charbagh_garden.mp3',
    },
  },
  {
    trackId: 'scene_5_north_riverside',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_5_north_riverside.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_5_north_riverside.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_5_north_riverside.mp3',
    },
  },
  {
    trackId: 'scene_1_roof_terrace',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_1_roof_terrace.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_1_roof_terrace.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_1_roof_terrace.mp3',
    },
  },
  {
    trackId: 'scene_4_mosque_interior',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_4_mosque_interior.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_4_mosque_interior.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_4_mosque_interior.mp3',
    },
  },
  {
    trackId: 'scene_2_outer_ambulatory',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_2_outer_ambulatory.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_2_outer_ambulatory.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_2_outer_ambulatory.mp3',
    },
  },
  {
    trackId: 'scene_6_inner_sanctuary',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/taj-mahal/audio/en/scene_6_inner_sanctuary.mp3',
      kn: '/assets/monuments/taj-mahal/audio/kn/scene_6_inner_sanctuary.mp3',
      hi: '/assets/monuments/taj-mahal/audio/hi/scene_6_inner_sanctuary.mp3',
    },
  },
];

export * from './manifest';
