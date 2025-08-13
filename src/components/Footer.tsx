import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Domu", href: "#domu" },
    { name: "Služby", href: "#sluzby" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "O nás", href: "#o-nas" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tensioncreative/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.058 5.487.107 4.65.277 3.927.525 3.178.78 2.538 1.136 1.898 1.776.258 3.415-.002 7.794-.002 12.017s.26 8.602 1.9 10.241c1.639 1.64 5.777 1.9 10 1.9s8.361-.26 10-1.9c1.64-1.639 1.9-5.777 1.9-10s-.26-8.361-1.9-10C19.259.26 15.394-.002 12.017-.002zM12 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/39da56aa-bd85-4407-af5b-e2e3f662ee12.png" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground font-sf text-sm leading-relaxed max-w-md">
              Vytváříme digitální zážitky, které inspirují a spojují značky s jejich publikem. 
              Naše mise je pomáhat firmám růst prostřednictvím kreativity a inovací.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground font-sf">Navigace</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground font-sf transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground font-sf">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground font-sf">
              <p>info@tensioncreative.cz</p>
              <p>+420 731 403 437</p>
              <p>Zahradní 569, Vlašim</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground font-sf">
            © {currentYear} Vaše značka. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;