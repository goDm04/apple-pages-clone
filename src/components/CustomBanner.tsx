import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CustomBanner() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full border-b border-border bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h3 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
          {t("bannerTitle")}
        </h3>
        <p className="mx-auto mb-8 hidden max-w-2xl font-sf text-base text-muted-foreground md:block md:text-lg">
          {t("bannerDesc")}
        </p>
        <Button variant="outline" size="lg" onClick={scrollToContact}
          className="rounded-full border-primary bg-primary px-8 font-sf text-primary-foreground hover:bg-primary/90">
          {t("contactUs")}
        </Button>
      </div>
    </div>
  );
}
