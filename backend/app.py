"""
HeritageStory AI — Python Flask Backend Service
Royal Indian Heritage Platform

Dedicated AI Microservice providing Retrieval-Augmented Generation (RAG)
and Google Gemini API text generation for the Indian Heritage Explorer.

Usage:
    python backend/app.py
Runs by default on http://127.0.0.1:5001 (or PORT env var)
"""

import os
import json
import re
from pathlib import Path
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

# Load environment variables from .env
BACKEND_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BACKEND_DIR.parent
ENV_PATH = PROJECT_ROOT / '.env'

if ENV_PATH.exists():
    with open(ENV_PATH, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, v = line.split('=', 1)
                k = k.strip()
                v = v.strip().strip('"').strip("'")
                if k not in os.environ:
                    os.environ[k] = v

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY', '').strip()
FLASK_PORT = int(os.environ.get('FLASK_PORT', 5001))

app = Flask(__name__)
CORS(app)

KNOWLEDGE_BASE_PATH = PROJECT_ROOT / 'server' / 'data' / 'heritageKnowledgeBase.json'
_knowledge_base = None
_story_cache = {}

def normalize_monument_id(monument_id: str) -> str:
    clean = str(monument_id or '').lower().strip().replace('_', '-')
    if clean in ['tajmahal', 'taj-mahal', 'taj']:
        return 'taj-mahal'
    if clean in ['ellora', 'ellora-caves', 'kailasa']:
        return 'ellora'
    if clean in ['konark', 'konark-sun-temple', 'sun-temple']:
        return 'konark'
    if clean in ['hampi', 'vijayanagara']:
        return 'hampi'
    return clean

def get_knowledge_base():
    global _knowledge_base
    if _knowledge_base is None:
        if not KNOWLEDGE_BASE_PATH.exists():
            raise FileNotFoundError(f"Knowledge base not found at {KNOWLEDGE_BASE_PATH}")
        with open(KNOWLEDGE_BASE_PATH, 'r', encoding='utf-8') as f:
            _knowledge_base = json.load(f)
        if _knowledge_base and 'taj-mahal' in _knowledge_base and 'tajmahal' not in _knowledge_base:
            _knowledge_base['tajmahal'] = _knowledge_base['taj-mahal']
    return _knowledge_base

STOP_WORDS = {
    'the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'in', 'to', 'of', 'for', 'with',
    'it', 'its', 'as', 'by', 'this', 'that', 'these', 'those', 'tell', 'me', 'about',
    'what', 'how', 'why', 'when', 'where', 'who', 'does', 'did', 'do', 'can', 'you',
    'explain', 'describe', 'give', 'detail', 'details', 'please', 'something'
}

def extract_tokens(text):
    clean = re.sub(r'[^\w\s\u0900-\u097F\u0C80-\u0CFF]', ' ', text.lower())
    tokens = [t.strip() for t in clean.split() if len(t.strip()) > 1 and t.strip() not in STOP_WORDS]
    return tokens

def retrieve_passages(monument_id, query, max_results=2):
    kb = get_knowledge_base()
    normalized_id = normalize_monument_id(monument_id)
    monument_data = kb.get(normalized_id) or kb.get(monument_id)
    if not monument_data:
        return [], []

    passages = monument_data.get('passages', [])
    tokens = extract_tokens(query)

    if not tokens:
        top_passages = passages[:2]
        refs = []
        for p in top_passages:
            refs.extend(p.get('references', []))
        return top_passages, refs

    scored = []
    for p in passages:
        score = 0
        p_keywords = set(k.lower() for k in p.get('keywords', []))
        p_title = p.get('title', '').lower()
        p_content = p.get('content', '').lower()
        p_category = p.get('category', '').lower()

        for t in tokens:
            if t in p_keywords:
                score += 8
            for kw in p_keywords:
                if t in kw or kw in t:
                    score += 4
            if t in p_title:
                score += 5
            if t in p_category:
                score += 4
            if t in p_content:
                score += 2

        scored.append((score, p))

    scored.sort(key=lambda x: x[0], reverse=True)
    top = [p for s, p in scored if s > 0][:max_results]
    if not top:
        top = passages[:2]

    # Collect and deduplicate references
    seen = set()
    refs = []
    for p in top:
        for r in p.get('references', []):
            k = f"{r.get('title')}::{r.get('source')}"
            if k not in seen:
                seen.add(k)
                refs.append(r)

    return top, refs

@app.route('/health', methods=['GET'])
@app.route('/api/heritage-story/health', methods=['GET'])
def health_check():
    is_configured = bool(GEMINI_API_KEY and not GEMINI_API_KEY.startswith('your_'))
    masked = f"{GEMINI_API_KEY[:4]}...{GEMINI_API_KEY[-4:]}" if is_configured and len(GEMINI_API_KEY) > 8 else "Not configured"
    return jsonify({
        "status": "online",
        "service": "HeritageStory AI Flask Microservice",
        "apiKeyConfigured": is_configured,
        "maskedKey": masked,
        "supportedMonuments": ["hampi", "taj-mahal", "ellora", "konark"],
        "supportedLanguages": ["en", "kn", "hi"]
    })

@app.route('/api/heritage-story/knowledge/<monument_id>', methods=['GET'])
def get_knowledge(monument_id):
    kb = get_knowledge_base()
    norm_id = normalize_monument_id(monument_id)
    monument = kb.get(norm_id) or kb.get(monument_id.lower().strip())
    if not monument:
        return jsonify({"error": f"Monument '{monument_id}' not found"}), 404
    return jsonify(monument)

@app.route('/api/heritage-story', methods=['POST'])
def generate_story():
    data = request.get_json(silent=True) or {}
    raw_monument_id = str(data.get('monument_id') or data.get('monumentId') or '').lower().strip()
    monument_id = normalize_monument_id(raw_monument_id)
    question = str(data.get('question') or '').strip()
    language = str(data.get('language') or 'en').lower().strip()
    if language not in ['en', 'kn', 'hi']:
        language = 'en'

    # Validation
    valid_monuments = ['hampi', 'taj-mahal', 'tajmahal', 'ellora', 'konark']
    if monument_id not in valid_monuments and raw_monument_id not in valid_monuments:
        return jsonify({
            "success": False,
            "error": {
                "code": "INVALID_MONUMENT",
                "message": f"Invalid monument. Must be one of: {', '.join(valid_monuments)}"
            }
        }), 400

    if not question:
        return jsonify({
            "success": False,
            "error": {
                "code": "EMPTY_QUESTION",
                "message": "Question cannot be empty."
            }
        }), 400

    if len(question) > 500:
        return jsonify({
            "success": False,
            "error": {
                "code": "QUESTION_TOO_LONG",
                "message": "Question exceeds maximum allowed limit of 500 characters."
            }
        }), 400

    if not GEMINI_API_KEY or GEMINI_API_KEY.startswith('your_'):
        return jsonify({
            "success": False,
            "error": {
                "code": "API_KEY_MISSING",
                "message": "GEMINI_API_KEY is not configured in backend environment."
            }
        }), 500

    # RAG Retrieval
    passages, references = retrieve_passages(monument_id, question)
    kb = get_knowledge_base()
    monument_name = kb.get(monument_id, {}).get('name', monument_id)

    # Prompt Engineering
    lang_inst = {
        'en': 'Respond in elegant, eloquent English with clear paragraphing.',
        'kn': 'ನೀವು ಶುದ್ಧ, ಗೌರವಪೂರ್ಣ ಮತ್ತು ಸಾಹಿತ್ಯಿಕ ಕನ್ನಡದಲ್ಲೇ ಉತ್ತರಿಸಬೇಕು (Authentic Kannada).',
        'hi': 'आपको उत्तर पूर्णतः शुद्ध, सुरुचिपूर्ण एवं प्रवाहमयी हिन्दी में देना है (Authentic Hindi).'
    }[language]

    context_str = "\n\n".join([
        f"[RECORD {i+1}] {p.get('category')}: {p.get('title')}\n{p.get('content')}"
        for i, p in enumerate(passages)
    ])

    system_instruction = (
        f"You are HeritageStory AI, a master Indian architectural historian and digital museum curator.\n"
        f"MONUMENT: {monument_name}\n"
        f"PRINCIPLES:\n"
        f"1. Ground all facts strictly in the provided archival records below.\n"
        f"2. Never hallucinate unsupported legends as facts.\n"
        f"3. Explain architectural purpose, craftsmanship, and cultural significance.\n"
        f"4. {lang_inst}\n"
        f"5. Provide an engaging 180-280 word response without meta tags."
    )

    user_prompt = (
        f"VERIFIED ARCHIVAL CONTEXT:\n{context_str}\n\n"
        f"VISITOR QUESTION:\n\"{question}\"\n\n"
        f"Please explain the history and architecture for the visitor based on the archival records."
    )

    # Check fast in-memory cache
    cache_key = f"{monument_id}:{language}:{question.lower().strip()}"
    if cache_key in _story_cache:
        cached = _story_cache[cache_key]
        return jsonify({
            **cached,
            "isCached": True
        })

    # Call Gemini API with fast candidate model hierarchy
    models = ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-3.5-flash', 'gemini-3.8-flash']
    last_err = None

    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "system_instruction": {"parts": [{"text": system_instruction}]},
            "contents": [{"role": "user", "parts": [{"text": user_prompt}]}],
            "generationConfig": {
                "temperature": 0.5,
                "topP": 0.9,
                "maxOutputTokens": 350
            }
        }
        try:
            resp = requests.post(url, json=payload, timeout=12)
            if resp.status_code == 200:
                result_json = resp.json()
                candidate = result_json.get('candidates', [{}])[0]
                answer = candidate.get('content', {}).get('parts', [{}])[0].get('text', '')
                if answer and answer.strip():
                    res_payload = {
                        "success": True,
                        "answer": answer.strip(),
                        "monumentId": monument_id,
                        "language": language,
                        "references": references,
                        "retrievedPassagesCount": len(passages),
                        "modelUsed": model,
                        "isCached": False
                    }
                    if len(_story_cache) > 100:
                        _story_cache.clear()
                    _story_cache[cache_key] = res_payload
                    return jsonify(res_payload)
            elif resp.status_code in [429, 503]:
                # Service busy or rate-limited on this model: try next model immediately without stalling
                continue
            else:
                last_err = {"code": f"HTTP_{resp.status_code}", "message": resp.text[:200]}
                continue
        except Exception as e:
            last_err = {"code": "REQUEST_EXCEPTION", "message": str(e)}
            continue

    return jsonify({
        "success": False,
        "monumentId": monument_id,
        "language": language,
        "references": references,
        "retrievedPassagesCount": len(passages),
        "error": last_err or {"code": "UNKNOWN", "message": "Failed to generate story."}
    }), 500

if __name__ == '__main__':
    print(f"Starting HeritageStory AI Flask Server on http://127.0.0.1:{FLASK_PORT}...")
    app.run(host='127.0.0.1', port=FLASK_PORT, debug=False)
