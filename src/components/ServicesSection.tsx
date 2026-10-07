import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section 
      id="sluzby" 
      className={`w-full py-24 md:py-32 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="mb-12 max-w-3xl font-sf text-4xl font-bold leading-tight tracking-normal text-foreground md:text-6xl">
          {t("servicesTitle")}
        </h2>

        <div className="space-y-6">
          {/* Velká horní karta */}
          <article className="relative grid min-h-[420px] grid-cols-1 items-center gap-8 overflow-hidden rounded-lg border border-border bg-muted p-8 lg:grid-cols-2 md:min-h-[540px] md:p-14">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 font-sf text-3xl font-semibold text-foreground md:text-4xl">
                {t("websitesTitle")}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                {t("websitesDesc")}
              </p>
            </div>
            <div className="absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center lg:flex">
              <img 
                src="/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png"
                alt="Monitor zobrazující moderní webovou stránku – ukázka tvorby webů"
                loading="lazy"
                className="h-full w-auto object-cover"
              />
            </div>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="relative grid min-h-[280px] grid-cols-1 items-center gap-8 overflow-hidden rounded-lg border border-border bg-muted p-8 lg:grid-cols-2 md:min-h-[420px] md:p-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                  {t("socialMediaTitle")}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {t("socialMediaDesc")}
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
              <img 
                src="/lovable-uploads/8f775cae-f6fa-42e3-9ad4-b8c25abfa1ac.png"
                alt="Mobilní telefon se správou sociálních sítí – Instagram marketing"
                loading="lazy"
                className="h-full w-auto object-cover"
              />
              </div>
            </article>

            <article className="relative grid min-h-[280px] grid-cols-1 items-center gap-8 overflow-hidden rounded-lg border border-border bg-muted p-8 lg:grid-cols-2 md:min-h-[420px] md:p-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                  {t("graphicsTitle")}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {t("graphicsDesc")}
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
              <img 
                src="/lovable-uploads/9ed4c587-2f34-42ea-976e-ea985bd0d0af.png"
                alt="Grafický design – plakát a vizuální identita značky"
                loading="lazy"
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
