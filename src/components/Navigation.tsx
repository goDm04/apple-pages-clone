import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Domu");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Domu", href: "#domu" },
    { name: "Služby", href: "#sluzby" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "O nás", href: "#o-nas" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-8 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? "left-1/2 transform -translate-x-1/2" 
        : "left-8 right-8"
    }`}>
      <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-sm" style={{ height: '56px' }}>
        <div className={`flex items-center h-full transition-all duration-700 ease-out ${
          isScrolled ? "px-2 space-x-2" : "px-2 justify-between"
        }`}>
          <div className={`flex items-center px-4 py-2 transition-all duration-700 ease-out ${
            isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          }`}>
            <img 
              src="/lovable-uploads/f105c586-f6a8-4435-8aca-71cb8f8bf21d.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className={`flex items-center ${isScrolled ? "space-x-2" : "space-x-2"}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeItem === item.name
                    ? "bg-black/10 text-black shadow-sm"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;