import React from 'react';
import { Compass, AlertTriangle, RotateCcw, X } from 'lucide-react';

interface LoadingIndicatorProps {
  statusText?: string;
  progressPercent?: number;
  error?: string | null;
  onRetry?: () => void;
  onExit?: () => void;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  statusText = 'CALIBRATING IMMERSIVE HERITAGE OPTICS & SANCTUARY...',
  progressPercent = 88,
  error = null,
  onRetry,
  onExit,
}) => {
  if (error) {
    return (
      <div className="absolute inset-0 z-50 bg-[#151719]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#1C1F21] flex items-center justify-center border-2 border-[#E0C27B] shadow-xl shadow-[#C6A15B]/20 mb-5">
          <AlertTriangle className="w-8 h-8 text-[#E0C27B]" />
        </div>

        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.15em] text-[#F3EBDD] uppercase mb-2">
          Heritage Calibration Notice
        </h2>

        <p className="text-xs uppercase tracking-widest text-[#B8B2A6] mb-4">
          Architectural Virtual Exploration System
        </p>

        <div className="max-w-md bg-[#1C1F21] border border-[#C6A15B]/30 rounded-sm p-4 mb-6 text-left">
          <p className="text-xs text-[#F3EBDD]/90 leading-relaxed font-sans-body">
            {error}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A15B] hover:bg-[#E0C27B] text-[#151719] font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md focus:outline-none cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Calibration</span>
            </button>
          )}

          {onExit && (
            <button
              onClick={onExit}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1F21] hover:bg-[#242729] text-[#F3EBDD] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all shadow-sm focus:outline-none cursor-pointer"
            >
              <X className="w-4 h-4" />
              <span>Return to Museum</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50 bg-[#151719]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center select-none animate-in fade-in duration-300">
      {/* Central Rotating Compass Emblem */}
      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border border-[#C6A15B]/30 animate-spin"
          style={{ animationDuration: '10s' }}
        />
        <div
          className="absolute inset-2 rounded-full border-t-2 border-[#C6A15B] animate-spin"
          style={{ animationDuration: '2.5s' }}
        />
        <div className="w-10 h-10 rounded-full bg-[#1C1F21] flex items-center justify-center border border-[#C6A15B] shadow-lg shadow-[#C6A15B]/20">
          <Compass className="w-5 h-5 text-[#C6A15B]" />
        </div>
      </div>

      <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F3EBDD] uppercase mb-2">
        National Cultural Heritage
      </h2>

      <p className="text-xs uppercase tracking-widest text-[#B8B2A6] mb-6">
        Architectural Virtual Exploration System
      </p>

      {/* Progress Track */}
      <div className="w-64 max-w-full h-1.5 bg-[#1C1F21] border border-[#C6A15B]/30 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
        />
      </div>

      <div className="text-[11px] font-mono tracking-widest text-[#858078] uppercase">
        {statusText}
      </div>
    </div>
  );
};
