import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Language } from '../types';
import back from '../video2.mp4';
interface Props {
  title: {
    [key in Language]: string;
  };
  content: {
    [key in Language]: string;
  };
  videoUrl: string;
  currentLang: Language;
  reversed?: boolean;
}

export const VideoSection: React.FC<Props> = ({ 
  title, 
  content, 
  videoUrl, 
  currentLang,
  reversed = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={back} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {title[currentLang]}
            </h2>
            <p className="text-lg text-gray-200">
              {content[currentLang]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              {/* Content specific to each section can be passed as children */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
