import {
  Scene,
  SceneDemo,
  ArchitecturalHotspot,
  HotspotDemo,
  ViewerConfiguration,
} from '../types';

export interface IViewerAdapter {
  /**
   * Stage 1: Initialize Viewer
   * Attaches to DOM container and prepares rendering canvas.
   */
  initialize(container: HTMLElement, config?: ViewerConfiguration): Promise<void>;

  /**
   * Stage 2 & 3: Load Scene & Render Panorama
   * Loads the equirectangular panorama texture into GPU VRAM and sets camera orientation.
   */
  loadScene(scene: Scene | SceneDemo): Promise<void>;

  /**
   * Stage 4: Register Architectural Hotspots
   * Attaches native hotspots (Pannellum pitch/yaw or Three.js 3D meshes).
   */
  addHotspots(hotspots: ArchitecturalHotspot[] | HotspotDemo[]): void;

  /**
   * Stage 5: Handle Hotspot Selection
   */
  onHotspotSelected(callback: (hotspot: ArchitecturalHotspot | HotspotDemo) => void): void;

  /**
   * Stage 6: Camera & Orientation Controls
   */
  setOrientation(pitch: number, yaw: number, fov?: number): void;
  getOrientation(): { pitch: number; yaw: number; fov: number };
  zoom(deltaFov: number): void;
  setZoom(zoomFactor: number): void;
  toggleAutoRotate(enable?: boolean, speed?: number): void;
  setHotspotsVisible(visible: boolean): void;

  /**
   * Stage 7: Clean Teardown and GPU VRAM Disposal
   */
  destroy(): void;
}

