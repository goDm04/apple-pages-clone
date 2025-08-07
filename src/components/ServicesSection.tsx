import React, { useState } from 'react';

const ServicesSection = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const cards = [
    {
      title: "Socialní sítě",
      description: "Komplexní správa vašich sociálních sítí včetně tvorby obsahu a engagement s vašimi sledujícími."
    },
    {
      title: "Grafika",
      description: "Profesionální grafické návrhy pro vaše podnikání - od loga až po kompletní vizuální identitu."
    },
    {
      title: "Webové stránky",
      description: "Moderní a responzivní webové stránky postavené na nejnovějších technologiích pro váš úspěch."
    }
  ];

  return (
    <section id="sluzby" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-lg font-sf font-bold">Služby</p>
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
            Co nabízíme
          </h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative w-full">
        <div className="flex transition-transform duration-500 ease-out" 
             style={{ transform: `translateX(calc(-${currentCard * 100}% + 50vw - 50%))` }}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] max-w-4xl px-4"
            >
              <div className="bg-muted/50 rounded-3xl p-12 h-96 flex flex-col justify-center items-center text-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground font-sf">
                  {card.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl font-sf leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-12 space-x-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentCard === index 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Přejít na kartu ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;