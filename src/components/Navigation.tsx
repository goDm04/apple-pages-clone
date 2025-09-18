import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [activeItem, setActiveItem] = useState("Domů");
  const [isOnHero, setIsOnHero] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLogoButton, setShowLogoButton] = useState(false);
  const navItems = [{
    name: "Domů",
    href: "#hero"
  }, {
    name: "Služby",
    href: "#sluzby"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "O nás",
    href: "#o-nas"
  }, {
    name: "Kontakt",
    href: "#kontakt"
  }];
  const [open, setOpen] = useState(false);
  
  // Animation sequence on page load
  useEffect(() => {
    const timer1 = setTimeout(() => setShowNavbar(true), 300);
    const timer2 = setTimeout(() => setShowLinks(true), 800);
    const timer3 = setTimeout(() => setShowLogoButton(true), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
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
          if (match) setActiveItem(match.name);
        }
      });
    }, {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.01
    });
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
  const handleNavClick = (e: React.MouseEvent, href: string, name: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setActiveItem(name);
    setOpen(false);
  };
  return <>
      {/* Mobile navbar */}
      <header className="fixed top-0 left-0 right-0 z-[100] block lg:hidden bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={e => handleNavClick(e, "#hero", "Domů")} className="flex items-center">
              <img src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" alt="Logo" className="h-6 w-auto" />
            </a>

            {/* Mobile menu button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {navItems.map(item => <li key={item.name}>
                        <a href={item.href} onClick={e => handleNavClick(e, item.href, item.name)} className={`block text-lg font-medium transition-colors ${activeItem === item.name ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                          {item.name}
                        </a>
                      </li>)}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full" onClick={(e) => handleNavClick(e, "#kontakt", "Kontakt")}>
                      Mám zájem
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Desktop navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] hidden lg:block">
        <div className={`backdrop-blur-md border border-white/20 rounded-full px-8 py-3 shadow-lg bg-white/[0.84] transition-all duration-500 ease-out ${
          showNavbar ? 'w-[800px] opacity-100' : 'w-4 opacity-0'
        }`}>
          <div className="flex items-center justify-between min-w-[800px]">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={e => handleNavClick(e, "#hero", "Domů")} 
              className={`flex items-center transition-all duration-300 ${
                showLogoButton ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <img src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" alt="Logo" className="h-6 w-auto" />
            </a>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Centered Navigation menu */}
            <nav className={`flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {navItems.map((item, index) => 
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={e => handleNavClick(e, item.href, item.name)} 
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeItem === item.name ? "text-black" : "text-black/80 hover:text-black"
                  } ${showLinks ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    transitionDelay: showLinks ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </a>
              )}
            </nav>

            {/* CTA Button */}
            <Button 
              className={`rounded-full px-6 bg-black text-white hover:bg-black/90 transition-all duration-300 ${
                showLogoButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`} 
              onClick={(e) => handleNavClick(e, "#kontakt", "Kontakt")}
            >
              Mám zájem
            </Button>
          </div>
        </div>
      </header>
    </>;
};
export default Navigation;