/**
 * Gemini Image Generation Service
 * Royal Indian Heritage Platform
 * 
 * Secure backend service communicating with Google's official Gemini Interactions API.
 * Integrates audited Phase 2.1 historical prompt and authorized reference image
 * to generate a single-perspective digital reconstruction of the missing brick vimana.
 * 
 * Strict safety rules:
 * - Never exposes API key in responses, errors, or logs.
 * - Confirms response contains actual image bytes (does NOT treat text-only as success).
 * - Distinguishes local reference images from external archival citations.
 * - Protects all 360° panoramas against transmission or alteration.
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  GEMINI_CONFIG,
  isApiKeyConfigured,
  PROJECT_ROOT
} from '../config/geminiConfig.ts';
import {
  saveReconstruction,
  computeSha256,
  type ReconstructionMetadata,
  type ReferenceImageSubmissionMeta
} from '../utils/imageStorage.ts';

// Import trusted historical data & prompt generator from the application data module
import {
  HAMPI_STONE_CHARIOT_IDENTITY,
  HAMPI_STONE_CHARIOT_SPECIFICATION,
  HAMPI_STONE_CHARIOT_CONSTRAINTS,
  HAMPI_STONE_CHARIOT_REFERENCES,
  buildStoneChariotReconstructionPrompt
} from '../../src/data/reconstruction/index.ts';

export interface GenerationServiceResult {
  success: boolean;
  metadata?: ReconstructionMetadata;
  error?: {
    code: string;
    message: string;
    details?: string;
  };
}

/**
 * Prepares the reference image input payload for the Gemini API.
 */
function prepareReferenceImages(): {
  inputImageBlocks: Array<{ type: 'image'; mime_type: string; data: string }>;
  submissionMeta: ReferenceImageSubmissionMeta[];
  historicalIncludedAsFiles: boolean;
  historicalNote: string;
} {
  const inputImageBlocks: Array<{ type: 'image'; mime_type: string; data: string }> = [];
  const submissionMeta: ReferenceImageSubmissionMeta[] = [];

  // 1. Modern Ground Truth (IMG-MOD-2016-DARSI-03)
  const modernRef = HAMPI_STONE_CHARIOT_REFERENCES['IMG-MOD-2016-DARSI-03'];
  const modernRelPath = modernRef.localAssetPath || 'public/images/monuments/hampi_chariot.jpg';
  const modernAbsPath = path.resolve(PROJECT_ROOT, modernRelPath);

  if (fs.existsSync(modernAbsPath)) {
    const fileBuffer = fs.readFileSync(modernAbsPath);
    const hash = computeSha256(fileBuffer);
    const base64Data = fileBuffer.toString('base64');

    inputImageBlocks.push({
      type: 'image',
      mime_type: 'image/jpeg',
      data: base64Data
    });

    submissionMeta.push({
      referenceId: modernRef.referenceId,
      sourceId: modernRef.sourceId,
      role: 'SURVIVING_GRANITE_REFERENCE (Guides surviving granite structure, wheels, plinth, and patina)',
      suppliedAsFileInput: true,
      filePath: modernRelPath,
      mimeType: 'image/jpeg',
      fileSizeBytes: fileBuffer.length,
      sha256Hash: hash,
      note: 'Authorized modern high-resolution photograph (Darsi 2016 / CC BY-SA 4.0). Used solely as reference for surviving granite fabric.'
    });
  } else {
    submissionMeta.push({
      referenceId: modernRef.referenceId,
      sourceId: modernRef.sourceId,
      role: 'SURVIVING_GRANITE_REFERENCE',
      suppliedAsFileInput: false,
      note: 'File missing on disk at expected path.'
    });
  }

  // 2. Historical References (Greenlaw 1856, Neill 1856)
  // Explicitly registered as external archives; cannot be passed as raw local file inputs
  const greenlawRef = HAMPI_STONE_CHARIOT_REFERENCES['IMG-HIST-1856-GREENLAW-01'];
  submissionMeta.push({
    referenceId: greenlawRef.referenceId,
    sourceId: greenlawRef.sourceId,
    role: 'SUPERSTRUCTURE_GUIDE (Guides missing upper vimana silhouette and ~1:1 visual proportion)',
    suppliedAsFileInput: false,
    note: 'Archival museum calotype (Alkazi ACP 98.48.0001 / V&A). Referenced via documented historical architectural directives in the prompt text. Calotype file was not supplied directly as an image input block.'
  });

  const neillRef = HAMPI_STONE_CHARIOT_REFERENCES['IMG-HIST-1856-NEILL-02'];
  submissionMeta.push({
    referenceId: neillRef.referenceId,
    sourceId: neillRef.sourceId,
    role: 'SUPERSTRUCTURE_GUIDE (Independent cross-verification of stepped silhouette)',
    suppliedAsFileInput: false,
    note: 'Archival albumen print (Royal Collection Trust RCIN 2603956). Referenced via prompt directives; image file not supplied as direct input block.'
  });

  const historicalNote = (
    'The 1856 Greenlaw and Neill calotypes are registered as external museum archival records. ' +
    'Their verified architectural dimensions and visual profiles are synthesized into the historical prompt directives. ' +
    'Actual 1856 calotype image files were not passed as raw image blocks to the Gemini API.'
  );

  return {
    inputImageBlocks,
    submissionMeta,
    historicalIncludedAsFiles: false,
    historicalNote
  };
}

