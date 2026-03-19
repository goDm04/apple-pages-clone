import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
export default function CustomBanner() {
  const {
    t
  } = useLanguage();
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="w-full bg-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-background font-sf mb-4">
          Nejste si jistí? Připravíme vám nezávazný návrh webu zdarma
        </h3>
        <p className="text-base md:text-lg text-background/70 mb-8 max-w-2xl mx-auto font-sf hidden md:block">
          Získejte vizualizaci vašeho budoucího webu ještě před tím, než se rozhodnete. Ukážeme vám, jak může vypadat váš nový web.
        </p>
        <Button variant="outline" size="lg" onClick={scrollToContact} className="bg-background text-foreground hover:bg-background/90 border-background px-8 rounded-full font-sf">
          Kontaktujte nás
        </Button>
      </div>
    </div>;
}