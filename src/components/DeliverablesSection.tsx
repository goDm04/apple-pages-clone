import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  cs: { title: "Co s webem dostanete", items: ["Zabezpečení HTTPS (SSL)", "Mapa webu a nastavení pro vyhledávače", "Strukturovaná data pro Google", "Napojení Google Analytics a Search Console", "Cookie lišta podle GDPR", "Optimalizované obrázky a rychlé načítání", "Web vyladěný pro mobily", "Předání s návodem na správu", "30 dní úprav zdarma po spuštění"] },
  en: { title: "What your website includes", items: ["HTTPS security (SSL)", "Sitemap and search engine setup", "Structured data for Google", "Google Analytics and Search Console setup", "GDPR-compliant cookie banner", "Optimised images and fast loading", "Fully mobile-friendly", "Handover with an editing guide", "30 days of free tweaks after launch"] },
  de: { title: "Das ist bei Ihrer Website dabei", items: ["HTTPS-Sicherheit (SSL)", "Sitemap und Suchmaschinen-Setup", "Strukturierte Daten für Google", "Einrichtung von Google Analytics und Search Console", "DSGVO-konformer Cookie-Banner", "Optimierte Bilder und schnelles Laden", "Optimiert für Mobilgeräte", "Übergabe mit Anleitung", "30 Tage kostenlose Anpassungen nach dem Start"] },
};

export default function DeliverablesSection() {
  const { language } = useLanguage();
  const c = copy[language];
  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="font-sf text-4xl font-bold leading-tight text-foreground md:text-6xl">{c.title}</h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-5 backdrop-blur">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-ink text-background"><Check className="h-3.5 w-3.5" /></span>
              <span className="font-sf text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
