/**
 * Gemini API & Server Configuration
 * Royal Indian Heritage Platform
 * 
 * Secure configuration module for Gemini Image Generation API.
 * The API key is read strictly from backend environment variables and is
 * NEVER exposed to the frontend, browser, logs, or source code.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PROJECT_ROOT = path.resolve(__dirname, '../../');

// Lightweight .env loader (without external dependencies)
function loadEnvFile() {
  const envPath = path.resolve(PROJECT_ROOT, '.env');
  if (fs.existsSync(envPath)) {
    try {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    } catch (e) {
      console.warn('[GeminiConfig] Warning: Failed to parse .env file:', e);
    }
  }
}

// Load .env on initial module evaluation
loadEnvFile();

export interface GeminiConfig {
  apiKey: string | undefined;
  modelId: string;
  apiEndpoint: string;
  apiVersion: string;
  timeoutMs: number;
  serverPort: number;
}

export const GEMINI_CONFIG: GeminiConfig = {
  // Read strictly from environment
  apiKey: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : undefined,
  
  // Official Verified Model: Gemini 3.1 Flash Image (Nano Banana 2)
  // Multimodal Input: Text + Image; Output: Image (PNG/JPEG)
  // Verified from Google Gemini API documentation (November 2026 / Update Feb 2026)
  modelId: process.env.GEMINI_MODEL_ID || 'gemini-3.1-flash-image',

  // Modern Official Gemini Interactions API
  apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/interactions',
  apiVersion: '2026-05-20',

  // 60-second generation timeout
  timeoutMs: 60000,

  // Backend server port
  serverPort: Number(process.env.PORT) || 3001
};

/**
 * Checks whether the Gemini API key is configured without ever exposing its value.
 */
export function isApiKeyConfigured(): boolean {
  const key = process.env.GEMINI_API_KEY;
  return typeof key === 'string' && key.trim().length > 0 && !key.includes('your_api_key_here');
}

/**
 * Returns a masked indicator of API key presence (e.g. "Configured (AIza...xxxx)").
 * NEVER returns the actual secret key.
 */
export function getMaskedApiKeyStatus(): { isConfigured: boolean; maskedHint: string } {
  const key = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : '';
  if (!key || key.includes('your_api_key_here')) {
    return {
      isConfigured: false,
      maskedHint: 'Not configured (Missing GEMINI_API_KEY in backend environment)'
    };
  }
  const prefix = key.slice(0, 4);
  const suffix = key.slice(-4);
  return {
    isConfigured: true,
    maskedHint: `Configured (${prefix}...${suffix})`
  };
}
