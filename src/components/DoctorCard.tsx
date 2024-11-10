import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import type { Doctor } from '../types';

interface Props {
  doctor: Doctor;
  index: number;
}

export const DoctorCard: React.FC<Props> = ({ doctor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={doctor.imageUrl}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center text-white">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="ml-1">{doctor.rating}</span>
            <span className="mx-2">•</span>
            <MessageCircle className="w-5 h-5" />
            <span className="ml-1">{doctor.reviewCount}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {doctor.expertise.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};