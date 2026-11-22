import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Mic, MicOff, RefreshCw, BookOpen, AlertCircle, Bot, User } from 'lucide-react';
import { ARMonumentConfig } from '../../data/ar/arMonumentsConfig';
import { askHeritageStory, SourceReference, ConversationTurn } from '../../services/heritageStoryApi';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  references?: SourceReference[];
  timestamp: string;
}

interface ARAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: ARMonumentConfig;
  language: 'en' | 'kn' | 'hi';
  initialQuestion?: string;
  onClearInitialQuestion?: () => void;
}

export const ARAssistantDrawer: React.FC<ARAssistantDrawerProps> = ({
  isOpen,
  onClose,
  config,
  language,
  initialQuestion,
  onClearInitialQuestion,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const recognitionRef = useRef<any>(null);

  const monumentDisplayName = config.name[language] || config.name.en;

  const getWelcomeGreeting = () => {
    switch (language) {
      case 'kn':
        return `ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಎಐ ಪರಂಪರೆ ಮಾರ್ಗದರ್ಶಿ. ${monumentDisplayName} ಬಗ್ಗೆ ನೀವು ಯಾವುದೇ ಐತಿಹಾಸಿಕ ಅಥವಾ ವಾಸ್ತುಶಿಲ್ಪದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಬಹುದು.`;
      case 'hi':
        return `नमस्ते! मैं आपका एआई धरोहर मार्गदर्शक हूँ। आप ${monumentDisplayName} के इतिहास या वास्तुकला से संबंधित कोई भी प्रश्न पूछ सकते हैं।`;
      case 'en':
      default:
        return `Greetings! I am your AI Heritage Guide. Feel free to ask me anything about the history, architecture, or spiritual significance of ${monumentDisplayName}.`;
    }
  };

  // Reset conversation whenever monument changes or on initial mount
  useEffect(() => {
    // Abort any inflight query
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }

    setIsLoading(false);
    setErrorMessage(null);
    setInputQuestion('');

    const initialGreeting: ChatMessage = {
      id: 'greeting-' + Date.now(),
      role: 'model',
      text: getWelcomeGreeting(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([initialGreeting]);
  }, [config.id, language]);

  // Handle incoming voice question from parent
  useEffect(() => {
    if (isOpen && initialQuestion && initialQuestion.trim().length > 0) {
      const q = initialQuestion.trim();
      onClearInitialQuestion?.();
      handleSendQuestion(q);
    }
  }, [isOpen, initialQuestion]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Submit question to HeritageStory AI RAG backend
  const handleSendQuestion = async (queryText?: string) => {
    const textToSend = (queryText !== undefined ? queryText : inputQuestion).trim();
    if (!textToSend || isLoading) return;

    setInputQuestion('');
    setErrorMessage(null);

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // Build conversation history for context (model/user turns)
    const history: ConversationTurn[] = messages
      .filter((m) => m.id !== 'greeting')
      .slice(-6)
      .map((m) => ({
        role: m.role,
        text: m.text,
      }));

    // Abort previous if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await askHeritageStory({
        monumentId: config.normalizedId,
        question: textToSend,
        language: language,
        conversationHistory: history,
        signal: controller.signal,
      });

      if (response.success && response.answer) {
        const assistantMsg: ChatMessage = {
          id: 'model-' + Date.now(),
          role: 'model',
          text: response.answer,
          references: response.references && response.references.length > 0 ? response.references : undefined,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else if (response.error?.code === 'ABORTED') {
        // Ignored, user cancelled or switched
      } else {
        const errDesc = response.error?.message || 'Could not retrieve architectural narrative from the backend.';
        setErrorMessage(errDesc);
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('[ARAssistantDrawer] Query error:', err);
        setErrorMessage('Failed to connect to the HeritageStory service. Please ensure the backend is running.');
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Reset/Clear chat
  const handleClearChat = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsLoading(false);
    setErrorMessage(null);
    setInputQuestion('');
    setMessages([
      {
        id: 'greeting-' + Date.now(),
        role: 'model',
        text: getWelcomeGreeting(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // In-drawer speech recognition for direct speech query input
  const handleToggleMic = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMessage('Speech recognition is not supported in this browser. Please type your question.');
      return;
    }

    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (e: any) => {
        setIsListening(false);
        if (e.error === 'not-allowed') {
          setErrorMessage('Microphone access denied. Please allow microphone permissions.');
        }
      };

      recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript.trim();
        if (transcript) {
          setInputQuestion(transcript);
          handleSendQuestion(transcript);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.warn('[ARAssistantDrawer] Speech error:', err);
    }
  };

  // Suggested prompt questions
  const suggestedPills = config.suggestedQuestions.map((q) => q[language] || q.en);

  if (!isOpen) return null;

  return (
    <div
      className="fixed sm:absolute bottom-0 left-0 right-0 max-h-[84vh] sm:max-h-full sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[440px] md:w-[480px] w-full bg-[#121416]/98 border-t sm:border-t-0 sm:border-l border-[rgba(198,161,91,0.4)] shadow-[0_-12px_45px_rgba(0,0,0,0.95)] sm:shadow-[0_0_50px_rgba(0,0,0,0.95)] rounded-t-2xl sm:rounded-none z-40 backdrop-blur-2xl flex flex-col justify-between text-[#F3EBDD] animate-slide-in select-none pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Mobile Bottom-Sheet Pull Handle */}
      <div className="w-12 h-1.5 rounded-full bg-[#C6A15B]/40 mx-auto my-2 sm:hidden shrink-0" />

      {/* Header */}
      <div className="px-4 py-3 sm:p-4 border-b border-[rgba(198,161,91,0.2)] bg-[#1C1F21]/90 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C6A15B] shrink-0 shadow-md">
            <img
              src="/assets/images/ar/guide-avatar.jpg"
              alt="Heritage Guide Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-numeric tracking-widest text-[#C6A15B] uppercase font-bold">
              <Sparkles className="w-3 h-3 text-[#C6A15B]" />
              <span>AI HERITAGE ASSISTANT</span>
            </div>
            <h3 className="font-editorial text-sm sm:text-base font-bold text-[#F3EBDD] tracking-wide truncate max-w-[220px] sm:max-w-[260px]">
              {monumentDisplayName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleClearChat}
            className="w-9 h-9 flex items-center justify-center text-[#B8B2A6] hover:text-[#E0C27B] bg-[#242729] hover:bg-[#1C1F21] border border-[rgba(198,161,91,0.25)] rounded-xs transition-all cursor-pointer"
            title="Reset Conversation"
            aria-label="Reset Conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-[#B8B2A6] hover:text-[#F3EBDD] bg-[#242729] hover:bg-[#1C1F21] border border-[rgba(198,161,91,0.25)] rounded-xs transition-all cursor-pointer"
            title="Close Assistant"
            aria-label="Close Assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Suggested Quick Question Pills (if conversation only has greeting) */}
      {messages.length <= 1 && (
        <div className="p-3 bg-[#1C1F21]/60 border-b border-[rgba(198,161,91,0.15)] flex flex-wrap gap-1.5 shrink-0 max-h-[140px] overflow-y-auto">
          <span className="text-[10px] font-numeric uppercase tracking-wider text-[#C6A15B] w-full mb-1 font-semibold">
            Suggested Inquiries:
          </span>
          {suggestedPills.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendQuestion(pill)}
              className="text-left text-xs font-cinzel px-3 py-1.5 bg-[#242729] hover:bg-[#2e3235] text-[#E0C27B] hover:text-[#F3EBDD] border border-[rgba(198,161,91,0.3)] rounded-full transition-all cursor-pointer"
            >
              {pill}
            </button>
          ))}
        </div>
      )}

      {/* Message History Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 select-text">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-numeric text-[#858078]">
              {msg.role === 'user' ? (
                <>
                  <span>You</span>
                  <User className="w-3 h-3 text-[#B8B2A6]" />
                </>
              ) : (
                <>
                  <Bot className="w-3 h-3 text-[#C6A15B]" />
                  <span className="text-[#E0C27B]">Heritage Guide</span>
                </>
              )}
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>

            <div
              className={`max-w-[92%] sm:max-w-[88%] rounded-xl sm:rounded-xs p-3.5 text-sm sm:text-base leading-relaxed font-body shadow-md ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] text-[#151719] font-medium'
                  : 'bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] text-[#F3EBDD]'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {/* Scholarly Source Citations */}
              {msg.references && msg.references.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-[rgba(198,161,91,0.2)]">
                  <div className="flex items-center gap-1 text-[11px] font-numeric text-[#C6A15B] font-semibold uppercase tracking-wider mb-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Scholarly Sources & Evidence:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#B8B2A6]">
                    {msg.references.map((ref, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-[#C6A15B]">▪</span>
                        <span>
                          <strong>{ref.title}</strong> — {ref.source} {ref.year ? `(${ref.year})` : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 mb-1 text-[11px] font-numeric text-[#C6A15B]">
              <Bot className="w-3 h-3" />
              <span>Heritage Guide is consulting architectural archive...</span>
            </div>
            <div className="bg-[#1C1F21] border border-[rgba(198,161,91,0.3)] rounded-xl sm:rounded-xs p-3.5 text-sm text-[#B8B2A6] flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full border-2 border-[#C6A15B]/30 border-t-[#C6A15B] animate-spin shrink-0" />
              <span>Analyzing historical records and formulating narrative...</span>
            </div>
          </div>
        )}

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-3.5 bg-red-950/70 border border-red-500/40 rounded-xs text-xs text-red-200 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box & Action Bar with Touch-Friendly Targets */}
      <div className="p-3 sm:p-4 bg-[#1C1F21]/95 border-t border-[rgba(198,161,91,0.25)] shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendQuestion();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            placeholder={
              language === 'kn'
                ? 'ಪ್ರಶ್ನೆ ಕೇಳಿ...'
                : language === 'hi'
                ? 'प्रश्न पूछें...'
                : 'Ask a question about this monument...'
            }
            disabled={isLoading}
            className="flex-1 bg-[#121416] border border-[rgba(198,161,91,0.35)] focus:border-[#C6A15B] rounded-xs px-3.5 py-2.5 text-sm sm:text-base text-[#F3EBDD] placeholder-[#858078] outline-none transition-colors min-h-[44px]"
          />

          {/* Voice Input Button */}
          <button
            type="button"
            onClick={handleToggleMic}
            className={`w-11 h-11 flex items-center justify-center rounded-xs border transition-all cursor-pointer shrink-0 ${
              isListening
                ? 'bg-rose-600 border-rose-500 text-white animate-pulse'
                : 'bg-[#242729] hover:bg-[#1C1F21] text-[#E0C27B] border-[rgba(198,161,91,0.3)]'
            }`}
            title={isListening ? 'Listening... Speak your question' : 'Speak your question'}
            aria-label="Voice question input"
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputQuestion.trim() || isLoading}
            className="w-11 h-11 flex items-center justify-center bg-gradient-to-r from-[#C6A15B] to-[#E0C27B] hover:from-[#B8B2A6] hover:to-[#E0C27B] text-[#151719] rounded-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
            title="Send Question"
            aria-label="Send Question"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <span className="text-[10px] font-numeric text-[#858078] block mt-1.5 text-center">
          Powered by Gemini RAG • Authentic Archival Records
        </span>
      </div>
    </div>
  );
};
