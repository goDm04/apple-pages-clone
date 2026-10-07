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
      className={`w-full border-b border-border py-24 transition-all duration-700 md:py-32 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="section-kicker">05 / FAQ</span>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-7xl">
            {t("faqTitle")}
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t border-border">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-border py-2"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-foreground hover:no-underline md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sf leading-relaxed pb-4">
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
