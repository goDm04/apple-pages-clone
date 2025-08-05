import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Služby</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Sociální síť
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              src="/lovable-uploads/553ea5b6-e9b6-4935-882b-dc1ffa581745.png" 
              alt="Smartphone mockup"
              className="w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;