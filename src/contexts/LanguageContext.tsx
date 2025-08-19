import React, { createContext, useContext, useState } from 'react';

type Language = 'cs' | 'en' | 'de';

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
  },
  de: {
    // Navigation
    home: "Start",
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    about: "Über uns",
    contact: "Kontakt",
    navigation: "Navigation",
    
    // Hero section
    heroTitle: "Bringen Sie Ihr",
    heroTitleLine2: "Business von null auf Trend.",
    heroSubtitle: "Wir helfen Marken zu wachsen. Von der ersten Idee",
    heroSubtitleLine2: "bis zu dem Moment, in dem sie zu denen werden, über die alle sprechen.",
    
    // Services
    servicesTitle: "Unsere Dienstleistungen",
    websitesTitle: "Webseiten",
    websitesDesc: "Wir entwerfen und erstellen Webseiten genau nach Ihren Bedürfnissen. Wir kümmern uns um Struktur, Design, Inhalt und technische Lösungen, damit sie sofort einsatzbereit sind.",
    socialMediaTitle: "Social Media",
    socialMediaDesc: "Wir bereiten Plan, Inhalt und Visuals vor. Wir sorgen für regelmäßige Veröffentlichungen und stellen sicher, dass Ihre Profile aktuell und einheitlich sind.",
    graphicsTitle: "Grafik",
    graphicsDesc: "Wir erstellen Designs für Online und Print. Von Logos und visueller Identität über Banner bis hin zu Plakaten oder Grafiken für Produktdrucke.",
    
    // About
    aboutTitle: "Wir sind ein Team von Kreativen",
    aboutDesc: "Mit unserer Erfahrung im digitalen Marketing und Branding helfen wir Marken zu wachsen und ihre Ziele zu erreichen. Wir schaffen authentische Erfahrungen, die bei Ihrer Zielgruppe ankommen.",
    aboutPoint1: "Strategie und Branding mit Wirkung",
    aboutPoint2: "Ergebnisorientiertes Design",
    aboutPoint3: "Schnelle Umsetzung und transparente Kommunikation",
    contactUs: "Kontaktieren Sie uns",
    
    // Contact
    contactTitle: "Lassen Sie uns gemeinsam etwas Großartiges schaffen",
    contactDesc: "Haben Sie eine Idee oder ein Projekt? Schreiben Sie uns und gemeinsam finden wir die beste Lösung für Ihre Marke. Wir freuen uns auf die Zusammenarbeit mit Ihnen.",
    email: "E-Mail",
    phone: "Telefon",
    address: "Adresse",
    name: "Name",
    namePlaceholder: "Ihr Name",
    emailPlaceholder: "ihre@email.de",
    subject: "Betreff",
    subjectPlaceholder: "Worüber sprechen wir?",
    message: "Nachricht",
    messagePlaceholder: "Beschreiben Sie Ihr Projekt oder Ihre Frage...",
    sendMessage: "Nachricht senden",
    
    // Process
    processTitle: "Wie funktioniert es?",
    process1Title: "Wir lernen Sie und Ihr Ziel kennen",
    process1Desc: "Bevor wir mit der Erstellung beginnen, finden wir heraus, was Ihre Marke einzigartig macht. Wir gehen Ihre Ziele, Zielgruppe und Konkurrenz durch, damit wir eine klare Karte haben, wohin das Projekt führt und welche Wirkung es haben soll.",
    process2Title: "Wir entwickeln eine visuelle Strategie",
    process2Desc: "Wir verwandeln Ihre Ziele und Ideen in einen klaren visuellen Plan. Wir entwerfen das Aussehen und die Struktur so, dass jedes Detail Ihre Marke unterstützt und die Sprache Ihres Publikums spricht.",
    process3Title: "Wir erstellen und starten gemeinsam",
    process3Desc: "Wir verwandeln Kreativität in funktionale Realität – wir bereiten Webseiten, Visuals und Kampagnen so vor, dass sie nicht nur großartig aussehen, sondern auch Wirkung haben.",
    process4Title: "Wir verwalten und entwickeln weiter",
    process4Desc: "Die Marke endet nicht mit dem Start. Wir überwachen, was funktioniert, was feinabgestimmt werden muss und wie wir Sie weiterentwickeln können – zum Beispiel durch Social Media Management oder zusätzliche Inhalte.",
    
    // FAQ
    faqTitle: "Häufig gestellte Fragen",
    faq1Q: "Wie lange dauert die Website-Entwicklung?",
    faq1A: "Innerhalb einer Woche nach dem Start erstellen wir ein visuelles Design, das wir gemeinsam verfeinern werden. In der folgenden Woche werden wir die Website fertigstellen und starten - sie kann bereits in zwei Wochen online sein.",
    faq2Q: "Welche Dienstleistungen bieten Sie an?",
    faq2A: "Wir erstellen komplette visuelle Identitäten, Webseiten, verwalten Unternehmensprofile in sozialen Netzwerken und bereiten Grafiken für den Druck vor, von Plakaten bis zu Produktdrucken. Wir helfen Marken, konsistent und professionell über alle Kanäle zu erscheinen.",
    faq3Q: "Arbeiten Sie auch mit Startups zusammen?",
    faq3A: "Ja, wir arbeiten gerne sowohl mit aufstrebenden Startups als auch mit etablierten Unternehmen zusammen. Wir passen unsere Dienstleistungen an jeden Kunden entsprechend seinen Bedürfnissen und seinem Budget an.",
    faq4Q: "Bieten Sie laufende Unterstützung?",
    faq4A: "Natürlich. Nach Projektabschluss bieten wir laufende Unterstützung, Wartung und Updates an. Wir möchten, dass Ihre Marke langfristig funktioniert.",
    faq5Q: "Was ist, wenn mir die Website nicht gefällt?",
    faq5A: "Das Website-Design ist für Sie völlig unverbindlich. Wenn Sie damit nicht zufrieden sind, werden wir es nach Ihren Vorstellungen ändern oder die Zusammenarbeit in dieser Phase einfach beenden – ohne jegliche Verpflichtungen oder Bedingungen.",
    
    // Stats
    stat1: "abgeschlossene Projekte",
    stat2: "zufriedene Kunden",
    stat3: "Jahre Erfahrung",
    stat4: "maximale Website-Lieferzeit",
    
    // Footer
    footerDesc: "Wir schaffen digitale Erfahrungen, die inspirieren und Marken mit ihrem Publikum verbinden. Unsere Mission ist es, Unternehmen durch Kreativität und Innovation beim Wachstum zu helfen.",
    footerNav: "Navigation",
    footerContact: "Kontakt",
    footerCopyright: "TENSION CREATIVE. Alle Rechte vorbehalten."
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