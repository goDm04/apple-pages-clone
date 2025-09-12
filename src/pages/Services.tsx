import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t, language } = useLanguage();

  const services = [
    {
      title: t('websitesTitle'),
      description: t('websitesDesc'),
      features: [
        'Responzivní design pro všechna zařízení',
        'SEO optimalizace',
        'Rychlé načítání stránek',
        'CMS pro snadnou správu obsahu',
        'Analýzy a sledování výkonu'
      ],
      price: 'Od 15 000 Kč',
      image: '/lovable-uploads/553ea5b6-e9b6-4935-882b-dc1ffa581745.png'
    },
    {
      title: t('socialMediaTitle'),
      description: t('socialMediaDesc'),
      features: [
        'Strategie obsahového marketingu',
        'Grafické návrhy pro příspěvky',
        'Plánování a publikování obsahu',
        'Analýza výkonu kampaní',
        'Správa komunitní komunikace'
      ],
      price: 'Od 8 000 Kč/měsíc',
      image: '/lovable-uploads/2c860fb4-848b-4be3-94ff-79b23489e614.png'
    },
    {
      title: t('graphicsTitle'),
      description: t('graphicsDesc'),
      features: [
        'Návrh loga a vizuální identity',
        'Tiskové materiály (letáky, katalogy)',
        'Digitální bannery a reklamy',
        'Obalový design produktů',
        'Brandové guidelines'
      ],
      price: 'Od 5 000 Kč',
      image: '/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png'
    }
  ];

  const breadcrumbItems = [
    { label: t('services'), isActive: true }
  ];

  return (
    <>
      <Helmet>
        <title>Služby - Webové stránky, Sociální sítě, Grafika | Tension Creative</title>
        <meta name="description" content="Kompletní portfolio kreativních služeb: moderní webové stránky, správa sociálních sítí a profesionální grafický design. Pomáháme značkám růst." />
        <meta name="keywords" content="webové stránky, sociální sítě, grafický design, branding, digitální marketing, SEO optimalizace" />
        <link rel="canonical" href={`https://tension-creative.lovable.app/${language === 'cs' ? '' : language + '/'}services`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Služby - Webové stránky, Sociální sítě, Grafika | Tension Creative" />
        <meta property="og:description" content="Kompletní portfolio kreativních služeb: moderní webové stránky, správa sociálních sítí a profesionální grafický design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tension-creative.lovable.app/${language === 'cs' ? '' : language + '/'}services`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kreativní služby Tension Creative",
            "description": "Webové stránky, správa sociálních sítí a grafický design pro růst vašeho byznysu",
            "provider": {
              "@type": "Organization",
              "name": "Tension Creative"
            },
            "areaServed": "Czech Republic",
            "serviceType": ["Web Development", "Social Media Management", "Graphic Design"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} className="mb-8" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sf">
                {t('servicesTitle')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Pomáháme značkám růst prostřednictvím moderních webových stránek, 
                strategické správy sociálních sítí a profesionálního grafického designu.
              </p>
            </div>
          </section>

          {/* Services Detail Section */}
          <section 
            ref={elementRef}
            className={`py-20 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid gap-12 lg:gap-20">
                {services.map((service, index) => (
                  <article key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sf">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4">Co zahrnujeme:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-2xl font-bold text-primary mb-6">
                        {service.price}
                      </div>
                      
                      <a 
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Získat nabídku
                      </a>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <img
                        src={service.image}
                        alt={`${service.title} - ukázka naší práce`}
                        className="w-full h-auto rounded-lg shadow-lg"
                        loading="lazy"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sf">
                Připraveni na spolupráci?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Kontaktujte nás a společně vytvoříme něco skvělého pro vaši značku.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-semibold"
              >
                {t('contactUs')}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;