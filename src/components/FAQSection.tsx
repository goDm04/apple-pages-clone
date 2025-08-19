import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t("faq1Q"),
      answer: t("faq1A")
    },
    {
      question: t("faq2Q"),
      answer: t("faq2A")
    },
    {
      question: t("faq3Q"),
      answer: t("faq3A")
    },
    {
      question: t("faq4Q"),
      answer: t("faq4A")
    },
    {
      question: t("faq5Q"),
      answer: t("faq5A")
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
            {t("faqTitle")}
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
