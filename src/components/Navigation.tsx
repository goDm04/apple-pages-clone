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
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-full px-2 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-black/10 text-black shadow-lg"
                  : "text-black/70 hover:text-black hover:bg-black/5"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;