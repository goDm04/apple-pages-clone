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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
            Často kladené otázky
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-muted-foreground/20 pb-2"
            >
              <AccordionTrigger className="text-left font-sf font-medium text-foreground hover:no-underline py-4 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sf leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;