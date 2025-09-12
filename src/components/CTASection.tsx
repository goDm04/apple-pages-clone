import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Připraveni na spolupráci?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Kontaktujte nás a společně vytvoříme něco skvělého pro vaši značku.
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg font-medium transition-colors"
        >
          Kontaktujte nás
        </Button>
      </div>
    </section>
  );
};

export default CTASection;