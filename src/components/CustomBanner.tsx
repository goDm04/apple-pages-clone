import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CustomBanner() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-foreground pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto border-t border-background/20 px-4 pt-16 text-center md:px-8 md:pt-20">
        <h3 className="mb-4 font-sf text-3xl font-bold text-background md:text-5xl">
          {t("bannerTitle")}
        </h3>
        <p className="mx-auto mb-8 hidden max-w-2xl font-sf text-base text-background/60 md:block md:text-lg">
          {t("bannerDesc")}
        </p>
        <Button variant="outline" size="lg" onClick={scrollToContact}
          className="bg-background text-foreground hover:bg-background/90 border-background px-8 rounded-full font-sf">
          {t("contactUs")}
        </Button>
      </div>
    </div>
  );
}
