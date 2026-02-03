import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const pricingCards = [
    {
      name: "One",
      target: "Startupy, řemeslníci, landing pages",
      price: "14 900",
      features: [
        "Jednostránkový web",
        "Responzivní design",
        "Základní SEO optimalizace",
        "Kontaktní formulář",
        "Napojení na sociální sítě",
        "SSL certifikát",
      ],
    },
    {
      name: "One Custom",
      target: "Ambiciózní brandy, unikátní design",
      price: "29 900",
      features: [
        "Vlastní design na míru",
        "Prémiový vizuální styl",
        "Pokročilé SEO & analytics",
        "Animace a interakce",
        "Konzultace značky",
        "Prioritní podpora",
      ],
      highlighted: true,
    },
    {
      name: "Multi",
      target: "Menší firmy, penziony, služby",
      price: "34 900",
      features: [
        "Až 5 podstránek",
        "Jednoduchý redakční systém",
        "Fotogalerie & portfolio",
        "Rezervační formuláře",
        "Google mapa & kontakty",
        "Základní školení správy",
      ],
    },
    {
      name: "Multi Custom",
      target: "Profi firmy, weby s obsahem na míru",
      price: "59 900",
      features: [
        "Neomezený počet stránek",
        "Kompletní CMS systém",
        "E-shop či katalog produktů",
        "Vícejazyčná verze",
        "Individuální funkce na míru",
        "Prémiová podpora 12 měsíců",
      ],
    },
  ];

  return (
    <section 
      id="cenik" 
      aria-labelledby="pricing-heading" 
      className={`py-20 px-8 max-w-7xl mx-auto transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="text-center mb-12">
        <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold text-foreground font-sf">
          Ceník
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-sf">
          Vyberte si balíček, který nejlépe vyhovuje vašim potřebám
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingCards.map((card, index) => (
          <div
            key={card.name}
            className={`relative rounded-3xl p-6 transition-all duration-300 hover:scale-105 ${
              card.highlighted 
                ? 'bg-primary text-primary-foreground shadow-2xl scale-[1.02]' 
                : 'bg-muted'
            }`}
          >
            {card.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-medium font-sf">
                Nejoblíbenější
              </div>
            )}

            <h3 className={`text-2xl font-bold font-sf mb-2 ${
              card.highlighted ? 'text-primary-foreground' : 'text-foreground'
            }`}>
              {card.name}
            </h3>
            
            <p className={`text-sm mb-6 font-sf ${
              card.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}>
              {card.target}
            </p>

            <div className="mb-6">
              <span className={`text-4xl font-bold font-sf ${
                card.highlighted ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {card.price}
              </span>
              <span className={`text-sm font-sf ${
                card.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
              }`}>
                {" "}Kč
              </span>
            </div>

            <ul className="space-y-3">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className={`h-4 w-4 ${
                    card.highlighted ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                  <span className={`text-sm font-sf ${
                    card.highlighted ? 'text-primary-foreground/90' : 'text-foreground'
                  }`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
