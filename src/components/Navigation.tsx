import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
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
    <header data-material className={`fixed left-3 right-3 top-3 z-[100] block rounded-full border border-border bg-background/80 backdrop-blur-xl transition-all duration-300 lg:hidden ${isModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between">
          <span className="font-display text-xs font-bold uppercase text-foreground" style={{ letterSpacing: "0.12em" }}>Tension Creative</span>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
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
                  <Button className="w-full rounded-full" onClick={(e) => handleNavClick(e, "#kontakt", "contact")}>
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
    <header className={`fixed left-1/2 top-6 z-[100] hidden -translate-x-1/2 transform transition-all duration-300 lg:block ${isModalOpen ? 'opacity-0 pointer-events-none -translate-y-full scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
      <div data-material className={`rounded-full border border-border bg-background/70 px-5 py-2.5 shadow-sm backdrop-blur-xl transition-all duration-500 ease-out ${showNavbar ? 'w-[900px] opacity-100' : 'w-4 opacity-0'}`}>
        <div className="flex items-center w-full relative">
          <Button className={`rounded-full bg-foreground px-5 text-background hover:bg-foreground/90 ${showLogoButton ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            onClick={(e) => handleNavClick(e, "#kontakt", "contact")}>
            {t("ctaButton")} <ArrowUpRight className="h-4 w-4" />
          </Button>
          <nav className={`flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {navItems.map((item, index) => (
              <a key={item.key} href={item.href} onClick={e => handleNavClick(e, item.href, item.key)}
                className={`font-sf text-xs font-semibold uppercase transition-all duration-300 ${activeItem === item.key ? "text-primary" : "text-muted-foreground hover:text-foreground"} ${showLinks ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: showLinks ? `${index * 100}ms` : '0ms' }}>
                {item.name}
              </a>
            ))}
          </nav>
          <a href="#hero" onClick={e => handleNavClick(e, "#hero", "home")}
            className={`ml-auto flex items-center transition-all duration-300 ${showLogoButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <img src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png" alt="Tension Creative" className="h-5 w-auto" />
          </a>
        </div>
      </div>
    </header>
  </>;
};

export default Navigation;
