import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  cs: {
    title: "Zkušenosti ze spolupráce",
    disclosure: "Ukázkové texty — nejde o skutečné reference klientů",
    quotes: [
      "Potřebovali jsme web, na kterém zákazník rychle najde nabídku a může rovnou odeslat poptávku. Přesně tak dnes funguje.",
      "Nejvíc nám pomohlo sjednotit web a grafiku. Nemusíme už pro každý nový příspěvek hledat jiný styl.",
      "Při předání jsme prošli správu obsahu. Běžné změny si teď zvládneme udělat sami, bez čekání na další úpravy.",
    ],
  },
  en: {
    title: "Working together",
    disclosure: "Sample copy — not genuine client testimonials",
    quotes: [
      "We needed a website where customers could quickly find our offer and send an enquiry. That is exactly how it works now.",
      "Bringing our website and graphics together helped us most. We no longer need to find a different style for every new post.",
      "We went through content management at handover. We can now make everyday changes ourselves without waiting for updates.",
    ],
  },
  de: {
    title: "Erfahrungen aus der Zusammenarbeit",
    disclosure: "Beispieltexte — keine echten Kundenreferenzen",
    quotes: [
      "Wir brauchten eine Website, auf der Kunden unser Angebot schnell finden und direkt anfragen können. Genau so funktioniert sie jetzt.",
      "Die Abstimmung von Website und Grafik hat uns am meisten geholfen. Wir müssen nicht für jeden neuen Beitrag einen anderen Stil suchen.",
      "Bei der Übergabe haben wir die Inhaltspflege besprochen. Alltägliche Änderungen können wir jetzt selbst vornehmen.",
    ],
  },
};

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const content = copy[language];
  return (
    <section id="reference" className="w-full bg-muted py-20 text-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="font-sf text-4xl font-bold leading-tight md:text-6xl">{content.title}</h2>
        <p className="mt-4 text-sm text-muted-foreground">{content.disclosure}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.quotes.map((quote) => (
            <figure key={quote} className="flex flex-col border-t border-border pt-6">
              <Quote aria-hidden="true" className="mb-6 h-6 w-6 text-muted-foreground" />
              <blockquote className="flex-1 font-sf text-lg leading-relaxed">„{quote}“</blockquote>
              <figcaption className="mt-8 font-sf text-xs font-semibold text-muted-foreground">PLACEHOLDER</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}