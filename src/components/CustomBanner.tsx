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
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300/80 animate-pulse" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em] px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              Konzultace zdarma
            </span>
            <Sparkles className="w-5 h-5 text-yellow-300/80 animate-pulse" />
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            <span className="block text-white/95 mb-2">
              Váš web na míru
            </span>
            <span className="block bg-gradient-to-r from-yellow-200 via-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
              začíná bezplatným návrhem
            </span>
          </h3>
          
          <p className="text-white/85 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Diskuze, návrh designu a kompletní plán projektu<br />
            <span className="font-medium text-yellow-200">vše zdarma a bez závazků</span>
          </p>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-2xl group px-10 py-7 text-xl font-bold rounded-2xl border-4 border-white/20"
          >
            <span className="mr-3">🚀</span>
            Začít projekt zdarma
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
}