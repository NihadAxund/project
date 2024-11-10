import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';
import type { Language } from '../types';
import vido2 from '../back.mp4';
interface Props {
  currentLang: Language;
}

export const Hero: React.FC<Props> = ({ currentLang }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={vido2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          {translations.hero.title[currentLang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          {translations.hero.subtitle[currentLang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            {translations.cta.demo[currentLang]}
          </button>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            {translations.cta.contact[currentLang]}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
