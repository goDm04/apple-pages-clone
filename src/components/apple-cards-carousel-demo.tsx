import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppleCardsCarouselDemo() {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  const cards = data(t).map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div 
      id="portfolio" 
      className={`w-full h-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground font-sf">
        {t('portfolioTitle')}.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ t }: { t: (key: string) => string }) => {
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
                {t('portfolioDescription')}
              </span>{" "}
              {t('portfolioDetailText')}
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt={t('portfolioImageAlt')}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const CentrumPojisteniContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"centrum-pojisteni-content" + index}
            className="bg-muted p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-muted-foreground text-base md:text-2xl font-sf max-w-3xl mx-auto">
              {index === 0 && (
                <>
                  <span className="font-bold text-foreground">
                    Pojištěno i na sociálních sítích.
                  </span>{" "}
                  Cílem bylo ukázat širokou nabídku pojištění moderně, srozumitelně a tak, aby působila blíže lidem.
                </>
              )}
              {index === 1 && (
                <>
                  Připravili sérii postů, které kombinují vizuální čistotu s jasně formulovanými sděleními. Každý příspěvek měl ukázat konkrétní přínos služeb a zároveň posílit důvěryhodnost značky.
                </>
              )}
              {index === 2 && (
                <>
                  <span className="font-bold text-foreground">
                    Pojištěno i na sociálních sítích.
                  </span>{" "}
                  Cílem bylo ukázat širokou nabídku pojištění moderně, srozumitelně a tak, aby působila blíže lidem.
                </>
              )}
            </p>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Centrum pojištění Vlašim portfolio image"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const data = (t: (key: string) => string) => [
  {
    category: t('categoryWebsites'),
    title: "Odstěhováno.cz",
    src: "https://imgur.com/QEWFIRL.jpeg",
    href: "https://odstehovano.cz",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categorySocialMedia'),
    title: "Centrum pojištění Vlašim",
    src: "https://imgur.com/gdJ5kAU.jpeg",
    content: <CentrumPojisteniContent />,
  },
  {
    category: t('categoryGraphics'),
    title: "Diskotéka Zbizuby",
    src: "https://imgur.com/tBJQaxQ.jpeg",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categoryWebsites'),
    title: "MH-Tiles.cz",
    src: "https://imgur.com/nYkWZPX.jpeg",
    href: "https://mh-tiles.cz",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categorySocialMedia'),
    title: "Bar Vrtule",
    src: "https://imgur.com/eRuiWWJ.jpeg",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categoryWebsites'),
    title: "Health Brands s.r.o.",
    src: "https://imgur.com/aRCjbQq.jpeg",
    href: "https://thehealthbrands.com",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categoryGraphics'),
    title: "Maturitní ples Vlašim",
    src: "https://imgur.com/GCUii3f.jpeg",
    content: <DummyContent t={t} />,
  },
  {
    category: t('categorySocialMedia'),
    title: "FINPRO21 Reality",
    src: "https://imgur.com/u3xxxdQ.jpeg",
    content: <DummyContent t={t} />,
  },
];
