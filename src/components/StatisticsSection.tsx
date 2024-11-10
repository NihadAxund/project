import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, CalendarCheck, Activity, TrendingUp } from 'lucide-react';
import type { Language } from '../types';

interface Props {
  currentLang: Language;
}

const data = [
  { name: 'Jan', patients: 400, appointments: 240 },
  { name: 'Feb', patients: 300, appointments: 139 },
  { name: 'Mar', patients: 200, appointments: 980 },
  { name: 'Apr', patients: 278, appointments: 390 },
  { name: 'May', patients: 189, appointments: 480 },
  { name: 'Jun', patients: 239, appointments: 380 },
];

const stats = [
  
  {
    id: 3,
    Icon: Activity,
    value: '98.5%',
    label: {
      az: 'Sistem Aktivliyi',
      ru: 'Активность Системы',
      en: 'System Uptime'
    }
  },
  {
    id: 4,
    Icon: TrendingUp,
    value: '45%',
    label: {
      az: 'İllik Artım',
      ru: 'Годовой Рост',
      en: 'Annual Growth'
    }
  }
];

export const StatisticsSection: React.FC<Props> = ({ currentLang }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ id, Icon, value, label }) => (
                <div
                  key={id}
                  className="p-6 bg-blue-50 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {label[currentLang]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="patients" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="appointments" 
                  stroke="#7c3aed" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};