/**
 * Executes a deliberate historical digital reconstruction request using the official Gemini Interactions API.
 */
export async function generateHistoricalReconstruction(): Promise<GenerationServiceResult> {
  // 1. Security Check: Validate API Key
  if (!isApiKeyConfigured()) {
    return {
      success: false,
      error: {
        code: 'MISSING_API_KEY',
        message: 'Google Gemini API key is not configured.',
        details: 'Set the GEMINI_API_KEY environment variable in your backend environment or local .env file. See .env.example for instructions.'
      }
    };
  }

  const apiKey = GEMINI_CONFIG.apiKey!;
  const modelId = GEMINI_CONFIG.modelId;

  // 2. Build Trusted Historical Prompt
  const promptTemplate = buildStoneChariotReconstructionPrompt(
    HAMPI_STONE_CHARIOT_IDENTITY,
    HAMPI_STONE_CHARIOT_SPECIFICATION,
    HAMPI_STONE_CHARIOT_CONSTRAINTS,
    HAMPI_STONE_CHARIOT_REFERENCES
  );

  // 3. Prepare Reference Images
  const { inputImageBlocks, submissionMeta, historicalIncludedAsFiles, historicalNote } = prepareReferenceImages();

  // 4. Construct Request Payload conforming to Google Gemini Interactions API
  const inputBlocks: Array<{ type: string; text?: string; data?: string; mime_type?: string }> = [
    {
      type: 'text',
      text: promptTemplate.composedPromptText
    },
    ...inputImageBlocks
  ];

  const requestBody = {
    model: modelId,
    input: inputBlocks
  };

  // Upstream Interactions API endpoint (API key passed strictly in x-goog-api-key header, NEVER in URL)
  const endpointUrl = GEMINI_CONFIG.apiEndpoint;

  console.log(`[GeminiService] Initiating reconstruction request for model: ${modelId}`);
  console.log(`[GeminiService] Submitting ${inputBlocks.length} input blocks (${inputImageBlocks.length} image inputs)`);

  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), GEMINI_CONFIG.timeoutMs);

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
        'Api-Revision': GEMINI_CONFIG.apiVersion
      },
      body: JSON.stringify(requestBody),
      signal: abortController.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorBody = '';
      try {
        const errorJson = await response.json();
        errorBody = errorJson.error?.message || JSON.stringify(errorJson);
      } catch {
        errorBody = await response.text();
      }

      console.error(`[GeminiService] Gemini API returned HTTP error ${response.status}: ${errorBody}`);

      return {
        success: false,
        error: {
          code: `HTTP_${response.status}`,
          message: `Gemini API returned error (${response.status})`,
          details: errorBody
        }
      };
    }

    const responseData = await response.json();

    // 5. Extract and Validate Generated Image Bytes
    let base64ImageBytes: string | null = null;
    let returnedMimeType = 'image/png';

    // Check Format 1: Google REST Interactions response under steps[].content[]
    if (Array.isArray(responseData.steps)) {
      for (const step of responseData.steps) {
        if (Array.isArray(step.content)) {
          for (const item of step.content) {
            if (item.type === 'image' && item.data) {
              base64ImageBytes = item.data;
              returnedMimeType = item.mime_type || item.mimeType || 'image/png';
              break;
            } else if (item.image_content && item.image_content.data) {
              base64ImageBytes = item.image_content.data;
              returnedMimeType = item.image_content.mime_type || item.image_content.mimeType || 'image/png';
              break;
            }
          }
        }
        if (base64ImageBytes) break;
      }
    }

    // Check Format 2: Direct output_image convenience property
    if (!base64ImageBytes && responseData.output_image && responseData.output_image.data) {
      base64ImageBytes = responseData.output_image.data;
      returnedMimeType = responseData.output_image.mime_type || responseData.output_image.mimeType || 'image/png';
    }

    // Check Format 3: outputs array
    if (!base64ImageBytes && Array.isArray(responseData.outputs) && responseData.outputs.length > 0) {
      for (const out of responseData.outputs) {
        if (out.type === 'image' && out.data) {
          base64ImageBytes = out.data;
          returnedMimeType = out.mime_type || out.mimeType || 'image/png';
          break;
        } else if (out.image_content && out.image_content.data) {
          base64ImageBytes = out.image_content.data;
          returnedMimeType = out.image_content.mime_type || out.image_content.mimeType || 'image/png';
          break;
        }
      }
    }

    // Check Format 4: Classic Candidates Part InlineData
    if (!base64ImageBytes && responseData.candidates?.[0]?.content?.parts) {
      for (const part of responseData.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          base64ImageBytes = part.inlineData.data;
          returnedMimeType = part.inlineData.mimeType || 'image/png';
          break;
        }
      }
    }

    // Strict validation: Reject text-only responses or responses without image data
    if (!base64ImageBytes || typeof base64ImageBytes !== 'string' || base64ImageBytes.trim().length === 0) {
      const textPreview = responseData.text || JSON.stringify(responseData).slice(0, 300);
      console.warn('[GeminiService] Response contained no image data. Text preview:', textPreview);

      return {
        success: false,
        error: {
          code: 'NO_IMAGE_IN_RESPONSE',
          message: 'Gemini API returned an HTTP 200 response, but no generated image data was found in steps[].content[] or output_image.',
          details: `Model response: ${textPreview}`
        }
      };
    }

    // 6. Decode and Validate Image Bytes (Magic byte inspection)
    const imageBuffer = Buffer.from(base64ImageBytes, 'base64');

    if (imageBuffer.length < 32) {
      return {
        success: false,
        error: {
          code: 'INVALID_IMAGE_PAYLOAD',
          message: 'Decoded image data is truncated or too small to be a valid image file.',
          details: `Decoded buffer length: ${imageBuffer.length} bytes`
        }
      };
    }

    // Validate magic bytes: PNG (89 50 4E 47) or JPEG (FF D8 FF)
    const isPng = imageBuffer[0] === 0x89 && imageBuffer[1] === 0x50 && imageBuffer[2] === 0x4E && imageBuffer[3] === 0x47;
    const isJpeg = imageBuffer[0] === 0xFF && imageBuffer[1] === 0xD8 && imageBuffer[2] === 0xFF;

    if (!isPng && !isJpeg) {
      return {
        success: false,
        error: {
          code: 'UNRECOGNIZED_IMAGE_FORMAT',
          message: 'Decoded bytes do not match standard PNG or JPEG magic byte signatures.',
          details: `Header bytes: ${imageBuffer.slice(0, 8).toString('hex')}`
        }
      };
    }

    // Extract dimensions if PNG
    let imageWidth: number | undefined;
    let imageHeight: number | undefined;
    if (isPng && imageBuffer.length >= 24) {
      imageWidth = imageBuffer.readUInt32BE(16);
      imageHeight = imageBuffer.readUInt32BE(20);
    }

    const metadata = saveReconstruction(imageBuffer, {
      monumentId: HAMPI_STONE_CHARIOT_IDENTITY.id,
      componentId: 'COMP-06-BRICK-VIMANA',
      generationTimestamp: new Date().toISOString(),
      modelId,
      apiEndpoint: GEMINI_CONFIG.apiEndpoint,
      promptTemplateId: promptTemplate.templateId,
      historicalDataVersion: '2.1',
      referenceImagesSubmitted: submissionMeta,
      historicalPhotographsIncludedAsFiles: historicalIncludedAsFiles,
      historicalPhotographsNote: historicalNote,
      imageFormat: returnedMimeType,
      dimensions: imageWidth && imageHeight ? { width: imageWidth, height: imageHeight } : undefined,
      status: 'SUCCESS',
      mandatoryDisclosure: promptTemplate.mandatoryDisclosure,
      visualConfigSummary: {
        cameraAngle: promptTemplate.visualConfig.cameraAngle,
        cameraElevation: promptTemplate.visualConfig.cameraElevation,
        lightingCondition: promptTemplate.visualConfig.lightingCondition,
        recommendedAspectRatio: promptTemplate.visualConfig.recommendedAspectRatio
      }
    });

    console.log(`[GeminiService] Reconstruction image successfully saved: ${metadata.generatedImageFilename} (${metadata.fileSizeBytes} bytes)`);

    return {
      success: true,
      metadata
    };
  } catch (err: any) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      return {
        success: false,
        error: {
          code: 'TIMEOUT',
          message: `Request to Gemini API timed out after ${GEMINI_CONFIG.timeoutMs / 1000} seconds.`,
          details: 'The server waited for image generation to complete, but the API did not respond in time.'
        }
      };
    }

    console.error('[GeminiService] Unexpected exception during Gemini generation call:', err);

    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Failed to communicate with Google Gemini API.',
        details: err.message || String(err)
      }
    };
  }
}

