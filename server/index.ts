/**
 * Backend HTTP Server Entry Point
 * Royal Indian Heritage Platform
 * 
 * Standalone Node.js HTTP server hosting the Gemini Image Generation service.
 * Runs on port 3001 (proxied from Vite dev server at 5173).
 * 
 * College Demonstration:
 * Demonstrates clean separation of concerns, secure credential handling,
 * trusted prompt synthesis, and verified Google Gemini Interactions API integration.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {
  GEMINI_CONFIG,
  getMaskedApiKeyStatus,
  PROJECT_ROOT
} from './config/geminiConfig.ts';
import { handleReconstructionRoute, sendJson } from './routes/reconstructionRoutes.ts';
import { handleHeritageStoryRoute } from './routes/heritageStoryRoutes.ts';
import { ensureReconstructionDirectory } from './utils/imageStorage.ts';

// Ensure storage folders exist
ensureReconstructionDirectory();

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1'}`);
  const pathname = parsedUrl.pathname;

  try {
    // 1. Reconstruction API routes
    if (pathname.startsWith('/api/reconstruction')) {
      const handled = await handleReconstructionRoute(req, res, pathname);
      if (handled) return;
    }

    // 1b. HeritageStory AI routes (RAG + Gemini Text Generation)
    if (pathname.startsWith('/api/heritage-story')) {
      const handled = await handleHeritageStoryRoute(req, res, pathname);
      if (handled) return;
    }

    // 2. Health root check
    if (pathname === '/health' || pathname === '/') {
      sendJson(res, 200, {
        status: 'online',
        service: 'Royal Heritage Platform API Server',
        geminiModel: GEMINI_CONFIG.modelId,
        apiKeyConfigured: getMaskedApiKeyStatus().isConfigured,
        timestamp: new Date().toISOString()
      });
      return;
    }

    // 3. Static serving for generated reconstructions (if requested directly via server port)
    if (pathname.startsWith('/generated-reconstructions/')) {
      const filePath = path.resolve(PROJECT_ROOT, 'public' + pathname);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = ext === '.png' ? 'image/png' : ext === '.json' ? 'application/json' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    // 4. Fallback 404
    sendJson(res, 404, {
      error: 'Not Found',
      path: pathname,
      message: 'Unknown API endpoint.'
    });
  } catch (err: any) {
    console.error('[Server] Unhandled request error:', err);
    sendJson(res, 500, {
      error: 'Internal Server Error',
      message: err.message || 'An unexpected error occurred.'
    });
  }
});

const PORT = GEMINI_CONFIG.serverPort;

server.listen(PORT, '127.0.0.1', () => {
  const maskedStatus = getMaskedApiKeyStatus();
  console.log('='.repeat(70));
  console.log('ROYAL HERITAGE PLATFORM — GEMINI RECONSTRUCTION SERVER');
  console.log('='.repeat(70));
  console.log(`Port:            http://127.0.0.1:${PORT}`);
  console.log(`Target Model:    ${GEMINI_CONFIG.modelId}`);
  console.log(`Gemini API:      ${GEMINI_CONFIG.apiEndpoint}`);
  console.log(`API Key Status:  ${maskedStatus.maskedHint}`);
  console.log(`Storage Dir:     public/generated-reconstructions/hampi/stone-chariot/`);
  console.log(`Story Endpoint:  POST /api/heritage-story (RAG Storyteller)`);
  console.log(`Ready for deliberate reconstruction generation requests & HeritageStory AI.`);
  console.log('='.repeat(70));
});

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n[Server] Shutting down gracefully...');
  server.close(() => {
    process.exit(0);
  });
});
