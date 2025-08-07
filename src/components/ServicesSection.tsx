import React, { useState } from 'react';

const services = [
  {
    id: 'websites',
    title: 'Webové stránky',
    description: 'Webové stránky stavíme s důrazem na uživatelskou přívětivost, rychlost a obsah, který dává smysl. Neztrácíme se ve zbytečnostech – jdeme po tom, co funguje.',
    image: '/lovable-uploads/5ed3a14f-548c-4bdd-a7c7-cdb30d3e0d49.png'
  },
  {
    id: 'graphics',
    title: 'Grafika',
    description: 'Vytváříme vizuální identitu, která promlouvá k vašemu publiku. Od loga po kompletní brand design – vše s důrazem na jedinečnost a profesionalitu.',
    image: '/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png'
  },
  {
    id: 'social',
    title: 'Sociální sítě',
    description: 'Pomáháme budovat vaši přítomnost na sociálních sítích. Vytváříme obsah, který zaujme a přinese výsledky pro vaše podnikání.',
    image: '/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png'
  }
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="sluzby" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sf">
          Objevte naše služby.
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={service.id} className="w-full flex-shrink-0 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-video relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <h3 className="text-3xl md:text-4xl font-bold font-sf mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg md:text-xl font-sf max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${
              index === activeIndex 
                ? 'w-8 h-3 bg-primary rounded-full' 
                : 'w-3 h-3 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50'
            }`}
            aria-label={`Přejít na službu ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;