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
      desc: t("aboutPoint1Desc"),
    },
    {
      icon: Zap,
      title: t("aboutPoint2"),
      desc: t("aboutPoint2Desc"),
    },
    {
      icon: Heart,
      title: t("aboutPoint3"),
      desc: t("aboutPoint3Desc"),
    },
  ];

  return (
    <section 
      id="o-nas" 
      aria-labelledby="about-heading" 
      className={`w-full border-b border-border py-24 transition-all duration-700 md:py-32 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-14">
        {/* Header area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div><span className="section-kicker">04 / About</span><h2 id="about-heading" className="font-display text-4xl font-bold leading-tight text-foreground md:text-7xl">{t("aboutTitle")}</h2></div>
          <p className="text-muted-foreground text-base md:text-xl font-sf leading-relaxed self-end">
            {t("aboutDesc")}
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-3">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group flex flex-col gap-6 border-b border-r border-border bg-card p-8 transition-colors duration-300 hover:bg-muted md:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="font-sf text-sm leading-relaxed text-muted-foreground md:text-base">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA band */}
        <div className="flex flex-col items-center justify-between gap-6 border border-primary/40 bg-primary p-8 md:flex-row md:p-12">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              {t("aboutCtaTitle")}
            </h3>
            <p className="font-sf text-base text-primary-foreground/70 md:text-lg">
              {t("aboutCtaDesc")}
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 gap-2 rounded-full bg-background px-8 font-sf text-foreground hover:bg-background/90"
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
