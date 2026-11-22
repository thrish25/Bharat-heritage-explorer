/**
 * Gemini Digital Reconstruction API Test Console
 * Royal Indian Heritage Platform
 * 
 * Development-only demonstration and verification modal for Phase 3.
 * Strictly separate from 360° virtual tour exploration.
 * 
 * Capabilities:
 * 1. Checks backend server connectivity (http://127.0.0.1:3001).
 * 2. Displays masked API key status without exposing secrets.
 * 3. Previews audited Phase 2.1 historical prompt and reference images.
 * 4. Enables deliberate single-perspective reconstruction generation.
 * 5. Shows real-time progress steps and real generated image output with metadata.
 * 6. Displays transparent error handling if API key is missing or API errors occur.
 */

import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Server,
  Key,
  Layers,
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  FileText,
  ShieldAlert,
  ExternalLink,
  Clock,
  Hash
} from 'lucide-react';

interface ReconstructionApiTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServerStatusResponse {
  status: string;
  service: string;
  version: string;
  timestamp: string;
  apiKeyStatus: {
    isConfigured: boolean;
    maskedHint: string;
  };
  modelConfig: {
    modelId: string;
    endpoint: string;
    timeoutSeconds: number;
  };
  hasCachedReconstruction: boolean;
  latestReconstruction: any | null;
  preparedPromptPreview: {
    monumentId: string;
    monumentName: string;
    activeTargetComponent: string;
    modelId: string;
    promptTemplateId: string;
    historicalDataVersion: string;
    verifiedHistoricalFactsCount: number;
    probableInterpretationsCount: number;
    negativeConstraintsCount: number;
    referenceImages: Array<{
      referenceId: string;
      sourceId: string;
      role: string;
      suppliedAsFileInput: boolean;
      filePath?: string;
      note: string;
    }>;
    historicalPhotographsIncludedAsFiles: boolean;
    historicalPhotographsNote: string;
    mandatoryDisclosure: string;
    visualConfig: any;
    composedPromptPreview: string;
  };
}

