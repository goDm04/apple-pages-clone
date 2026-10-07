import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Button } from '@/components/ui/button';
import { GridBackground } from '@/components/ui/spotlight';

const Emco = () => (
  <div className="min-h-screen overflow-x-hidden bg-background font-sf text-foreground">
    <SmoothScroll />
    <Navigation appearance="dark" />

    <div className="continuous-gradient bg-gradient-hero text-hero-foreground">
      <header id="hero" className="relative overflow-hidden bg-gradient-hero px-4 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
        <GridBackground />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <Button asChild variant="ghost" className="mb-10 rounded-full text-hero-muted hover:bg-hero-foreground/10 hover:text-hero-foreground">
            <Link to="/#portfolio"><ArrowLeft />Naše práce</Link>
          </Button>
          <p className="mb-6 text-sm text-hero-muted">Emco / Digitální kampaň / 2025</p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-normal md:text-7xl lg:text-8xl">
            Největší snídaně<br />
            <span className="bg-gradient-to-b from-hero-foreground to-hero-muted bg-clip-text text-transparent">v Česku</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-hero-muted md:text-xl">
            Jedna kampaň, jeden vizuální příběh. Pro Emco jsme propojili microsite, sociální sítě a newslettery.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 border-y border-hero-border/15 md:grid-cols-4">
            {['Microsite design', 'Social media posty', 'Newsletter bannery', 'Landing page'].map(service => (
              <div key={service} className="px-3 py-5 text-sm text-hero-muted">{service}</div>
            ))}
          </div>
        </div>
      </header>
      <section aria-label="Ukázka microsite Emco" className="bg-gradient-hero px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-hero-border/15">
          <img src="/lovable-uploads/emco-desktop.png" alt="Emco microsite – desktop verze" className="block h-auto w-full" fetchPriority="high" />
        </div>
      </section>
    </div>

    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">01 / O projektu</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Od nápadu<br />k celé kampani</h2>
        </div>
        <div className="grid gap-6 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
          <p>Emco nás oslovilo s vizí uspořádat „Největší snídani v Česku“ — akci, která propojí online i offline svět. Naším úkolem bylo vytvořit digitální zázemí a jednotný vizuální styl kampaně.</p>
          <p>Navrhli jsme interaktivní microsite, landing page s odpočítáváním a registrací, grafiku pro sociální sítě i newslettery. Hravá identita Emco zůstává rozpoznatelná na každém výstupu.</p>
        </div>
      </div>
    </section>

    <section className="bg-muted px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:gap-16">
          <div><p className="mb-4 text-sm text-muted-foreground">02 / Microsite</p><h2 className="text-3xl font-bold md:text-4xl">Hvězdou videa<br />z počítače i telefonu</h2></div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:self-end md:text-lg">Uživatelé mohli nahrát svou fotku a vygenerovat personalizované video s produkty Emco. Přehledný design funguje i na telefonu, odkud přicházela většina návštěvníků.</p>
        </div>
        <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr] md:gap-8">
          <figure className="flex flex-col items-center gap-6">
            <img src="/lovable-uploads/emco-mobile.png" alt="Emco microsite – mobilní verze" className="h-auto w-full max-w-[300px] rounded-lg" loading="lazy" />
            <figcaption className="text-sm text-muted-foreground">Mobilní verze</figcaption>
          </figure>
          <figure className="space-y-6">
            <img src="/lovable-uploads/emco-landing.png" alt="Emco landing page s odpočítáváním" className="h-auto w-full rounded-lg" loading="lazy" />
            <figcaption className="text-sm leading-relaxed text-muted-foreground">Landing page s odpočítáváním, registrací e-mailů a galerií videí od účastníků</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:gap-16">
          <div><p className="mb-4 text-sm text-muted-foreground">03 / Newslettery</p><h2 className="text-3xl font-bold md:text-4xl">Pozvánka přímo do schránky</h2></div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:self-end md:text-lg">Série bannerů zvala k účasti na rekordu. Červená, ilustrace jahod a výrazná typografie navazují na microsite a sjednocují celou komunikaci.</p>
        </div>
        <img src="/lovable-uploads/emco-newsletter.png" alt="Emco newsletter banner" className="h-auto w-full rounded-lg" loading="lazy" />
      </div>
    </section>

    <section className="bg-muted px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-4 text-sm text-muted-foreground">04 / Tištěné materiály</p>
          <h2 className="text-3xl font-bold md:text-4xl">Z obrazovky<br />mezi lidi</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">Vizuální styl jsme přenesli také na letáky a plakáty A5 pro propagaci akce na Street Food Festivalu v Berouně. Stejná kampaň, i když zrovna nejste online.</p>
        </div>
        <img src="/lovable-uploads/emco-flyer.png" alt="Emco A5 leták – Největší snídaně v Česku" className="mx-auto h-auto w-full max-w-md rounded-lg" loading="lazy" />
      </div>
    </section>

    <div className="continuous-gradient bg-gradient-ink">
      <section className="bg-gradient-ink px-4 py-20 text-hero-foreground md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-6 text-sm text-hero-muted">Váš další projekt</p>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-6xl">Chcete podobný projekt?</h2>
          <p className="mt-6 text-lg text-hero-muted">Ozvěte se nám a probereme to.</p>
          <Button asChild size="lg" variant="outline" className="mt-10 rounded-full border-hero-border/20 bg-hero-foreground text-hero hover:bg-hero-foreground/90 hover:text-hero">
            <Link to="/#kontakt">Kontaktujte nás<ArrowUpRight /></Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  </div>
);

export default Emco;
