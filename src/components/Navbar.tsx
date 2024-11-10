import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';
import type { Language } from '../types';
import { translations } from '../data/translations';
import img2 from "../icon.png"

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={img2} alt="Logo" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
            <span className="text-xl font-bold text-gray-900">Inframed Life</span>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              {translations.nav.features[currentLang]}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              {translations.nav.about[currentLang]}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              {translations.nav.contact[currentLang]}
            </a>
            <LanguageSelector 
              currentLang={currentLang} 
              onLanguageChange={onLanguageChange} 
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hamburger opens this) */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-16 bg-white/80 backdrop-blur-md z-50 p-4`}
      >
        <a href="#features" className="block text-gray-700 hover:text-blue-600 py-2">
          {translations.nav.features[currentLang]}
        </a>
        <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2">
          {translations.nav.about[currentLang]}
        </a>
        <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">
          {translations.nav.contact[currentLang]}
        </a>
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={onLanguageChange} 
        />
      </div>
    </nav>
  );
};
