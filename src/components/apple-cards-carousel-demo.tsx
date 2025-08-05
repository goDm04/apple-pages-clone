import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground font-sans">
        Naše práce.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-muted p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-muted-foreground text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-foreground">
                Krásné webové stránky a aplikace.
              </span>{" "}
              Vytváříme moderní, funkční a uživatelsky přívětivé digitální řešení. 
              Naše práce kombinuje estetiku s funkcionalitou a vytváří nezapomenutelné zážitky.
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Ukázka naší práce"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Webové stránky",
    title: "Moderní firemní prezentace",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "E-commerce",
    title: "Online obchody nové generace",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Mobilní aplikace",
    title: "Aplikace pro iOS a Android",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Branding",
    title: "Kompletní vizuální identita",
    src: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "UI/UX Design",
    title: "Uživatelsky přívětivé rozhraní",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Konzultace",
    title: "Digitální strategie a poradenství",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
];