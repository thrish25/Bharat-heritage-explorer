/**
 * HeritageStory AI — Frontend API Client
 * Royal Indian Heritage Platform
 */

import { Language } from '../types';

export interface SourceReference {
  title: string;
  source: string;
  year?: string;
  evidenceType?: string;
}

export interface ConversationTurn {
  role: 'user' | 'model';
  text: string;
}

export interface StoryRequest {
  monumentId: string;
  question: string;
  language?: Language;
  conversationHistory?: ConversationTurn[];
  signal?: AbortSignal;
}

export interface StoryResponse {
  success: boolean;
  answer?: string;
  monumentId: string;
  language: Language;
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

export function normalizeMonumentId(id: string): string {
  const clean = (id || '').toLowerCase().trim().replace(/_/g, '-');
  if (clean === 'tajmahal' || clean === 'taj-mahal' || clean === 'taj') {
    return 'taj-mahal';
  }
  return clean;
}

export async function askHeritageStory(params: StoryRequest): Promise<StoryResponse> {
  const language = params.language || 'en';
  const monumentId = normalizeMonumentId(params.monumentId);
  try {
    const res = await fetch('/api/heritage-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monumentId: monumentId,
        question: params.question,
        language: language,
        conversationHistory: params.conversationHistory || [],
      }),
      signal: params.signal,
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        success: false,
        monumentId: params.monumentId,
        language: language,
        references: [],
        retrievedPassagesCount: 0,
        error: {
          code: 'ABORTED',
          message: 'Request was cancelled.',
        },
      };
    }
    console.error('[HeritageStoryApi] Network or fetch error:', err);
    return {
      success: false,
      monumentId: params.monumentId,
      language: language,
      references: [],
      retrievedPassagesCount: 0,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Could not connect to the HeritageStory AI backend service. Please check your connection and server status.',
        details: err.message,
      },
    };
  }
}
