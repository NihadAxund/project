import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DoctorCard } from './DoctorCard';
import { doctors } from '../data/doctors';
import { translations } from '../data/translations';
import type { Language } from '../types';

interface Props {
  currentLang: Language;
}

export const DoctorProfiles: React.FC<Props> = ({ currentLang }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.doctors.title[currentLang]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.doctors.subtitle[currentLang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};