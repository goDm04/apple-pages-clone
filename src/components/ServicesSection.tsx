import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section 
      id="sluzby" 
      className={`w-full border-b border-border py-24 md:py-32 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <span className="section-kicker">01 / Services</span>
        <h2 className="mb-12 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-7xl">
          {t("servicesTitle")}
        </h2>

        <div className="border-x border-t border-border">
          {/* Velká horní karta */}
          <article className="relative grid min-h-[390px] grid-cols-1 items-center overflow-hidden border-b border-border bg-card lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="mb-8 font-sf text-xs font-semibold text-primary">01</span>
              <h3 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-5xl">
                {t("websitesTitle")}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("websitesDesc")}
              </p>
            </div>
            <div className="relative hidden h-full min-h-[500px] items-center justify-center border-l border-border bg-muted lg:flex">
              <img 
                src="/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png"
                alt="Monitor zobrazující moderní webovou stránku – ukázka tvorby webů"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article className="relative grid min-h-[360px] grid-cols-1 items-end overflow-hidden border-b border-border bg-card md:border-r">
              <div className="relative z-20 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-transparent p-8 pt-32 md:p-12">
                <span className="mb-5 font-sf text-xs font-semibold text-primary">02</span>
                <h3 className="mb-4 font-display text-3xl font-semibold text-foreground">
                  {t("socialMediaTitle")}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {t("socialMediaDesc")}
                </p>
              </div>
              <div className="absolute inset-0 flex items-start justify-end">
              <img 
                src="/lovable-uploads/8f775cae-f6fa-42e3-9ad4-b8c25abfa1ac.png"
                alt="Mobilní telefon se správou sociálních sítí – Instagram marketing"
                loading="lazy"
                className="h-full w-full object-cover opacity-45"
              />
              </div>
            </article>

            <article className="relative grid min-h-[360px] grid-cols-1 items-end overflow-hidden border-b border-border bg-card">
              <div className="relative z-20 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-transparent p-8 pt-32 md:p-12">
                <span className="mb-5 font-sf text-xs font-semibold text-primary">03</span>
                <h3 className="mb-4 font-display text-3xl font-semibold text-foreground">
                  {t("graphicsTitle")}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {t("graphicsDesc")}
                </p>
              </div>
              <div className="absolute inset-0 flex items-start justify-end">
              <img 
                src="/lovable-uploads/9ed4c587-2f34-42ea-976e-ea985bd0d0af.png"
                alt="Grafický design – plakát a vizuální identita značky"
                loading="lazy"
                className="h-full w-full object-cover opacity-45"
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
