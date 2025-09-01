import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeItem, setActiveItem] = useState(t("home"));
  const [isDark, setIsDark] = useState(false);
  
  const navItems = [
    { name: t("home"), href: "#hero" },
    { name: t("services"), href: "#sluzby" },
    { name: t("portfolio"), href: "#portfolio" },
    { name: t("about"), href: "#o-nas" },
    { name: t("contact"), href: "#kontakt" }
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
  return (
    <>
      {/* Mobile Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 h-16">
          <a href="#hero" onClick={e => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            setActiveItem(t("home"));
            setOpen(false);
          }} className="text-xl font-bold text-black">
            Tension Creative
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>{t("navigation")}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6">
                <ul className="space-y-4">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={e => {
                          e.preventDefault();
                          const id = item.href.replace('#', '');
                          document.getElementById(id)?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                          setActiveItem(item.name);
                          setOpen(false);
                        }} 
                        className="block text-gray-600 hover:text-black transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Navigation - Arsturn Style */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" onClick={e => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              setActiveItem(t("home"));
            }} className="text-xl font-bold text-black">
              Tension Creative
            </a>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={e => {
                    e.preventDefault();
                    const id = item.href.replace('#', '');
                    document.getElementById(id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                    setActiveItem(item.name);
                  }} 
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="text-gray-600 hover:text-black"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                    {language === 'cs' ? 'CZ' : language === 'en' ? 'EN' : 'DE'}
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                  <DropdownMenuItem onClick={() => setLanguage('cs')}>CZ</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>EN</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('de')}>DE</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Action Buttons */}
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                {t("contact")}
              </Button>
              <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                {t("services")}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navigation;