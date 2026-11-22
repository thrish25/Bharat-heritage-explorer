/**
 * Ellora Caves Audio Narration Manifest
 * Trilingual narration: English (en), Kannada (kn), Hindi (hi)
 * Covers Cave 10 (Vishwakarma) & Cave 16 (Kailasa Temple)
 */

export interface AudioTrackMetadata {
  trackId: string;
  category: 'scene_intro' | 'hotspot';
  caveId: 'cave_10' | 'cave_16';
  sources: {
    en: string;
    kn: string;
    hi: string;
  };
}

export const ELLORA_AUDIO_MANIFEST: AudioTrackMetadata[] = [
  {
    trackId: 'c10_interior_intro',
    category: 'scene_intro',
    caveId: 'cave_10',
    sources: {
      en: '/assets/monuments/ellora/audio/en/c10_interior_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/c10_interior_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/c10_interior_intro.mp3',
    },
  },
  {
    trackId: 'c10_gallery_intro',
    category: 'scene_intro',
    caveId: 'cave_10',
    sources: {
      en: '/assets/monuments/ellora/audio/en/c10_gallery_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/c10_gallery_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/c10_gallery_intro.mp3',
    },
  },
  {
    trackId: 'c10_courtyard_intro',
    category: 'scene_intro',
    caveId: 'cave_10',
    sources: {
      en: '/assets/monuments/ellora/audio/en/c10_courtyard_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/c10_courtyard_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/c10_courtyard_intro.mp3',
    },
  },
  {
    trackId: 'c10_terrace_intro',
    category: 'scene_intro',
    caveId: 'cave_10',
    sources: {
      en: '/assets/monuments/ellora/audio/en/c10_terrace_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/c10_terrace_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/c10_terrace_intro.mp3',
    },
  },
  {
    trackId: 'kailash_outer_forecourt_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_outer_forecourt_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_outer_forecourt_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_outer_forecourt_intro.mp3',
    },
  },
  {
    trackId: 'kailash_entry_court_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_entry_court_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_entry_court_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_entry_court_intro.mp3',
    },
  },
  {
    trackId: 'kailash_gajalakshmi_vestibule_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_gajalakshmi_vestibule_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_gajalakshmi_vestibule_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_gajalakshmi_vestibule_intro.mp3',
    },
  },
  {
    trackId: 'kailash_elephant_plinth_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_elephant_plinth_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_elephant_plinth_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_elephant_plinth_intro.mp3',
    },
  },
  {
    trackId: 'kailash_southern_courtyard_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_southern_courtyard_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_southern_courtyard_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_southern_courtyard_intro.mp3',
    },
  },
  {
    trackId: 'kailash_nandi_mandapa_stairs_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_nandi_mandapa_stairs_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_nandi_mandapa_stairs_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_nandi_mandapa_stairs_intro.mp3',
    },
  },
  {
    trackId: 'kailash_central_axis_bridge_intro',
    category: 'scene_intro',
    caveId: 'cave_16',
    sources: {
      en: '/assets/monuments/ellora/audio/en/kailash_central_axis_bridge_intro.mp3',
      kn: '/assets/monuments/ellora/audio/kn/kailash_central_axis_bridge_intro.mp3',
      hi: '/assets/monuments/ellora/audio/hi/kailash_central_axis_bridge_intro.mp3',
    },
  },
];
