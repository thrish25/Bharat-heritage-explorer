/**
 * Image Storage & Metadata Persistence Utility
 * Royal Indian Heritage Platform
 * 
 * Manages persistent storage of generated reconstruction images and structured
 * metadata sidecars in public/generated-reconstructions/hampi/stone-chariot/.
 * 
 * Caches the latest result to prevent duplicate or automated API calls on page reloads.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { PROJECT_ROOT } from '../config/geminiConfig.ts';

export interface ReferenceImageSubmissionMeta {
  referenceId: string;
  sourceId: string;
  role: string;
  suppliedAsFileInput: boolean;
  filePath?: string;
  mimeType?: string;
  fileSizeBytes?: number;
  sha256Hash?: string;
  note: string;
}

export interface ReconstructionMetadata {
  generationId: string;
  monumentId: string;
  componentId: string;
  generationTimestamp: string;
  modelId: string;
  apiEndpoint: string;
  promptTemplateId: string;
  historicalDataVersion: string;
  referenceImagesSubmitted: ReferenceImageSubmissionMeta[];
  historicalPhotographsIncludedAsFiles: boolean;
  historicalPhotographsNote: string;
  generatedImageFilename: string;
  generatedImagePublicUrl: string;
  imageFormat: string;
  fileSizeBytes: number;
  dimensions?: {
    width: number;
    height: number;
  };
  sha256Hash: string;
  status: 'SUCCESS' | 'ERROR';
  mandatoryDisclosure: string;
  visualConfigSummary: {
    cameraAngle: string;
    cameraElevation: string;
    lightingCondition: string;
    recommendedAspectRatio: string;
  };
}

const RECON_DIR_REL = 'public/generated-reconstructions/hampi/stone-chariot';
export const RECONSTRUCTION_OUTPUT_DIR = path.resolve(PROJECT_ROOT, RECON_DIR_REL);
const LATEST_CACHE_FILE = path.resolve(RECONSTRUCTION_OUTPUT_DIR, 'latest-reconstruction.json');

/**
 * Ensures the output directory exists.
 */
export function ensureReconstructionDirectory(): void {
  if (!fs.existsSync(RECONSTRUCTION_OUTPUT_DIR)) {
    fs.mkdirSync(RECONSTRUCTION_OUTPUT_DIR, { recursive: true });
  }
}

/**
 * Computes SHA-256 hash of a buffer.
 */
export function computeSha256(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Saves a newly generated image buffer and writes its metadata sidecar.
 * Updates latest-reconstruction.json pointer.
 */
export function saveReconstruction(
  imageBuffer: Buffer,
  metaPartial: Omit<ReconstructionMetadata, 'generationId' | 'generatedImageFilename' | 'generatedImagePublicUrl' | 'fileSizeBytes' | 'sha256Hash'>
): ReconstructionMetadata {
  ensureReconstructionDirectory();

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const bufferHash = computeSha256(imageBuffer);
  const shortHash = bufferHash.slice(0, 8);
  const generationId = `recon-hampi-stone-chariot-${timestamp}-${shortHash}`;

  const imageFilename = `${generationId}.png`;
  const metaFilename = `${generationId}.json`;

  const imagePath = path.resolve(RECONSTRUCTION_OUTPUT_DIR, imageFilename);
  const metaPath = path.resolve(RECONSTRUCTION_OUTPUT_DIR, metaFilename);

  // Write image bytes to disk
  fs.writeFileSync(imagePath, imageBuffer);

  const fullMetadata: ReconstructionMetadata = {
    ...metaPartial,
    generationId,
    generatedImageFilename: imageFilename,
    generatedImagePublicUrl: `/generated-reconstructions/hampi/stone-chariot/${imageFilename}`,
    fileSizeBytes: imageBuffer.length,
    sha256Hash: bufferHash
  };

  // Write sidecar JSON
  fs.writeFileSync(metaPath, JSON.stringify(fullMetadata, null, 2), 'utf-8');

  // Update latest cache pointer
  fs.writeFileSync(LATEST_CACHE_FILE, JSON.stringify(fullMetadata, null, 2), 'utf-8');

  return fullMetadata;
}

/**
 * Retrieves the latest cached reconstruction metadata if available.
 */
export function getLatestReconstruction(): ReconstructionMetadata | null {
  ensureReconstructionDirectory();
  if (fs.existsSync(LATEST_CACHE_FILE)) {
    try {
      const content = fs.readFileSync(LATEST_CACHE_FILE, 'utf-8');
      const meta = JSON.parse(content) as ReconstructionMetadata;
      // Confirm image still exists on disk
      const imgPath = path.resolve(RECONSTRUCTION_OUTPUT_DIR, meta.generatedImageFilename);
      if (fs.existsSync(imgPath)) {
        return meta;
      }
    } catch (e) {
      console.warn('[ImageStorage] Failed to read latest-reconstruction.json:', e);
    }
  }
  return null;
}

/**
 * Lists all historical reconstruction generations saved on disk.
 */
export function listAllReconstructions(): ReconstructionMetadata[] {
  ensureReconstructionDirectory();
  const files = fs.readdirSync(RECONSTRUCTION_OUTPUT_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'latest-reconstruction.json');
  const list: ReconstructionMetadata[] = [];

  for (const jFile of jsonFiles) {
    try {
      const content = fs.readFileSync(path.resolve(RECONSTRUCTION_OUTPUT_DIR, jFile), 'utf-8');
      list.push(JSON.parse(content));
    } catch {
      // Ignore malformed files
    }
  }

  // Sort descending by timestamp
  return list.sort((a, b) => new Date(b.generationTimestamp).getTime() - new Date(a.generationTimestamp).getTime());
}
