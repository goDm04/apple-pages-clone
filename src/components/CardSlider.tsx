import React, { useState, useRef, useEffect } from 'react';

interface CardSliderProps {
  cards: {
    id: number;
    image: string;
    alt: string;
  }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.8; // 80% of container width
      const scrollPosition = index * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.8;
      const scrollLeft = sliderRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="space-y-2 text-center mb-12">
        <p className="text-muted-foreground text-lg font-sf font-bold">Služby</p>
        <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
          Objevte naše služby.
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 px-[10%]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="flex-none w-4/5 h-80 bg-muted rounded-3xl snap-center overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-foreground scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSlider;