import { IViewerAdapter } from './IViewerAdapter';
import {
  Scene,
  SceneDemo,
  ArchitecturalHotspot,
  HotspotDemo,
  ViewerConfiguration,
} from '../types';

export class PannellumAdapter implements IViewerAdapter {
  private container: HTMLElement | null = null;
  private viewer: any = null;
  private currentScene: Scene | SceneDemo | null = null;
  private allScenes: (Scene | SceneDemo)[] = [];
  private onHotspotSelectCallback:
    | ((hotspot: ArchitecturalHotspot | HotspotDemo) => void)
    | null = null;
  private lastSelectedHotspotId: string | null = null;
  private lastSelectedHotspotTime = 0;
  private scenesDict: Record<string, any> = {};
  private currentLanguage: string = 'en';

  private triggerHotspotSelection(h: any): void {
    const now = Date.now();
    if (this.lastSelectedHotspotId === h.id && now - this.lastSelectedHotspotTime < 350) {
      return;
    }
    this.lastSelectedHotspotId = h.id;
    this.lastSelectedHotspotTime = now;
    if (this.onHotspotSelectCallback) {
      this.onHotspotSelectCallback(h);
    }
  }

  /**
   * Ensure Pannellum WebGL engine script is available on window
   */
  private async ensurePannellumLoaded(timeoutMs = 6000): Promise<any> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      const p = (window as any).pannellum;
      if (p && typeof p.viewer === 'function') {
        return p;
      }
      await new Promise((res) => setTimeout(res, 50));
    }
    throw new Error(
      'Pannellum WebGL library failed to load or initialize on window within the timeout.'
    );
  }

  /**
   * Style hotspot DOM node and bind event handlers with propagation stopping.
   * Completely prevents Pannellum from capturing click/press as panorama rotation.
   */
  private setupHotspotElement(hotSpotDiv: HTMLElement, h: any): void {
    if (!hotSpotDiv) return;

    // Reset default classes and assign custom styling
    hotSpotDiv.classList.remove('pnlm-sprite', 'pnlm-info');
    hotSpotDiv.classList.add('royal-heritage-pannellum-hotspot');
    hotSpotDiv.dataset.hotspotId = h.id;

    // Inner 8–10 px visible antique-gold circular dot (pointer-events: none)
    hotSpotDiv.innerHTML = '<span class="hotspot-visible-dot"></span>';

    // Tooltip
    const tooltip = document.createElement('span');
    tooltip.className = 'hotspot-hover-tooltip';
    const titleText =
      typeof h.title === 'string'
        ? h.title
        : h.title?.[this.currentLanguage] || h.title?.en || '';
    tooltip.textContent = titleText;
    hotSpotDiv.appendChild(tooltip);

    // Development Calibration Badge (visible only in calibration mode)
    const badge = document.createElement('span');
    badge.className = 'hotspot-calibration-badge';
    const coords =
      'coordinates' in h && h.coordinates?.engine === 'pannellum'
        ? h.coordinates.coords
        : { pitch: h.pitch ?? 0, yaw: h.yaw ?? 0 };
    badge.textContent = `${h.id.replace('hotspot_', '')} [P:${coords.pitch}° Y:${coords.yaw}°]`;
    hotSpotDiv.appendChild(badge);

    // CRITICAL: Stop propagation of mousedown, pointerdown, and touchstart
    // This stops mousedown from bubbling to Pannellum's drag surface (.pnlm-dragfix),
    // guaranteeing that pressing down on a hotspot NEVER starts panorama rotation!
    const stopDrag = (e: Event) => {
      e.stopPropagation();
    };

    hotSpotDiv.addEventListener('mousedown', stopDrag);
    hotSpotDiv.addEventListener('pointerdown', stopDrag);
    hotSpotDiv.addEventListener('touchstart', stopDrag, { passive: true });

    // Handle selection with debounce to prevent double-firing
    const handleSelect = (e: Event) => {
      e.stopPropagation();

      if (this.container) {
        this.container.querySelectorAll('.royal-heritage-pannellum-hotspot.active').forEach((el) => {
          el.classList.remove('active');
        });
      }
      hotSpotDiv.classList.add('active');

      this.triggerHotspotSelection(h);
    };

    hotSpotDiv.addEventListener('click', handleSelect);
    hotSpotDiv.addEventListener('touchend', (e) => {
      e.preventDefault();
      handleSelect(e);
    });
  }

  /**
   * Build declarative multi-scene dictionary for Pannellum
   */
  private buildSceneConfig(scene: Scene | SceneDemo): any {
    const panoCfg = 'panorama' in scene ? scene.panorama : null;
    const ori = panoCfg?.initialOrientation;
    const lim = panoCfg?.limits;
    const panoUrl = panoCfg ? panoCfg.equirectangularUrl : ('image' in scene ? scene.image : '');

    const sceneHotspots = (scene.hotspots || []).map((h: any) => {
      const coords =
        'coordinates' in h && h.coordinates?.engine === 'pannellum'
          ? h.coordinates.coords
          : { pitch: h.pitch || 0, yaw: h.yaw || 0 };

      const title =
        typeof h.title === 'string'
          ? h.title
          : h.title?.[this.currentLanguage] || h.title?.en || '';

      return {
        id: h.id,
        pitch: coords.pitch,
        yaw: coords.yaw,
        type: 'info',
        text: title,
        cssClass: 'royal-heritage-pannellum-hotspot',
        createTooltipFunc: (hotSpotDiv: HTMLElement) => {
          this.setupHotspotElement(hotSpotDiv, h);
        },
        clickHandlerFunc: (e: any) => {
          if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
          }
          if (this.container) {
            this.container.querySelectorAll('.royal-heritage-pannellum-hotspot.active').forEach((el) => {
              el.classList.remove('active');
            });
            const clickedEl = (e?.target?.closest?.('.royal-heritage-pannellum-hotspot') || e?.currentTarget) as HTMLElement | null;
            if (clickedEl) {
              clickedEl.classList.add('active');
            }
          }
          this.triggerHotspotSelection(h);
        },
      };
    });

    return {
      type: 'equirectangular',
      panorama: panoUrl,
      pitch: ori?.pitch ?? 0,
      yaw: ori?.yaw ?? 0,
      hfov: ori?.hfov ?? 115,
      minPitch: lim?.minPitch ?? -80,
      maxPitch: lim?.maxPitch ?? 80,
      minHfov: lim?.minFov ?? 35,
      maxHfov: lim?.maxFov ?? 125,
      autoLoad: true,
      showControls: false,
      showFullscreenCtrl: false,
      showZoomCtrl: false,
      compass: false,
      friction: 0.15,
      hotSpots: sceneHotspots,
    };
  }

  async initialize(
    container: HTMLElement,
    _config?: ViewerConfiguration,
    allScenes?: (Scene | SceneDemo)[]
  ): Promise<void> {
    this.container = container;
    if (!this.container.id) {
      this.container.id = 'pannellum-viewport-' + Math.random().toString(36).substring(2, 9);
    }

    if (allScenes && allScenes.length > 0) {
      this.allScenes = allScenes;
      this.scenesDict = {};
      for (const sc of allScenes) {
        this.scenesDict[sc.id] = this.buildSceneConfig(sc);
      }
    }
  }

  setLanguage(lang: string): void {
    this.currentLanguage = lang;
    if (!this.container || !this.currentScene) return;

    const hotspots = this.container.querySelectorAll('.royal-heritage-pannellum-hotspot');
    hotspots.forEach((el) => {
      const id = (el as HTMLElement).dataset.hotspotId;
      if (!id || !this.currentScene) return;
      const h = (this.currentScene.hotspots as any[])?.find((item: any) => item.id === id);
      if (h) {
        const tip = el.querySelector('.hotspot-hover-tooltip');
        if (tip) {
          const titleText =
            typeof h.title === 'string'
              ? h.title
              : h.title?.[lang] || h.title?.en || '';
          tip.textContent = titleText;
        }
      }
    });
  }

  async loadScene(scene: Scene | SceneDemo): Promise<void> {
    if (!this.container) throw new Error('Pannellum container not initialized');
    this.currentScene = scene;

    const pannellumGlobal = await this.ensurePannellumLoaded();

    // Ensure the target scene config is registered
    if (!this.scenesDict[scene.id]) {
      this.scenesDict[scene.id] = this.buildSceneConfig(scene);
    }

    // 1. Initial Viewer Instantiation (if not yet running)
    if (!this.viewer) {
      return new Promise<void>((resolve, reject) => {
        let settled = false;

        try {
          const ori = 'panorama' in scene ? scene.panorama?.initialOrientation : null;

          this.viewer = pannellumGlobal.viewer(this.container!.id, {
            default: {
              firstScene: scene.id,
              autoLoad: true,
              showControls: false,
              showFullscreenCtrl: false,
              showZoomCtrl: false,
              compass: false,
              friction: 0.15,
              hfov: ori?.hfov ?? 115,
              minHfov: 35,
              maxHfov: 125,
            },
            scenes: this.scenesDict,
          });

          const onLoad = () => {
            if (!settled) {
              settled = true;
              this.viewer.off('load', onLoad);
              this.viewer.off('error', onError);
              try {
                this.viewer.resize();
                // Explicitly calibrate initial camera pitch, yaw, and wide HFOV
                if (ori) {
                  this.viewer.setPitch(ori.pitch ?? 0);
                  this.viewer.setYaw(ori.yaw ?? 0);
                  if (ori.hfov) {
                    this.viewer.setHfov(ori.hfov);
                  }
                }
              } catch {}
              resolve();
            }
          };

          const onError = (err: any) => {
            if (!settled) {
              settled = true;
              this.viewer.off('load', onLoad);
              this.viewer.off('error', onError);
              const msg =
                typeof err === 'string'
                  ? err
                  : err?.message || 'Failed to load panorama image texture.';
              reject(new Error(msg));
            }
          };

          this.viewer.on('load', onLoad);
          this.viewer.on('error', onError);

          // If already loaded synchronously (e.g. from memory cache)
          if (this.viewer.isLoaded() && this.viewer.getScene() === scene.id) {
            onLoad();
          }
        } catch (err: any) {
          if (!settled) {
            settled = true;
            reject(err);
          }
        }
      });
    }

    // 2. Switching to another scene with the existing WebGL viewer
    return new Promise<void>((resolve, reject) => {
      let settled = false;

      // If already on the target scene and loaded
      if (this.viewer.getScene() === scene.id && this.viewer.isLoaded()) {
        try {
          this.viewer.resize();
        } catch {}
        resolve();
        return;
      }

      // Check if target scene is registered in Pannellum
      try {
        const currentConfig = this.viewer.getConfig();
        if (!currentConfig.scenes || !currentConfig.scenes[scene.id]) {
          this.viewer.addScene(scene.id, this.scenesDict[scene.id]);
        }
      } catch {
        // Safe registration fallback
      }

      const ori = 'panorama' in scene ? scene.panorama?.initialOrientation : null;

      const onLoad = () => {
        if (!settled) {
          settled = true;
          this.viewer.off('load', onLoad);
          this.viewer.off('error', onError);
          try {
            this.viewer.resize();
            if (ori) {
              this.viewer.setPitch(ori.pitch ?? 0);
              this.viewer.setYaw(ori.yaw ?? 0);
              if (ori.hfov) {
                this.viewer.setHfov(ori.hfov);
              }
            }
          } catch {}
          resolve();
        }
      };

      const onError = (err: any) => {
        if (!settled) {
          settled = true;
          this.viewer.off('load', onLoad);
          this.viewer.off('error', onError);
          const msg =
            typeof err === 'string'
              ? err
              : err?.message || 'Failed to load viewpoint panorama texture.';
          reject(new Error(msg));
        }
      };

      this.viewer.on('load', onLoad);
      this.viewer.on('error', onError);

      // Trigger scene transition with explicit orientation
      try {
        if (ori) {
          this.viewer.loadScene(scene.id, ori.pitch ?? 0, ori.yaw ?? 0, ori.hfov ?? 115);
        } else {
          this.viewer.loadScene(scene.id);
        }
      } catch (err: any) {
        if (!settled) {
          settled = true;
          this.viewer.off('load', onLoad);
          this.viewer.off('error', onError);
          reject(err);
        }
      }
    });
  }

  addHotspots(hotspots: ArchitecturalHotspot[] | HotspotDemo[]): void {
    if (!this.viewer) return;

    hotspots.forEach((h) => {
      if ('coordinates' in h && h.coordinates.engine === 'pannellum') {
        const coords = h.coordinates.coords;
        try {
          this.viewer.addHotSpot({
            id: h.id,
            pitch: coords.pitch,
            yaw: coords.yaw,
            type: 'info',
            text: typeof h.title === 'string' ? h.title : (h.title?.en || ''),
            cssClass: 'royal-heritage-pannellum-hotspot',
            createTooltipFunc: (hotSpotDiv: HTMLElement) => {
              this.setupHotspotElement(hotSpotDiv, h);
            },
            clickHandlerFunc: (e: any) => {
              if (e && typeof e.stopPropagation === 'function') {
                e.stopPropagation();
              }
              if (this.container) {
                this.container.querySelectorAll('.royal-heritage-pannellum-hotspot.active').forEach((el) => {
                  el.classList.remove('active');
                });
                const clickedEl = (e?.target?.closest?.('.royal-heritage-pannellum-hotspot') || e?.currentTarget) as HTMLElement | null;
                if (clickedEl) {
                  clickedEl.classList.add('active');
                }
              }
              this.triggerHotspotSelection(h);
            },
          });
        } catch {
          // Hotspot registration safe fallback
        }
      }
    });
  }

  onHotspotSelected(
    callback: (hotspot: ArchitecturalHotspot | HotspotDemo) => void
  ): void {
    this.onHotspotSelectCallback = callback;
  }

  setOrientation(pitch: number, yaw: number, fov?: number): void {
    if (!this.viewer) return;
    this.viewer.setPitch(pitch);
    this.viewer.setYaw(yaw);
    if (fov) this.viewer.setHfov(fov);
  }

  getOrientation(): { pitch: number; yaw: number; fov: number } {
    if (!this.viewer) return { pitch: 0, yaw: 0, fov: 100 };
    return {
      pitch: this.viewer.getPitch(),
      yaw: this.viewer.getYaw(),
      fov: this.viewer.getHfov(),
    };
  }

  zoom(deltaFov: number): void {
    if (!this.viewer) return;
    const current = this.viewer.getHfov();
    this.viewer.setHfov(Math.max(35, Math.min(125, current + deltaFov)));
  }

  setZoom(zoomFactor: number): void {
    if (!this.viewer) return;
    this.viewer.setHfov(100 / zoomFactor);
  }

  toggleAutoRotate(enable?: boolean, speed = 2): void {
    if (!this.viewer) return;
    if (enable === undefined) {
      const current = this.viewer.isAutoRotating();
      this.viewer.startAutoRotate(current ? 0 : speed);
    } else {
      this.viewer.startAutoRotate(enable ? speed : 0);
    }
  }

  setHotspotsVisible(visible: boolean): void {
    if (!this.container) return;
    const elements = this.container.querySelectorAll('.pnlm-hotspot-base');
    elements.forEach((el) => {
      (el as HTMLElement).style.display = visible ? 'block' : 'none';
    });
  }

  public resize(): void {
    if (this.viewer) {
      try {
        this.viewer.resize();
      } catch {}
    }
  }

  /**
   * Calculate pitch/yaw coordinates from a mouse or pointer event
   */
  public getViewerCoordinates(e: MouseEvent): [number, number] | null {
    if (this.viewer && typeof this.viewer.mouseEventToCoords === 'function') {
      try {
        return this.viewer.mouseEventToCoords(e);
      } catch {}
    }
    return null;
  }

  /**
   * Get current camera orientation and field of view
   */
  public getCameraTelemetry(): { pitch: number; yaw: number; hfov: number } | null {
    if (this.viewer) {
      try {
        return {
          pitch: typeof this.viewer.getPitch === 'function' ? this.viewer.getPitch() : 0,
          yaw: typeof this.viewer.getYaw === 'function' ? this.viewer.getYaw() : 0,
          hfov: typeof this.viewer.getHfov === 'function' ? this.viewer.getHfov() : 95,
        };
      } catch {}
    }
    return null;
  }

  /**
   * Toggle calibration mode styling (showing coordinate badges on hotspots)
   */
  public setCalibrationMode(enabled: boolean): void {
    if (this.container) {
      if (enabled) {
        this.container.classList.add('calibration-mode-active');
      } else {
        this.container.classList.remove('calibration-mode-active');
      }
    }
  }

  destroy(): void {
    if (this.viewer) {
      try {
        this.viewer.destroy();
      } catch (err) {
        console.warn('Pannellum teardown notice:', err);
      }
      this.viewer = null;
    }
    this.container = null;
    this.currentScene = null;
    this.onHotspotSelectCallback = null;
    this.scenesDict = {};
    this.allScenes = [];
  }
}
