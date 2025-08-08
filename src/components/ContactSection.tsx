import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Zadejte alespoň 2 znaky"),
  email: z.string().email("Zadejte platný e-mail"),
  message: z.string().min(10, "Zpráva by měla mít alespoň 10 znaků"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onSubmit",
  });

  const onSubmit = (values: ContactFormValues) => {
    toast({
      title: "Děkujeme za zprávu!",
      description: "Ozveme se vám co nejdříve.",
    });
    form.reset();
    // console.log("Kontakt form:", values); // For debugging if needed
  };

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt",
    description: "Kontaktujte nás prostřednictvím formuláře.",
    url:
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}#kontakt`
        : undefined,
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="py-24">
      <div className="container max-w-3xl">
        <header className="text-center mb-10">
          <p className="text-sm text-muted-foreground">Kontaktujte nás</p>
          <h2 id="kontakt-title" className="text-3xl md:text-4xl font-semibold tracking-tight">
            Jsme tu pro vás
          </h2>
          <p className="text-muted-foreground mt-2">
            Napište nám zprávu a my se vám ozveme.
          </p>
        </header>

        <article className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jméno</FormLabel>
                      <FormControl>
                        <Input placeholder="Vaše jméno" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="vas@email.cz" type="email" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zpráva</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Jak vám můžeme pomoci?" rows={6} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end">
                <Button type="submit" size="lg">
                  Odeslat zprávu
                </Button>
              </div>
            </form>
          </Form>
        </article>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </section>
  );
};

export default ContactSection;
