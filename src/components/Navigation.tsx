import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeItem, setActiveItem] = useState("Domů");
  const [isOnHero, setIsOnHero] = useState(true);
  
  const navItems = [
    { name: "Domů", href: "#hero" },
    { name: "Služby", href: "#sluzby" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "O nás", href: "#o-nas" },
    { name: "Kontakt", href: "#kontakt" }
  ];

  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Mobile navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 block lg:hidden bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, "#hero", "Domů")}
              className="flex items-center"
            >
              <img 
                src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png" 
                alt="Logo" 
                className="h-8 w-auto" 
              />
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
                    {navItems.map(item => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          onClick={(e) => handleNavClick(e, item.href, item.name)}
                          className={`block text-lg font-medium transition-colors ${
                            activeItem === item.name 
                              ? "text-primary" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full">
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
      <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block bg-white/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, "#hero", "Domů")}
              className="flex items-center"
            >
              <img 
                src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png" 
                alt="Logo" 
                className="h-8 w-auto" 
              />
            </a>

            {/* Navigation menu */}
            <nav className="flex items-center space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`text-sm font-medium transition-colors ${
                    activeItem === item.name 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button>
              Mám zájem
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;