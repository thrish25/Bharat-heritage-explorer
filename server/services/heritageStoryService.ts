/**
 * HeritageStory AI — Fast RAG Retrieval and Storytelling Service
 * Royal Indian Heritage Platform
 * 
 * Secure backend service utilizing Retrieval-Augmented Generation (RAG)
 * coupled with Google's Gemini Developer API to provide authentic, scholarly,
 * and high-speed architectural narratives for Indian heritage monuments.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GEMINI_CONFIG, isApiKeyConfigured } from '../config/geminiConfig.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KNOWLEDGE_BASE_PATH = path.resolve(__dirname, '../data/heritageKnowledgeBase.json');

export interface SourceReference {
  title: string;
  source: string;
  year?: string;
  evidenceType?: string;
}

export interface KnowledgePassage {
  id: string;
  category: string;
  title: string;
  content: string;
  references: SourceReference[];
  keywords: string[];
}

export interface MonumentKnowledge {
  monumentId: string;
  name: string;
  passages: KnowledgePassage[];
}

export type KnowledgeBase = Record<string, MonumentKnowledge>;

// In-memory cache for knowledge base
let cachedKnowledgeBase: KnowledgeBase | null = null;

// In-memory cache for generated answers (key: monumentId::language::normalizedQuestion)
const storyCache = new Map<string, StoryGenerationResponse>();

export function loadKnowledgeBase(): KnowledgeBase {
  if (cachedKnowledgeBase) return cachedKnowledgeBase;
  const candidatePaths = [
    KNOWLEDGE_BASE_PATH,
    path.resolve(process.cwd(), 'server/data/heritageKnowledgeBase.json'),
    path.resolve(process.cwd(), 'data/heritageKnowledgeBase.json'),
    path.resolve(__dirname, '../../server/data/heritageKnowledgeBase.json'),
  ];
  const foundPath = candidatePaths.find(p => fs.existsSync(p));
  if (!foundPath) {
    throw new Error(`Knowledge base file not found at candidate paths: ${candidatePaths.join(', ')}`);
  }
  const raw = fs.readFileSync(foundPath, 'utf-8');
  cachedKnowledgeBase = JSON.parse(raw);
  if (cachedKnowledgeBase && cachedKnowledgeBase['taj-mahal'] && !cachedKnowledgeBase['tajmahal']) {
    cachedKnowledgeBase['tajmahal'] = cachedKnowledgeBase['taj-mahal'];
  }
  return cachedKnowledgeBase!;
}

// Stop words to exclude from keyword extraction
const STOP_WORDS = new Set([
  'the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'in', 'to', 'of', 'for', 'with',
  'it', 'its', 'as', 'by', 'this', 'that', 'these', 'those', 'tell', 'me', 'about',
  'what', 'how', 'why', 'when', 'where', 'who', 'does', 'did', 'do', 'can', 'you',
  'explain', 'describe', 'give', 'detail', 'details', 'please', 'something'
]);

/**
 * Tokenizes and extracts search tokens from a user query
 */
export function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0900-\u097F\u0C80-\u0CFF]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

/**
 * Normalizes monument identifiers across frontend and backend formats
 * (e.g. 'tajmahal' <-> 'taj-mahal', 'kailasa' <-> 'ellora')
 */
export function normalizeMonumentId(id: string): string {
  const clean = (id || '').toLowerCase().trim().replace(/_/g, '-');
  if (clean === 'tajmahal' || clean === 'taj-mahal' || clean === 'taj') {
    return 'taj-mahal';
  }
  if (clean === 'ellora' || clean === 'ellora-caves' || clean === 'kailasa') {
    return 'ellora';
  }
  if (clean === 'konark' || clean === 'konark-sun-temple' || clean === 'sun-temple') {
    return 'konark';
  }
  if (clean === 'hampi' || clean === 'vijayanagara') {
    return 'hampi';
  }
  return clean;
}

export interface ScoredPassage {
  passage: KnowledgePassage;
  score: number;
}

/**
 * RAG Retriever: Retrieves the top relevant knowledge passages (default 2 for high speed)
 */
