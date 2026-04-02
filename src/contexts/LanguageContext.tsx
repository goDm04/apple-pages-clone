import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    pricing: "Ceník",
    ctaButton: "Mám zájem",
    
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
    aboutPoint1Desc: "Neděláme věci náhodně. Každý projekt začíná strategií – pochopíme vaši značku, cílovou skupinu a cíle, aby výsledek měl skutečný dopad.",
    aboutPoint2Desc: "Každý pixel a každá interakce slouží jednomu účelu – přivést vám zákazníky. Krásný design, který nefunguje, nás nezajímá.",
    aboutPoint3Desc: "Žádné čekání měsíce na výsledky. Pracujeme agilně, komunikujeme otevřeně a dodáváme v termínech, na které se můžete spolehnout.",
    aboutCtaTitle: "Máte projekt na mysli?",
    aboutCtaDesc: "Ozvěte se nám a probereme, jak vám můžeme pomoct.",
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
    process4Desc: "Značka nekončí spuštěním. Sledujeme, co funguje, co je potřeba ladit a jak vás dál rozvíjet – třeba skrze správu sítí nebo další obsah.",
    
    // FAQ
    faqTitle: "Často kladené otázky",
    faq1Q: "Jak dlouho trvá realizace webu?",
    faq1A: "Jednodušší weby zvládneme zrealizovat do 2 týdnů, komplexnější projekty do 4 týdnů. To vše za předpokladu, že máme od vás všechny potřebné podklady a informace – čím dříve je dostaneme, tím rychleji můžeme dodat.",
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
    stat4: "průměrná doba dodání webu",
    
    // Footer
    footerDesc: "Vytváříme digitální zážitky, které inspirují a spojují značky s jejich publikem. Naše mise je pomáhat firmám růst prostřednictvím kreativity a inovací.",
    footerNav: "Navigace",
    footerContact: "Kontakt",
    footerCopyright: "TENSION CREATIVE. Všechna práva vyhrazena.",
    
    // Portfolio
    portfolioTitle: "Naše práce",
    portfolioDescription: "Krásné webové stránky a aplikace.",
    portfolioDetailText: "Vytváříme moderní, funkční a uživatelsky přívětivé digitální řešení. Naše práce kombinuje estetiku s funkcionalitou a vytváří nezapomenutelné zážitky.",
    portfolioImageAlt: "Ukázka naší práce",
    categoryWebsites: "Webové stránky",
    categorySocialMedia: "Sociální sítě", 
    categoryGraphics: "Grafika",

    // Pricing
    pricingTitle: "Ceník webových stránek",
    pricingSubtitle: "Vyberte si balíček, který nejlépe vyhovuje vašim potřebám",
    pricingMostPopular: "Nejoblíbenější",
    pricingFrom: "od",
    pricingCurrency: "Kč",
    pricingCard1Subtitle: "Základní web",
    pricingCard1Target: "Startupy, řemeslníci, landing pages",
    pricingCard1Desc: "Ideální start pro ty, kteří chtějí profesionální online prezentaci bez zbytečných nákladů.",
    pricingCard1F1: "Jednostránkový web",
    pricingCard1F2: "Responzivní design",
    pricingCard1F3: "Základní SEO optimalizace",
    pricingCard1F4: "Kontaktní formulář",
    pricingCard1F5: "Napojení na sociální sítě",
    pricingCard1F6: "SSL certifikát",
    pricingCard1Time: "2-3 týdny",
    pricingCard2Subtitle: "Prémiový design",
    pricingCard2Target: "Ambiciózní brandy, unikátní design",
    pricingCard2Desc: "Pro ty, kteří chtějí vyniknout. Unikátní design, který odráží vaši značku.",
    pricingCard2F1: "Vlastní design na míru",
    pricingCard2F2: "Prémiový vizuální styl",
    pricingCard2F3: "Pokročilé SEO & analytics",
    pricingCard2F4: "Animace a interakce",
    pricingCard2F5: "Konzultace značky",
    pricingCard2F6: "Prioritní podpora",
    pricingCard2Time: "3-4 týdny",
    pricingCard3Subtitle: "Firemní web",
    pricingCard3Target: "Menší firmy, penziony, služby",
    pricingCard3Desc: "Kompletní webové řešení pro firmy, které potřebují více než jen vizitku.",
    pricingCard3F1: "Vícestránkový web",
    pricingCard3F2: "Jednoduchý redakční systém",
    pricingCard3F3: "Fotogalerie & portfolio",
    pricingCard3F4: "Rezervační formuláře",
    pricingCard3F5: "Integrace externích služeb",
    pricingCard3F6: "Přehledný administrační panel",
    pricingCard3Time: "4-5 týdnů",
    pricingCard4Subtitle: "Enterprise řešení",
    pricingCard4Target: "Profi firmy, weby s obsahem na míru",
    pricingCard4Desc: "Maximální flexibilita a funkcionalita pro náročné projekty bez kompromisů.",
    pricingCard4F1: "Neomezený počet stránek",
    pricingCard4F2: "Propracovaný redakční systém",
    pricingCard4F3: "Pokročilé funkcionality",
    pricingCard4F4: "Vícejazyčná verze",
    pricingCard4F5: "Individuální funkce na míru",
    pricingCard4F6: "Napojení na externí systémy",
    pricingCard4Time: "6-8 týdnů",

    // Banner
    bannerTitle: "Nejste si jistí? Připravíme vám nezávazný návrh webu zdarma",
    bannerDesc: "Získejte vizualizaci vašeho budoucího webu ještě před tím, než se rozhodnete. Ukážeme vám, jak může vypadat váš nový web.",
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    portfolio: "Portfolio", 
    about: "About",
    contact: "Contact",
    navigation: "Navigation",
    pricing: "Pricing",
    ctaButton: "Get started",
    
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
    aboutPoint1Desc: "We don't do things randomly. Every project starts with strategy – we understand your brand, target audience and goals so the result has real impact.",
    aboutPoint2Desc: "Every pixel and every interaction serves one purpose – to bring you customers. Beautiful design that doesn't work doesn't interest us.",
    aboutPoint3Desc: "No waiting months for results. We work agile, communicate openly and deliver on deadlines you can rely on.",
    aboutCtaTitle: "Have a project in mind?",
    aboutCtaDesc: "Get in touch and let's discuss how we can help you.",
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
    faq1A: "We can complete simpler websites within 2 weeks, more complex projects within 4 weeks. This assumes we have all the necessary materials and information from you – the sooner we receive them, the faster we can deliver.",
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
    stat4: "average website delivery time",
    
    // Footer
    footerDesc: "We create digital experiences that inspire and connect brands with their audience. Our mission is to help companies grow through creativity and innovation.",
    footerNav: "Navigation",
    footerContact: "Contact",
    footerCopyright: "TENSION CREATIVE. All rights reserved.",
    
    // Portfolio
    portfolioTitle: "Our work",
    portfolioDescription: "Beautiful websites and applications.",
    portfolioDetailText: "We create modern, functional and user-friendly digital solutions. Our work combines aesthetics with functionality and creates unforgettable experiences.",
    portfolioImageAlt: "Sample of our work",
    categoryWebsites: "Websites",
    categorySocialMedia: "Social Media",
    categoryGraphics: "Graphics",

    // Pricing
    pricingTitle: "Website pricing",
    pricingSubtitle: "Choose the package that best suits your needs",
    pricingMostPopular: "Most popular",
    pricingFrom: "from",
    pricingCurrency: "CZK",
    pricingCard1Subtitle: "Basic website",
    pricingCard1Target: "Startups, tradespeople, landing pages",
    pricingCard1Desc: "The ideal start for those who want a professional online presence without unnecessary costs.",
    pricingCard1F1: "Single-page website",
    pricingCard1F2: "Responsive design",
    pricingCard1F3: "Basic SEO optimization",
    pricingCard1F4: "Contact form",
    pricingCard1F5: "Social media integration",
    pricingCard1F6: "SSL certificate",
    pricingCard1Time: "2-3 weeks",
    pricingCard2Subtitle: "Premium design",
    pricingCard2Target: "Ambitious brands, unique design",
    pricingCard2Desc: "For those who want to stand out. Unique design that reflects your brand.",
    pricingCard2F1: "Custom-made design",
    pricingCard2F2: "Premium visual style",
    pricingCard2F3: "Advanced SEO & analytics",
    pricingCard2F4: "Animations and interactions",
    pricingCard2F5: "Brand consultation",
    pricingCard2F6: "Priority support",
    pricingCard2Time: "3-4 weeks",
    pricingCard3Subtitle: "Business website",
    pricingCard3Target: "Small businesses, guesthouses, services",
    pricingCard3Desc: "Complete web solution for businesses that need more than just a business card.",
    pricingCard3F1: "Multi-page website",
    pricingCard3F2: "Simple content management system",
    pricingCard3F3: "Photo gallery & portfolio",
    pricingCard3F4: "Booking forms",
    pricingCard3F5: "External service integrations",
    pricingCard3F6: "Clear admin panel",
    pricingCard3Time: "4-5 weeks",
    pricingCard4Subtitle: "Enterprise solution",
    pricingCard4Target: "Professional companies, custom content websites",
    pricingCard4Desc: "Maximum flexibility and functionality for demanding projects without compromise.",
    pricingCard4F1: "Unlimited number of pages",
    pricingCard4F2: "Advanced content management system",
    pricingCard4F3: "Advanced functionalities",
    pricingCard4F4: "Multilingual version",
    pricingCard4F5: "Custom-built features",
    pricingCard4F6: "External system integrations",
    pricingCard4Time: "6-8 weeks",

    // Banner
    bannerTitle: "Not sure? We'll prepare a free, no-obligation website mockup for you",
    bannerDesc: "Get a visualization of your future website before you decide. We'll show you what your new website could look like.",
  },
  de: {
    // Navigation
    home: "Start",
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    about: "Über uns",
    contact: "Kontakt",
    navigation: "Navigation",
    pricing: "Preise",
    ctaButton: "Loslegen",
    
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
    aboutPoint1Desc: "Wir machen nichts zufällig. Jedes Projekt beginnt mit einer Strategie – wir verstehen Ihre Marke, Zielgruppe und Ziele, damit das Ergebnis echte Wirkung hat.",
    aboutPoint2Desc: "Jeder Pixel und jede Interaktion dient einem Zweck – Ihnen Kunden zu bringen. Schönes Design, das nicht funktioniert, interessiert uns nicht.",
    aboutPoint3Desc: "Kein monatelanges Warten auf Ergebnisse. Wir arbeiten agil, kommunizieren offen und liefern zu Terminen, auf die Sie sich verlassen können.",
    aboutCtaTitle: "Haben Sie ein Projekt im Sinn?",
    aboutCtaDesc: "Kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihnen helfen können.",
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
    faq1A: "Einfachere Websites können wir innerhalb von 2 Wochen realisieren, komplexere Projekte innerhalb von 4 Wochen. Dies setzt voraus, dass wir alle notwendigen Materialien und Informationen von Ihnen haben – je früher wir sie erhalten, desto schneller können wir liefern.",
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
    stat4: "durchschnittliche Website-Lieferzeit",
    
    // Footer
    footerDesc: "Wir schaffen digitale Erfahrungen, die inspirieren und Marken mit ihrem Publikum verbinden. Unsere Mission ist es, Unternehmen durch Kreativität und Innovation beim Wachstum zu helfen.",
    footerNav: "Navigation",
    footerContact: "Kontakt",
    footerCopyright: "TENSION CREATIVE. Alle Rechte vorbehalten.",
    
    // Portfolio
    portfolioTitle: "Unsere Arbeit",
    portfolioDescription: "Schöne Webseiten und Anwendungen.",
    portfolioDetailText: "Wir erstellen moderne, funktionale und benutzerfreundliche digitale Lösungen. Unsere Arbeit kombiniert Ästhetik mit Funktionalität und schafft unvergessliche Erfahrungen.",
    portfolioImageAlt: "Beispiel unserer Arbeit",
    categoryWebsites: "Webseiten",
    categorySocialMedia: "Social Media",
    categoryGraphics: "Grafik",

    // Pricing
    pricingTitle: "Website-Preise",
    pricingSubtitle: "Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt",
    pricingMostPopular: "Beliebteste",
    pricingFrom: "ab",
    pricingCurrency: "CZK",
    pricingCard1Subtitle: "Basis-Website",
    pricingCard1Target: "Startups, Handwerker, Landing Pages",
    pricingCard1Desc: "Der ideale Start für alle, die eine professionelle Online-Präsenz ohne unnötige Kosten wollen.",
    pricingCard1F1: "Einseitige Website",
    pricingCard1F2: "Responsives Design",
    pricingCard1F3: "Basis-SEO-Optimierung",
    pricingCard1F4: "Kontaktformular",
    pricingCard1F5: "Social-Media-Integration",
    pricingCard1F6: "SSL-Zertifikat",
    pricingCard1Time: "2-3 Wochen",
    pricingCard2Subtitle: "Premium-Design",
    pricingCard2Target: "Ambitionierte Marken, einzigartiges Design",
    pricingCard2Desc: "Für alle, die herausstechen wollen. Einzigartiges Design, das Ihre Marke widerspiegelt.",
    pricingCard2F1: "Maßgeschneidertes Design",
    pricingCard2F2: "Premium visueller Stil",
    pricingCard2F3: "Erweitertes SEO & Analytics",
    pricingCard2F4: "Animationen und Interaktionen",
    pricingCard2F5: "Markenberatung",
    pricingCard2F6: "Prioritäts-Support",
    pricingCard2Time: "3-4 Wochen",
    pricingCard3Subtitle: "Firmen-Website",
    pricingCard3Target: "Kleine Unternehmen, Pensionen, Dienstleistungen",
    pricingCard3Desc: "Komplette Weblösung für Unternehmen, die mehr als nur eine Visitenkarte brauchen.",
    pricingCard3F1: "Mehrseitige Website",
    pricingCard3F2: "Einfaches Content-Management-System",
    pricingCard3F3: "Fotogalerie & Portfolio",
    pricingCard3F4: "Buchungsformulare",
    pricingCard3F5: "Integration externer Dienste",
    pricingCard3F6: "Übersichtliches Admin-Panel",
    pricingCard3Time: "4-5 Wochen",
    pricingCard4Subtitle: "Enterprise-Lösung",
    pricingCard4Target: "Professionelle Unternehmen, maßgeschneiderte Websites",
    pricingCard4Desc: "Maximale Flexibilität und Funktionalität für anspruchsvolle Projekte ohne Kompromisse.",
    pricingCard4F1: "Unbegrenzte Seitenzahl",
    pricingCard4F2: "Fortgeschrittenes Content-Management-System",
    pricingCard4F3: "Erweiterte Funktionalitäten",
    pricingCard4F4: "Mehrsprachige Version",
    pricingCard4F5: "Individuell entwickelte Funktionen",
    pricingCard4F6: "Anbindung externer Systeme",
    pricingCard4Time: "6-8 Wochen",

    // Banner
    bannerTitle: "Nicht sicher? Wir erstellen Ihnen kostenlos einen unverbindlichen Website-Entwurf",
    bannerDesc: "Erhalten Sie eine Visualisierung Ihrer zukünftigen Website, bevor Sie sich entscheiden. Wir zeigen Ihnen, wie Ihre neue Website aussehen könnte.",
  }
};

export const LanguageProvider: React.FC<{ 
  children: React.ReactNode;
  initialLanguage?: Language;
}> = ({ children, initialLanguage = 'cs' }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Update language when initialLanguage prop changes
  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    
    // Navigate to appropriate URL
    if (lang === 'cs') {
      navigate('/');
    } else {
      navigate(`/${lang}`);
    }
    
    // Reload page to ensure all components re-render with new language
    window.location.reload();
  };

  const t = (key: string): string => {
    const languageTranslations = translations[language];
    if (!languageTranslations) {
      console.warn(`Language '${language}' not found in translations, falling back to Czech`);
      return translations.cs[key as keyof typeof translations.cs] || key;
    }
    return languageTranslations[key as keyof typeof translations.cs] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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