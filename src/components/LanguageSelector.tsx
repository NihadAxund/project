import React from 'react';
import { Globe } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSelector: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
        <Globe className="w-5 h-5" />
        <span className="uppercase">{currentLang}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {(['az', 'ru', 'en'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLang === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};