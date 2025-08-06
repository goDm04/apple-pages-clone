import { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Domu");
  const navItems = [
    { name: "Domu", href: "#domu" },
    { name: "Služby", href: "#sluzby" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "O nás", href: "#o-nas" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      {/* Logo - pouze pro desktop/laptop */}
      <div className="fixed top-8 left-8 z-50 hidden lg:block">
        <img 
          src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" 
          alt="Logo" 
          className="h-8 w-auto"
        />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
<div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-full px-2 py-2 shadow-sm">
<div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-black/10 text-black shadow-sm"
                  : "text-black/70 hover:text-black hover:bg-black/5"
              }`}
            >
              {item.name}
            </a>
          ))}
 </div>
     </div>
    </nav>
    </>
  );
};

export default Navigation;
