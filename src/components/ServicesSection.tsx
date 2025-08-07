import React from 'react';
import CardSlider from './CardSlider';

const ServicesSection = () => {
  const sliderCards = [
    {
      id: 1,
      image: "/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png",
      alt: "Socialní sítě"
    },
    {
      id: 2,
      image: "/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png",
      alt: "Grafika"
    },
    {
      id: 3,
      image: "/lovable-uploads/553ea5b6-e9b6-4935-882b-dc1ffa581745.png",
      alt: "Webové stránky"
    }
  ];

  return (
    <>
      {/* Card Slider Section */}
      <CardSlider cards={sliderCards} />

      {/* First section - original layout */}
      <section id="sluzby" className="py-24 px-8 max-w-7xl mx-auto">
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
                className="w-296 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second section - mirrored layout */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png" 
                alt="Smartphone mockup"
                className="w-296 h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Right content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg font-sf font-bold">Služby</p>
              <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
                Grafika
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
        </div>
      </section>

      {/* Third section - original layout like first */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg font-sf font-bold">Služby</p>
              <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
                Webové stránky
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
                className="w-296 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;