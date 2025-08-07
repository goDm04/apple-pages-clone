import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CardsWithSlider = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { title: "Card 1", content: "Content for first card" },
    { title: "Card 2", content: "Content for second card" },
    { title: "Card 3", content: "Content for third card" }
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Three Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="h-64 bg-black border-0 cursor-pointer transition-opacity hover:opacity-80"
              onClick={() => setActiveCard(index)}
            >
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-300">{card.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeCard 
                  ? 'bg-black' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsWithSlider;