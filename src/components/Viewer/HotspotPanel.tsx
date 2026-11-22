import React from 'react';
import { X, Volume2, BookOpen, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { HotspotDemo, ArchitecturalHotspot } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface HotspotPanelProps {
  hotspot: HotspotDemo | ArchitecturalHotspot | null;
  onClose: () => void;
  onPlayAudio?: (title: string, audioUrl?: string) => void;
  onOpenReconstruction?: (target?: 'vishwakarma' | 'kailasa') => void;
}

export const HotspotPanel: React.FC<HotspotPanelProps> = ({
  hotspot,
  onClose,
  onPlayAudio,
  onOpenReconstruction,
}) => {
  const { t, ui, language } = useLanguage();

  if (!hotspot) return null;

  const audioUrl =
    'audioSources' in hotspot && hotspot.audioSources
      ? hotspot.audioSources[language] || hotspot.audioSources.en
      : undefined;

  const transcript =
    ('transcripts' in hotspot && hotspot.transcripts
      ? hotspot.transcripts[language] || hotspot.transcripts.en
      : undefined) ||
    [
      typeof hotspot.description === 'string'
        ? hotspot.description
        : hotspot.description?.[language] || hotspot.description?.en,
      'historicalSignificance' in hotspot && hotspot.historicalSignificance
        ? typeof hotspot.historicalSignificance === 'string'
          ? hotspot.historicalSignificance
          : hotspot.historicalSignificance[language] || hotspot.historicalSignificance.en
        : undefined,
    ]
      .filter(Boolean)
      .join('. ');

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-full sm:w-[460px] viewer-panel-surface border-l border-[rgba(198,161,91,0.25)] text-[#F3EBDD] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-6 border-b border-[rgba(198,161,91,0.18)] flex items-start justify-between bg-[#151719]/80 backdrop-blur-md">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#C6A15B]/15 text-[#E0C27B] border border-[#C6A15B]/35 text-[10px] uppercase font-numeric font-bold tracking-widest">
            {hotspot.category}
          </div>
          <h3 className="font-editorial text-xl font-bold text-[#F3EBDD] tracking-tight pt-1">
            {t(hotspot.title)}
          </h3>
          <p className="text-[11px] font-numeric text-[#858078] uppercase tracking-wider">
            {ui.viewerMonographBadge}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-[#B8B2A6] hover:text-[#F3EBDD] bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] hover:border-[#C6A15B] rounded-xs transition-colors focus:outline-none cursor-pointer"
          aria-label={ui.viewerClosePanel}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content Scroll Area */}
      <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm font-sans-body leading-relaxed">
        {/* Dedicated Explore the Past Callout for Hampi Stone Chariot Hotspots */}
        {onOpenReconstruction && (hotspot.id === 'sc-shikhara' || hotspot.id === 'v-chariot' || hotspot.id === 'sc-sanctum' || hotspot.id === 'sc-wheels') && (
          <div className="p-3.5 bg-gradient-to-r from-[#1C1F21] to-[#242729] border border-[#C6A15B] rounded-xs flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151719] border border-[#E0C27B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#E0C27B]" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#E0C27B] tracking-wide">Historical View • Vimana Visualization</div>
                <div className="text-[11px] text-[#B8B2A6] leading-tight">Explore the monument&apos;s earlier 16th-century appearance</div>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReconstruction();
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#1C1F21] font-cinzel font-bold text-xs uppercase tracking-wider rounded-xs transition-all shrink-0 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              Explore the Past
            </button>
          </div>
        )}

        {/* Dedicated Explore the Past Callout for Ellora Cave 10 Buddha Shrine Hotspots */}
        {onOpenReconstruction && (hotspot.id === 'c10_buddha_stupa' || hotspot.id === 'hs_buddha') && (
          <div className="p-3.5 bg-gradient-to-r from-[#1C1F21] to-[#242729] border border-[#C6A15B] rounded-xs flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151719] border border-[#E0C27B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#E0C27B]" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#E0C27B] tracking-wide">Historical View • Buddha Shrine</div>
                <div className="text-[11px] text-[#B8B2A6] leading-tight">Explore the monument&apos;s earlier 7th-century sculptural appearance</div>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReconstruction('vishwakarma');
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#1C1F21] font-cinzel font-bold text-xs uppercase tracking-wider rounded-xs transition-all shrink-0 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              Explore the Past
            </button>
          </div>
        )}

        {/* Dedicated Explore the Past Callout for Ellora Cave 16 Kailasa Temple Hotspots */}
        {onOpenReconstruction && (hotspot.id === 'c16_dhvajastambha' || hotspot.id === 'c16_elephant_plinth' || hotspot.id === 'c16_elephant_monolith' || hotspot.id === 'c16_vimana_tower' || hotspot.id === 'c16_rock_bridge' || hotspot.id === 'c16_nandi_mandapa' || hotspot.id === 'c16_sanctum_vimana' || hotspot.id === 'c16_monolithic_screen') && (
          <div className="p-3.5 bg-gradient-to-r from-[#1C1F21] to-[#242729] border border-[#C6A15B] rounded-xs flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151719] border border-[#E0C27B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#E0C27B]" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#E0C27B] tracking-wide">Historical View • Kailasa White Plaster</div>
                <div className="text-[11px] text-[#B8B2A6] leading-tight">Explore the monument&apos;s earlier 8th-century appearance</div>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReconstruction('kailasa');
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#1C1F21] font-cinzel font-bold text-xs uppercase tracking-wider rounded-xs transition-all shrink-0 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              Explore the Past
            </button>
          </div>
        )}

        {/* Dedicated Explore the Past Callout for Konark Sun Temple Jagamohana Hotspots */}
        {onOpenReconstruction && (hotspot.id === 'pidha-deula-pyramid' || hotspot.id === 'asi-conservation-scaffold' || hotspot.id === 'alasakanya-dancers' || hotspot.id === 'hs_gajasimha') && (
          <div className="p-3.5 bg-gradient-to-r from-[#1C1F21] to-[#242729] border border-[#C6A15B] rounded-xs flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151719] border border-[#E0C27B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#E0C27B]" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#E0C27B] tracking-wide">Historical View • Sun Temple Chariot</div>
                <div className="text-[11px] text-[#B8B2A6] leading-tight">Explore the monument&apos;s earlier 13th-century appearance</div>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReconstruction();
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#1C1F21] font-cinzel font-bold text-xs uppercase tracking-wider rounded-xs transition-all shrink-0 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              Explore the Past
            </button>
          </div>
        )}

        {/* Dedicated Explore the Past Callout for Taj Mahal Hotspots */}
        {onOpenReconstruction && (hotspot.id === 'hotspot_s1_main_dome' || hotspot.id === 'hotspot_s1_corner_chhatri' || hotspot.id === 'hotspot_s3_facade' || hotspot.id === 'hotspot_s3_pool' || hotspot.id === 'hotspot_s3_sw_minaret' || hotspot.id === 'hotspot_s5_yamuna' || hotspot.id === 'hotspot_s2_outer_jali') && (
          <div className="p-3.5 bg-gradient-to-r from-[#1C1F21] to-[#242729] border border-[#C6A15B] rounded-xs flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#151719] border border-[#E0C27B] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#E0C27B]" />
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#E0C27B] tracking-wide">Historical View • Taj Mahal</div>
                <div className="text-[11px] text-[#B8B2A6] leading-tight">Explore the monument&apos;s earlier 17th-century appearance</div>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReconstruction();
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#1C1F21] font-cinzel font-bold text-xs uppercase tracking-wider rounded-xs transition-all shrink-0 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              Explore the Past
            </button>
          </div>
        )}

        {/* Visual & Architectural Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Visual & Architectural Description</span>
          </div>
          <p className="text-[#F3EBDD]/90 bg-[#151719]/40 p-4 rounded-sm border border-[#C6A15B]/15">
            {t(hotspot.description)}
          </p>
        </div>

        {/* Historical Context */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8B2A6] font-bold">
            <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Historical & Cultural Context</span>
          </div>
          <p className="text-[#E4CDB2]/85 text-xs leading-relaxed pl-3 border-l-2 border-[#C6A15B]/50">
            {t(hotspot.historicalSignificance)}
          </p>
        </div>

        {/* Archaeological Specifications */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8B2A6] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Archaeological Specifications</span>
          </div>
          <p className="text-[#E4CDB2]/85 text-xs leading-relaxed pl-3 border-l-2 border-[#B8B2A6]/30">
            {t(hotspot.architecturalDetails)}
          </p>
        </div>

        {/* Audio Narration Transcript */}
        {transcript && (
          <div className="space-y-2 pt-2 border-t border-[#C6A15B]/15">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] font-bold">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Narration Script & Transcript</span>
            </div>
            <p className="text-[#F3EBDD]/90 text-xs italic bg-[#1C1F21]/60 p-3 rounded-sm border border-[#C6A15B]/20 leading-relaxed">
              "{transcript}"
            </p>
          </div>
        )}
      </div>

      {/* Footer / Audio Narration Action */}
      <div className="p-5 border-t border-[#C6A15B]/20 bg-[#151719]/80 flex items-center justify-between gap-3">
        <button
          onClick={() => {
            if (onPlayAudio) onPlayAudio(t(hotspot.title), audioUrl);
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C6A15B] hover:bg-[#E0C27B] text-[#151719] font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md focus:outline-none cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>{ui.viewerPlayAudio}</span>
        </button>

        <button
          onClick={onClose}
          className="px-4 py-2.5 bg-[#1C1F21] hover:bg-[#242729] text-[#B8B2A6] hover:text-[#F3EBDD] border border-[#C6A15B]/30 text-xs uppercase tracking-wider rounded-sm transition-all focus:outline-none cursor-pointer"
        >
          {ui.viewerClosePanel}
        </button>
      </div>
    </div>
  );
};
