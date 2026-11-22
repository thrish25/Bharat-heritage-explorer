export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const hasKey = typeof process.env.GEMINI_API_KEY === 'string' &&
    process.env.GEMINI_API_KEY.trim().length > 0 &&
    !process.env.GEMINI_API_KEY.includes('your_api_key_here');

  return res.status(200).json({
    status: 'online',
    service: 'Royal Heritage Platform API Server (Vercel Serverless)',
    geminiModel: process.env.GEMINI_MODEL_ID || 'gemini-3.1-flash-image',
    apiKeyConfigured: hasKey,
    timestamp: new Date().toISOString()
  });
}
