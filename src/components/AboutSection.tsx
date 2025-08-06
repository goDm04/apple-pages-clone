import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-background border border-border rounded-3xl p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-sf text-muted-foreground uppercase tracking-wider">
                Vizuální inteligence
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sf leading-tight">
                Podívej se na svět novýma očima.
              </h2>
            </div>
            
            <p className="text-base font-sf text-[#1D1D1F] leading-relaxed">
              Spusť z ovládače fotoaparátu vizuální inteligenci a nech si obrazem zobrazit informace o věcech v hledáčku. Stačí iPhone 16 Pro namířit na něco, co máš před sebou, a dostaneš se k podrobnostem, se kterými můžeš dál pracovat. Třeba se podívej, kde se dá koupit věc, co tě zaujala, nebo nech určit druh zvířete či rostliny.
            </p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                  
                  {/* Screen content */}
                  <div className="pt-16 px-4 h-full">
                    <div className="text-center space-y-4">
                      <h3 className="text-lg font-bold text-gray-800">Pizza Antica</h3>
                      
                      {/* Mock pizza images grid */}
                      <div className="grid grid-cols-2 gap-2 mt-8">
                        <div className="aspect-square bg-orange-100 rounded-lg"></div>
                        <div className="aspect-square bg-red-100 rounded-lg"></div>
                        <div className="aspect-square bg-yellow-100 rounded-lg"></div>
                        <div className="aspect-square bg-pink-100 rounded-lg"></div>
                      </div>
                      
                      {/* Mock restaurant interior */}
                      <div className="mt-6 h-48 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-2"></div>
                          <p className="text-xs text-gray-600">Restaurant Interior</p>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="absolute bottom-8 left-4 right-4">
                        <div className="flex justify-around items-center bg-black/10 rounded-full p-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;