import React from 'react';
import { Card } from './ui/card';

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg font-sf font-bold mb-4">Služby</p>
          <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
            Naše služby
          </h2>
        </div>
        
        <div className="relative w-full">
          <div className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]">
            <div className="flex flex-row justify-start gap-8 pl-4 mx-auto max-w-7xl">
              <Card className="bg-muted/50 border-muted rounded-3xl p-16 min-h-[400px] flex items-center justify-center flex-shrink-0 w-[calc(100vw-200px)]">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold font-sf">Služby obsah</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque sollicitudin elementum egestas. 
                    In volutpat mauris blandit ipsum malesuada, laoreet lobortis neque egestas.
                  </p>
                </div>
              </Card>
              
              <Card className="bg-muted/50 border-muted rounded-3xl p-16 min-h-[400px] flex items-center justify-center flex-shrink-0 w-[calc(100vw-200px)] last:pr-[33%]">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold font-sf">Druhá služba</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque sollicitudin elementum egestas. 
                    In volutpat mauris blandit ipsum malesuada, laoreet lobortis neque egestas.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;