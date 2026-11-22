/**
 * HeritageStory AI Routes
 * Royal Indian Heritage Platform
 * 
 * HTTP route handler for /api/heritage-story endpoints.
 */

import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  generateHeritageStory,
  retrieveRelevantKnowledge,
  normalizeMonumentId,
  loadKnowledgeBase,
  type StoryGenerationRequest
} from '../services/heritageStoryService.ts';
import { isApiKeyConfigured, getMaskedApiKeyStatus } from '../config/geminiConfig.ts';
import { sendJson, parseJsonBody } from './reconstructionRoutes.ts';

export async function handleHeritageStoryRoute(
  req: IncomingMessage,
  res: ServerResponse,
  urlPath: string
): Promise<boolean> {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return true;
  }

  // 1. POST /api/heritage-story — Generate AI Historical Narrative with RAG
  if (urlPath === '/api/heritage-story' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const storyRequest: StoryGenerationRequest = {
        monumentId: body.monumentId,
        question: body.question,
        language: body.language,
        conversationHistory: body.conversationHistory
      };

      const result = await generateHeritageStory(storyRequest);
      const statusCode = result.success ? 200 : (result.error?.code === 'INVALID_MONUMENT' || result.error?.code === 'EMPTY_QUESTION') ? 400 : 500;
      sendJson(res, statusCode, result);
      return true;
    } catch (err: any) {
      console.error('[HeritageStoryRoute] Error handling story request:', err);
      sendJson(res, 500, {
        success: false,
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: err.message || 'An unexpected error occurred during story generation.'
        }
      });
      return true;
    }
  }

  // 2. GET /api/heritage-story/health — Check AI Service Status
  if (urlPath === '/api/heritage-story/health' && req.method === 'GET') {
    const masked = getMaskedApiKeyStatus();
    sendJson(res, 200, {
      status: 'online',
      service: 'HeritageStory AI Service',
      apiKeyConfigured: isApiKeyConfigured(),
      maskedKey: masked.maskedHint,
      supportedMonuments: ['taj-mahal', 'tajmahal', 'ellora', 'konark', 'hampi'],
      supportedLanguages: ['en', 'kn', 'hi'],
      timestamp: new Date().toISOString()
    });
    return true;
  }

  // 3. GET /api/heritage-story/knowledge/:monumentId — Inspect RAG Knowledge Chunks
  if (urlPath.startsWith('/api/heritage-story/knowledge') && req.method === 'GET') {
    try {
      const parts = urlPath.split('/').filter(Boolean);
      const rawMonumentId = parts[3]; // /api/heritage-story/knowledge/[id]
      const monumentId = rawMonumentId ? normalizeMonumentId(rawMonumentId) : undefined;
      const kb = loadKnowledgeBase();

      if (!monumentId) {
        sendJson(res, 200, {
          monuments: Object.keys(kb),
          totalPassages: Object.values(kb).reduce((acc, m) => acc + m.passages.length, 0)
        });
        return true;
      }

      const monumentData = kb[monumentId] || kb[rawMonumentId!];
      if (!monumentData) {
        sendJson(res, 404, {
          error: 'Monument not found in knowledge base',
          validMonuments: Object.keys(kb)
        });
        return true;
      }

      sendJson(res, 200, monumentData);
      return true;
    } catch (err: any) {
      sendJson(res, 500, { error: err.message });
      return true;
    }
  }

  return false;
}
