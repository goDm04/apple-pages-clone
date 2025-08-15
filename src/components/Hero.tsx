import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Hero = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll position (much slower shrinking)
  const scale = Math.max(0.8, 1 - scrollY * 0.0002);
  const translateY = scrollY * 0.3;

  return (
    <header 
      id="hero" 
      className={`relative w-full isolate transition-all duration-700 overflow-hidden ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`} 
      aria-label="Hero sekce"
      ref={elementRef}
    >
      {/* Background image with scroll-based scaling */}
      <img
        src="https://imgur.com/7oafTW3.jpeg"
        alt="Tension Creative."
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-75 ease-out rounded-2xl"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`
        }}
        loading="eager"
        fetchPriority="high"
      />
      {/* Readability overlay using design tokens */}
      

      <div className="container mx-auto flex min-h-[95vh] md:min-h-screen flex-col items-center justify-center py-24 text-center gap-6">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className="font-sf text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground">
          Dostaňte svůj<br />
          byznys z nuly na trend.
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-lg md:text-xl font-regular text-primary-foreground">
          Pomáháme značkám růst. Od prvního nápadu až<br />
          po moment, kdy se stanou těmi, o kterých se mluví.
        </p>
      </div>
    </header>
  );
};

export default Hero;
