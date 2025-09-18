import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mwpqydpd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _to: "info@tensioncreative.cz",
          _cc: "tomca@gmail.com",
          _subject: language === 'cs' ? "Nová zpráva z kontaktního formuláře - Tension Creative" : "New message from contact form - Tension Creative"
        }),
      });

      if (response.ok) {
        toast.success(language === 'cs' ? "Zpráva byla úspěšně odeslána!" : "Message sent successfully!", {
          description: language === 'cs' ? "Ozveme se vám co nejdříve." : "We'll get back to you as soon as possible."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Chyba při odesílání");
      }
    } catch (error) {
      toast.error(language === 'cs' ? "Nepodařilo se odeslat zprávu" : "Failed to send message", {
        description: language === 'cs' ? "Zkuste to prosím později nebo nás kontaktujte přímo." : "Please try again later or contact us directly."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="kontakt" 
      className={`py-20 px-4 md:px-8 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`} 
      style={{ backgroundColor: "#F5F5F8" }}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-none">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
                {t("contactTitle")}
              </h2>
            </div>

            <p className="text-base font-sf text-muted-foreground leading-relaxed">
              {t("contactDesc")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-sf text-foreground">{t("email")}</h3>
                  <p className="text-muted-foreground font-sf">info@tensioncreative.cz</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-sf text-foreground">{t("phone")}</h3>
                  <p className="text-muted-foreground font-sf">+420 731 403 437</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-sf text-foreground">{t("address")}</h3>
                  <p className="text-muted-foreground font-sf">Zahradní 569, Vlašim</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="md:bg-background md:rounded-2xl p-4 md:p-8 md:shadow-sm w-full">
            <form 
              action="https://formspree.io/f/mwpqydpd" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              {/* Hidden fields for email routing */}
              <input type="hidden" name="_to" value="info@tensioncreative.cz" />
              <input type="hidden" name="_cc" value="tomca@gmail.com" />
              <input type="hidden" name="_subject" value={language === 'cs' ? "Nová zpráva z kontaktního formuláře - Tension Creative" : "New message from contact form - Tension Creative"} />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-sf text-foreground">
                    {t("name")} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("namePlaceholder")}
                    required
                    className="font-sf"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-sf text-foreground">
                    {t("email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                    required
                    className="font-sf"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium font-sf text-foreground">
                  {t("subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("subjectPlaceholder")}
                  className="font-sf"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-sf text-foreground">
                  {t("message")} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  rows={6}
                  required
                  className="font-sf"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto font-sf font-semibold bg-black text-white hover:bg-black/90 rounded-full"
              >
                {t("sendMessage")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
