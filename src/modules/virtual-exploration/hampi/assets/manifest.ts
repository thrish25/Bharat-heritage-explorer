/**
 * Hampi Panorama and Visual Asset Manifest
 * Maintained by Thrisha — Virtual Exploration Subsystem
 */

export interface HampiPanoramaAsset {
  id: string;
  title: string;
  equirectangularUrl: string;
  thumbnailUrl: string;
  resolution: string;
  hfov: number;
  pitch: number;
  yaw: number;
}

export const HAMPI_PANORAMA_MANIFEST: Record<string, HampiPanoramaAsset> = {
  vittala_temple: {
    id: 'vittala_temple',
    title: 'Vijaya Vittala Temple Courtyard',
    equirectangularUrl: '/assets/monuments/hampi/panoramas/vittala_temple.jpg',
    thumbnailUrl: '/assets/monuments/hampi/thumbnails/vittala_temple.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: -2,
    yaw: 0,
  },
  stone_chariot: {
    id: 'stone_chariot',
    title: 'The Stone Chariot (Garuda Shrine)',
    equirectangularUrl: '/assets/monuments/hampi/panoramas/stone_chariot.jpg',
    thumbnailUrl: '/assets/monuments/hampi/thumbnails/stone_chariot.jpg',
    resolution: '8192x4096',
    hfov: 90,
    pitch: -2,
    yaw: 0,
  },
  ranga_mantapa: {
    id: 'ranga_mantapa',
    title: 'Ranga Mantapa — SaReGaMa Musical Pillars',
    equirectangularUrl: '/assets/monuments/hampi/panoramas/ranga_mantapa.jpg',
    thumbnailUrl: '/assets/monuments/hampi/thumbnails/ranga_mantapa.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  lotus_mahal: {
    id: 'lotus_mahal',
    title: 'Lotus Mahal (Kamal Mahal)',
    equirectangularUrl: '/assets/monuments/hampi/panoramas/lotus_mahal.jpg',
    thumbnailUrl: '/assets/monuments/hampi/thumbnails/lotus_mahal.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  elephant_stables: {
    id: 'elephant_stables',
    title: 'Elephant Stables (Gaja Shala)',
    equirectangularUrl: '/assets/monuments/hampi/panoramas/elephant_stables.jpg',
    thumbnailUrl: '/assets/monuments/hampi/thumbnails/elephant_stables.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
};

export * from './manifest';
