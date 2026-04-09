import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Emco = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <header className="pt-40 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs font-sf text-muted-foreground border border-border px-4 py-1.5 rounded-full uppercase tracking-widest">Case Study</span>
              <span className="text-xs font-sf text-muted-foreground border border-border px-4 py-1.5 rounded-full uppercase tracking-widest">2026</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-sf tracking-tighter leading-[0.9]">
              Největší snídaně<br />
              <span className="text-muted-foreground">v Česku</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sf max-w-xl mx-auto leading-relaxed">
              Komplexní digitální kampaň pro značku Emco — od microsite přes sociální sítě až po newslettery
            </p>
          </div>
        </div>
      </header>

      {/* Services provided */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Microsite design', 'Social media posty', 'Newsletter bannery', 'Landing page'].map((service) => (
              <div key={service} className="bg-muted rounded-2xl p-6 text-center">
                <span className="font-sf font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the project */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h2 className="text-xl md:text-4xl font-bold font-sf">O projektu</h2>
              <p className="text-muted-foreground font-sf leading-relaxed">
                Emco nás oslovilo s vizí uspořádat „Největší snídani v Česku" — rekordní akci, 
                která měla propojit online i offline svět. Naším úkolem bylo vytvořit kompletní 
                digitální zázemí kampaně.
              </p>
              <p className="text-muted-foreground font-sf leading-relaxed">
                Navrhli jsme interaktivní microsite s generátorem videí, landing page s live 
                odpočítáváním a registrací, sérii bannerů pro newslettery a grafiku pro sociální sítě.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl md:text-4xl font-bold font-sf">Vizuální identita</h2>
              <p className="text-muted-foreground font-sf leading-relaxed">
                Celý vizuální styl vychází z hravé identity Emco — červená, béžová, 
                ručně psané fonty a ilustrace jahod. Důraz byl kladen na konzistenci 
                napříč všemi kanály a jednoduché UX.
              </p>
              <p className="text-muted-foreground font-sf leading-relaxed">
                Výsledkem je ucelená kampaň, která oslovila tisíce lidí a pomohla 
                vytvořit nezapomenutelný zážitek kolem značky Emco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main showcase - Desktop */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl md:text-4xl font-bold font-sf">Microsite</h2>
            <p className="text-muted-foreground font-sf max-w-2xl leading-relaxed">
              Interaktivní microsite, kde se uživatelé mohli stát „hvězdou videa" — 
              nahrát svou fotku a vygenerovat personalizované video s produkty Emco
            </p>
          </div>
          <div className="bg-muted rounded-3xl overflow-hidden p-4 md:p-8">
            <img
              src="/lovable-uploads/emco-desktop.png"
              alt="Emco microsite - desktop verze"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mobile + Landing side by side */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl md:text-4xl font-bold font-sf">Mobilní verze</h2>
                <p className="text-muted-foreground font-sf leading-relaxed">
                  Plně optimalizovaná pro mobilní zařízení — většina uživatelů přicházela právě z telefonu
                </p>
              </div>
              <div className="bg-muted rounded-3xl overflow-hidden p-8 flex items-center justify-center min-h-[500px]">
                <img
                  src="/lovable-uploads/emco-mobile.png"
                  alt="Emco microsite - mobilní verze"
                  className="max-h-[600px] w-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl md:text-4xl font-bold font-sf">Landing page</h2>
                <p className="text-muted-foreground font-sf leading-relaxed">
                  Landing page s odpočítáváním, registrací a galerií videí od účastníků
                </p>
              </div>
              <div className="bg-muted rounded-3xl overflow-hidden p-4 flex items-start justify-center min-h-[500px]">
                <img
                  src="/lovable-uploads/emco-landing.png"
                  alt="Emco landing page s odpočítáváním"
                  className="w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter + Print side by side */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl md:text-4xl font-bold font-sf">Newsletter bannery</h2>
                <p className="text-muted-foreground font-sf leading-relaxed">
                  Série bannerů pro emailové kampaně zvoucí k účasti na rekordu
                </p>
              </div>
              <div className="bg-muted rounded-3xl overflow-hidden p-4 md:p-8">
                <img
                  src="/lovable-uploads/emco-newsletter.png"
                  alt="Emco newsletter banner"
                  className="w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl md:text-4xl font-bold font-sf">Tištěné materiály</h2>
                <p className="text-muted-foreground font-sf leading-relaxed">
                  Letáky A5 pro offline propagaci na Street Food Festivalu v Berouně
                </p>
              </div>
              <div className="bg-muted rounded-3xl overflow-hidden p-4 md:p-8 flex justify-center">
                <img
                  src="/lovable-uploads/emco-flyer.png"
                  alt="Emco A5 leták"
                  className="max-w-md w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 md:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-xl md:text-4xl font-bold font-sf">Chcete podobný projekt?</h2>
          <p className="text-muted-foreground font-sf">Ozvěte se nám a probereme to.</p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-sf font-medium hover:opacity-90 transition-opacity"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Emco;
