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
    <div className="w-full bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
          Každý web na míru a návrh zdarma
        </h3>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={scrollToContact}
          className="bg-background text-foreground hover:bg-background/90"
        >
          Kontaktujte nás
        </Button>
      </div>
    </div>
  );
}