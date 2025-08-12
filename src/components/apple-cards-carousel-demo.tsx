import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="portfolio" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground font-sf">
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
            <p className="text-muted-foreground text-base md:text-2xl font-sf max-w-3xl mx-auto">
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
    title: "Odstěhováno.cz",
    src: "https://imgur.com/QEWFIRL.jpeg",
    href: "https://odstehovano.cz",
    content: <DummyContent />,
  },
  {
    category: "Sociální sítě",
    title: "Centrum pojištění Vlašim",
    src: "https://imgur.com/gdJ5kAU.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Grafika",
    title: "Diskotéka Zbizuby",
    src: "https://imgur.com/tBJQaxQ.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Webové stránky",
    title: "MH-Tiles.cz",
    src: "https://imgur.com/nYkWZPX.jpeg",
    href: "https://mh-tiles.cz",
    content: <DummyContent />,
  },
  {
    category: "Sociální sítě",
    title: "Bar Vrtule",
    src: "https://imgur.com/eRuiWWJ.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Webové stránky",
    title: "Health Brands s.r.o.",
    src: "https://imgur.com/aRCjbQq.jpeg",
    href: "https://thehealthbrands.com",
    content: <DummyContent />,
  },
  {
    category: "Grafika",
    title: "Maturitní ples Vlašim",
    src: "https://imgur.com/GCUii3f.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Sociální sítě",
    title: "FINPRO21 Reality",
    src: "https://imgur.com/u3xxxdQ.jpeg",
    content: <DummyContent />,
  },
];
