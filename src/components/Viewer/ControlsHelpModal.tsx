import React from 'react';
import { X, Keyboard, Compass, MousePointer } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CarvedCorner } from '../Ornaments';

interface ControlsHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ControlsHelpModal: React.FC<ControlsHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { ui } = useLanguage();

  if (!isOpen) return null;

  const shortcuts = [
    { key: '← / → or [ / ]', desc: 'Previous / Next Viewpoint', code: '← / →' },
    { key: '1 – 6', desc: 'Directly Switch to Viewpoint 1 through 6', code: '1 - 6' },
    { key: ui.helpShortcutSpace, desc: ui.helpShortcutSpaceDesc, code: 'Space' },
    { key: ui.helpShortcutH, desc: ui.helpShortcutHDesc, code: 'H' },
    { key: ui.helpShortcutR, desc: ui.helpShortcutRDesc, code: 'R' },
    { key: ui.helpShortcutPlus, desc: ui.helpShortcutPlusDesc, code: '+ / -' },
    { key: ui.helpShortcutF, desc: ui.helpShortcutFDesc, code: 'F' },
    { key: ui.helpShortcutEsc, desc: ui.helpShortcutEscDesc, code: 'Esc' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#28110D] to-[#1E0B08] border-2 border-[#C6A15B] rounded-xs shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden text-[#FAF0DB]">
        
        {/* Carved Indian Gold Corner Brackets */}
        <CarvedCorner position="tl" />
        <CarvedCorner position="tr" />
        <CarvedCorner position="bl" />
        <CarvedCorner position="br" />

        {/* Double Gold Inset Ring */}
        <div className="absolute inset-[3px] border border-[#C6A15B]/30 rounded-xs pointer-events-none z-10" />

        {/* Modal Header */}
        <div className="p-5 border-b border-[#C6A15B]/40 flex items-center justify-between bg-[#1F0D0A]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#35130F] border border-[#C6A15B]/60 flex items-center justify-center text-[#E0C27B]">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#FAF0DB] tracking-wide">
                {ui.helpTitle}
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-[#B8B2A6]">
                {ui.helpSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#C6A15B]/50 hover:border-[#E0C27B] text-[#B8B2A6] hover:text-[#FAF0DB] flex items-center justify-center transition-colors cursor-pointer"
            aria-label={ui.helpClose}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Navigation & Shortcuts */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs font-sans-body">
          {/* Mouse / Touch Gestures */}
          <div className="p-3 bg-[#1A0B08]/80 border border-[#C6A15B]/25 rounded-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center text-[#E0C27B] shrink-0 mt-0.5">
              <MousePointer className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-cinzel font-bold text-[#E0C27B] text-sm">
                {ui.helpDragToRotate}
              </div>
              <p className="text-[#B8B2A6] mt-0.5 leading-relaxed">
                {ui.helpDragToRotateDesc}
              </p>
            </div>
          </div>

          {/* Keyboard Shortcuts List */}
          <div className="space-y-2.5 pt-1">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#E0C27B]">
              Keyboard Shortcuts
            </div>
            <div className="grid grid-cols-1 gap-2">
              {shortcuts.map((sc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 bg-[#170A08] border border-[#C6A15B]/20 rounded-xs hover:border-[#C6A15B]/50 transition-colors"
                >
                  <span className="text-[#FAF0DB] text-xs font-medium">
                    {sc.desc}
                  </span>
                  <kbd className="px-2.5 py-1 text-[11px] font-mono font-bold text-[#E0C27B] bg-[#28110D] border border-[#C6A15B]/60 rounded-xs shadow-sm whitespace-nowrap ml-3">
                    {sc.code}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#C6A15B]/30 bg-[#1A0B08] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-b from-[#35130F] to-[#1E0B08] hover:from-[#4A171C] text-[#E0C27B] hover:text-[#FAF0DB] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs border border-[#C6A15B] cursor-pointer transition-all"
          >
            {ui.helpClose}
          </button>
        </div>

      </div>
    </div>
  );
};

