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
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-white/10 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          ))}
          
          <div className="w-px h-6 bg-white/20 mx-2" />
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/5 rounded-full h-10 w-10"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;