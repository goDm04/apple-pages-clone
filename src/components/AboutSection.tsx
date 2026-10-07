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
      className={`w-full py-24 transition-all duration-700 md:py-32 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-14">
        {/* Header area */}
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-14 lg:grid-cols-2 lg:gap-16">
          <h2 id="about-heading" className="max-w-xl font-sf text-4xl font-bold leading-tight tracking-normal text-foreground md:text-6xl">
            {t("aboutTitle")}
          </h2>
          <p className="self-end font-sf text-base leading-relaxed text-muted-foreground md:text-xl">
            {t("aboutDesc")}
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 border-y border-border md:grid-cols-3">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group flex flex-col gap-6 border-b border-border py-8 transition-colors duration-300 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted transition-colors group-hover:bg-foreground">
                  <IconComponent className="h-5 w-5 text-foreground transition-colors group-hover:text-background" />
                </div>
                <h3 className="font-sf text-xl font-semibold text-foreground">
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
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-gradient-ink p-8 md:flex-row md:p-12">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-sf text-background">
              {t("aboutCtaTitle")}
            </h3>
            <p className="text-background/60 font-sf text-base md:text-lg">
              {t("aboutCtaDesc")}
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