/**
 * Previews the prepared prompt and input configuration without making an external API call.
 */
export function previewReconstructionPayload() {
  const promptTemplate = buildStoneChariotReconstructionPrompt(
    HAMPI_STONE_CHARIOT_IDENTITY,
    HAMPI_STONE_CHARIOT_SPECIFICATION,
    HAMPI_STONE_CHARIOT_CONSTRAINTS,
    HAMPI_STONE_CHARIOT_REFERENCES
  );

  const { submissionMeta, historicalIncludedAsFiles, historicalNote } = prepareReferenceImages();

  return {
    monumentId: HAMPI_STONE_CHARIOT_IDENTITY.id,
    monumentName: HAMPI_STONE_CHARIOT_IDENTITY.name.en,
    activeTargetComponent: 'COMP-06-BRICK-VIMANA',
    modelId: GEMINI_CONFIG.modelId,
    apiEndpoint: GEMINI_CONFIG.apiEndpoint,
    promptTemplateId: promptTemplate.templateId,
    historicalDataVersion: '2.1',
    verifiedHistoricalFactsCount: promptTemplate.historicalFacts.length,
    probableInterpretationsCount: promptTemplate.probableInterpretations.length,
    negativeConstraintsCount: promptTemplate.negativeConstraints.length,
    referenceImages: submissionMeta,
    historicalPhotographsIncludedAsFiles: historicalIncludedAsFiles,
    historicalPhotographsNote: historicalNote,
    mandatoryDisclosure: promptTemplate.mandatoryDisclosure,
    visualConfig: promptTemplate.visualConfig,
    composedPromptPreview: promptTemplate.composedPromptText
  };
}
