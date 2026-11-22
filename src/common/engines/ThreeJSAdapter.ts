import { IViewerAdapter } from './IViewerAdapter';
import {
  Scene,
  SceneDemo,
  ArchitecturalHotspot,
  HotspotDemo,
  ViewerConfiguration,
} from '../types';

export class ThreeJSAdapter implements IViewerAdapter {
  private container: HTMLElement | null = null;
  private currentScene: Scene | SceneDemo | null = null;
  private isAutoRotating = false;
  private autoRotateSpeed = 0.001;
  private animId: number = 0;
  private pitch: number = 0;
  private yaw: number = 0;
  private fov: number = 75;
  private onHotspotSelectCallback:
    | ((hotspot: ArchitecturalHotspot | HotspotDemo) => void)
    | null = null;
  private activeHotspots: Map<any, ArchitecturalHotspot | HotspotDemo> =
    new Map();

  // Internal Three.js subsystem handles
  private threeInstance: any = null;
  private sceneObj: any = null;
  private cameraObj: any = null;
  private rendererObj: any = null;
  private sphereMesh: any = null;
  private hotspotGroup: any = null;

  async initialize(
    container: HTMLElement,
    _config?: ViewerConfiguration
  ): Promise<void> {
    this.container = container;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Check for Three.js in global scope or window
    const THREE = (window as any).THREE;
    if (THREE) {
      this.threeInstance = THREE;
      this.sceneObj = new THREE.Scene();
      this.cameraObj = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.cameraObj.position.set(0, 0, 0.1);

      this.rendererObj = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
      this.rendererObj.setSize(width, height);
      this.rendererObj.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.container.appendChild(this.rendererObj.domElement);

      this.hotspotGroup = new THREE.Group();
      this.sceneObj.add(this.hotspotGroup);

      const animate = () => {
        this.animId = requestAnimationFrame(animate);
        if (this.isAutoRotating && this.cameraObj) {
          this.cameraObj.rotation.y += this.autoRotateSpeed;
        }
        if (this.rendererObj && this.sceneObj && this.cameraObj) {
          this.rendererObj.render(this.sceneObj, this.cameraObj);
        }
      };
      animate();
    } else {
      console.info(
        'ThreeJSAdapter: Standby mode initialized. Full WebGL render loop ready for Three.js instance.'
      );
    }
  }

  async loadScene(scene: Scene | SceneDemo): Promise<void> {
    this.currentScene = scene;
    const panoramaUrl =
      'panorama' in scene ? scene.panorama.equirectangularUrl : scene.image;

    const THREE = this.threeInstance || (window as any).THREE;
    if (THREE && this.sceneObj) {
      // Dispose old sphere
      if (this.sphereMesh) {
        this.sceneObj.remove(this.sphereMesh);
        this.sphereMesh.geometry?.dispose();
        this.sphereMesh.material?.map?.dispose();
        this.sphereMesh.material?.dispose();
        this.sphereMesh = null;
      }

      const loader = new THREE.TextureLoader();
      const texture = await loader.loadAsync(panoramaUrl);
      texture.colorSpace = THREE.SRGBColorSpace;

      // Inverted sphere: radius 500
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      this.sphereMesh = new THREE.Mesh(geometry, material);
      this.sceneObj.add(this.sphereMesh);

      this.addHotspots(scene.hotspots);
    }
  }

  addHotspots(hotspots: ArchitecturalHotspot[] | HotspotDemo[]): void {
    const THREE = this.threeInstance || (window as any).THREE;
    if (!THREE || !this.hotspotGroup) return;

    // Clear previous hotspot meshes
    while (this.hotspotGroup.children.length > 0) {
      const child = this.hotspotGroup.children[0];
      this.hotspotGroup.remove(child);
      child.geometry?.dispose();
      child.material?.dispose();
    }
    this.activeHotspots.clear();

    hotspots.forEach((h) => {
      // Discriminate coordinates: only process Three.js Cartesian 3D vectors
      if ('coordinates' in h && h.coordinates.engine === 'threejs') {
        const coords = h.coordinates.coords;
        const [x, y, z] = coords.position;

        const markerGeo = new THREE.SphereGeometry(12, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({
          color: 0xe3b963, // Royal Bright Gold
        });

        const mesh = new THREE.Mesh(markerGeo, markerMat);
        mesh.position.set(x, y, z);
        mesh.userData = { hotspot: h };

        this.hotspotGroup.add(mesh);
        this.activeHotspots.set(mesh, h);
      }
    });
  }

  onHotspotSelected(
    callback: (hotspot: ArchitecturalHotspot | HotspotDemo) => void
  ): void {
    this.onHotspotSelectCallback = callback;
  }

  setOrientation(pitch: number, yaw: number, fov?: number): void {
    this.pitch = pitch;
    this.yaw = yaw;
    if (this.cameraObj) {
      this.cameraObj.rotation.x = (pitch * Math.PI) / 180;
      this.cameraObj.rotation.y = (yaw * Math.PI) / 180;
      if (fov) {
        this.fov = fov;
        this.cameraObj.fov = fov;
        this.cameraObj.updateProjectionMatrix();
      }
    }
  }

  getOrientation(): { pitch: number; yaw: number; fov: number } {
    return { pitch: this.pitch, yaw: this.yaw, fov: this.fov };
  }

  zoom(deltaFov: number): void {
    this.fov = Math.max(30, Math.min(100, this.fov + deltaFov));
    if (this.cameraObj) {
      this.cameraObj.fov = this.fov;
      this.cameraObj.updateProjectionMatrix();
    }
  }

  setZoom(zoomFactor: number): void {
    this.fov = 75 / zoomFactor;
    if (this.cameraObj) {
      this.cameraObj.fov = this.fov;
      this.cameraObj.updateProjectionMatrix();
    }
  }

  toggleAutoRotate(enable?: boolean, speed = 0.001): void {
    this.autoRotateSpeed = speed;
    this.isAutoRotating = enable !== undefined ? enable : !this.isAutoRotating;
  }

  setHotspotsVisible(visible: boolean): void {
    if (this.hotspotGroup) {
      this.hotspotGroup.visible = visible;
    }
  }

  destroy(): void {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = 0;
    }

    if (this.sphereMesh) {
      this.sceneObj?.remove(this.sphereMesh);
      this.sphereMesh.geometry?.dispose();
      this.sphereMesh.material?.map?.dispose();
      this.sphereMesh.material?.dispose();
      this.sphereMesh = null;
    }

    if (this.hotspotGroup) {
      this.hotspotGroup.children.forEach((c: any) => {
        c.geometry?.dispose();
        c.material?.dispose();
      });
      this.sceneObj?.remove(this.hotspotGroup);
      this.hotspotGroup = null;
    }

    if (this.rendererObj) {
      try {
        this.rendererObj.dispose();
        this.rendererObj.forceContextLoss();
        if (this.rendererObj.domElement?.parentElement) {
          this.rendererObj.domElement.parentElement.removeChild(
            this.rendererObj.domElement
          );
        }
      } catch {
        // ignore
      }
      this.rendererObj = null;
    }

    this.sceneObj = null;
    this.cameraObj = null;
    this.container = null;
    this.activeHotspots.clear();
    this.onHotspotSelectCallback = null;
  }
}
