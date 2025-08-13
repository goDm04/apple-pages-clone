import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let the form submit naturally
    toast.success("Zpráva byla úspěšně odeslána!", {
      description: "Ozveme se vám co nejdříve."
    });
    // Reset form will happen after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="kontakt" className="py-20 px-8" style={{ backgroundColor: "#F5F5F8" }}>
      <div className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sf leading-tight">
                Pojďme spolu vytvořit něco skvělého
              </h2>
            </div>

            <p className="text-base font-sf text-muted-foreground leading-relaxed">
              Máte nápad nebo projekt? Napište nám a společně najdeme to nejlepší řešení pro vaši značku. 
              Těšíme se na spolupráci s vámi.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-sf text-foreground">E-mail</h3>
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
                  <h3 className="font-semibold font-sf text-foreground">Telefon</h3>
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
                  <h3 className="font-semibold font-sf text-foreground">Adresa</h3>
                  <p className="text-muted-foreground font-sf">Zahradní 569, Vlašim</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-sm">
            <form 
              action="https://formspree.io/f/xpwzgwrv" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden fields for email routing */}
              <input type="hidden" name="_to" value="info@tensioncreative.cz" />
              <input type="hidden" name="_cc" value="tomca@gmail.com" />
              <input type="hidden" name="_subject" value="Nová zpráva z kontaktního formuláře - Tension Creative" />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-sf text-foreground">
                    Jméno *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše jméno"
                    required
                    className="font-sf"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-sf text-foreground">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.cz"
                    required
                    className="font-sf"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium font-sf text-foreground">
                  Předmět
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="O čem se bavíme?"
                  className="font-sf"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-sf text-foreground">
                  Zpráva *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Popište nám váš projekt nebo dotaz..."
                  rows={6}
                  required
                  className="font-sf"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto font-sf font-semibold"
              >
                Odeslat zprávu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;