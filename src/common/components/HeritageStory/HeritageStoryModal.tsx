import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  X,
  Send,
  BookOpen,
  RotateCcw,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Landmark,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Monument, Language } from '../../types';
import { MONUMENTS } from '../../data/monuments';
import { useLanguage } from '../../context/LanguageContext';
import {
  askHeritageStory,
  SourceReference,
  ConversationTurn
} from '../../services/heritageStoryApi';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  references?: SourceReference[];
  modelUsed?: string;
  error?: boolean;
}

interface HeritageStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMonument: Monument;
  onSelectMonument?: (monument: Monument) => void;
}

export const HeritageStoryModal: React.FC<HeritageStoryModalProps> = ({
  isOpen,
  onClose,
  activeMonument,
  onSelectMonument,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>(activeMonument.id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedRefs, setExpandedRefs] = useState<Record<string, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Cancel any ongoing fetch when unmounting or modal closes
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  // Sync monument if prop changes
  useEffect(() => {
    setSelectedMonumentId(activeMonument.id);
  }, [activeMonument.id]);

  const currentMonument =
    MONUMENTS.find((m) => m.id === selectedMonumentId) || activeMonument;

  // Localized suggested questions
  const SUGGESTED_QUESTIONS: Record<Language, string[]> = {
    en: [
      'Tell me the history of this monument.',
      'Why was this structure built?',
      'Explain its architectural significance.',
      'What makes its sculptures unique?',
      'How did this monument change over time?'
    ],
    kn: [
      'ಈ ಸ್ಮಾರಕದ ಇತಿಹಾಸವನ್ನು ತಿಳಿಸಿ.',
      'ಈ ಅದ್ಭುತ ವಾಸ್ತುವನ್ನು ಏಕೆ ನಿರ್ಮಿಸಲಾಯಿತು?',
      'ಇದರ ವಾಸ್ತುಶಿಲ್ಪದ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ವಿವರಿಸಿ.',
      'ಇಲ್ಲಿನ ಶಿಲ್ಪಕಲೆಯ ವಿಶೇಷತೆಗಳೇನು?',
      'ಕಾಲಕ್ರಮೇಣ ಈ ಸ್ಮಾರಕ ಹೇಗೆ ಬದಲಾಯಿತು?'
    ],
    hi: [
      'इस स्मारक का प्रामाणिक इतिहास बताएं।',
      'इस भव्य संरचना का निर्माण क्यों किया गया था?',
      'इसकी वास्तुकला के विशेष महत्व को समझाएं।',
      'यहाँ की शिल्पकला और मूर्तियों की क्या विशेषता है?',
      'समय के साथ इस स्मारक में क्या परिवर्तन आए?'
    ]
  };

  // Welcome message when monument or language changes
  useEffect(() => {
    const welcomeTexts: Record<Language, string> = {
      en: `Namaste! I am **Heritage AI**, your scholarly curator and architectural historian for **${t(currentMonument.name)}**. All answers are grounded strictly in verified archaeological records (ASI, UNESCO, historical epigraphs). What historical or architectural story would you like to explore?`,
      kn: `ನಮಸ್ಕಾರ! ನಾನು **ಹೆರಿಟೇಜ್ AI** (Heritage AI), **${t(currentMonument.name)}** ಸ್ಮಾರಕದ ನಿಮ್ಮ ಸಂಶೋಧಕ ಇತಿಹಾಸಕಾರ. ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ (ASI) ಮತ್ತು UNESCO ಅಧಿಕೃತ ದಾಖಲೆಗಳ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ಸಿದ್ಧನಿದ್ದೇನೆ. ನೀವು ಏನನ್ನು ಅನ್ವೇಷಿಸಲು ಬಯಸುತ್ತೀರಿ?`,
      hi: `नमस्ते! मैं **हेरिटेज AI** (Heritage AI), **${t(currentMonument.name)}** के लिए आपका शोध-आधारित ऐतिहासिक मार्गदर्शक हूँ। मेरे सभी विवरण भारतीय पुरातत्व सर्वेक्षण (ASI) एवं यूनेस्को के प्रामाणिक दस्तावेजों पर आधारित हैं। आप इस स्मारक के किस ऐतिहासिक या स्थापत्य पहलू को जानना चाहते हैं?`
    };

    setMessages([
      {
        id: 'welcome-1',
        sender: 'ai',
        text: welcomeTexts[language] || welcomeTexts.en,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  }, [selectedMonumentId, language, currentMonument, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (questionText?: string) => {
    const q = (questionText || inputQuestion).trim();
    if (!q || isLoading) return;

    // Abort previous in-flight request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInputQuestion('');
    setIsLoading(true);

    // Build concise conversation history for context (last 3 turns)
    const conversationHistory: ConversationTurn[] = messages
      .filter((m) => !m.error)
      .slice(-3)
      .map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

    try {
      const response = await askHeritageStory({
        monumentId: selectedMonumentId,
        question: q,
        language: language,
        conversationHistory,
        signal: controller.signal,
      });

      if (response.error?.code === 'ABORTED') {
        return;
      }

      if (response.success && response.answer) {
        const aiMsgId = `ai-${Date.now()}`;
        setMessages((prev) => [
          ...prev,
          {
            id: aiMsgId,
            sender: 'ai',
            text: response.answer!,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            references: response.references,
            modelUsed: response.modelUsed,
          },
        ]);
        // Expand references by default if returned
        if (response.references && response.references.length > 0) {
          setExpandedRefs((prev) => ({ ...prev, [aiMsgId]: true }));
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-err-${Date.now()}`,
            sender: 'ai',
            text:
              response.error?.message ||
              'Unable to generate a historical narrative at this moment. Please check your backend connection.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            error: true,
          },
        ]);
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('[HeritageStory] Error during request:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRefs = (msgId: string) => {
    setExpandedRefs((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end pointer-events-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Click-outside backdrop with light opacity so the background/reconstruction remains visible */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-auto transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side-docked Heritage AI Assistant Panel */}
      <div className="relative pointer-events-auto w-full sm:w-[400px] md:w-[430px] max-w-[96vw] h-full sm:h-[calc(100vh-20px)] sm:my-2.5 sm:mr-2.5 flex flex-col bg-[#1C1F21] border border-[#C6A15B]/50 sm:rounded-xs shadow-[-10px_0_35px_rgba(0,0,0,0.85)] text-[#F3EBDD] overflow-hidden">
        {/* Top Header Bar */}
        <header className="px-4 py-3 bg-[#151719] border-b border-[#C6A15B]/30 flex flex-col gap-2.5 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs bg-[#C6A15B]/15 border border-[#C6A15B]/60 flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4 text-[#E0C27B] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#E0C27B] tracking-wide">
                    Heritage AI
                  </h3>
                  <span className="px-1.5 py-0.2 bg-[#C6A15B]/20 text-[#C6A15B] text-[9px] font-mono uppercase rounded-xs border border-[#C6A15B]/40">
                    RAG • Gemini
                  </span>
                </div>
                <p className="text-[10px] text-[#B8B2A6] font-sans">
                  Scholarly Historian &amp; Architectural Storyteller
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#B8B2A6] hover:text-[#F3EBDD] bg-[#242729] hover:bg-[#2e3134] border border-[#C6A15B]/40 rounded-xs transition-colors cursor-pointer"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Controls Bar: Monument Picker & Language Switcher */}
          <div className="flex items-center gap-2">
            {/* Monument Selector */}
            <div className="relative flex-1">
              <select
                value={selectedMonumentId}
                onChange={(e) => {
                  const newId = e.target.value;
                  setSelectedMonumentId(newId);
                  const mon = MONUMENTS.find((m) => m.id === newId);
                  if (mon && onSelectMonument) onSelectMonument(mon);
                }}
                className="w-full bg-[#242729] text-[#F3EBDD] text-xs font-semibold px-2 py-1.5 rounded-xs border border-[#C6A15B]/40 focus:outline-none focus:border-[#E0C27B] cursor-pointer"
              >
                {MONUMENTS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {t(m.name)}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#242729] border border-[#C6A15B]/40 rounded-xs p-0.5 text-[11px] font-semibold shrink-0">
              {(['en', 'kn', 'hi'] as Language[]).map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => setLanguage(lng)}
                  className={`px-2 py-1 rounded-xs transition-colors cursor-pointer ${
                    language === lng
                      ? 'bg-[#C6A15B] text-[#151719] font-bold shadow-xs'
                      : 'text-[#B8B2A6] hover:text-[#F3EBDD]'
                  }`}
                >
                  {lng === 'en' ? 'EN' : lng === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Scrollable Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5 scrollbar-thin scrollbar-thumb-[#C6A15B]/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-[#B8B2A6] mb-1 px-1">
                {msg.sender === 'user' ? (
                  <span>Visitor</span>
                ) : (
                  <span className="flex items-center gap-1 text-[#C6A15B] font-semibold">
                    <Landmark className="w-3 h-3" />
                    Heritage AI {msg.modelUsed ? `(${msg.modelUsed})` : ''}
                  </span>
                )}
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[94%] sm:max-w-[92%] rounded-xs p-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#292C2E] text-[#F3EBDD] border border-[#C6A15B]/40 shadow-sm'
                    : msg.error
                    ? 'bg-[#3b1d1d] text-[#ffb4b4] border border-red-500/50'
                    : 'bg-[#151719] text-[#F3EBDD] border border-[rgba(198,161,91,0.25)] shadow-md'
                }`}
              >
                {/* Message Body */}
                <div className="whitespace-pre-line font-sans space-y-2">
                  {msg.text.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph.split('**').map((part, partIdx) =>
                        partIdx % 2 === 1 ? (
                          <strong key={partIdx} className="font-semibold text-[#E0C27B]">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </div>

                {/* Retried / Error banner */}
                {msg.error && (
                  <div className="mt-3 pt-2 border-t border-red-500/30 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-red-300">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Failed to fetch verified narrative.
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSend(messages[messages.length - 2]?.text)}
                      className="px-2.5 py-1 bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-red-200 rounded-xs flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Retry
                    </button>
                  </div>
                )}

                {/* Verified Archival References & Citations */}
                {msg.references && msg.references.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-[#C6A15B]/20">
                    <button
                      type="button"
                      onClick={() => toggleRefs(msg.id)}
                      className="w-full flex items-center justify-between text-[11px] font-cinzel font-semibold text-[#C6A15B] hover:text-[#E0C27B] transition-colors cursor-pointer py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Verified Archival References &amp; Citations ({msg.references.length})</span>
                      </span>
                      {expandedRefs[msg.id] ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {expandedRefs[msg.id] && (
                      <div className="mt-2 space-y-1.5 bg-[#1C1F21] p-2.5 rounded-xs border border-[#C6A15B]/30 animate-fadeIn">
                        {msg.references.map((ref, rIdx) => (
                          <div
                            key={rIdx}
                            className="text-[11px] leading-tight text-[#B8B2A6] flex items-start gap-1.5"
                          >
                            <span className="text-[#C6A15B] font-mono">[{rIdx + 1}]</span>
                            <div>
                              <span className="text-[#F3EBDD] font-medium">{ref.title}</span>
                              <span className="text-[#858078] ml-1">
                                — {ref.source} {ref.year ? `(${ref.year})` : ''}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Thinking / Loading Indicator */}
          {isLoading && (
            <div className="flex flex-col items-start animate-fadeIn">
              <div className="flex items-center gap-1.5 text-[10px] text-[#C6A15B] mb-1 px-1 font-semibold">
                <Landmark className="w-3 h-3" />
                <span>Heritage AI</span>
              </div>
              <div className="bg-[#151719] border border-[#C6A15B]/40 rounded-xs p-4 flex items-center gap-3 text-xs text-[#E0C27B] shadow-md">
                <Sparkles className="w-4 h-4 text-[#C6A15B] animate-spin" />
                <span className="italic font-playfair tracking-wide">
                  Consulting historical archives and synthesizing architectural narrative...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-5 py-2.5 bg-[#181A1C] border-t border-[#C6A15B]/20 shrink-0">
          <div className="text-[10px] font-cinzel uppercase tracking-wider text-[#9D7B54] mb-1.5 flex items-center gap-1">
            <MessageSquare className="w-3 h-3 text-[#C6A15B]" />
            <span>Suggested Inquiries ({t(currentMonument.name)})</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SUGGESTED_QUESTIONS[language].map((sq, idx) => (
              <button
                key={idx}
                type="button"
                disabled={isLoading}
                onClick={() => handleSend(sq)}
                className="px-2.5 py-1 text-xs whitespace-nowrap bg-[#242729] hover:bg-[#2e3134] hover:text-[#E0C27B] text-[#B8B2A6] border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {sq}
              </button>
            ))}
          </div>
        </div>

        {/* Input & Action Bar */}
        <footer className="p-4 bg-[#151719] border-t border-[#C6A15B]/30 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              onKeyDown={(e) => {
                // Ensure spacebar and all typing keystrokes are never intercepted by parent/window listeners
                e.stopPropagation();
                if (e.key === 'Escape') {
                  onClose();
                } else if (e.key === 'Enter' && e.shiftKey) {
                  e.preventDefault();
                }
              }}
              onKeyUp={(e) => e.stopPropagation()}
              onKeyPress={(e) => e.stopPropagation()}
              placeholder={
                language === 'kn'
                  ? `${t(currentMonument.name)} ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...`
                  : language === 'hi'
                  ? `${t(currentMonument.name)} के बारे में अपना प्रश्न पूछें...`
                  : `Ask about history, architecture, or sculptures of ${t(currentMonument.name)}...`
              }
              disabled={isLoading}
              className="flex-1 bg-[#242729] text-[#F3EBDD] placeholder-[#858078] text-xs sm:text-sm px-4 py-2.5 rounded-xs border border-[#C6A15B]/40 focus:outline-none focus:border-[#E0C27B] transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuestion.trim()}
              className="px-4 py-2.5 bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs border border-[#F3EBDD]/60 shadow flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed group"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};
