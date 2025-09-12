import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section 
      id="sluzby" 
      className={`w-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-sf mb-8">
          {t("servicesTitle")}
        </h2>

        <div className="space-y-6">
          {/* Velká horní karta */}
          <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[390px] md:min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-sf text-foreground mb-4">
                {t("websitesTitle")}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                {t("websitesDesc")}
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
              <img 
                src="/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png"
                alt="Moderní webová stránka zobrazená na monitoru - responzivní design a SEO optimalizace"
                className="h-full w-auto object-cover"
              />
            </div>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-sf text-foreground mb-4">
                  {t("socialMediaTitle")}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {t("socialMediaDesc")}
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
                <img 
                  src="/lovable-uploads/8f775cae-f6fa-42e3-9ad4-b8c25abfa1ac.png"
                  alt="Správa sociálních sítí - kreativní obsah a engagement strategie na mobilním telefonu"
                  className="h-full w-auto object-cover"
                />
              </div>
            </article>

            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-sf text-foreground mb-4">
                  {t("graphicsTitle")}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {t("graphicsDesc")}
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
                <img 
                  src="/lovable-uploads/9ed4c587-2f34-42ea-976e-ea985bd0d0af.png"
                  alt="Profesionální grafický design - kreativní plakát a vizuální identita značky"
                  className="h-full w-auto object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
