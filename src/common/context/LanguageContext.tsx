import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, MultilingualText } from '../types';
import { TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { languageService } from '../services/LanguageService';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: MultilingualText | undefined, fallback?: string) => string;
  ui: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(languageService.getLanguage());

  useEffect(() => {
    return languageService.subscribe((lang) => {
      setLanguageState(lang);
    });
  }, []);

  const setLanguage = (lang: Language) => {
    languageService.setLanguage(lang);
  };

  const t = (text: MultilingualText | undefined, fallback = ''): string => {
    return languageService.t(text, fallback);
  };

  const ui = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ui }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
