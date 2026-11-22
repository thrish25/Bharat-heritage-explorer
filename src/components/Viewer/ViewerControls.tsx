import React from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  PlayCircle,
  PauseCircle,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ViewerControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  isAutoRotating: boolean;
  onToggleAutoRotate: () => void;
  showHotspots: boolean;
  onToggleHotspots: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleHelp?: () => void;
  hasAmbientMusic?: boolean;
  isAmbientPlaying?: boolean;
  onToggleAmbient?: () => void;
}

export const ViewerControls: React.FC<ViewerControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onResetView,
  isAutoRotating,
  onToggleAutoRotate,
  showHotspots,
  onToggleHotspots,
  isFullscreen,
  onToggleFullscreen,
  onToggleHelp,
  hasAmbientMusic = false,
  isAmbientPlaying = false,
  onToggleAmbient,
}) => {
  const { ui } = useLanguage();

  return (
    <aside
      className="absolute right-4 top-20 z-30 flex flex-col gap-2 pointer-events-auto"
      aria-label="Viewer HUD Controls"
    >
      {/* Zoom In */}
      <button
        onClick={onZoomIn}
        className="w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer"
        title={ui.viewerControlsZoomIn}
        aria-label={ui.viewerControlsZoomIn}
      >
        <ZoomIn className="w-4 h-4" />
      </button>

      {/* Zoom Out */}
      <button
        onClick={onZoomOut}
        className="w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer"
        title={ui.viewerControlsZoomOut}
        aria-label={ui.viewerControlsZoomOut}
      >
        <ZoomOut className="w-4 h-4" />
      </button>

      {/* Reset Orientation */}
      <button
        onClick={onResetView}
        className="w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer"
        title={ui.viewerControlsReset}
        aria-label={ui.viewerControlsReset}
      >
        <RotateCcw className="w-4 h-4" />
      </button>

      {/* Auto-Rotation Toggle */}
      <button
        onClick={onToggleAutoRotate}
        className={`w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer ${isAutoRotating ? 'active' : ''
          }`}
        title={ui.viewerControlsAutoRotate}
        aria-label={ui.viewerControlsAutoRotate}
      >
        {isAutoRotating ? (
          <PauseCircle className="w-4 h-4 text-[#C6A15B]" />
        ) : (
          <PlayCircle className="w-4 h-4" />
        )}
      </button>

      {/* Hotspots Toggle */}
      <button
        onClick={onToggleHotspots}
        className={`w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer ${showHotspots ? 'active' : ''
          }`}
        title={ui.viewerControlsHotspots}
        aria-label={ui.viewerControlsHotspots}
      >
        {showHotspots ? (
          <Eye className="w-4 h-4 text-[#C6A15B]" />
        ) : (
          <EyeOff className="w-4 h-4" />
        )}
      </button>

      {/* Om Ambient Drone Toggle (Ellora Caves) */}
      {hasAmbientMusic && (
        <button
          onClick={onToggleAmbient}
          className={`w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer transition-all ${
            isAmbientPlaying ? 'active ring-1 ring-[#E0C27B] shadow-[0_0_12px_rgba(227,185,99,0.5)]' : ''
          }`}
          title={isAmbientPlaying ? 'Stop 108 Hz Om Sacred Drone' : 'Start 108 Hz Om Sacred Drone'}
          aria-label="Toggle Om Drone"
        >
          <span className={`text-base font-bold select-none ${isAmbientPlaying ? 'text-[#E0C27B] animate-pulse' : 'text-[#B8B2A6]'}`}>
            ॐ
          </span>
        </button>
      )}

      {/* Fullscreen Toggle */}
      <button
        onClick={onToggleFullscreen}
        className="w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer"
        title={ui.viewerControlsFullscreen}
        aria-label={ui.viewerControlsFullscreen}
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </button>

      {/* Help / Guide */}
      {onToggleHelp && (
        <button
          onClick={onToggleHelp}
          className="w-10 h-10 rounded-sm viewer-control-btn flex items-center justify-center focus:outline-none cursor-pointer"
          title={ui.viewerControlsHelp}
          aria-label={ui.viewerControlsHelp}
        >
          <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
        </button>
      )}
    </aside>
  );
};
