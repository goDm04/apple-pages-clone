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
      subtitle: t("pricingCard1Subtitle"),
      target: t("pricingCard1Target"),
      price: "14 900",
      icon: Rocket,
      description: t("pricingCard1Desc"),
      features: [t("pricingCard1F1"), t("pricingCard1F2"), t("pricingCard1F3"), t("pricingCard1F4"), t("pricingCard1F5"), t("pricingCard1F6")],
      deliveryTime: t("pricingCard1Time"),
    },
    {
      name: "One Custom",
      subtitle: t("pricingCard2Subtitle"),
      target: t("pricingCard2Target"),
      price: "29 900",
      icon: Sparkles,
      description: t("pricingCard2Desc"),
      features: [t("pricingCard2F1"), t("pricingCard2F2"), t("pricingCard2F3"), t("pricingCard2F4"), t("pricingCard2F5"), t("pricingCard2F6")],
      highlighted: true,
      deliveryTime: t("pricingCard2Time"),
    },
    {
      name: "Multi",
      subtitle: t("pricingCard3Subtitle"),
      target: t("pricingCard3Target"),
      price: "34 900",
      icon: Building2,
      description: t("pricingCard3Desc"),
      features: [t("pricingCard3F1"), t("pricingCard3F2"), t("pricingCard3F3"), t("pricingCard3F4"), t("pricingCard3F5"), t("pricingCard3F6")],
      deliveryTime: t("pricingCard3Time"),
    },
    {
      name: "Multi Custom",
      subtitle: t("pricingCard4Subtitle"),
      target: t("pricingCard4Target"),
      price: "59 900",
      icon: Crown,
      description: t("pricingCard4Desc"),
      features: [t("pricingCard4F1"), t("pricingCard4F2"), t("pricingCard4F3"), t("pricingCard4F4"), t("pricingCard4F5"), t("pricingCard4F6")],
      deliveryTime: t("pricingCard4Time"),
    },
  ];

  return (
    <section id="cenik" aria-labelledby="pricing-heading"
      className={`w-full py-20 transition-all duration-700 ${isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}
      ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="pricing-heading" className="text-xl md:text-5xl font-bold text-foreground font-sf mb-4">
            {t("pricingTitle")}
          </h2>
          <p className="text-muted-foreground text-base md:text-xl font-sf max-w-2xl mx-auto">
            {t("pricingSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
          {pricingCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.name}
                className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  card.highlighted ? 'bg-foreground text-background shadow-2xl scale-[1.02]' : 'bg-muted'
                }`}>
                {card.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-foreground px-4 py-1 rounded-full text-xs font-medium font-sf">
                    {t("pricingMostPopular")}
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${card.highlighted ? 'bg-background/20' : 'bg-primary/10'}`}>
                  <IconComponent className={`h-6 w-6 ${card.highlighted ? 'text-background' : 'text-primary'}`} />
                </div>
                <h3 className={`text-2xl font-bold font-sf mb-1 ${card.highlighted ? 'text-background' : 'text-foreground'}`}>{card.name}</h3>
                <p className={`text-xs uppercase tracking-wider mb-3 font-sf ${card.highlighted ? 'text-background/60' : 'text-muted-foreground'}`}>{card.subtitle}</p>
                <p className={`text-sm mb-4 font-sf ${card.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>{card.description}</p>
                <div className="mb-6">
                  <span className={`text-sm font-sf ${card.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>{t("pricingFrom")}{" "}</span>
                  <span className={`text-4xl font-bold font-sf ${card.highlighted ? 'text-background' : 'text-foreground'}`}>{card.price}</span>
                  <span className={`text-sm font-sf ${card.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>{" "}{t("pricingCurrency")}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${card.highlighted ? 'text-background' : 'text-primary'}`} />
                      <span className={`text-sm font-sf ${card.highlighted ? 'text-background/90' : 'text-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 pt-4 border-t ${card.highlighted ? 'border-background/20' : 'border-border'}`}>
                  <Button className={`w-full font-sf rounded-full ${card.highlighted ? 'bg-background text-foreground hover:bg-background/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                    variant="default"
                    onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                    {t("ctaButton")}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
