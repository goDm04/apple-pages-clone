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
      className={`w-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="about-heading" className="text-xl md:text-5xl font-bold text-foreground font-sf mb-8">
          {t("aboutTitle")}
        </h2>

        <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[390px] md:min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground text-base md:text-lg font-sf leading-relaxed">
              {t("aboutDesc")}
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span className="font-sf text-foreground text-base md:text-lg">{t("aboutPoint1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span className="font-sf text-foreground text-base md:text-lg">{t("aboutPoint2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span className="font-sf text-foreground text-base md:text-lg">{t("aboutPoint3")}</span>
              </li>
            </ul>
          </div>

          <figure className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
            <img
              src="/lovable-uploads/6c0e56bd-f6db-4b97-bb58-27bfba0bccab.png"
              alt="Memoji profil – tým Tension Creative"
              loading="lazy"
              decoding="async"
              className="h-full w-auto object-cover"
            />
            <figcaption className="sr-only">Tým kreativních profesionálů připravený pomoci vaší značce růst.</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;