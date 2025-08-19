import React, { createContext, useContext, useState } from 'react';

type Language = 'cs' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  cs: {
    // Navigation
    home: "Domu",
    services: "Služby", 
    portfolio: "Portfolio",
    about: "O nás",
    contact: "Kontakt",
    navigation: "Navigace",
    
    // Hero section
    heroTitle: "Vytváříme digitální zážitky, které fascinují",
    heroSubtitle: "Specializujeme se na moderní webový design, branding a digitální marketing. Pomáháme značkám vyniknout v digitálním světe.",
    getStarted: "Začít projekt",
    ourWork: "Naše práce",
    
    // Services
    servicesTitle: "Naše služby",
    servicesSubtitle: "Komplexní digitální řešení pro váš úspěch",
    
    // About
    aboutTitle: "O nás",
    aboutSubtitle: "Jsme kreativní studio zaměřené na inovativní digitální řešení",
    
    // Contact
    contactTitle: "Kontakt",
    contactSubtitle: "Pojďme společně vytvořit něco úžasného",
    
    // Stats
    projectsCompleted: "Dokončených projektů",
    happyClients: "Spokojených klientů", 
    yearsExperience: "Let zkušeností",
    teamMembers: "Členů týmu"
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    portfolio: "Portfolio", 
    about: "About",
    contact: "Contact",
    navigation: "Navigation",
    
    // Hero section
    heroTitle: "We create digital experiences that fascinate",
    heroSubtitle: "We specialize in modern web design, branding and digital marketing. We help brands stand out in the digital world.",
    getStarted: "Start project",
    ourWork: "Our work",
    
    // Services
    servicesTitle: "Our services",
    servicesSubtitle: "Comprehensive digital solutions for your success",
    
    // About
    aboutTitle: "About us",
    aboutSubtitle: "We are a creative studio focused on innovative digital solutions",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Let's create something amazing together",
    
    // Stats
    projectsCompleted: "Projects completed",
    happyClients: "Happy clients",
    yearsExperience: "Years of experience", 
    teamMembers: "Team members"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cs');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.cs] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};