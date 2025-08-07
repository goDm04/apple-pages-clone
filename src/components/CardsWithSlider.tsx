import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const CardsWithSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Three Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="h-64 bg-card border border-border">
            <CardContent className="p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                <p className="text-muted-foreground">Content for first card</p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-64 bg-card border border-border">
            <CardContent className="p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                <p className="text-muted-foreground">Content for second card</p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-64 bg-card border border-border">
            <CardContent className="p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                <p className="text-muted-foreground">Content for third card</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Slider Below Cards */}
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-center">
            <label className="text-sm font-medium text-foreground">
              Slider Value: {sliderValue[0]}
            </label>
          </div>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CardsWithSlider;