export function retrieveRelevantKnowledge(
  monumentId: string,
  query: string,
  maxResults: number = 2
): { passages: KnowledgePassage[]; references: SourceReference[] } {
  const normalizedId = normalizeMonumentId(monumentId);
  const kb = loadKnowledgeBase();
  const monumentData = kb[normalizedId] || kb[monumentId];

  if (!monumentData || !monumentData.passages || monumentData.passages.length === 0) {
    return { passages: [], references: [] };
  }

  const queryTokens = extractKeywords(query);

  // If query has no substantive keywords (e.g. "hi"), return the overview/history passages
  if (queryTokens.length === 0) {
    const defaultPassages = monumentData.passages.slice(0, 2);
    const refs: SourceReference[] = [];
    defaultPassages.forEach(p => p.references?.forEach(r => refs.push(r)));
    return {
      passages: defaultPassages,
      references: deduplicateReferences(refs)
    };
  }

  const scored: ScoredPassage[] = monumentData.passages.map(passage => {
    let score = 0;
    const passageKeywords = new Set(passage.keywords.map(k => k.toLowerCase()));
    const titleLower = passage.title.toLowerCase();
    const contentLower = passage.content.toLowerCase();
    const categoryLower = passage.category.toLowerCase();

    for (const token of queryTokens) {
      if (passageKeywords.has(token)) score += 8;
      for (const kw of passageKeywords) {
        if (kw.includes(token) || token.includes(kw)) score += 4;
      }
      if (titleLower.includes(token)) score += 5;
      if (categoryLower.includes(token)) score += 4;
      if (contentLower.includes(token)) score += 2;
    }

    return { passage, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const topPassages = scored
    .filter(s => s.score > 0)
    .slice(0, maxResults)
    .map(s => s.passage);

  const finalPassages = topPassages.length > 0 ? topPassages : monumentData.passages.slice(0, 2);

  const rawRefs: SourceReference[] = [];
  finalPassages.forEach(p => {
    if (p.references) rawRefs.push(...p.references);
  });

  return {
    passages: finalPassages,
    references: deduplicateReferences(rawRefs)
  };
}

function deduplicateReferences(refs: SourceReference[]): SourceReference[] {
  const seen = new Set<string>();
  const out: SourceReference[] = [];
  for (const r of refs) {
    const key = `${r.title}::${r.source}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push(r);
    }
  }
  return out;
}

export interface ConversationTurn {
  role: 'user' | 'model';
  text: string;
}

export interface StoryGenerationRequest {
  monumentId: string;
  question: string;
  language?: 'en' | 'kn' | 'hi';
  conversationHistory?: ConversationTurn[];
}

export interface StoryGenerationResponse {
  success: boolean;
  answer?: string;
  monumentId: string;
  language: 'en' | 'kn' | 'hi';
  references: SourceReference[];
  retrievedPassagesCount: number;
  modelUsed?: string;
  isCached?: boolean;
  error?: {
    code: string;
    message: string;
    details?: string;
  };
}

/**
 * Concise, high-speed Prompt Builder
 */
function buildPrompt(
  monumentName: string,
  passages: KnowledgePassage[],
  question: string,
  language: 'en' | 'kn' | 'hi',
  conversationHistory?: ConversationTurn[]
) {
  const languageInstructions: Record<'en' | 'kn' | 'hi', string> = {
    en: 'Respond in elegant, clear, and eloquent English. Keep it concise (120-180 words).',
    kn: 'ನೀವು ಶುದ್ಧ ಮತ್ತು ಸುಂದರವಾದ ಕನ್ನಡದಲ್ಲೇ ಉತ್ತರಿಸಬೇಕು (Respond concisely in authentic Kannada, 120-180 words).',
    hi: 'आपको उत्तर पूर्णतः शुद्ध एवं सुरुचिपूर्ण हिन्दी में देना है (Respond concisely in authentic Hindi, 120-180 words).'
  };

  const retrievedContextText = passages
    .map((p, i) => `[RECORD ${i + 1}] ${p.title}:\n${p.content}`)
    .join('\n\n');

  const systemInstruction = `You are HeritageStory AI, an expert Indian architectural historian.
MONUMENT: ${monumentName}
RULES:
1. Ground facts strictly in the verified records below. Never invent historical facts or folklore.
2. Explain architectural purpose, engineering, and cultural significance.
3. ${languageInstructions[language]}
4. Structure into 2 concise paragraphs.`;

  const contents: any[] = [];

  // Add at most 2 previous turns for context without bloating prompt
  if (conversationHistory && Array.isArray(conversationHistory)) {
    for (const turn of conversationHistory.slice(-2)) {
      if (turn.role && turn.text) {
        contents.push({
          role: turn.role === 'model' ? 'model' : 'user',
          parts: [{ text: turn.text }]
        });
      }
    }
  }

  contents.push({
    role: 'user',
    parts: [
      {
        text: `VERIFIED ARCHIVAL CONTEXT:\n${retrievedContextText}\n\nQUESTION: "${question}"`
      }
    ]
  });

  return { systemInstruction, contents };
}

/**
 * Execute high-speed Gemini text generation
 */
export async function generateHeritageStory(
  req: StoryGenerationRequest
): Promise<StoryGenerationResponse> {
  const rawMonumentId = (req.monumentId || '').toLowerCase().trim();
  const monumentId = normalizeMonumentId(rawMonumentId);
  const question = (req.question || '').trim();
  const language = req.language === 'kn' || req.language === 'hi' ? req.language : 'en';

  // 1. Input Validation
  const validMonuments = ['hampi', 'taj-mahal', 'tajmahal', 'ellora', 'konark'];
  if (!validMonuments.includes(monumentId) && !validMonuments.includes(rawMonumentId)) {
    return {
      success: false,
      monumentId: rawMonumentId,
      language,
      references: [],
      retrievedPassagesCount: 0,
      error: {
        code: 'INVALID_MONUMENT',
        message: `Invalid monumentId '${rawMonumentId}'. Must be one of: ${validMonuments.join(', ')}`
      }
    };
  }

  if (!question || question.length < 2) {
    return {
      success: false,
      monumentId: rawMonumentId,
      language,
      references: [],
      retrievedPassagesCount: 0,
      error: {
        code: 'EMPTY_QUESTION',
        message: 'Question cannot be empty. Please ask an architectural or historical question.'
      }
    };
  }

  if (question.length > 500) {
    return {
      success: false,
      monumentId: rawMonumentId,
      language,
      references: [],
      retrievedPassagesCount: 0,
      error: {
        code: 'QUESTION_TOO_LONG',
        message: 'Question exceeds maximum allowed length of 500 characters.'
      }
    };
  }

  // 2. Cache Check (Instant <5ms response for identical repeated questions)
  const normalizedQ = question.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const cacheKey = `${monumentId}::${language}::${normalizedQ}`;
  if (storyCache.has(cacheKey)) {
    const cached = storyCache.get(cacheKey)!;
    return { ...cached, isCached: true };
  }

  // 3. Check API Key
  if (!isApiKeyConfigured()) {
    return {
      success: false,
      monumentId,
      language,
      references: [],
      retrievedPassagesCount: 0,
      error: {
        code: 'API_KEY_MISSING',
        message: 'Google Gemini API key is not configured in backend environment variables (.env).'
      }
    };
  }

  // 4. Fast RAG Retrieval Step (top 2 passages)
  const kb = loadKnowledgeBase();
  const monumentName = kb[monumentId]?.name || monumentId;
  const { passages, references } = retrieveRelevantKnowledge(monumentId, question, 2);

  // 5. Build Concise Prompt
  const { systemInstruction, contents } = buildPrompt(
    monumentName,
    passages,
    question,
    language,
    req.conversationHistory
  );

  // 6. Fast Models Selection: prioritize lightweight models for minimum latency
  const candidateModels = [
    'gemini-3.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.5-flash',
    'gemini-3.8-flash'
  ];
  const apiKey = GEMINI_CONFIG.apiKey!;

  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second fast timeout

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }]
          },
          contents,
          generationConfig: {
            temperature: 0.5,
            topP: 0.9,
            maxOutputTokens: 350 // Fast token generation limit
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.status === 200) {
        const data = await response.json();
        const candidate = data.candidates?.[0];
        const answerText = candidate?.content?.parts?.[0]?.text;

        if (answerText && answerText.trim().length > 0) {
          const result: StoryGenerationResponse = {
            success: true,
            answer: answerText.trim(),
            monumentId: rawMonumentId || monumentId,
            language,
            references,
            retrievedPassagesCount: passages.length,
            modelUsed: model,
            isCached: false
          };
          // Save to cache (limit cache size to 100 entries)
          if (storyCache.size > 100) storyCache.clear();
          storyCache.set(cacheKey, result);

          return result;
        }
      }

      // If Rate-Limited (429) or Overloaded (503), immediately try next model without waiting!
      if (response.status === 429 || response.status === 503) {
        console.warn(`[HeritageStoryService] Model ${model} returned ${response.status}. Switching to next candidate...`);
        lastError = {
          code: response.status === 429 ? 'RATE_LIMITED' : 'SERVICE_UNAVAILABLE',
          message: 'Service is temporarily busy. Trying alternate model...',
          status: response.status
        };
        continue;
      }

      const errText = await response.text();
      console.warn(`[HeritageStoryService] Model ${model} HTTP ${response.status}: ${errText.slice(0, 100)}`);
      lastError = {
        code: `HTTP_${response.status}`,
        message: `API returned error status ${response.status}`,
        details: errText.slice(0, 200)
      };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.warn(`[HeritageStoryService] ${model} timed out after 12s, switching...`);
        lastError = {
          code: 'TIMEOUT',
          message: 'Model response timed out.'
        };
      } else {
        lastError = {
          code: 'NETWORK_ERROR',
          message: err.message || 'Network error connecting to Gemini API.'
        };
      }
    }
  }

  // Fallback: If live models are completely busy, synthesize a response directly from retrieved RAG passages
  if (passages && passages.length > 0) {
    const fallbackText = passages.map(p => p.content).join('\n\n');
    return {
      success: true,
      answer: fallbackText,
      monumentId,
      language,
      references,
      retrievedPassagesCount: passages.length,
      modelUsed: 'Archival-RAG-Direct'
    };
  }

  return {
    success: false,
    monumentId,
    language,
    references,
    retrievedPassagesCount: passages.length,
    error: lastError || {
      code: 'GENERATION_FAILED',
      message: 'Unable to generate historical narrative at this time.'
    }
  };
}
