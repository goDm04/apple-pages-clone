import React, { useState } from 'react';

const services = [
  {
    id: 'websites',
    title: 'Webové stránky',
    description: 'Webové stránky stavíme s důrazem na uživatelskou přívětivost, rychlost a obsah, který dává smysl. Neztrácíme se ve zbytečnostech – jdeme po tom, co funguje.',
    image: '/lovable-uploads/bfdd033c-6f15-48b7-b6d1-e0c856c4f9a7.png'
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
      <div className="relative">
        <div className="flex items-center justify-center space-x-6 overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative transition-all duration-500 cursor-pointer ${
                index === activeIndex 
                  ? 'w-96 h-64 z-10' 
                  : 'w-32 h-64 z-0 opacity-60'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-black/40">
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white max-w-xs">
                      <h3 className="text-2xl font-bold font-sf mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm font-sf leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation in Gray Card */}
      <div className="flex justify-center mt-8">
        <div className="bg-muted rounded-lg px-6 py-3">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 h-3 bg-foreground rounded-full' 
                    : 'w-3 h-3 bg-muted-foreground/40 rounded-full hover:bg-muted-foreground/60'
                }`}
                aria-label={`Přejít na službu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;