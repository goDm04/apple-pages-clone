import React from 'react';
import { Button } from "@/components/ui/button";


const AboutSection = () => {
  return (
    <section id="o-nas" aria-labelledby="about-heading" className="py-16 px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 md:p-12 bg-muted">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
                Jsme tým kreativců
              </h2>
            </div>

            <p className="text-base font-sf text-muted-foreground leading-relaxed">
              S našimi zkušenostmi v oblasti digitálního marketingu a brandingu pomáháme značkám růst a dosahovat jejich cílů. Tvoříme autentické zážitky, které rezonují s vaší cílovou skupinou.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">Strategie a branding s dopadem</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">Design orientovaný na výsledek</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-sf text-foreground">Rychlá realizace a transparentní komunikace</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button size="lg" asChild className="font-sf font-semibold">
                <a href="#kontakt">Kontaktujte nás</a>
              </Button>
            </div>
          </div>

          <figure className="flex justify-center">
            <img
              src="/lovable-uploads/6c0e56bd-f6db-4b97-bb58-27bfba0bccab.png"
              alt="Memoji profil – tým Tension Creative"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md aspect-square object-cover"
            />
            <figcaption className="sr-only">Tým kreativních profesionálů připravený pomoci vaší značce růst.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;