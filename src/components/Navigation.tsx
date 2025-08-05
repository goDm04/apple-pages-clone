import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Posts", href: "#posts" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-2xl border border-black/5 rounded-full px-1 py-1 shadow-xl shadow-black/5">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-out relative ${
                activeItem === item.name
                  ? "bg-black text-white shadow-lg shadow-black/20"
                  : "text-black/80 hover:text-black hover:bg-black/5"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {activeItem === item.name && (
                <div className="absolute inset-0 bg-black rounded-full animate-scale-in" />
              )}
            </button>
          ))}
          
          <div className="w-px h-8 bg-black/10 mx-2" />
          
          <Button
            variant="ghost"
            size="icon"
            className="text-black/60 hover:text-black hover:bg-black/5 rounded-full h-12 w-12 transition-all duration-300 hover:scale-110"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;