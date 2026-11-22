/**
 * Ellora Caves Panorama and Visual Asset Manifest
 * Maintained by Thrisha — Virtual Exploration Subsystem
 */

export interface PanoramaAsset {
  id: string;
  caveId: 'cave_10' | 'cave_16';
  title: string;
  equirectangularUrl: string;
  thumbnailUrl: string;
  resolution: string;
  hfov: number;
  pitch: number;
  yaw: number;
}

export const ELLORA_PANORAMA_MANIFEST: Record<string, PanoramaAsset> = {
  cave10_interior: {
    id: 'cave10_interior',
    caveId: 'cave_10',
    title: 'Cave 10 — The Great Chaitya Hall & Central Nave',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/cave10_interior.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/cave10_interior.jpg',
    resolution: '8192x4096',
    hfov: 100,
    pitch: -2,
    yaw: 0,
  },
  cave10_gallery: {
    id: 'cave10_gallery',
    caveId: 'cave_10',
    title: 'Cave 10 — Upper Music Gallery (Balcony)',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/cave10_gallery.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/cave10_gallery.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: -1,
    yaw: 0,
  },
  cave10_courtyard: {
    id: 'cave10_courtyard',
    caveId: 'cave_10',
    title: 'Cave 10 — Monolithic Courtyard & Chaitya Façade',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/cave10_courtyard.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/cave10_courtyard.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: -1,
    yaw: 0,
  },
  cave10_terrace: {
    id: 'cave10_terrace',
    caveId: 'cave_10',
    title: 'Cave 10 — Upper Chaitya Terrace & Sun Window',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/cave10_terrace.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/cave10_terrace.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  kailash_outer_forecourt: {
    id: 'kailash_outer_forecourt',
    caveId: 'cave_16',
    title: 'Cave 16 — Outer Forecourt & Entrance Screen',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_outer_forecourt.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_outer_forecourt.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: -2,
    yaw: 0,
  },
  kailash_entry_court_dhvajastambha: {
    id: 'kailash_entry_court_dhvajastambha',
    caveId: 'cave_16',
    title: 'Cave 16 — Northern Courtyard & Victory Pillar',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_entry_court_dhvajastambha.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_entry_court_dhvajastambha.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 5,
    yaw: 0,
  },
  kailash_gajalakshmi_vestibule: {
    id: 'kailash_gajalakshmi_vestibule',
    caveId: 'cave_16',
    title: 'Cave 16 — Gaja-Lakshmi Vestibule & Entrance Portal',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_gajalakshmi_vestibule.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_gajalakshmi_vestibule.jpg',
    resolution: '8192x4096',
    hfov: 90,
    pitch: 0,
    yaw: 0,
  },
  kailash_elephant_plinth_canyon: {
    id: 'kailash_elephant_plinth_canyon',
    caveId: 'cave_16',
    title: 'Cave 16 — Southern Chasm & Elephant Plinth',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_elephant_plinth_canyon.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_elephant_plinth_canyon.jpg',
    resolution: '8192x4096',
    hfov: 90,
    pitch: -2,
    yaw: 0,
  },
  kailash_southern_courtyard: {
    id: 'kailash_southern_courtyard',
    caveId: 'cave_16',
    title: 'Cave 16 — Southern Courtyard & Rock-Cut Arcades',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_southern_courtyard.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_southern_courtyard.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  kailash_nandi_mandapa_stairs: {
    id: 'kailash_nandi_mandapa_stairs',
    caveId: 'cave_16',
    title: 'Cave 16 — Nandi Mandapa & Processional Staircase',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_nandi_mandapa_stairs.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_nandi_mandapa_stairs.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: -2,
    yaw: 0,
  },
  kailash_central_axis_bridge: {
    id: 'kailash_central_axis_bridge',
    caveId: 'cave_16',
    title: 'Cave 16 — Central Suspended Bridge & Vimana',
    equirectangularUrl: '/assets/monuments/ellora/panoramas/kailash_central_axis_bridge.jpg',
    thumbnailUrl: '/assets/monuments/ellora/thumbnails/kailash_central_axis_bridge.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
};
