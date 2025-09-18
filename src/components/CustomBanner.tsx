import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CustomBanner() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary/80 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary-foreground/80" />
            <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
              Bezplatná konzultace
            </span>
            <Sparkles className="w-6 h-6 text-primary-foreground/80" />
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Váš web na míru začíná<br />
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              bezplatným návrhem
            </span>
          </h3>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Diskuze, návrh designu a kompletní plán projektu - vše zdarma a bez závazků
          </p>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-lg group px-8 py-6 text-lg font-semibold"
          >
            Začít projekt zdarma
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
}