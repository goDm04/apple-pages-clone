import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg font-sf font-bold">Služby</p>
            <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
              Socialní sítě
            </h2>
          </div>
          
          <div className="space-y-6 leading-relaxed font-sf text-[#1D1D1F]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque sollicitudin elementum egestas. 
              In volutpat mauris blandit ipsum malesuada, laoreet lobortis neque egestas. 
              Integer sed iaculis quam.
            </p>
            
            <p>
              Vestibulum sed eros accumsan nisl placerat porta. 
              Donec id ipsum sed leo interdum suscipit quis vel nulla. 
              Curabitur ut varius nunc, non eleifend justo. 
              Aliquam erat volutpat. Integer eget laoreet arcu, at imperdiet diam. 
              Suspendisse rhoncus molestie odio non tincidunt.
            </p>
            
            <p>
              Aenean et ligula vitae ligula gravida blandit. Integer ultrices vestibulum dapibus. 
              Morbi pellentesque ultrices tempus. Nullam a fermentum nunc, vitae consectetur eros. 
              Duis eu libero at dui viverra rhoncus non eu tellus.
            </p>
          </div>
        </div>
        
        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png" 
              alt="Smartphone mockup"
              className="w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;