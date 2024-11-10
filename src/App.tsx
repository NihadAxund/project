import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { VideoSection } from './components/VideoSection';
import { StatisticsSection } from './components/StatisticsSection';
import { RoleSection } from './components/RoleSection';
import { DoctorProfiles } from './components/DoctorProfiles';
import { translations } from './data/translations';
import type { Language } from './types';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('az');

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <Hero currentLang={currentLang} />
      <Features currentLang={currentLang} />
      <VideoSection
        title={translations.videoSections.harmony.title}
        content={translations.videoSections.harmony.content}
        videoUrl="back.mp4"
        currentLang={currentLang}
      />
      <StatisticsSection currentLang={currentLang} />
      {/* <Technology currentLang={currentLang} /> */}
      <RoleSection currentLang={currentLang} />
      {/* <DoctorProfiles currentLang={currentLang} /> */}
    </div>
  );
}

export default App;