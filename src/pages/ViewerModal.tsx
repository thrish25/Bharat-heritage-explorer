import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Monument, Scene, SceneDemo, ArchitecturalHotspot, HotspotDemo, Language } from '../types';
import { ViewerHeader } from '../components/Viewer/ViewerHeader';
import { SceneSelector } from '../components/Viewer/SceneSelector';
import { HotspotMarker } from '../components/Viewer/HotspotMarker';
import { HotspotPanel } from '../components/Viewer/HotspotPanel';
import { AudioPlayer } from '../components/Viewer/AudioPlayer';
import { ViewerControls } from '../components/Viewer/ViewerControls';
import { LoadingIndicator } from '../components/Viewer/LoadingIndicator';
import { ControlsHelpModal } from '../components/Viewer/ControlsHelpModal';
import { FullscreenAudioPopup } from '../components/Viewer/FullscreenAudioPopup';
import { useLanguage } from '../context/LanguageContext';
import { audioManager } from '../services/AudioManager';
import { ambientSoundManager } from '../services/AmbientSoundManager';
import { PannellumAdapter } from '../engines/PannellumAdapter';
import { HistoricalViewModal } from '../components/Reconstruction/HistoricalViewModal';
import { StoneChariotReconstructionView } from '../components/Reconstruction/StoneChariotReconstructionView';
import { VishwakarmaBuddhaReconstructionView } from '../components/Reconstruction/VishwakarmaBuddhaReconstructionView';
import { KailasaReconstructionView } from '../components/Reconstruction/KailasaReconstructionView';
import { KonarkJagamohanaReconstructionView } from '../components/Reconstruction/KonarkJagamohanaReconstructionView';
import { HeritageStoryModal } from '../components/HeritageStory/HeritageStoryModal';
import { ARViewerModal } from '../components/AR/ARViewerModal';

interface ViewerModalProps {
  initialMonument: Monument;
  initialCaveId?: 'cave_10' | 'cave_16';
  initialSceneId?: string;
  initialOpenReconstruction?: boolean;
  initialReconstructionType?: 'vishwakarma' | 'kailasa';
  onClose: () => void;
}

