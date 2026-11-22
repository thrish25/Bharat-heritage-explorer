import React, { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import { RotateCw, Maximize2, Minimize2, RefreshCw, Smartphone, AlertCircle, Info } from 'lucide-react';
import { ARMonumentConfig } from '../../data/ar/arMonumentsConfig';
import { ModelViewerElement } from '../../types/model-viewer';

export interface ARModelViewerHandle {
  resetView: () => void;
  activateAR: () => void;
}

interface ARModelViewerProps {
  config: ARMonumentConfig;
  onARStatusChange?: (status: 'session-started' | 'not-presenting' | 'failed') => void;
  children?: React.ReactNode;
}

export const ARModelViewer = forwardRef<ARModelViewerHandle, ARModelViewerProps>(({ config, onARStatusChange, children }, ref) => {
  const modelViewerRef = useRef<ModelViewerElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showDesktopNotice, setShowDesktopNotice] = useState(false);

  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  // Teardown / Model switch lifecycle
  useEffect(() => {
    setIsLoading(true);
    setLoadProgress(10);
    setLoadError(null);
    setIsARActive(false);

    const viewer = modelViewerRef.current;
    if (!viewer) return;

    const handleProgress = (event: any) => {
      const progress = Math.round((event.detail.totalProgress || 0) * 100);
      setLoadProgress(progress);
    };

    const handleLoad = () => {
      setIsLoading(false);
      setLoadProgress(100);
      setLoadError(null);
      console.log(`[ARModelViewer] Successfully loaded model for ${config.id}: ${config.modelSrc}`);

      // Safe texture anisotropic filtering to ensure crisp architectural rendering
      try {
        const symbols = Object.getOwnPropertySymbols(viewer);
        const sceneSymbol = symbols.find((s) => s.description === 'scene');
        if (sceneSymbol && (viewer as any)[sceneSymbol]) {
          const scene = (viewer as any)[sceneSymbol];
          scene.traverse((node: any) => {
            if (node.isMesh && node.material) {
              const materials = Array.isArray(node.material) ? node.material : [node.material];
              materials.forEach((mat: any) => {
                ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap'].forEach((key) => {
                  if (mat[key] && typeof mat[key].anisotropy !== 'undefined') {
                    mat[key].anisotropy = 8;
                    mat[key].needsUpdate = true;
                  }
                });
              });
            }
          });
        }
      } catch (err) {
        console.warn('[ARModelViewer] Texture anisotropy notice:', err);
      }
    };

    const handleError = (error: any) => {
      console.error(`[ARModelViewer] Error loading model ${config.modelSrc}:`, error);
      setIsLoading(false);
      setLoadError('Failed to load 3D monument model. Please verify your connection or WebGL support.');
    };

    const handleARStatus = (event: any) => {
      const status = event.detail.status;
      console.log('[ARModelViewer] AR Status event:', status);

      if (status === 'session-started') {
        setIsARActive(true);
        setIsAutoRotate(false);
        if (viewer) {
          viewer.autoRotate = false;
        }
        document.body.classList.add('ar-session-active');
        showToast('✨ AR Active: Point your camera at a flat surface and tap to place.');
        onARStatusChange?.('session-started');
      } else if (status === 'object-placed') {
        showToast('📍 Monument anchored to surface.');
      } else if (status === 'not-presenting' || status === 'failed') {
        setIsARActive(false);
        setIsAutoRotate(true);
        if (viewer) {
          viewer.autoRotate = true;
        }
        document.body.classList.remove('ar-session-active');
        if (status === 'failed') {
          showToast('⚠️ Could not launch AR. Ensure camera permissions and Google Play Services for AR are installed.');
          onARStatusChange?.('failed');
        } else {
          onARStatusChange?.('not-presenting');
        }
      }
    };

    const handleARTracking = (event: any) => {
      const status = event.detail.status;
      console.log('[ARModelViewer] AR Tracking event:', status);
      if (status === 'not-tracking') {
        showToast('📱 Move phone slowly across floor to scan surface...');
      }
    };

    viewer.addEventListener('progress', handleProgress);
    viewer.addEventListener('load', handleLoad);
    viewer.addEventListener('error', handleError);
    viewer.addEventListener('ar-status', handleARStatus);
    viewer.addEventListener('ar-tracking', handleARTracking);

    return () => {
      viewer.removeEventListener('progress', handleProgress);
      viewer.removeEventListener('load', handleLoad);
      viewer.removeEventListener('error', handleError);
      viewer.removeEventListener('ar-status', handleARStatus);
      viewer.removeEventListener('ar-tracking', handleARTracking);
      document.body.classList.remove('ar-session-active');
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [config.id, config.modelSrc, config.cameraOrbit, onARStatusChange, showToast]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleToggleAutoRotate = () => {
    setIsAutoRotate((prev) => {
      const next = !prev;
      showToast(next ? '🔄 Auto-Rotation Enabled' : '⏸ Auto-Rotation Paused');
      return next;
    });
  };

  const handleResetView = () => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    viewer.cameraOrbit = config.cameraOrbit;
    if (typeof viewer.jumpCameraToGoal === 'function') {
      viewer.jumpCameraToGoal();
    }
    showToast('↺ Camera Orbit Reset to Center');
  };

  const handleToggleFullscreen = async () => {
    try {
      const container = containerRef.current;
      if (!container) return;
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('[ARModelViewer] Fullscreen error:', err);
    }
  };

  /**
   * AR Button click interceptor for <button slot="ar-button">:
   * If still loading or on desktop without AR capabilities, intercept and show notice.
   * If supported, DO NOT call viewer.activateAR() manually here because model-viewer's
   * internal slot listener will automatically invoke activateAR(). Calling it twice
   * concurrently creates a WebXR session conflict and drops the 3D model!
   */
  const handleARButtonClick = (e: React.MouseEvent) => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    if (isLoading) {
      e.preventDefault();
      e.stopPropagation();
      showToast('⏳ 3D model is still loading. Please wait a moment...');
      return;
    }

    if (!viewer.canActivateAR) {
      e.preventDefault();
      e.stopPropagation();
      setShowDesktopNotice(true);
      return;
    }
    // When canActivateAR is true, allow event to propagate to model-viewer's internal slot listener
  };

  /**
   * Programmatic AR launcher for voice commands or imperative ref calls
   */
  const handleProgrammaticActivateAR = () => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    if (isLoading) {
      showToast('⏳ 3D model is still loading. Please wait a moment...');
      return;
    }

    if (viewer.canActivateAR) {
      try {
        viewer.activateAR();
      } catch (err) {
        console.warn('[ARModelViewer] Programmatic activateAR error:', err);
        showToast('⚠️ Could not launch AR. Check camera permissions.');
      }
    } else {
      setShowDesktopNotice(true);
    }
  };

  const handleRetry = () => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    setIsLoading(true);
    setLoadError(null);
    viewer.src = config.modelSrc;
  };

  useImperativeHandle(ref, () => ({
    resetView: handleResetView,
    activateAR: handleProgrammaticActivateAR,
  }));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-[#121416] overflow-hidden select-none flex flex-col justify-center items-center"
    >
      {/* 3D Model Viewer Canvas */}
      <model-viewer
        ref={modelViewerRef}
        id="arMonumentViewer"
        src={config.modelSrc}
        poster={config.posterSrc || undefined}
        alt={config.altText}
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale={config.arScale || 'auto'}
        ar-placement="floor"
        camera-controls
        touch-action="pan-y"
        auto-rotate={!isARActive && isAutoRotate ? true : undefined}
        auto-rotate-delay="2000"
        rotation-per-second="15deg"
        camera-orbit={config.cameraOrbit}
        min-camera-orbit={config.minCameraOrbit}
        max-camera-orbit={config.maxCameraOrbit}
        field-of-view={config.fieldOfView}
        environment-image={config.environmentImage || 'neutral'}
        tone-mapping={config.toneMapping || 'neutral'}
        exposure={config.exposure || (config.id === 'tajmahal' || config.id === 'taj-mahal' ? '0.80' : '0.92')}
        shadow-intensity={config.shadowIntensity || '1.1'}
        shadow-softness={config.shadowSoftness || '0.5'}
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'block',
          backgroundColor: 'transparent',
          outline: 'none',
        }}
      >
        {/* Slotted AR Button for native model-viewer integration */}
        <button
          slot="ar-button"
          type="button"
          onClick={handleARButtonClick}
          disabled={isLoading || !!loadError}
          className={`absolute bottom-44 sm:bottom-40 left-1/2 -translate-x-1/2 z-20 pointer-events-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.14em] shadow-[0_8px_30px_rgba(198,161,91,0.45)] hover:shadow-[0_12px_40px_rgba(224,194,123,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${isARActive ? 'hidden' : ''}`}
          title="Launch Augmented Reality on Supported Device"
        >
          <Smartphone className="w-4 h-4 text-[#151719]" />
          <span>VIEW IN AR</span>
          <span className="w-2 h-2 rounded-full bg-[#151719]/40 group-hover:bg-[#151719] transition-colors" />
        </button>

        {/* Floating Camera Toolbar Controls (hidden during active AR mode) */}
        <div className={`absolute top-20 right-3 sm:right-6 z-20 flex flex-col gap-2 pointer-events-auto transition-opacity duration-300 ${isARActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Auto Rotate Toggle */}
          <button
            type="button"
            onClick={handleToggleAutoRotate}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border shadow-lg backdrop-blur-md transition-all cursor-pointer ${
              isAutoRotate
                ? 'bg-[#1C1F21]/90 border-[#C6A15B] text-[#E0C27B]'
                : 'bg-[#1C1F21]/70 border-[rgba(198,161,91,0.25)] text-[#B8B2A6] hover:text-[#F3EBDD]'
            }`}
            title={isAutoRotate ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
            aria-label="Toggle Auto-Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isAutoRotate ? 'animate-spin-slow' : ''}`} />
          </button>

          {/* Reset Camera View */}
          <button
            type="button"
            onClick={handleResetView}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C1F21]/80 hover:bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] text-[#E0C27B] hover:text-[#F3EBDD] flex items-center justify-center shadow-lg backdrop-blur-md transition-all cursor-pointer"
            title="Reset Camera View"
            aria-label="Reset Camera View"
          >
            <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C1F21]/80 hover:bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] text-[#E0C27B] hover:text-[#F3EBDD] flex items-center justify-center shadow-lg backdrop-blur-md transition-all cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>

        {/* Slotted Children (Top HUD, Subtitles, Narration Bar, AI Assistant Drawer, Toast) */}
        {children}

        {/* Loading Progress State */}
        {isLoading && (
          <div className="absolute inset-0 z-40 bg-[#121416]/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-6 text-center pointer-events-auto">
            <div className="w-14 h-14 rounded-full border-2 border-[rgba(198,161,91,0.2)] border-t-[#C6A15B] animate-spin mb-4" />
            <div className="font-cinzel text-base font-bold text-[#E0C27B] tracking-wider mb-2 drop-shadow-md">
              Loading 3D Monument Model
            </div>
            <p className="text-xs text-[#F3EBDD]/90 max-w-sm mb-3 drop-shadow">
              Downloading high-fidelity architectural mesh and PBR materials...
            </p>
            <div className="w-48 h-1.5 bg-[#1C1F21]/80 rounded-full overflow-hidden border border-[rgba(198,161,91,0.4)] shadow-md">
              <div
                className="h-full bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] transition-all duration-300"
                style={{ width: `${Math.max(10, loadProgress)}%` }}
              />
            </div>
            <span className="text-[10px] font-numeric text-[#E0C27B] font-semibold mt-2 drop-shadow">
              {loadProgress}% Loaded
            </span>
          </div>
        )}

        {/* Error State */}
        {loadError && (
          <div className="absolute inset-0 z-40 bg-[#121416]/95 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto pointer-events-auto">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-lg font-bold text-[#F3EBDD] mb-1">
              Unable to Display 3D Model
            </h3>
            <p className="text-xs text-[#B8B2A6] leading-relaxed mb-4">
              {loadError}
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="px-4 py-2 bg-[#1C1F21] hover:bg-[#25282A] text-[#E0C27B] font-cinzel text-xs font-semibold tracking-wider rounded-xs border border-[#C6A15B]/50 transition-all cursor-pointer"
            >
              Retry Loading
            </button>
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full bg-[#1C1F21]/95 border border-[#C6A15B]/60 text-[#E0C27B] text-xs font-medium tracking-wide shadow-2xl backdrop-blur-md animate-fade-in pointer-events-none">
            {toastMessage}
          </div>
        )}
      </model-viewer>

      {/* Desktop Fallback Guidance Modal */}
      {showDesktopNotice && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDesktopNotice(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#1C1F21] border border-[rgba(198,161,91,0.4)] rounded-xs p-6 shadow-2xl text-[#F3EBDD]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 text-[#E0C27B] mb-3">
              <Info className="w-5 h-5 text-[#C6A15B]" />
              <h3 className="font-cinzel text-base font-bold tracking-wide">
                Augmented Reality Environment
              </h3>
            </div>
            <p className="text-xs text-[#B8B2A6] leading-relaxed mb-4">
              Augmented Reality projects the 3D monument into your physical room using your mobile device’s camera and motion sensors.
            </p>
            <div className="space-y-2.5 text-xs text-[#858078] bg-[#151719] p-3.5 rounded-xs border border-[rgba(198,161,91,0.15)] mb-5">
              <div className="flex items-start gap-2">
                <span className="text-[#E0C27B]">💻</span>
                <span><strong>Desktop Computer:</strong> You are enjoying full 6-DoF 3D inspection right here. Click and drag to rotate, and scroll to zoom.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E0C27B]">📱</span>
                <span><strong>Mobile Experience:</strong> Open this website on a mobile device (Google Chrome with ARCore on Android, or Safari on iOS) to place the monument in your space.</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowDesktopNotice(false)}
                className="px-4 py-2 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer"
              >
                Continue 3D Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

ARModelViewer.displayName = 'ARModelViewer';
