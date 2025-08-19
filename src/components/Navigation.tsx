import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeItem, setActiveItem] = useState(t("home"));
  const [isOnHero, setIsOnHero] = useState(true);
  
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
  return <>
      {/* Mobile/Tablet sticky navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 block lg:hidden bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-14 flex items-center justify-between">
            <a href="#hero" onClick={e => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            setActiveItem(t("home"));
            setOpen(false);
          }} className="flex items-center gap-2" aria-label="Přejít na úvod">
              <img src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" alt="Tension Creative logo" className="h-6 w-auto" />
            </a>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-black hover:text-black/70 transition-colors">
                  {language === 'cs' ? 'CZ' : 'EN'}
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-black/10 shadow-lg w-16 z-[60]">
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onClick={() => setLanguage(language === 'cs' ? 'en' : 'cs')}
                  >
                    {language === 'cs' ? 'EN' : 'CZ'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button aria-label="Otevřít menu" className="p-2 rounded-md border border-black/10 bg-white text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 sm:w-72">
                  <SheetHeader>
                    <SheetTitle>{t("navigation")}</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-4">
                    <ul className="space-y-2">
                      {navItems.map(item => <li key={item.name}>
                          <a href={item.href} onClick={e => {
                        e.preventDefault();
                        const id = item.href.replace('#', '');
                        document.getElementById(id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                        setActiveItem(item.name);
                        setOpen(false);
                      }} className={`block px-3 py-2 rounded-md text-base font-medium ${activeItem === item.name ? "bg-black/10 text-black" : "text-black/80 hover:bg-black/5"}`}>
                            {item.name}
                          </a>
                        </li>)}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Logo - pouze pro desktop/laptop */}
      <div className="fixed top-8 left-8 z-50 hidden lg:flex items-center h-12">
        <img 
          src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" 
          alt="Tension Creative logo" 
          className={`h-6 w-auto transition-all duration-300 ${isOnHero ? 'brightness-0 invert' : ''}`} 
        />
      </div>
      
      {/* Jazykový přepínač - pouze pro desktop/laptop */}
      <div className="fixed top-8 right-8 z-50 hidden lg:flex items-center h-12">
        <DropdownMenu>
          <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:opacity-70 ${isOnHero ? 'text-white' : 'text-black'}`}>
            {language === 'cs' ? 'CZ' : 'EN'}
            <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border border-black/10 shadow-lg w-16 z-[60]">
            <DropdownMenuItem 
              className="cursor-pointer"
              onClick={() => setLanguage(language === 'cs' ? 'en' : 'cs')}
            >
              {language === 'cs' ? 'EN' : 'CZ'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Navigation - desktop */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="backdrop-blur-xl border border-black/10 rounded-full px-2 py-2 shadow-sm bg-white/55">
          <div className="flex items-center space-x-2">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            const id = item.href.replace('#', '');
            document.getElementById(id)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            setActiveItem(item.name);
          }} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeItem === item.name ? "bg-black/10 text-black shadow-sm" : "text-black/70 hover:text-black hover:bg-black/5"}`}>
                {item.name}
              </a>)}
          </div>
        </div>
      </nav>
    </>;
};
export default Navigation;