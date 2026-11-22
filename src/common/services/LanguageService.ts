import { Language, MultilingualText } from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';

type LanguageChangeListener = (lang: Language) => void;

class LanguageService {
  private currentLanguage: Language = 'en';
  private listeners: Set<LanguageChangeListener> = new Set();

  constructor() {
    try {
      const saved = localStorage.getItem('royal_heritage_lang');
      if (saved === 'en' || saved === 'kn' || saved === 'hi') {
        this.currentLanguage = saved;
      }
    } catch {
      // LocalStorage unavailable
    }
  }

  public getLanguage(): Language {
    return this.currentLanguage;
  }

  public setLanguage(lang: Language): void {
    if (this.currentLanguage === lang) return;
    this.currentLanguage = lang;
    try {
      localStorage.setItem('royal_heritage_lang', lang);
    } catch {
      // ignore
    }
    this.notify();
  }

  public t(text: MultilingualText | string | undefined, fallback = ''): string {
    if (!text) return fallback;
    if (typeof text === 'string') return text;
    return text[this.currentLanguage] || text.en || fallback;
  }

  public getUI(): TranslationDictionary {
    return TRANSLATIONS[this.currentLanguage] || TRANSLATIONS.en;
  }

  public subscribe(listener: LanguageChangeListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.currentLanguage);
      } catch (err) {
        console.error('Language listener error:', err);
      }
    });
  }
}

export const languageService = new LanguageService();
