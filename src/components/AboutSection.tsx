import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Zap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("aboutPoint1"),
      desc: "Neděláme věci náhodně. Každý projekt začíná strategií – pochopíme vaši značku, cílovou skupinu a cíle, aby výsledek měl skutečný dopad.",
    },
    {
      icon: Zap,
      title: t("aboutPoint2"),
      desc: "Každý pixel a každá interakce slouží jednomu účelu – přivést vám zákazníky. Krásný design, který nefunguje, nás nezajímá.",
    },
    {
      icon: Heart,
      title: t("aboutPoint3"),
      desc: "Žádné čekání měsíce na výsledky. Pracujeme agilně, komunikujeme otevřeně a dodáváme v termínech, na které se můžete spolehnout.",
    },
  ];

  return (
    <section 
      id="o-nas" 
      aria-labelledby="about-heading" 
      className={`w-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        {/* Header area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <h2 id="about-heading" className="text-xl md:text-5xl font-bold text-foreground font-sf leading-tight">
            {t("aboutTitle")}
          </h2>
          <p className="text-muted-foreground text-base md:text-xl font-sf leading-relaxed self-end">
            {t("aboutDesc")}
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group bg-muted rounded-3xl p-8 md:p-10 flex flex-col gap-5 transition-all duration-300 hover:bg-foreground hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-sf text-foreground text-xl font-semibold group-hover:text-background transition-colors">
                  {value.title}
                </h3>
                <p className="font-sf text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-background/70 transition-colors">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA band */}
        <div className="bg-foreground rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-sf text-background">
              Máte projekt na mysli?
            </h3>
            <p className="text-background/60 font-sf text-base md:text-lg">
              Ozvěte se nám a probereme, jak vám můžeme pomoct.
            </p>
          </div>
          <Button
            size="lg"
            className="rounded-full bg-background text-foreground hover:bg-background/90 font-sf px-8 gap-2 shrink-0"
            onClick={() => {
              document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t("contactUs")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
