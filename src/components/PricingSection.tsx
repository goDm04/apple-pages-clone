import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Sparkles, Rocket, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const pricingCards = [
    {
      name: "One",
      subtitle: "Základní web",
      target: "Startupy, řemeslníci, landing pages",
      price: "14 900",
      icon: Rocket,
      description: "Ideální start pro ty, kteří chtějí profesionální online prezentaci bez zbytečných nákladů.",
      features: [
        "Jednostránkový web",
        "Responzivní design",
        "Základní SEO optimalizace",
        "Kontaktní formulář",
        "Napojení na sociální sítě",
        "SSL certifikát",
      ],
      deliveryTime: "2-3 týdny",
    },
    {
      name: "One Custom",
      subtitle: "Prémiový design",
      target: "Ambiciózní brandy, unikátní design",
      price: "29 900",
      icon: Sparkles,
      description: "Pro ty, kteří chtějí vyniknout. Unikátní design, který odráží vaši značku.",
      features: [
        "Vlastní design na míru",
        "Prémiový vizuální styl",
        "Pokročilé SEO & analytics",
        "Animace a interakce",
        "Konzultace značky",
        "Prioritní podpora",
      ],
      highlighted: true,
      deliveryTime: "3-4 týdny",
    },
    {
      name: "Multi",
      subtitle: "Firemní web",
      target: "Menší firmy, penziony, služby",
      price: "34 900",
      icon: Building2,
      description: "Kompletní webové řešení pro firmy, které potřebují více než jen vizitku.",
      features: [
        "Vícestránkový web",
        "Jednoduchý redakční systém",
        "Fotogalerie & portfolio",
        "Rezervační formuláře",
        "Integrace externích služeb",
        "Přehledný administrační panel",
      ],
      deliveryTime: "4-5 týdnů",
    },
    {
      name: "Multi Custom",
      subtitle: "Enterprise řešení",
      target: "Profi firmy, weby s obsahem na míru",
      price: "59 900",
      icon: Crown,
      description: "Maximální flexibilita a funkcionalita pro náročné projekty bez kompromisů.",
      features: [
        "Neomezený počet stránek",
        "Propracovaný redakční systém",
        "Pokročilé funkcionality",
        "Vícejazyčná verze",
        "Individuální funkce na míru",
        "Napojení na externí systémy",
      ],
      deliveryTime: "6-8 týdnů",
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
          Ceník webových stránek
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-sf">
          Vyberte si balíček, který nejlépe vyhovuje vašim potřebám
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.name}
            className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300 hover:scale-105 ${
              card.highlighted 
                ? 'bg-black text-white shadow-2xl scale-[1.02]' 
                : 'bg-muted'
            }`}
            >
            {card.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-medium font-sf">
                Nejoblíbenější
              </div>
              )}

            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
              card.highlighted ? 'bg-white/20' : 'bg-primary/10'
            }`}>
              <IconComponent className={`h-6 w-6 ${
                card.highlighted ? 'text-white' : 'text-primary'
              }`} />
            </div>

            <h3 className={`text-2xl font-bold font-sf mb-1 ${
              card.highlighted ? 'text-white' : 'text-foreground'
            }`}>
              {card.name}
            </h3>

            <p className={`text-xs uppercase tracking-wider mb-3 font-sf ${
              card.highlighted ? 'text-white/60' : 'text-muted-foreground'
            }`}>
              {card.subtitle}
            </p>
              
            <p className={`text-sm mb-4 font-sf ${
              card.highlighted ? 'text-white/80' : 'text-muted-foreground'
            }`}>
              {card.description}
            </p>

            <div className="mb-6">
              <span className={`text-4xl font-bold font-sf ${
                card.highlighted ? 'text-white' : 'text-foreground'
              }`}>
                {card.price}
              </span>
              <span className={`text-sm font-sf ${
                card.highlighted ? 'text-white/80' : 'text-muted-foreground'
              }`}>
                {" "}Kč
              </span>
            </div>

              <ul className="space-y-3 flex-1">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${
                      card.highlighted ? 'text-white' : 'text-primary'
                    }`} />
                    <span className={`text-sm font-sf ${
                      card.highlighted ? 'text-white/90' : 'text-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

            <div className={`mt-6 pt-4 border-t ${
              card.highlighted ? 'border-white/20' : 'border-border'
            }`}>
              <Button 
                className={`w-full font-sf rounded-full ${
                  card.highlighted 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}
                variant="default"
                onClick={() => {
                  const contactSection = document.getElementById('kontakt');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mám zájem
              </Button>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
