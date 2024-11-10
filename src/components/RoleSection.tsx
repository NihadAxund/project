import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserCog, 
  Stethoscope, 
  Users, 
  Heart,
  ClipboardList, 
  UserPlus,
  ChevronRight
} from 'lucide-react';
import type { Language } from '../types';

interface Props {
  currentLang: Language;
}

const roles = [
  {
    id: 'patient',
    Icon: Heart,
    title: {
      az: 'Pasiyent',
      ru: 'Пациент',
      en: 'Patient'
    },
    description: {
      az: 'Sağlamlıq vəziyyəti izləmə, təkliflər və məlumatlar əldə etmə',
      ru: 'Отслеживание состояния здоровья, получение предложений и информации',
      en: 'Track your health status, receive suggestions and information'
    },
    features: [
      'Health Monitoring',
      'Receive Medical Advice',
      'Appointment Request',
      'Medical History Access',
      'Personal Health Records'
    ]
  },
  {
    id: 'admin',
    Icon: UserCog,
    title: {
      az: 'Admin',
      ru: 'Админ',
      en: 'Admin'
    },
    description: {
      az: 'Tam sistem konfiqurasiyası və data idarəetməsi',
      ru: 'Полная конфигурация системы и управление данными',
      en: 'Full system configuration and data management'
    },
    features: [
      'User Management',
      'System Configuration',
      'Security Settings',
      'Audit Logs'
    ]
  },
  {
    id: 'doctor',
    Icon: Stethoscope,
    title: {
      az: 'Həkim',
      ru: 'Врач',
      en: 'Doctor'
    },
    description: {
      az: 'Pasiyent qeydləri və görüş planlaması',
      ru: 'Записи пациентов и планирование встреч',
      en: 'Patient records and appointment scheduling'
    },
    features: [
      'Patient Records',
      'Appointment Management',
      'Medical History',
      'Prescriptions'
    ]
  },
  {
    id: 'receptionist',
    Icon: ClipboardList,
    title: {
      az: 'Qəbul',
      ru: 'Регистратура',
      en: 'Receptionist'
    },
    description: {
      az: 'Görüşlərin planlanması və pasiyent qeydiyyatı',
      ru: 'Планирование встреч и регистрация пациентов',
      en: 'Appointment scheduling and patient registration'
    },
    features: [
      'Appointment Booking',
      'Patient Registration',
      'Visit Management',
      'Schedule Overview'
    ]
  }
  
];

export const RoleSection: React.FC<Props> = ({ currentLang }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Role-Based Access Control
          </h2>
          <p className="text-xl text-gray-600">
            Secure and flexible role management system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {roles.map((role) => (
              <motion.button
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className={`w-full flex items-center p-4 rounded-xl transition-all ${
                  selectedRole.id === role.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <role.Icon className="w-6 h-6 mr-3" />
                <span className="font-medium">{role.title[currentLang]}</span>
                <ChevronRight className="w-5 h-5 ml-auto" />
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <selectedRole.Icon className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedRole.title[currentLang]}
                    </h3>
                    <p className="text-gray-600">
                      {selectedRole.description[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedRole.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        <span>{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};