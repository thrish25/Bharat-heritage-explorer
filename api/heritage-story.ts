import { generateHeritageStory, StoryGenerationRequest } from '../server/services/heritageStoryService.ts';

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'online',
      endpoint: '/api/heritage-story',
      supportedMethods: ['POST']
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: { code: 'METHOD_NOT_ALLOWED', message: 'Method Not Allowed' }
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }
    body = body || {};

    const storyRequest: StoryGenerationRequest = {
      monumentId: body.monumentId,
      question: body.question,
      language: body.language,
      conversationHistory: body.conversationHistory
    };

    const result = await generateHeritageStory(storyRequest);
    const statusCode = result.success ? 200 : (result.error?.code === 'INVALID_MONUMENT' || result.error?.code === 'EMPTY_QUESTION') ? 400 : 500;
    return res.status(statusCode).json(result);
  } catch (err: any) {
    console.error('[VercelAPI] heritage-story error:', err);
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: err.message || 'An internal error occurred while generating heritage story narrative.'
      }
    });
  }
}
