import React from "react";
import { ServicesCarousel, ServicesCard } from "@/components/ui/services-carousel";

const ServicesSection = () => {
  const cards = servicesData.map((card, index) => (
    <ServicesCard key={card.src} card={card} index={index} />
  ));

  return (
    <div id="sluzby" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground font-sf">
        Naše služby.
      </h2>
      <ServicesCarousel items={cards} />
    </div>
  );
};

const ServiceContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"service-content" + index}
            className="bg-muted p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-muted-foreground text-base md:text-2xl font-sf max-w-3xl mx-auto">
              <span className="font-bold text-foreground">
                Profesionální služby na míru.
              </span>{" "}
              Poskytujeme komplexní digitální řešení od návrhu po realizaci. 
              Naše služby jsou šité na míru vašim potřebám a cílům.
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Naše služby"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const servicesData = [
  {
    category: "Služby",
    title: "Socialní sítě",
    src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2340&auto=format&fit=crop",
    content: <ServiceContent />,
  },
  {
    category: "Služby", 
    title: "Grafika",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
    content: <ServiceContent />,
  },
  {
    category: "Služby",
    title: "Webové stránky",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: <ServiceContent />,
  },
];

export default ServicesSection;