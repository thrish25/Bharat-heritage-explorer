/**
 * Taj Mahal Panorama and Visual Asset Manifest
 * Maintained by Thrisha — Virtual Exploration Subsystem
 */

export interface TajMahalPanoramaAsset {
  id: string;
  title: string;
  equirectangularUrl: string;
  thumbnailUrl: string;
  resolution: string;
  hfov: number;
  pitch: number;
  yaw: number;
}

export const TAJ_MAHAL_PANORAMA_MANIFEST: Record<string, TajMahalPanoramaAsset> = {
  scene_3_charbagh_garden: {
    id: 'scene_3_charbagh_garden',
    title: 'Central Charbagh & Pool (Diana Bench)',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_3_charbagh_garden.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_3_garden_pool_diana_bench.jpg',
    resolution: '8192x4096',
    hfov: 98,
    pitch: 2,
    yaw: -55.5,
  },
  scene_5_north_riverside: {
    id: 'scene_5_north_riverside',
    title: 'North Riverside Terrace (Chameli Farsh)',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_5_north_riverside.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_5_north_riverside_terrace.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  scene_1_roof_terrace: {
    id: 'scene_1_roof_terrace',
    title: 'Upper Roof Terrace & Dome Base',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_1_roof_terrace.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_1_upper_roof_terrace.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  scene_4_mosque_interior: {
    id: 'scene_4_mosque_interior',
    title: 'Taj Mahal Mosque (Kau Ban Masjid) Interior',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_4_mosque_interior.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_4_red_sandstone_mosque.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  scene_2_outer_ambulatory: {
    id: 'scene_2_outer_ambulatory',
    title: 'Central Chamber – Outer Ambulatory Corridor',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_2_outer_ambulatory.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_2_outer_ambulatory_corridor.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
  scene_6_inner_sanctuary: {
    id: 'scene_6_inner_sanctuary',
    title: 'Cenotaph Sanctuary – Royal Memorials',
    equirectangularUrl: '/assets/monuments/taj-mahal/panoramas/scene_6_inner_sanctuary.jpg',
    thumbnailUrl: '/assets/monuments/taj-mahal/thumbnails/scene_6_inner_cenotaph_sanctuary.jpg',
    resolution: '8192x4096',
    hfov: 95,
    pitch: 0,
    yaw: 0,
  },
};

export * from './manifest';
