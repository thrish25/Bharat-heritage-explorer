import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string; short: string }[] = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ', short: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिन्दी', short: 'हिन्दी' },
  ];

  return (
    <div
      className={`inline-flex items-center rounded-sm p-0.5 border ${
        variant === 'dark'
          ? 'bg-[#151719]/90 border-[#C6A15B]/30'
          : 'bg-[#F5EFE6] border-[#B8B2A6]/40'
      } ${className}`}
      role="group"
      aria-label="Audio Guide Language Selector"
    >
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLanguage(opt.code)}
            className={`px-2.5 py-1 text-xs font-semibold tracking-wider rounded-sm transition-all focus:outline-none ${
              isActive
                ? variant === 'dark'
                  ? 'bg-[#C6A15B] text-[#151719] shadow-sm font-bold'
                  : 'bg-[#1C1F21] text-[#F3EBDD] shadow-sm'
                : variant === 'dark'
                ? 'text-[#B8B2A6] hover:text-[#F3EBDD] hover:bg-[#1C1F21]'
                : 'text-[#5A4337] hover:text-[#1C1F21] hover:bg-[#EBE1D3]'
            }`}
            title={opt.label}
          >
            {opt.short}
          </button>
        );
      })}
    </div>
  );
};
