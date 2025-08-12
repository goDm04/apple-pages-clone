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
            <article className="relative rounded-3xl shadow-sm overflow-hidden min-h-[320px] md:min-h-[480px] bg-muted">
              <div
                className="absolute inset-0 bg-[url('/lovable-uploads/b6ce59e4-c092-4ad7-be6f-4b1b4f9ca22e.png')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-background/60" aria-hidden="true" />
              <div className="relative p-8 md:p-12 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground">
                  Sociální sítě
                </h3>
                <p className="mt-4 text-base md:text-lg text-foreground">
                  Připravíme plán, obsah i vizuály. Zajistíme pravidelné publikování a postaráme se, aby vaše profily byly aktuální a působily jednotně.
                </p>
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
