import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("aboutPoint1"),
    },
    {
      icon: Zap,
      title: t("aboutPoint2"),
    },
    {
      icon: Heart,
      title: t("aboutPoint3"),
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="about-heading" className="text-xl md:text-5xl font-bold text-foreground font-sf mb-8">
          {t("aboutTitle")}
        </h2>

        <div className="bg-muted rounded-3xl p-8 md:p-12">
          <p className="text-muted-foreground text-base md:text-xl font-sf leading-relaxed max-w-3xl mb-12">
            {t("aboutDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sf text-foreground text-lg font-medium">
                    {value.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
