import React from "react";

const ServicesSection = () => {
  return (
    <section id="sluzby" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf mb-8">
          Naše služby
        </h2>

        <div className="space-y-6">
          {/* Velká horní karta */}
          <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[390px] md:min-h-[500px]">
            <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground">
              Webové stránky
            </h3>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px] grid grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground mb-4">
                  Sociální sítě
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Připravíme plán, obsah i vizuály. Zajistíme pravidelné publikování a postaráme se, aby vaše profily byly aktuální a působily jednotně.
                </p>
              </div>
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/d0d4c7a2-3f0d-489a-81b9-10ab9ca50222.png"
                  alt="Mobilní telefon zobrazující sociální sítě"
                  className="absolute bottom-0 right-0 h-48 md:h-72 w-auto object-contain"
                />
              </div>
            </article>

            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px] md:min-h-[400px]">
              <h3 className="text-2xl font-semibold font-sf text-foreground">
                Grafika
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
