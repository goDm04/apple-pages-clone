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
          <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[240px]">
            <h3 className="text-2xl md:text-3xl font-semibold font-sf text-foreground">
              Webové stránky
            </h3>
          </article>

          {/* Dvě menší karty pod ní */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[200px]">
              <h3 className="text-2xl font-semibold font-sf text-foreground">
                Sociální sítě
              </h3>
            </article>

            <article className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm min-h-[200px]">
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
