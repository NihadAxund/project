import { 
  Users, 
  CalendarClock, 
  LineChart, 
  Shield, 
  MessageSquare, 
  Database 
} from 'lucide-react';

export const features = [
  {
    id: 1,
    Icon: Users,
    title: {
      az: 'Həkim Profil İdarəetməsi',
      ru: 'Управление Профилями Врачей',
      en: 'Doctor Profile Management'
    },
    description: {
      az: 'Həkimlərin təcrübə və ixtisaslarını asanlıqla idarə edin',
      ru: 'Легко управляйте опытом и специализацией врачей',
      en: 'Easily manage doctors\' expertise and specializations'
    }
  },
  {
    id: 2,
    Icon: CalendarClock,
    title: {
      az: 'Görüş Planlaması',
      ru: 'Планирование Встреч',
      en: 'Appointment Scheduling'
    },
    description: {
      az: 'Avtomatlaşdırılmış təqvim və görüş planlaması',
      ru: 'Автоматизированное планирование календаря и встреч',
      en: 'Automated calendar and appointment scheduling'
    }
  },
  {
    id: 3,
    Icon: LineChart,
    title: {
      az: 'Analitika və Hesabatlar',
      ru: 'Аналитика и Отчеты',
      en: 'Analytics & Reports'
    },
    description: {
      az: 'Real vaxt statistika və detallı hesabatlar',
      ru: 'Статистика в реальном времени и подробные отчеты',
      en: 'Real-time statistics and detailed reporting'
    }
  },
  {
    id: 4,
    Icon: Shield,
    title: {
      az: 'Təhlükəsiz Məlumat',
      ru: 'Безопасность Данных',
      en: 'Secure Data'
    },
    description: {
      az: 'Tibbi məlumatların tam şifrələnməsi və qorunması',
      ru: 'Полное шифрование и защита медицинских данных',
      en: 'Complete encryption and protection of medical data'
    }
  },
  {
    id: 5,
    Icon: MessageSquare,
    title: {
      az: 'Pasiyent Kommunikasiyası',
      ru: 'Общение с Пациентами',
      en: 'Patient Communication'
    },
    description: {
      az: 'Daxili mesajlaşma və bildiriş sistemi',
      ru: 'Встроенная система обмена сообщениями и уведомлений',
      en: 'Built-in messaging and notification system'
    }
  },
  {
    id: 6,
    Icon: Database,
    title: {
      az: 'Məlumat İdarəetməsi',
      ru: 'Управление Данными',
      en: 'Data Management'
    },
    description: {
      az: 'Pasiyent məlumatlarının effektiv idarə edilməsi',
      ru: 'Эффективное управление данными пациентов',
      en: 'Efficient patient data management'
    }
  }
];