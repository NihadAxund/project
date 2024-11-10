import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { translations } from '../data/translations';
import { Database, Server, Layout, Shield } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  currentLang: Language;
}

export const Technology: React.FC<Props> = ({ currentLang }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {translations.technology.title[currentLang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            {translations.technology.subtitle[currentLang]}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">PostgreSQL & MongoDB</h3>
            <p className="text-gray-600">
              Secure, scalable database systems for reliable healthcare data management
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
            <Server className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">C# & Node.js</h3>
            <p className="text-gray-600">
              Robust microservices architecture for efficient data processing
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
            <Layout className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">React & Tailwind CSS</h3>
            <p className="text-gray-600">
              Modern, responsive frontend for seamless user experience
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-md">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Entity Framework & Mongoose</h3>
            <p className="text-gray-600">
              Advanced ORMs for secure and efficient data handling
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};