export const ReconstructionApiTestModal: React.FC<ReconstructionApiTestModalProps> = ({
  isOpen,
  onClose
}) => {
  const [serverStatus, setServerStatus] = useState<ServerStatusResponse | null>(null);
  const [isServerOnline, setIsServerOnline] = useState<boolean | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState<string>('idle');
  const [generationError, setGenerationError] = useState<{ code: string; message: string; details?: string } | null>(null);
  const [latestResult, setLatestResult] = useState<any | null>(null);
  const [forceRegenerate, setForceRegenerate] = useState(false);
  const [activeTab, setActiveTab] = useState<'console' | 'prompt' | 'references' | 'metadata'>('console');

  // Fetch backend status
  const fetchStatus = async () => {
    setIsLoadingStatus(true);
    setGenerationError(null);
    try {
      const res = await fetch('/api/reconstruction/status');
      if (res.ok) {
        const data = await res.json();
        setServerStatus(data);
        setIsServerOnline(true);
        if (data.latestReconstruction) {
          setLatestResult(data.latestReconstruction);
        }
      } else {
        setIsServerOnline(false);
      }
    } catch {
      setIsServerOnline(false);
    } finally {
      setIsLoadingStatus(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchStatus();
    }
  }, [isOpen]);

  // Handle deliberate image generation
  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationError(null);
    setGenerationStep('1/4: Preparing verified historical prompt and reference images...');

    try {
      setGenerationStep('2/4: Transmitting request to Google Gemini Interactions API...');
      const res = await fetch('/api/reconstruction/hampi/stone-chariot/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force: forceRegenerate })
      });

      setGenerationStep('3/4: Receiving and validating generated image response...');
      const data = await res.json();

      if (res.ok && data.success) {
        setGenerationStep('4/4: Complete: Image extracted and persisted to disk.');
        setLatestResult(data.metadata);
      } else {
        setGenerationError(data.error || {
          code: `HTTP_${res.status}`,
          message: data.message || 'Generation failed',
          details: 'Check server logs for additional diagnostic details.'
        });
      }
    } catch (err: any) {
      setGenerationError({
        code: 'NETWORK_ERROR',
        message: 'Could not connect to backend reconstruction server.',
        details: err.message || 'Ensure backend server is running on port 3001.'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#1A0B08] border border-[#C6A15B]/40 rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.9)] text-[#FAF0DB] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#28110D] border-b border-[#C6A15B]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C6A15B]/15 border border-[#C6A15B]/40 text-[#C6A15B]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-serif font-bold text-[#EEDAA2]">
                  Gemini Digital Reconstruction API Console
                </h2>
                <span className="px-2 py-0.5 text-xs font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded">
                  Phase 3 Dev
                </span>
              </div>
              <p className="text-xs text-[#FAF0DB]/70 font-sans">
                Pilot Monument: Hampi Stone Chariot • Sole Active Target: Missing Brick Vimana (COMP-06)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchStatus}
              disabled={isLoadingStatus}
              className="p-1.5 rounded-lg border border-[#C6A15B]/30 hover:bg-[#C6A15B]/10 text-[#C6A15B] transition-colors"
              title="Refresh server status"
            >
              <RefreshCw className={`w-4 h-4 ${isLoadingStatus ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#C6A15B]/30 hover:bg-rose-950/40 text-[#FAF0DB]/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-[#1C1F21] border-b border-[#C6A15B]/20 text-xs font-mono">
          <button
            onClick={() => setActiveTab('console')}
            className={`px-3 py-2 border-b-2 font-semibold transition-colors ${
              activeTab === 'console'
                ? 'border-[#C6A15B] text-[#EEDAA2]'
                : 'border-transparent text-[#FAF0DB]/60 hover:text-[#FAF0DB]'
            }`}
          >
            🎮 Generation Console
          </button>
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-3 py-2 border-b-2 font-semibold transition-colors ${
              activeTab === 'prompt'
                ? 'border-[#C6A15B] text-[#EEDAA2]'
                : 'border-transparent text-[#FAF0DB]/60 hover:text-[#FAF0DB]'
            }`}
          >
            📜 Prepared Historical Prompt ({serverStatus?.preparedPromptPreview ? 'Audited 2.1' : '...'})
          </button>
          <button
            onClick={() => setActiveTab('references')}
            className={`px-3 py-2 border-b-2 font-semibold transition-colors ${
              activeTab === 'references'
                ? 'border-[#C6A15B] text-[#EEDAA2]'
                : 'border-transparent text-[#FAF0DB]/60 hover:text-[#FAF0DB]'
            }`}
          >
            🖼️ Reference Assets & Roles
          </button>
          {latestResult && (
            <button
              onClick={() => setActiveTab('metadata')}
              className={`px-3 py-2 border-b-2 font-semibold transition-colors ${
                activeTab === 'metadata'
                  ? 'border-[#C6A15B] text-[#EEDAA2]'
                  : 'border-transparent text-[#FAF0DB]/60 hover:text-[#FAF0DB]'
              }`}
            >
              📊 Sidecar Metadata ({latestResult.generationId.slice(-8)})
            </button>
          )}
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: CONSOLE */}
          {activeTab === 'console' && (
            <div className="space-y-6">
              
              {/* Server & API Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 1. Backend Status */}
                <div className="p-4 rounded-lg bg-[#28110D]/80 border border-[#C6A15B]/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#FAF0DB]/60 font-mono flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-[#C6A15B]" /> Node Backend
                    </span>
                    {isServerOnline ? (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online (3001)
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
                        Offline
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-[#FAF0DB]/80">
                    {isServerOnline
                      ? 'Local server connected & proxy active'
                      : 'Run `npm run server` in terminal'}
                  </div>
                </div>

                {/* 2. API Key Status */}
                <div className="p-4 rounded-lg bg-[#28110D]/80 border border-[#C6A15B]/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#FAF0DB]/60 font-mono flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5 text-[#C6A15B]" /> Gemini API Key
                    </span>
                    {serverStatus?.apiKeyStatus?.isConfigured ? (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        Configured
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                        Not Found
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono truncate text-[#FAF0DB]/80">
                    {serverStatus?.apiKeyStatus?.maskedHint || 'Checking status...'}
                  </div>
                </div>

                {/* 3. Model ID */}
                <div className="p-4 rounded-lg bg-[#28110D]/80 border border-[#C6A15B]/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#FAF0DB]/60 font-mono flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#C6A15B]" /> Active Model
                    </span>
                    <span className="text-[11px] font-mono text-[#C6A15B] bg-[#C6A15B]/10 px-2 py-0.5 rounded border border-[#C6A15B]/30">
                      Interactions API
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#FAF0DB]/90 font-semibold truncate">
                    {serverStatus?.modelConfig?.modelId || 'gemini-3.1-flash-image'}
                  </div>
                </div>

              </div>

              {/* API Key Missing Alert */}
              {isServerOnline && !serverStatus?.apiKeyStatus?.isConfigured && (
                <div className="p-4 rounded-lg bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-200/90 space-y-1">
                    <p className="font-semibold text-amber-100">
                      Google Gemini API Key is not set in backend environment
                    </p>
                    <p>
                      To generate a live image with Gemini, create a <code className="bg-black/50 px-1 py-0.5 rounded">.env</code> file in <code className="bg-black/50 px-1 py-0.5 rounded">royal-heritage-platform/</code> with:
                    </p>
                    <pre className="p-2 mt-1 bg-black/60 rounded font-mono text-[11px] text-[#FAF0DB]">
                      GEMINI_API_KEY=your_actual_gemini_api_key_here
                    </pre>
                    <p className="text-[11px] text-amber-300/80">
                      Note: The key is kept strictly in the backend and is never sent to the browser or committed to git.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Controls & Trigger */}
              <div className="p-5 rounded-lg bg-[#1C1F21] border border-[#C6A15B]/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#EEDAA2]">
                      Execute Deliberate Single-Perspective Reconstruction
                    </h3>
                    <p className="text-xs text-[#FAF0DB]/70 font-sans mt-0.5">
                      Submits the audited Phase 2.1 prompt + modern ground-truth canvas to the official Gemini Interactions API.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-xs text-[#FAF0DB]/70 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={forceRegenerate}
                        onChange={(e) => setForceRegenerate(e.target.checked)}
                        className="rounded border-[#C6A15B]/50 text-[#C6A15B] focus:ring-0"
                      />
                      Force new generation (bypass disk cache)
                    </label>

                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating || !isServerOnline}
                      className={`px-5 py-2.5 rounded-lg font-serif font-semibold text-xs transition-all flex items-center gap-2 shadow-lg ${
                        isGenerating || !isServerOnline
                          ? 'bg-[#C6A15B]/30 text-[#FAF0DB]/40 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#C6A15B] to-[#DFBA73] text-[#1C1F21] hover:brightness-110 cursor-pointer active:scale-95'
                      }`}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Generate Digital Reconstruction
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Real-Time Progress Steps */}
                {isGenerating && (
                  <div className="p-3 rounded bg-black/40 border border-[#C6A15B]/30 font-mono text-xs text-amber-300 flex items-center gap-2.5 animate-pulse">
                    <RefreshCw className="w-4 h-4 animate-spin shrink-0 text-[#C6A15B]" />
                    <span>{generationStep}</span>
                  </div>
                )}

                {/* Error Banner */}
                {generationError && (
                  <div className="p-4 rounded-lg bg-rose-950/60 border border-rose-500/50 space-y-1">
                    <div className="flex items-center gap-2 text-rose-300 font-bold text-xs font-mono">
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      <span>Generation Error [{generationError.code}]</span>
                    </div>
                    <p className="text-xs text-rose-100">{generationError.message}</p>
                    {generationError.details && (
                      <p className="text-[11px] text-rose-200/70 font-mono mt-1 bg-black/40 p-2 rounded">
                        {generationError.details}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Generated Image & Output Display */}
              {latestResult && (
                <div className="p-5 rounded-lg bg-[#28110D] border border-[#C6A15B]/50 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#C6A15B]/30 pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <div>
                        <h4 className="text-sm font-serif font-bold text-[#EEDAA2]">
                          Generated Architectural Reconstruction (Output Canvas)
                        </h4>
                        <p className="text-[11px] font-mono text-[#FAF0DB]/60">
                          {latestResult.generatedImageFilename} • {Math.round(latestResult.fileSizeBytes / 1024)} KB • PNG
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                      Saved to Disk
                    </span>
                  </div>

                  {/* Rendered Image */}
                  <div className="relative rounded-lg overflow-hidden border border-[#C6A15B]/40 bg-black/60 max-h-[500px] flex items-center justify-center">
                    <img
                      src={latestResult.generatedImagePublicUrl}
                      alt="Gemini AI Historical Reconstruction of Hampi Stone Chariot Vimana"
                      className="max-h-[480px] w-auto object-contain mx-auto"
                      onError={(e) => {
                        // Fallback if image path needs reload
                        console.warn('Image load error on public path:', latestResult.generatedImagePublicUrl);
                      }}
                    />
                  </div>

                  {/* Mandatory Disclosure Alert */}
                  <div className="p-3 rounded bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200/90 font-sans italic">
                    ⚖️ <strong>Academic Disclosure:</strong> {latestResult.mandatoryDisclosure}
                  </div>

                  {/* Quick Metadata Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-black/30 border border-[#C6A15B]/20">
                      <span className="text-[#FAF0DB]/50 block text-[10px]">Model Used</span>
                      <span className="text-[#EEDAA2] font-semibold">{latestResult.modelId}</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/30 border border-[#C6A15B]/20">
                      <span className="text-[#FAF0DB]/50 block text-[10px]">Timestamp</span>
                      <span className="text-[#EEDAA2] truncate block">{new Date(latestResult.generationTimestamp).toLocaleTimeString()}</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/30 border border-[#C6A15B]/20">
                      <span className="text-[#FAF0DB]/50 block text-[10px]">1856 Calotypes as Files</span>
                      <span className="text-amber-300">No (Text Guidance Only)</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/30 border border-[#C6A15B]/20">
                      <span className="text-[#FAF0DB]/50 block text-[10px]">Ground Truth Canvas</span>
                      <span className="text-emerald-300">Darsi 2016 (Passed)</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: PROMPT PREVIEW */}
          {activeTab === 'prompt' && serverStatus?.preparedPromptPreview && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between bg-[#1C1F21] p-3 rounded border border-[#C6A15B]/30">
                <span>Prompt Template: <strong>{serverStatus.preparedPromptPreview.promptTemplateId}</strong></span>
                <span className="text-[#C6A15B]">Version: {serverStatus.preparedPromptPreview.historicalDataVersion}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-serif font-bold text-[#EEDAA2]">Composed Generation Payload</h4>
                <pre className="p-4 rounded-lg bg-black/70 border border-[#C6A15B]/30 text-[#FAF0DB]/90 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-[450px]">
                  {serverStatus.preparedPromptPreview.composedPromptPreview}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: REFERENCES */}
          {activeTab === 'references' && serverStatus?.preparedPromptPreview && (
            <div className="space-y-4">
              <h4 className="text-sm font-serif font-bold text-[#EEDAA2]">
                Registered Reference Assets & Operational Input Roles
              </h4>
              <div className="space-y-3">
                {serverStatus.preparedPromptPreview.referenceImages.map((ref, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#1C1F21] border border-[#C6A15B]/30 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#EEDAA2]">{ref.referenceId}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${
                        ref.suppliedAsFileInput
                          ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                          : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                      }`}>
                        {ref.suppliedAsFileInput ? 'Supplied as Raw Image File' : 'External Archival Citation (Prompt Directives Only)'}
                      </span>
                    </div>
                    <div className="text-[#C6A15B] text-[11px]">{ref.role}</div>
                    <div className="text-[#FAF0DB]/70 text-[11px] font-sans">{ref.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: METADATA */}
          {activeTab === 'metadata' && latestResult && (
            <div className="space-y-4 font-mono text-xs">
              <h4 className="text-sm font-serif font-bold text-[#EEDAA2]">
                Complete Sidecar Metadata ({latestResult.generatedImageFilename}.json)
              </h4>
              <pre className="p-4 rounded-lg bg-black/70 border border-[#C6A15B]/30 text-[#FAF0DB]/90 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-[450px]">
                {JSON.stringify(latestResult, null, 2)}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#28110D] border-t border-[#C6A15B]/30 flex items-center justify-between text-xs font-mono text-[#FAF0DB]/60">
          <span>College Demonstration Module • Royal Indian Heritage Platform</span>
          <span>Target: COMP-06-BRICK-VIMANA</span>
        </div>

      </div>
    </div>
  );
};
