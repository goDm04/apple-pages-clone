import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeItem, setActiveItem] = useState("home");
  const [isOnHero, setIsOnHero] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLogoButton, setShowLogoButton] = useState(false);

  const navItems = [
    { key: "home", name: t("home"), href: "#hero" },
    { key: "services", name: t("services"), href: "#sluzby" },
    { key: "portfolio", name: t("portfolio"), href: "#portfolio" },
    { key: "about", name: t("about"), href: "#o-nas" },
    { key: "contact", name: t("contact"), href: "#kontakt" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // The section anchors only exist on the homepage (and its /:lang variants).
  const isHome = /^\/(en|de)?$/.test(location.pathname);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowNavbar(true), 60);
    const timer2 = setTimeout(() => setShowLinks(true), 140);
    const timer3 = setTimeout(() => setShowLogoButton(true), 200);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  useEffect(() => {
    const ids = ["hero", "sluzby", "portfolio", "o-nas", "kontakt"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).id;
          setIsOnHero(id === "hero");
          const match = navItems.find(i => i.href.slice(1) === id);
          if (match) setActiveItem(match.key);
        }
      });
    }, { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string, key: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    setActiveItem(key);
    setOpen(false);

    // Off the homepage the anchors don't exist — go home first, never dead-end.
    if (!isHome) {
      navigate(`/${href}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const checkModalState = () => setIsModalOpen(document.body.style.overflow === "hidden");
    checkModalState();
    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  return <>
    {/* Mobile navbar */}
    <header className={`fixed left-3 right-3 top-3 z-[100] block lg:hidden transition-all duration-300 ${isModalOpen || open ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div data-material className={`${isHome ? 'border-hero-foreground/15 bg-hero/75' : 'border-border bg-background/80'} mx-auto max-w-7xl rounded-full border px-3 shadow-lg backdrop-blur-2xl supports-[backdrop-filter]:bg-opacity-70`}>
        <div className="flex h-14 items-center justify-between">
          <a href="#hero" onClick={e => handleNavClick(e, "#hero", "home")} className="flex items-center">
            <img src={isHome ? "/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png" : "/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png"} alt="Tension Creative" className="h-7 w-auto" />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isHome ? "text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground" : undefined} aria-label="Otevřít menu"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[82vw] max-w-sm border-border bg-background p-8">
              <SheetHeader><SheetTitle>Menu</SheetTitle></SheetHeader>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {navItems.map(item => (
                    <li key={item.key}>
                      <a href={item.href} onClick={e => handleNavClick(e, item.href, item.key)}
                        className={`block text-lg font-medium transition-colors ${activeItem === item.key ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90" onClick={(e) => handleNavClick(e, "#kontakt", "contact")}>
                    {t("ctaButton")}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

    {/* Desktop navbar */}
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] hidden lg:block transition-all duration-300 ${isModalOpen ? 'opacity-0 pointer-events-none transform -translate-y-full scale-95' : 'opacity-100 transform translate-y-0 scale-100'}`}>
      <div data-material className={`${isHome ? 'border-hero-foreground/15 bg-hero/70' : 'border-border bg-background/80'} rounded-full border px-7 py-3 shadow-lg backdrop-blur-2xl transition-all duration-500 ease-out ${showNavbar ? 'w-[950px] opacity-100' : 'w-4 opacity-0'}`}>
        <div className="flex items-center w-full relative">
          <a href="#hero" onClick={e => handleNavClick(e, "#hero", "home")}
            className={`flex items-center transition-all duration-300 ${showLogoButton ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <img src={isHome ? "/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png" : "/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png"} alt="Tension Creative" className="h-6 w-auto" />
          </a>
          <nav className={`flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {navItems.map((item, index) => (
              <a key={item.key} href={item.href} onClick={e => handleNavClick(e, item.href, item.key)}
                className={`text-sm font-medium transition-all duration-300 ${isHome ? (activeItem === item.key ? 'text-hero-foreground' : 'text-hero-muted hover:text-hero-foreground') : (activeItem === item.key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')} ${showLinks ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: showLinks ? `${index * 100}ms` : '0ms' }}>
                {item.name}
              </a>
            ))}
          </nav>
          <Button className={`${isHome ? 'bg-hero-foreground text-hero hover:bg-hero-foreground/90' : ''} ml-auto rounded-full px-6 transition-all duration-300 ${showLogoButton ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
            onClick={(e) => handleNavClick(e, "#kontakt", "contact")}>
            {t("ctaButton")}
          </Button>
        </div>
      </div>
    </header>
  </>;
};

export default Navigation;
