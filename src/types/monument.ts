/**
 * Trilingual localization support
 */
export type Language = 'en' | 'kn' | 'hi';

export interface MultilingualText {
  en: string;
  kn: string;
  hi: string;
}

/**
 * Supported 360° graphics engines
 */
export type ViewerEngineType = 'pannellum' | 'threejs';

/**
 * Engine-specific hotspot coordinate definitions
 */
export interface PannellumCoordinates {
  pitch: number; // Vertical angle in degrees (-90 to +90)
  yaw: number; // Horizontal angle in degrees (-180 to +180)
  hfov?: number; // Target horizontal field of view when focusing
}

export interface ThreeJsCoordinates {
  position: [number, number, number]; // Cartesian vector [x, y, z] in world space
  normal?: [number, number, number]; // Surface normal vector for orientation
  radius?: number; // Radius of sphere on which hotspot resides
}

/**
 * 2D CSS Emulation Coordinates (Phase 1 legacy compatibility)
 */
export interface Css2DCoordinates {
  top: string;
  left: string;
}

/**
 * Discriminated union for architectural hotspot coordinates
 */
export type HotspotCoordinates =
  | { engine: 'pannellum'; coords: PannellumCoordinates }
  | { engine: 'threejs'; coords: ThreeJsCoordinates }
  | { engine: 'css2d'; coords: Css2DCoordinates };

/**
 * Architectural Hotspot Category
 */
export type HotspotCategory =
  | 'Architecture'
  | 'Sculpture'
  | 'Inscriptions'
  | 'Astronomy'
  | 'Sanctum'
  | 'Relief'
  | 'Acoustics';

/**
 * Full Architectural Hotspot Definition
 */
export interface ArchitecturalHotspot {
  id: string;
  title: MultilingualText;
  category: HotspotCategory | string;
  coordinates: HotspotCoordinates;
  description: MultilingualText;
  historicalSignificance: MultilingualText;
  architecturalDetails: MultilingualText;
  audioNarrationTrackId?: string;
  audioSources?: {
    en?: string;
    kn?: string;
    hi?: string;
  };
  transcripts?: Partial<Record<Language, string>>;
}

/**
 * Audio Narration Definition
 */
export interface AudioNarration {
  trackId: string;
  title: MultilingualText;
  durationSeconds?: number;
  durationFormatted?: string; // e.g. "2:15"
  audioSources: {
    en?: string; // URL / relative path to English .mp3
    kn?: string; // Optional Kannada audio track
    hi?: string; // Optional Hindi audio track
  };
  transcripts?: Partial<Record<Language, string>>;
}

/**
 * Panorama & Camera Configuration
 */
export interface PanoramaConfiguration {
  engine: ViewerEngineType;
  equirectangularUrl: string;
  lowResThumbnailUrl?: string;
  initialOrientation: {
    pitch?: number;
    yaw?: number;
    hfov?: number;
    cameraPosition?: [number, number, number];
    cameraTarget?: [number, number, number];
    fov?: number;
  };
  limits?: {
    minPitch?: number;
    maxPitch?: number;
    minFov?: number;
    maxFov?: number;
  };
  assetProvenanceStatus?: 'verified_historical' | 'legacy_unverified' | 'provisional_synthesis';
}

/**
 * Unified Scene (Viewpoint) Definition
 */
export interface Scene {
  id: string;
  sceneNumber: number;
  caveId?: 'cave_10' | 'cave_16' | string;
  title: MultilingualText;
  subtitle: MultilingualText;
  thumbnailUrl: string;
  panorama: PanoramaConfiguration;
  audioNarration?: AudioNarration;
  hotspots: ArchitecturalHotspot[];
  linkedSceneIds?: string[];
  historicalReferences?: { title: string; url: string; organization: string }[];
}

/**
 * Legacy Phase 1 Compatibility Types
 */
export interface HotspotDemo {
  id: string;
  title: MultilingualText;
  category: string;
  position: {
    top: string;
    left: string;
  };
  description: MultilingualText;
  historicalSignificance: MultilingualText;
  architecturalDetails: MultilingualText;
}

export interface SceneDemo {
  id: string;
  title: MultilingualText;
  subtitle: MultilingualText;
  image: string;
  audioTitle: MultilingualText;
  audioDuration: string;
  audioSource?: {
    en?: string;
    kn?: string;
    hi?: string;
  };
  hotspots: HotspotDemo[];
}

/**
 * Master Monument Entity Definition
 */
export interface Monument {
  id: string;
  engine?: ViewerEngineType;
  name: MultilingualText;
  subTitle: MultilingualText;
  location: MultilingualText;
  century: string;
  unescoStatus: string;
  shortDescription: MultilingualText;
  fullDescription: MultilingualText;
  architecturalHighlights: MultilingualText[];
  image: string;
  heroImage?: string;
  viewpointCount: number;
  hotspotCount: number;
  demoScenes: SceneDemo[];
  scenes?: Scene[];
  defaultSceneId?: string;
}

/**
 * Global Viewer Configuration
 */
export interface ViewerConfiguration {
  defaultLanguage: Language;
  autoRotateSpeed: number;
  enableHotspots: boolean;
  enableCompass: boolean;
  enableAudioAutoplay: boolean;
  sensitivity: {
    pan: number;
    zoom: number;
  };
}

