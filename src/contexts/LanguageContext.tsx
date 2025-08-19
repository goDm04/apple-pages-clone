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
    heroTitle: "Dostaňte svůj",
    heroTitleLine2: "byznys z nuly na trend.",
    heroSubtitle: "Pomáháme značkám růst. Od prvního nápadu až",
    heroSubtitleLine2: "po moment, kdy se stanou těmi, o kterých se mluví.",
    
    // Services
    servicesTitle: "Naše služby",
    websitesTitle: "Webové stránky",
    websitesDesc: "Navrhneme a vytvoříme web přesně podle vašich potřeb. Postaráme se o strukturu, design, obsah i technické řešení, aby byl připraven k okamžitému použití.",
    socialMediaTitle: "Sociální sítě", 
    socialMediaDesc: "Připravíme plán, obsah i vizuály. Zajistíme pravidelné publikování a postaráme se, aby vaše profily byly aktuální a působily jednotně.",
    graphicsTitle: "Grafika",
    graphicsDesc: "Vytváříme návrhy pro online i tisk. Od loga a vizuální identity přes bannery až po plakáty nebo grafiku pro potisk produktů.",
    
    // About
    aboutTitle: "Jsme tým kreativců",
    aboutDesc: "S našimi zkušenostmi v oblasti digitálního marketingu a brandingu pomáháme značkám růst a dosahovat jejich cílů. Tvoříme autentické zážitky, které rezonují s vaší cílovou skupinou.",
    aboutPoint1: "Strategie a branding s dopadem",
    aboutPoint2: "Design orientovaný na výsledek", 
    aboutPoint3: "Rychlá realizace a transparentní komunikace",
    contactUs: "Kontaktujte nás",
    
    // Contact
    contactTitle: "Pojďme spolu vytvořit něco skvělého",
    contactDesc: "Máte nápad nebo projekt? Napište nám a společně najdeme to nejlepší řešení pro vaši značku. Těšíme se na spolupráci s vámi.",
    email: "E-mail",
    phone: "Telefon", 
    address: "Adresa",
    name: "Jméno",
    namePlaceholder: "Vaše jméno",
    emailPlaceholder: "vas@email.cz",
    subject: "Předmět",
    subjectPlaceholder: "O čem se bavíme?",
    message: "Zpráva",
    messagePlaceholder: "Popište nám váš projekt nebo dotaz...",
    sendMessage: "Odeslat zprávu",
    
    // Process
    processTitle: "Jak to probíhá?",
    process1Title: "Poznáme vás a váš cíl",
    process1Desc: "Než začneme tvořit, zjistíme, co vaši značku dělá jedinečnou. Projdeme si vaše cíle, cílovou skupinu a konkurenci, abychom měli jasnou mapu, kam projekt směřuje a jaký má mít dopad.",
    process2Title: "Navrhneme vizuální strategii",
    process2Desc: "Proměníme vaše cíle a představy v jasný vizuální plán. Navrhneme vzhled a strukturu tak, aby každý detail podporoval vaši značku a mluvil řečí vašeho publika.",
    process3Title: "Vytvoříme a společně spustíme",
    process3Desc: "Kreativu převedeme do funkční reality – weby, vizuály i kampaně připravujeme tak, aby nejen vypadaly skvěle, ale taky měly dopad.",
    process4Title: "Spravujeme a posouváme dál",
    process4Desc: "Značka nekončí spuštěním. Sledujeme, co funguje, co je potřeba ladit a jak vás dál rozvpět – třeba skrze správu sítí nebo další obsah.",
    
    // FAQ
    faqTitle: "Často kladené otázky",
    faq1Q: "Jak dlouho trvá realizace webu?",
    faq1A: "Do týdne od zahájení zhotovíme vizuální návrh, který společně doladíme. Následující týden web doděláme a spustíme - už za dva týdny může být online.",
    faq2Q: "Jaké služby poskytujete?",
    faq2A: "Tvoříme kompletní vizuální identity, webové stránky, spravujeme firemní profily na sociálních sítích a připravujeme grafiku pro tisk, od plakátů až po produktové potisky. Pomáháme značkám působit jednotně a profesionálně napříč všemi kanály.",
    faq3Q: "Spolupracujete i se začínajícími firmami?",
    faq3A: "Ano, rádi spolupracujeme jak se začínajícími startupy, tak se zavedenými firmami. Každému klientovi přizpůsobujeme naše služby podle potřeb a rozpočtu.",
    faq4Q: "Poskytujete i průběžnou podporu?",
    faq4A: "Samozřejmě. Po dokončení projektu nabízíme průběžnou podporu, údržbu a aktualizace. Chceme, aby vaše značka fungovala dlouhodobě.",
    faq5Q: "Co když se mi web nebude líbit?",
    faq5A: "Návrh webu je pro vás zcela nezávazný. Pokud s ním nebudete spokojeni, upravíme ho podle vašich představ, nebo spolupráci v této fázi jednoduše ukončíme – bez jakýchkoliv závazků či podmínek.",
    
    // Stats
    stat1: "dokončených projektů",
    stat2: "spokojených klientů", 
    stat3: "roky zkušeností",
    stat4: "maximální doba dodání webu",
    
    // Footer
    footerDesc: "Vytváříme digitální zážitky, které inspirují a spojují značky s jejich publikem. Naše mise je pomáhat firmám růst prostřednictvím kreativity a inovací.",
    footerNav: "Navigace",
    footerContact: "Kontakt",
    footerCopyright: "TENSION CREATIVE. Všechna práva vyhrazena."
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
    heroTitle: "Get your",
    heroTitleLine2: "business from zero to trending.",
    heroSubtitle: "We help brands grow. From the first idea",
    heroSubtitleLine2: "to the moment they become the ones everyone talks about.",
    
    // Services
    servicesTitle: "Our services",
    websitesTitle: "Websites",
    websitesDesc: "We design and create websites exactly according to your needs. We take care of structure, design, content and technical solutions so it's ready for immediate use.",
    socialMediaTitle: "Social Media",
    socialMediaDesc: "We prepare the plan, content and visuals. We ensure regular publishing and make sure your profiles are current and consistent.",
    graphicsTitle: "Graphics",
    graphicsDesc: "We create designs for online and print. From logos and visual identity through banners to posters or graphics for product printing.",
    
    // About
    aboutTitle: "We are a team of creatives",
    aboutDesc: "With our experience in digital marketing and branding, we help brands grow and achieve their goals. We create authentic experiences that resonate with your target audience.",
    aboutPoint1: "Strategy and branding with impact",
    aboutPoint2: "Result-oriented design",
    aboutPoint3: "Fast implementation and transparent communication",
    contactUs: "Contact us",
    
    // Contact
    contactTitle: "Let's create something great together",
    contactDesc: "Do you have an idea or project? Write to us and together we'll find the best solution for your brand. We look forward to working with you.",
    email: "Email",
    phone: "Phone",
    address: "Address", 
    name: "Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subject: "Subject",
    subjectPlaceholder: "What are we talking about?",
    message: "Message",
    messagePlaceholder: "Describe your project or question...",
    sendMessage: "Send message",
    
    // Process
    processTitle: "How does it work?",
    process1Title: "We get to know you and your goal",
    process1Desc: "Before we start creating, we find out what makes your brand unique. We go through your goals, target audience and competition so we have a clear map of where the project is heading and what impact it should have.",
    process2Title: "We design a visual strategy",
    process2Desc: "We transform your goals and ideas into a clear visual plan. We design the look and structure so that every detail supports your brand and speaks the language of your audience.",
    process3Title: "We create and launch together",
    process3Desc: "We turn creativity into functional reality – we prepare websites, visuals and campaigns so they not only look great, but also have impact.",
    process4Title: "We manage and move forward",
    process4Desc: "The brand doesn't end with launch. We monitor what works, what needs to be fine-tuned and how to develop you further – for example through social media management or additional content.",
    
    // FAQ
    faqTitle: "Frequently asked questions",
    faq1Q: "How long does website development take?",
    faq1A: "Within a week of starting, we'll create a visual design that we'll fine-tune together. The following week we'll finish and launch the website - it can be online in just two weeks.",
    faq2Q: "What services do you offer?",
    faq2A: "We create complete visual identities, websites, manage corporate profiles on social networks and prepare graphics for print, from posters to product prints. We help brands appear consistent and professional across all channels.",
    faq3Q: "Do you work with startups too?",
    faq3A: "Yes, we love working with both emerging startups and established companies. We tailor our services to each client according to their needs and budget.",
    faq4Q: "Do you provide ongoing support?",
    faq4A: "Of course. After project completion, we offer ongoing support, maintenance and updates. We want your brand to work long-term.",
    faq5Q: "What if I don't like the website?",
    faq5A: "The website design is completely non-binding for you. If you're not satisfied with it, we'll modify it according to your ideas, or simply end the cooperation at this stage – without any obligations or conditions.",
    
    // Stats
    stat1: "completed projects",
    stat2: "satisfied clients",
    stat3: "years of experience", 
    stat4: "maximum website delivery time",
    
    // Footer
    footerDesc: "We create digital experiences that inspire and connect brands with their audience. Our mission is to help companies grow through creativity and innovation.",
    footerNav: "Navigation",
    footerContact: "Contact",
    footerCopyright: "TENSION CREATIVE. All rights reserved."
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