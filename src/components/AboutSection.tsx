import React from 'react';
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";


const AboutSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section 
      id="o-nas" 
      aria-labelledby="about-heading" 
      className={`py-8 px-8 max-w-7xl mx-auto transition-all duration-700 md:bg-transparent bg-muted ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="md:rounded-3xl p-6 md:p-8 md:bg-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
                {t("aboutTitle")}
              </h2>
            </div>

            <p className="text-base font-sf text-muted-foreground leading-relaxed">
              {t("aboutDesc")}
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">{t("aboutPoint1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">{t("aboutPoint2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">{t("aboutPoint3")}</span>
              </li>
            </ul>

          </div>

          <figure className="flex justify-center">
            <img
              src="/lovable-uploads/6c0e56bd-f6db-4b97-bb58-27bfba0bccab.png"
              alt="Memoji profil – tým Tension Creative"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md aspect-square object-cover"
            />
            <figcaption className="sr-only">Tým kreativních profesionálů připravený pomoci vaší značce růst.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;