export const ViewerModal: React.FC<ViewerModalProps> = ({
  initialMonument,
  initialCaveId,
  initialSceneId,
  initialOpenReconstruction = false,
  initialReconstructionType,
  onClose,
}) => {
  const { t, ui, language } = useLanguage();
  const [currentMonument, setCurrentMonument] = useState<Monument>(initialMonument);
  const [isReconstructionOpen, setIsReconstructionOpen] = useState(
    initialOpenReconstruction === true
  );
  const [elloraReconstructionTarget, setElloraReconstructionTarget] = useState<'vishwakarma' | 'kailasa'>(() => {
    if (initialReconstructionType) return initialReconstructionType;
    if (initialCaveId === 'cave_16') return 'kailasa';
    return 'vishwakarma';
  });
  const [isHeritageStoryOpen, setIsHeritageStoryOpen] = useState(false);
  const [isARModalOpen, setIsARModalOpen] = useState(false);

  // Active Cave selection for Ellora (Cave 10 vs Cave 16 vs All)
  const [activeCave, setActiveCave] = useState<'all' | 'cave_10' | 'cave_16'>(() => {
    if (initialCaveId) return initialCaveId;
    return 'cave_10';
  });

  // Determine if active monument utilizes real WebGL Pannellum engine
  const isPannellum =
    currentMonument.engine === 'pannellum' &&
    !!currentMonument.scenes &&
    currentMonument.scenes.length > 0;

  const allCurrentScenes: (Scene | SceneDemo)[] = isPannellum
    ? currentMonument.scenes!
    : currentMonument.demoScenes;

  const activeScenes: (Scene | SceneDemo)[] = useMemo(() => {
    if (currentMonument.id === 'ellora' && activeCave !== 'all') {
      return (allCurrentScenes as Scene[]).filter((s) => s.caveId === activeCave);
    }
    return allCurrentScenes;
  }, [currentMonument.id, activeCave, allCurrentScenes]);

  const getInitialScene = (mon: Monument): Scene | SceneDemo => {
    if (mon.engine === 'pannellum' && mon.scenes && mon.scenes.length > 0) {
      if (initialSceneId) {
        const found = mon.scenes.find((s) => s.id === initialSceneId);
        if (found) return found;
      }
      if (mon.id === 'ellora' && initialCaveId) {
        const found = mon.scenes.find((s) => 'caveId' in s && s.caveId === initialCaveId);
        if (found) return found;
      }
      if (mon.defaultSceneId) {
        const found = mon.scenes.find((s) => s.id === mon.defaultSceneId);
        if (found) return found;
      }
      return mon.scenes[0];
    }
    return mon.demoScenes[0];
  };

  const [currentScene, setCurrentScene] = useState<Scene | SceneDemo>(() =>
    getInitialScene(initialMonument)
  );

  const [selectedHotspot, setSelectedHotspot] = useState<
    ArchitecturalHotspot | HotspotDemo | null
  >(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(30);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [retryCounter, setRetryCounter] = useState(0);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Independent 108 Hz Om Ambient Drone State (Ellora Caves)
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);

  useEffect(() => {
    return ambientSoundManager.subscribe((state) => {
      setIsAmbientPlaying(state.isPlaying);
    });
  }, []);

  const handleToggleAmbient = () => {
    ambientSoundManager.toggle();
  };

  // Development Calibration Mode
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [lastClickedCoords, setLastClickedCoords] = useState<{ pitch: number; yaw: number } | null>(null);
  const [telemetry, setTelemetry] = useState<{ pitch: number; yaw: number; hfov: number }>({ pitch: 0, yaw: 0, hfov: 95 });

  const containerRef = useRef<HTMLDivElement>(null);
  const pannellumContainerRef = useRef<HTMLDivElement>(null);
  const pannellumAdapterRef = useRef<PannellumAdapter | null>(null);

  const currentLanguageRef = useRef<Language>(language);
  useEffect(() => {
    currentLanguageRef.current = language;
  }, [language]);

  const currentLoadingSceneIdRef = useRef<string | null>(null);

  // Helper to extract Scene audio URL, title, and trackId
  const getSceneAudio = useCallback(
    (scene: Scene | SceneDemo, lang: Language) => {
      const url =
        'audioNarration' in scene && scene.audioNarration
          ? scene.audioNarration.audioSources[lang] || scene.audioNarration.audioSources.en
          : 'audioSource' in scene && scene.audioSource
          ? scene.audioSource[lang] || scene.audioSource.en
          : undefined;

      const transcript =
        'audioNarration' in scene && scene.audioNarration?.transcripts
          ? scene.audioNarration.transcripts[lang] || scene.audioNarration.transcripts.en
          : undefined;

      const title =
        'audioNarration' in scene && scene.audioNarration
          ? t(scene.audioNarration.title)
          : 'audioTitle' in scene && scene.audioTitle
          ? t(scene.audioTitle)
          : t(scene.title);

      const trackId =
        'audioNarration' in scene && scene.audioNarration
          ? scene.audioNarration.trackId
          : scene.id;

      return { url, title, trackId, transcript };
    },
    [t]
  );

  // Helper to extract Hotspot audio URL, title, and trackId
  const getHotspotAudio = useCallback(
    (hotspot: ArchitecturalHotspot | HotspotDemo, lang: Language) => {
      const url =
        'audioSources' in hotspot && hotspot.audioSources
          ? hotspot.audioSources[lang] || hotspot.audioSources.en
          : undefined;

      let transcript =
        'transcripts' in hotspot && hotspot.transcripts
          ? hotspot.transcripts[lang] || hotspot.transcripts.en
          : undefined;

      // Robust fallback transcript if dedicated transcripts dictionary is absent (e.g. Ellora hotspots)
      if (!transcript) {
        const desc =
          typeof hotspot.description === 'string'
            ? hotspot.description
            : hotspot.description?.[lang] || hotspot.description?.en || '';
        const sig =
          'historicalSignificance' in hotspot && hotspot.historicalSignificance
            ? typeof hotspot.historicalSignificance === 'string'
              ? hotspot.historicalSignificance
              : hotspot.historicalSignificance[lang] || hotspot.historicalSignificance.en || ''
            : '';
        transcript = [desc, sig].filter(Boolean).join('. ');
      }

      const title = t(hotspot.title);
      const trackId = hotspot.id;

      return { url, title, trackId, transcript };
    },
    [t]
  );

  const isReconstructionOpenRef = useRef(
    initialOpenReconstruction === true
  );
  useEffect(() => {
    isReconstructionOpenRef.current = isReconstructionOpen;
  }, [isReconstructionOpen]);

  const playSceneIntroduction = useCallback(
    (scene: Scene | SceneDemo, lang: Language) => {
      // PHASE 2 FIX: Strict Mode Separation
      // If Reconstruction mode is open, NEVER play 360 audio or allow autoplay!
      if (isReconstructionOpenRef.current) {
        audioManager.stop();
        return;
      }
      const { url, title, trackId, transcript } = getSceneAudio(scene, lang);
      if (url || transcript) {
        audioManager.play(url, trackId, title, transcript, lang);
      }
    },
    [getSceneAudio]
  );

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  // Teardown on unmount
  useEffect(() => {
    return () => {
      audioManager.stop();
      ambientSoundManager.stop();
      if (pannellumAdapterRef.current) {
        pannellumAdapterRef.current.destroy();
        pannellumAdapterRef.current = null;
      }
    };
  }, []);

  // Window resize handler to maintain exact WebGL aspect ratio
  useEffect(() => {
    const handleResize = () => {
      if (pannellumAdapterRef.current) {
        pannellumAdapterRef.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Synchronize active language with PannellumAdapter tooltips
  useEffect(() => {
    if (pannellumAdapterRef.current) {
      pannellumAdapterRef.current.setLanguage(language);
    }
  }, [language]);

  // Safe exit handler
  const handleExit = useCallback(() => {
    audioManager.stop();
    ambientSoundManager.stop();
    if (pannellumAdapterRef.current) {
      pannellumAdapterRef.current.destroy();
      pannellumAdapterRef.current = null;
    }
    onClose();
  }, [onClose]);

  // Retry handler
  const handleRetry = () => {
    setLoadError(null);
    setIsLoading(true);
    setLoadingProgress(35);
    if (pannellumAdapterRef.current) {
      pannellumAdapterRef.current.destroy();
      pannellumAdapterRef.current = null;
    }
    setRetryCounter((c) => c + 1);
  };

  // Initialize Pannellum WebGL engine
  useEffect(() => {
    if (!isPannellum) {
      if (pannellumAdapterRef.current) {
        pannellumAdapterRef.current.destroy();
        pannellumAdapterRef.current = null;
      }
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setLoadError(null);
    setLoadingProgress(40);

    const initEngine = async () => {
      if (!pannellumContainerRef.current) return;

      // Ensure container has measurable dimensions in the layout tree
      let attempts = 0;
      while (
        pannellumContainerRef.current &&
        (pannellumContainerRef.current.clientWidth === 0 ||
          pannellumContainerRef.current.clientHeight === 0) &&
        attempts < 12
      ) {
        await new Promise((res) => requestAnimationFrame(res));
        attempts++;
      }

      if (!isMounted) return;

      try {
        setLoadingProgress(60);
        if (!pannellumAdapterRef.current) {
          const adapter = new PannellumAdapter();
          pannellumAdapterRef.current = adapter;
          await adapter.initialize(
            pannellumContainerRef.current,
            undefined,
            currentMonument.scenes
          );
          adapter.onHotspotSelected((hotspot) => {
            if (isMounted) {
              setSelectedHotspot(hotspot);
              const { url, title, trackId, transcript } = getHotspotAudio(hotspot, currentLanguageRef.current);
              if (url || transcript) {
                audioManager.play(url, trackId, title, transcript, currentLanguageRef.current);
              }
            }
          });

          setLoadingProgress(80);
          currentLoadingSceneIdRef.current = currentScene.id;
          await adapter.loadScene(currentScene);

          if (isMounted) {
            setLoadingProgress(100);
            setIsLoading(false);
            setLoadError(null);
            if (currentLoadingSceneIdRef.current === currentScene.id) {
              playSceneIntroduction(currentScene, currentLanguageRef.current);
            }
          }
        }
      } catch (err: any) {
        console.error('Pannellum initialization failed:', err);
        if (isMounted) {
          setLoadError(
            err?.message ||
              'Unable to calibrate 360° panorama optics. Please verify WebGL permissions.'
          );
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(() => {
      initEngine();
    }, 60);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [currentMonument.id, isPannellum, retryCounter]);

  // Loading animation for non-Pannellum fallback
  const hasLoadedInitialFallbackRef = useRef(false);
  useEffect(() => {
    if (isPannellum) return;
    if (!hasLoadedInitialFallbackRef.current) {
      hasLoadedInitialFallbackRef.current = true;
      setIsLoading(true);
      setLoadError(null);
      setLoadingProgress(40);
      const p1 = setTimeout(() => setLoadingProgress(80), 180);
      const p2 = setTimeout(() => {
        setLoadingProgress(100);
        setIsLoading(false);
        playSceneIntroduction(currentScene, currentLanguageRef.current);
      }, 380);

      return () => {
        clearTimeout(p1);
        clearTimeout(p2);
      };
    }
  }, [currentMonument.id, isPannellum, playSceneIntroduction, currentScene]);

  // Handle auto-rotation for 2D fallback
  useEffect(() => {
    if (isPannellum) return;
    let animId: number;
    if (isAutoRotating) {
      const step = () => {
        setPanOffset((prev) => (prev + 0.15) % 100);
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotating, isPannellum]);

  // Handle monument change
  const handleSelectMonument = (monument: Monument) => {
    audioManager.stop();
    ambientSoundManager.stop();
    if (pannellumAdapterRef.current) {
      pannellumAdapterRef.current.destroy();
      pannellumAdapterRef.current = null;
    }
    setCurrentMonument(monument);
    if (monument.id === 'ellora') {
      setActiveCave('cave_10');
    }
    const nextInitialScene = getInitialScene(monument);
    setCurrentScene(nextInitialScene);
    setSelectedHotspot(null);
    setPanOffset(0);
    setZoomLevel(1);
    setIsAutoRotating(false);
  };

  // Handle scene change
  const handleSelectScene = async (sceneId: string) => {
    const target = allCurrentScenes.find((s) => s.id === sceneId);
    if (!target || target.id === currentScene.id) return;

    audioManager.stop(true);
    setSelectedHotspot(null);
    setCurrentScene(target);
    currentLoadingSceneIdRef.current = target.id;

    if ('caveId' in target && target.caveId && activeCave !== 'all' && target.caveId !== activeCave) {
      setActiveCave(target.caveId as 'cave_10' | 'cave_16');
    }

    if (isPannellum && pannellumAdapterRef.current) {
      try {
        setIsLoading(true);
        setLoadError(null);
        setLoadingProgress(50);
        await pannellumAdapterRef.current.loadScene(target);
        setLoadingProgress(100);
        setIsLoading(false);
        if (currentLoadingSceneIdRef.current === target.id) {
          playSceneIntroduction(target, currentLanguageRef.current);
        }
      } catch (err: any) {
        console.error('Failed to switch viewpoint:', err);
        setLoadError(err?.message || 'Failed to switch viewpoint.');
        setIsLoading(false);
      }
    } else {
      playSceneIntroduction(target, currentLanguageRef.current);
    }
  };

  // Handle cave change for Ellora (Cave 16 vs Cave 10 vs All)
  const handleSelectCave = async (caveId: 'all' | 'cave_10' | 'cave_16') => {
    setActiveCave(caveId);
    if (currentMonument.id === 'ellora' && caveId !== 'all') {
      const isCurrentInCave = 'caveId' in currentScene && currentScene.caveId === caveId;
      if (!isCurrentInCave) {
        const targetScene = (currentMonument.scenes as Scene[])?.find((s) => s.caveId === caveId);
        if (targetScene) {
          await handleSelectScene(targetScene.id);
        }
      }
    }
  };

  // Automatically transition active audio track to newly selected language without overlapping
  const prevLanguageRef = useRef<Language>(language);
  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      prevLanguageRef.current = language;
      const state = audioManager.getState();
      if (state.isPlaying || state.isPaused) {
        if (selectedHotspot) {
          const { url, title, trackId, transcript } = getHotspotAudio(selectedHotspot, language);
          if (url || transcript) audioManager.play(url, trackId, title, transcript, language, true);
        } else {
          const { url, title, trackId, transcript } = getSceneAudio(currentScene, language);
          if (url || transcript) audioManager.play(url, trackId, title, transcript, language, true);
        }
      }
    }
  }, [language, selectedHotspot, currentScene, getHotspotAudio, getSceneAudio]);

  // Natural museum audio handler: smoothly stop hotspot narration when closing popup without restarting scene intro
  const handleCloseHotspot = useCallback(() => {
    if (selectedHotspot) {
      const state = audioManager.getState();
      if (state.activeTrackId === selectedHotspot.id) {
        audioManager.stop(true);
      }
      setSelectedHotspot(null);
    }
  }, [selectedHotspot]);

  // Zoom controls
  const handleZoomIn = () => {
    if (isPannellum && pannellumAdapterRef.current) {
      pannellumAdapterRef.current.zoom(-10);
    } else {
      setZoomLevel((prev) => Math.min(1.8, prev + 0.15));
    }
  };

  const handleZoomOut = () => {
    if (isPannellum && pannellumAdapterRef.current) {
      pannellumAdapterRef.current.zoom(10);
    } else {
      setZoomLevel((prev) => Math.max(0.8, prev - 0.15));
    }
  };

  const handleResetView = () => {
    if (isPannellum && pannellumAdapterRef.current && 'panorama' in currentScene) {
      const ori = currentScene.panorama.initialOrientation;
      pannellumAdapterRef.current.setOrientation(
        ori.pitch || 0,
        ori.yaw || 0,
        ori.hfov || 95
      );
    } else {
      setZoomLevel(1);
      setPanOffset(0);
    }
  };

  const handleToggleAutoRotate = () => {
    const nextState = !isAutoRotating;
    setIsAutoRotating(nextState);
    if (isPannellum && pannellumAdapterRef.current) {
      pannellumAdapterRef.current.toggleAutoRotate(nextState);
    }
  };

  const handleToggleHotspots = () => {
    const nextState = !showHotspots;
    setShowHotspots(nextState);
    if (isPannellum && pannellumAdapterRef.current) {
      pannellumAdapterRef.current.setHotspotsVisible(nextState);
    }
  };

  // 2D Mouse pan interactions (for fallback)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isPannellum) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPannellum || !isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    startXRef.current = e.clientX;
    setPanOffset((prev) => prev - dx * 0.08);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Keyboard navigation & controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept keystrokes (like Spacebar, arrows, numbers) when user is typing in inputs or when HeritageStory AI is open
      const target = e.target as HTMLElement | null;
      const isTyping =
        isHeritageStoryOpen ||
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        Boolean(target?.isContentEditable);

      if (isTyping) {
        if (e.key === 'Escape' && isHeritageStoryOpen) {
          setIsHeritageStoryOpen(false);
        }
        return;
      }

      if (e.key === 'Escape') {
        if (isHelpOpen) {
          setIsHelpOpen(false);
        } else if (selectedHotspot) {
          handleCloseHotspot();
        } else {
          handleExit();
        }
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        setIsHelpOpen((prev) => !prev);
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        handleToggleAutoRotate();
      } else if (e.key === 'c' || e.key === 'C') {
        setIsCalibrating((prev) => !prev);
      } else if (e.key === 'h' || e.key === 'H') {
        handleToggleHotspots();
      } else if (e.key === 'r' || e.key === 'R') {
        handleResetView();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      } else if (e.key === 'ArrowLeft' || e.key === '[') {
        const currentIndex = activeScenes.findIndex((s) => s.id === currentScene.id);
        if (currentIndex > -1) {
          const prevIndex = (currentIndex - 1 + activeScenes.length) % activeScenes.length;
          handleSelectScene(activeScenes[prevIndex].id);
        }
      } else if (e.key === 'ArrowRight' || e.key === ']') {
        const currentIndex = activeScenes.findIndex((s) => s.id === currentScene.id);
        if (currentIndex > -1) {
          const nextIndex = (currentIndex + 1) % activeScenes.length;
          handleSelectScene(activeScenes[nextIndex].id);
        }
      } else if (/^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10) - 1;
        if (num >= 0 && num < activeScenes.length) {
          handleSelectScene(activeScenes[num].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    selectedHotspot,
    isHelpOpen,
    isAutoRotating,
    showHotspots,
    isPannellum,
    currentScene,
    activeScenes,
    handleExit,
    isHeritageStoryOpen,
  ]);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Synchronize fullscreen state across native ESC, F11, or browser UI events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Synchronize calibration mode state with adapter
  useEffect(() => {
    pannellumAdapterRef.current?.setCalibrationMode(isCalibrating);
  }, [isCalibrating]);

  // Calibration telemetry polling
  useEffect(() => {
    if (!isCalibrating || !isPannellum) return;
    const interval = setInterval(() => {
      const data = pannellumAdapterRef.current?.getCameraTelemetry();
      if (data) setTelemetry(data);
    }, 150);
    return () => clearInterval(interval);
  }, [isCalibrating, isPannellum]);

  // Click-to-log pitch & yaw coordinates in calibration mode
  useEffect(() => {
    if (!pannellumContainerRef.current) return;
    const handleCanvasClick = (e: MouseEvent) => {
      if (!isCalibrating || !pannellumAdapterRef.current) return;
      const coords = pannellumAdapterRef.current.getViewerCoordinates(e);
      if (coords) {
        const [pitch, yaw] = coords;
        setLastClickedCoords({ pitch, yaw });
        console.log(
          `[CALIBRATION] Scene: "${currentScene.id}" -> pitch: ${pitch.toFixed(1)}, yaw: ${yaw.toFixed(1)}`
        );
      }
    };
    const el = pannellumContainerRef.current;
    el.addEventListener('click', handleCanvasClick);
    return () => el.removeEventListener('click', handleCanvasClick);
  }, [isCalibrating, currentScene.id]);

  // Audio track calculations
  const sceneAudio = getSceneAudio(currentScene, language);

  const handleOpenReconstruction = (target?: 'vishwakarma' | 'kailasa') => {
    // PHASE 2 FIX: Stop all playing 360 audio immediately before opening reconstruction
    audioManager.stop();
    ambientSoundManager.stop();
    isReconstructionOpenRef.current = true;
    if (target) {
      setElloraReconstructionTarget(target);
    } else if (currentMonument.id === 'ellora') {
      if (
        ('caveId' in currentScene && currentScene.caveId === 'cave_16') ||
        currentScene.id.startsWith('c16') ||
        currentScene.id.startsWith('kailash')
      ) {
        setElloraReconstructionTarget('kailasa');
      } else {
        setElloraReconstructionTarget('vishwakarma');
      }
    }
    setIsReconstructionOpen(true);
  };

  const handleBackToTour = useCallback(() => {
    isReconstructionOpenRef.current = false;
    setIsReconstructionOpen(false);
    // Returning to 360 mode: automatically resume/play the 360 scene intro audio!
    playSceneIntroduction(currentScene, currentLanguageRef.current);
  }, [currentScene, playSceneIntroduction]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 viewer-dark-root overflow-hidden select-none ${
        isFullscreen ? 'is-fullscreen' : ''
      }`}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 1. Immersive Top Navigation */}
      <ViewerHeader
        currentMonument={currentMonument}
        currentScene={currentScene}
        onSelectMonument={handleSelectMonument}
        onExit={handleExit}
        onOpenReconstruction={handleOpenReconstruction}
        onOpenAR={() => setIsARModalOpen(true)}
        onOpenHeritageStory={() => setIsHeritageStoryOpen(true)}
      />

      {/* 1b. Ellora Caves Quick Switcher Bar (Cave 16 vs Cave 10) */}
      {currentMonument.id === 'ellora' && !isFullscreen && (
        <div className="absolute top-16 sm:top-18 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center gap-1.5 p-1 bg-[#1C1F21]/95 border border-[rgba(198,161,91,0.35)] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <button
            onClick={() => handleSelectCave('cave_16')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCave === 'cave_16'
                ? 'bg-[#C6A15B] text-[#151719] shadow-[0_0_12px_rgba(224,194,123,0.4)]'
                : 'text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#242729]'
            }`}
          >
            <span>🛕</span>
            <span>Cave 16 • Kailasa Temple (7)</span>
          </button>

          <button
            onClick={() => handleSelectCave('cave_10')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCave === 'cave_10'
                ? 'bg-[#C6A15B] text-[#151719] shadow-[0_0_12px_rgba(224,194,123,0.4)]'
                : 'text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#242729]'
            }`}
          >
            <span>☸️</span>
            <span>Cave 10 • Carpenter's Cave (4)</span>
          </button>

          <button
            onClick={() => handleSelectCave('all')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all cursor-pointer ${
              activeCave === 'all'
                ? 'bg-[#C6A15B] text-[#151719]'
                : 'text-[#858078] hover:text-[#F3EBDD]'
            }`}
            title="Display all 11 viewpoints"
          >
            All (11)
          </button>
        </div>
      )}

      {/* Development Calibration Mode HUD Overlay (Toggle with 'C' key) */}
      {isCalibrating && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-[#1C1F21]/95 border border-[#C6A15B] rounded-lg px-4 py-2 shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs font-mono select-none">
          <div className="flex items-center gap-2 text-[#E0C27B] font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>CALIBRATION HUD (Press 'C' to close)</span>
          </div>
          <div className="h-4 w-[1px] bg-[#C6A15B]/40" />
          <div className="text-[#F3EBDD]">
            Cam: <span className="text-[#E0C27B]">P:{telemetry.pitch.toFixed(1)}° Y:{telemetry.yaw.toFixed(1)}° HFOV:{telemetry.hfov.toFixed(0)}°</span>
          </div>
          {lastClickedCoords && (
            <>
              <div className="h-4 w-[1px] bg-[#C6A15B]/40" />
              <div className="text-[#F3EBDD]">
                Clicked: <span className="text-emerald-400 font-bold">P:{lastClickedCoords.pitch.toFixed(1)}° Y:{lastClickedCoords.yaw.toFixed(1)}°</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* 2. Interactive Viewport: WebGL Pannellum or 2D Emulation Fallback */}
      {isPannellum ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            id={`${currentMonument.id}-pannellum-viewport`}
            ref={pannellumContainerRef}
            className="w-full h-full"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              inset: 0,
            }}
          />
          {/* Subtle Vignette & Atmospheric Shadows */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151719]/45 via-transparent to-[#151719]/45 pointer-events-none" />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          <div
            className="w-full h-full relative transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
            }}
          >
            {/* Panoramic Image Layer with horizontal pan emulation */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-75"
              style={{
                backgroundImage: `url(${'image' in currentScene ? currentScene.image : ''})`,
                backgroundPosition: `${panOffset}% center`,
                backgroundSize: 'cover',
              }}
            />

            {/* Vignette & Atmospheric Shadows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151719]/80 via-transparent to-[#151719]/60 pointer-events-none" />

            {/* 3. Gold Architectural Hotspot Markers (Fallback) */}
            {showHotspots &&
              'hotspots' in currentScene &&
              (currentScene.hotspots as HotspotDemo[]).map((hotspot) => (
                <HotspotMarker
                  key={hotspot.id}
                  hotspot={hotspot}
                  isSelected={selectedHotspot?.id === hotspot.id}
                  onClick={(h) => {
                    setSelectedHotspot(h);
                    const { url, title, trackId, transcript } = getHotspotAudio(h, currentLanguageRef.current);
                    if (url || transcript) {
                      audioManager.play(url, trackId, title, transcript, currentLanguageRef.current);
                    }
                  }}
                />
              ))}
          </div>
        </div>
      )}

      {/* 4. Floating HUD Controls (Right Side) */}
      <ViewerControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetView={handleResetView}
        isAutoRotating={isAutoRotating}
        onToggleAutoRotate={handleToggleAutoRotate}
        showHotspots={showHotspots}
        onToggleHotspots={handleToggleHotspots}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onToggleHelp={() => setIsHelpOpen((prev) => !prev)}
        hasAmbientMusic={currentMonument.id === 'ellora'}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={handleToggleAmbient}
      />

      {/* 5. Calibrated Bottom Viewpoint Selector (Hidden in Fullscreen Mode) */}
      {!isFullscreen && (
        <SceneSelector
          scenes={activeScenes}
          activeSceneId={currentScene.id}
          onSelectScene={handleSelectScene}
        />
      )}

      {/* 6. Docked Multilingual Audio Player connected to AudioManager (Hidden in Fullscreen) */}
      {!isFullscreen && (
        <AudioPlayer
          trackTitle={sceneAudio.title}
          durationString={
            'audioDuration' in currentScene
              ? currentScene.audioDuration
              : '2:30'
          }
          audioUrl={sceneAudio.url}
          transcriptText={sceneAudio.transcript}
          trackId={sceneAudio.trackId}
          hasAmbientMusic={currentMonument.id === 'ellora'}
          isAmbientPlaying={isAmbientPlaying}
          onToggleAmbient={handleToggleAmbient}
        />
      )}

      {/* 6b. Floating Fullscreen Audio Controls Popup (Visible only in Fullscreen Mode) */}
      {isFullscreen && (
        <FullscreenAudioPopup
          trackTitle={sceneAudio.title}
          audioUrl={sceneAudio.url}
          transcriptText={sceneAudio.transcript}
          trackId={sceneAudio.trackId}
          hasAmbientMusic={currentMonument.id === 'ellora'}
          isAmbientPlaying={isAmbientPlaying}
          onToggleAmbient={handleToggleAmbient}
        />
      )}

      {/* 7. Dark Translucent Hotspot Information Monograph Panel */}
      <HotspotPanel
        hotspot={selectedHotspot}
        onClose={handleCloseHotspot}
        onOpenReconstruction={() => setIsReconstructionOpen(true)}
        onPlayAudio={(title, audioUrl) => {
          if (!selectedHotspot) return;
          const { url, title: fullTitle, trackId, transcript } = getHotspotAudio(selectedHotspot, currentLanguageRef.current);
          audioManager.play(url || audioUrl, trackId, fullTitle || title, transcript, currentLanguageRef.current, true);
        }}
      />

      {/* 8. Controls & Keyboard Help Dialog */}
      <ControlsHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* 9. Loading Indicator & Calibration Error Dialog */}
      {(isLoading || loadError) && (
        <LoadingIndicator
          statusText={ui.viewerCalibrating}
          progressPercent={loadingProgress}
          error={loadError}
          onRetry={handleRetry}
          onExit={handleExit}
        />
      )}

      {/* 10. Master Historical View (Explore the Past) */}
      {isReconstructionOpen && (
        <HistoricalViewModal
          initialMonument={currentMonument}
          initialTarget={elloraReconstructionTarget}
          onBackToTour={handleBackToTour}
          onReturnToMuseum={() => {
            setIsReconstructionOpen(false);
            onClose();
          }}
          onOpenHeritageStory={() => setIsHeritageStoryOpen(true)}
          onSelectMonument={(mon) => handleSelectMonument(mon)}
        />
      )}

      {/* 11. HeritageStory AI Modal */}
      <HeritageStoryModal
        isOpen={isHeritageStoryOpen}
        onClose={() => setIsHeritageStoryOpen(false)}
        activeMonument={currentMonument}
        onSelectMonument={(mon) => handleSelectMonument(mon)}
      />

      {/* 12. AR Model Viewer Modal */}
      {isARModalOpen && (
        <ARViewerModal
          monument={currentMonument}
          onClose={() => setIsARModalOpen(false)}
          onOpenReconstruction={(mon, target) => {
            setIsARModalOpen(false);
            if (target) setElloraReconstructionTarget(target);
            setIsReconstructionOpen(true);
          }}
        />
      )}
    </div>
  );
};
