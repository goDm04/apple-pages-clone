import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full isolate" aria-label="Hero sekce">
      {/* Background image */}
      <img
        src="https://imgur.com/vdxJAt6.jpeg"
        alt="Tension Creative."
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Readability overlay using design tokens */}
   
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className="font-sf text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground">
          Dostaňte svůj byznys z nuly na trend.
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-base md:text-lg font-medium text-primary-foreground">
          Pomáháme značkám růst. Od prvního nápadu až po moment, kdy se stanou těmi, o kterých se mluví.
        </p>
      </div>
    </header>
  );
};

export default Hero;
