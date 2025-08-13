import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ServicesSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="sluzby" 
      className={`w-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf mb-8">
          Naše služby
        </h2>

        <div className="space-y-6">
          {/* Velká horní karta */}
          <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[390px] md:min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                Webové stránky
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Navrhneme a vytvoříme web přesně podle vašich potřeb. Postaráme se o strukturu, design, obsah i technické řešení, aby byl připraven k okamžitému použití.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
              <img 
                src="/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png"
                alt="Monitor zobrazující webovou stránku"
                className="h-full w-auto object-cover"
              />
            </div>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                  Sociální sítě
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Připravíme plán, obsah i vizuály. Zajistíme pravidelné publikování a postaráme se, aby vaše profily byly aktuální a působily jednotně.
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
                <img 
                  src="/lovable-uploads/8f775cae-f6fa-42e3-9ad4-b8c25abfa1ac.png"
                  alt="Mobilní telefon zobrazující retro party"
                  className="h-full w-auto object-cover"
                />
              </div>
            </article>

            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                  Grafika
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Vytváříme návrhy pro online i tisk. Od loga a vizuální identity přes bannery až po plakáty nebo grafiku pro potisk produktů.
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 justify-center items-center hidden lg:flex">
                <img 
                  src="/lovable-uploads/9ed4c587-2f34-42ea-976e-ea985bd0d0af.png"
                  alt="Grafický design - plakát na sloupu"
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
