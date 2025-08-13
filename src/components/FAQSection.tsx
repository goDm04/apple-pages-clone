import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const FAQSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const faqs = [
    {
      question: "Jak dlouho trvá realizace webu?",
      answer: "Do týdne od zahájení zhotovíme vizuální návrh, který společně doladíme. Následující týden web doděláme a spustíme - už za dva týdny může být online."
    },
    {
      question: "Jaké služby poskytujete?",
      answer: "Tvoříme kompletní vizuální identity, webové stránky, spravujeme firemní profily na sociálních sítích a připravujeme grafiku pro tisk, od plakátů až po produktové potisky. Pomáháme značkám působit jednotně a profesionálně napříč všemi kanály."
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
      question: "Co když se mi web nebude líbit?",
      answer: "Návrh webu je pro vás zcela nezávazný. Pokud s ním nebudete spokojeni, upravíme ho podle vašich představ, nebo spolupráci v této fázi jednoduše ukončíme – bez jakýchkoliv závazků či podmínek."
    }
  ];

  return (
    <section 
      className={`py-16 px-8 max-w-7xl mx-auto transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
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
