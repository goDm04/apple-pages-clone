import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Jak dlouho trvá realizace projektu?",
      answer: "Doba realizace závisí na složitosti projektu. Jednoduchý web nebo rebrand může být hotový za 2-4 týdny, komplexnější projekty mohou trvat 6-12 týdnů."
    },
    {
      question: "Jaké služby poskytujete?",
      answer: "Specializujeme se na branding, webdesign, grafický design a digitální marketing. Pomáháme značkám vytvořit silnou online přítomnost."
    },
    {
      question: "Spolupracujete i se začínajícími firmami?",
      answer: "Ano, rádi spolupracujeme jak se začínajícími startupy, tak se zavedenými firmami. Každému klientovi přizpůsobujeme naše služby podle potřeb a rozpočtu."
    },
    {
      question: "Poskytujete i průběžnou podporu?",
      answer: "Samozřejmě. Po dokončení projektu nabízíme průběžnou podporu, údržbu a aktualizace. Chceme, aby vaše značka fungovala dlouhodobě."
    },
    {
      question: "Jak probíhá komunikace během projektu?",
      answer: "Udržujeme pravidelnou komunikaci prostřednictvím emailu, telefonátů a osobních schůzek. Každý týden vás informujeme o pokroku a získáváme zpětnou vazbu."
    }
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 md:p-12" style={{backgroundColor: '#F5F5F8'}}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-sf text-muted-foreground uppercase tracking-wider mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
              Často kladené otázky
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-muted-foreground/10 rounded-2xl px-6 py-2 bg-background/50"
              >
                <AccordionTrigger className="text-left font-sf font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sf leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;