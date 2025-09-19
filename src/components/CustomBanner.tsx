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
  return <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Nejste si jistí? Připravíme vám nezávazný návrh webu zdarma
        </h3>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto hidden md:block">
          Získejte vizualizaci vašeho budoucího webu ještě před tím, než se rozhodnete. Ukážeme vám, jak může vypadat váš nový web.
        </p>
        <Button variant="outline" size="lg" onClick={scrollToContact} className="bg-white text-black hover:bg-white/90 border-white px-8 rounded-full">
          Kontaktujte nás
        </Button>
      </div>
    </div>;
}