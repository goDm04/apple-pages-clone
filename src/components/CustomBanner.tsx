import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CustomBanner() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary/80 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4 tracking-tight">
          Váš <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">vysněný web</span> začíná zde
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-medium max-w-2xl mx-auto">
          Profesionální návrh zdarma • Moderní technologie • Rychlá realizace
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={scrollToContact}
          className="bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 px-8 py-3 text-lg font-semibold"
        >
          Začít projekt zdarma ✨
        </Button>
      </div>
    </div>
  );
}