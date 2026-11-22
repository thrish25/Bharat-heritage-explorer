/**
 * Hampi Audio Narration Manifest
 * Trilingual narration: English (en), Kannada (kn), Hindi (hi)
 * Covers the 5 principal monuments of the Vijayanagara Sacred and Royal Centres
 */

export interface HampiAudioTrackMetadata {
  trackId: string;
  category: 'scene_intro' | 'hotspot';
  sources: {
    en: string;
    kn: string;
    hi: string;
  };
}

export const HAMPI_AUDIO_MANIFEST: HampiAudioTrackMetadata[] = [
  {
    trackId: 'vittala_temple',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/hampi/audio/en/vittala_temple.mp3',
      kn: '/assets/monuments/hampi/audio/kn/vittala_temple.mp3',
      hi: '/assets/monuments/hampi/audio/hi/vittala_temple.mp3',
    },
  },
  {
    trackId: 'stone_chariot',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/hampi/audio/en/stone_chariot.mp3',
      kn: '/assets/monuments/hampi/audio/kn/stone_chariot.mp3',
      hi: '/assets/monuments/hampi/audio/hi/stone_chariot.mp3',
    },
  },
  {
    trackId: 'ranga_mantapa',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/hampi/audio/en/ranga_mantapa.mp3',
      kn: '/assets/monuments/hampi/audio/kn/ranga_mantapa.mp3',
      hi: '/assets/monuments/hampi/audio/hi/ranga_mantapa.mp3',
    },
  },
  {
    trackId: 'lotus_mahal',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/hampi/audio/en/lotus_mahal.mp3',
      kn: '/assets/monuments/hampi/audio/kn/lotus_mahal.mp3',
      hi: '/assets/monuments/hampi/audio/hi/lotus_mahal.mp3',
    },
  },
  {
    trackId: 'elephant_stables',
    category: 'scene_intro',
    sources: {
      en: '/assets/monuments/hampi/audio/en/elephant_stables.mp3',
      kn: '/assets/monuments/hampi/audio/kn/elephant_stables.mp3',
      hi: '/assets/monuments/hampi/audio/hi/elephant_stables.mp3',
    },
  },
];

export * from './manifest';
