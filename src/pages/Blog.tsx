import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      title: "5 trendů ve webdesignu pro rok 2024",
      excerpt: "Objevte nejnovější trendy, které formují budoucnost webového designu a jak je můžete využít pro svou značku.",
      image: "/lovable-uploads/553ea5b6-e9b6-4935-882b-dc1ffa581745.png",
      date: "2024-03-15",
      category: "Web Design",
      readTime: "5 min",
      slug: "trendy-webdesign-2024"
    },
    {
      title: "Jak vytvořit úspěšnou strategii pro sociální sítě",
      excerpt: "Praktický průvodce vytvořením efektivní strategie pro sociální média, která přinese výsledky.",
      image: "/lovable-uploads/2c860fb4-848b-4be3-94ff-79b23489e614.png",
      date: "2024-03-10",
      category: "Social Media",
      readTime: "7 min",
      slug: "strategie-socialni-site"
    },
    {
      title: "Psychologie barev v brandingu",
      excerpt: "Jak správně využít barvy k vytvoření silné značky, která rezonuje s vaší cílovou skupinou.",
      image: "/lovable-uploads/4ca33cb1-6093-49e7-b25d-969eb340f0e4.png",
      date: "2024-03-05",
      category: "Branding",
      readTime: "6 min",
      slug: "psychologie-barev-branding"
    },
    {
      title: "SEO optimalizace: Kompletní průvodce pro začátečníky",
      excerpt: "Všechno, co potřebujete vědět o SEO optimalizaci pro lepší pozice ve vyhledávačích.",
      image: "/lovable-uploads/96faa918-38d6-488e-8fc7-1f52b00ecee2.png",
      date: "2024-02-28",
      category: "SEO",
      readTime: "10 min",
      slug: "seo-pruvodce-zacatecnici"
    },
    {
      title: "Mobilní design: Proč je mobile-first přístup klíčový",
      excerpt: "Proč byste měli začít návrhem pro mobilní zařízení a jak to ovlivní úspěch vašeho webu.",
      image: "/lovable-uploads/9ed4c587-2f34-42ea-976e-ea985bd0d0af.png",
      date: "2024-02-20",
      category: "UX/UI",
      readTime: "4 min",
      slug: "mobile-first-design"
    },
    {
      title: "Content marketing: Jak vytvářet obsah, který zaujme",
      excerpt: "Strategie a tipy pro vytváření obsahu, který osloví vaše publikum a zvýší angažovanost.",
      image: "/lovable-uploads/af1d4253-bee1-47a9-a054-df83301092b1.png",
      date: "2024-02-15",
      category: "Content Marketing",
      readTime: "8 min",
      slug: "content-marketing-strategie"
    }
  ];

  const breadcrumbItems = [
    { label: 'Blog', isActive: true }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Tipy a trendy v digitálním marketingu | Tension Creative</title>
        <meta name="description" content="Aktuální články o webdesignu, brandingu, SEO optimalizaci a digitálním marketingu. Praktické tipy a trendy pro růst vašeho byznysu." />
        <meta name="keywords" content="blog, webdesign, branding, SEO, digitální marketing, sociální sítě, content marketing, trendy" />
        <link rel="canonical" href={`https://tension-creative.lovable.app/${language === 'cs' ? '' : language + '/'}blog`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Tipy a trendy v digitálním marketingu | Tension Creative" />
        <meta property="og:description" content="Aktuální články o webdesignu, brandingu, SEO optimalizaci a digitálním marketingu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tension-creative.lovable.app/${language === 'cs' ? '' : language + '/'}blog`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Tension Creative Blog",
            "description": "Aktuální články o webdesignu, brandingu a digitálním marketingu",
            "url": `https://tension-creative.lovable.app/${language === 'cs' ? '' : language + '/'}blog`,
            "publisher": {
              "@type": "Organization",
              "name": "Tension Creative"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} className="mb-8" />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sf">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Objevte nejnovější trendy, tipy a strategie v oblasti digitálního marketingu, 
                webdesignu a brandingu. Praktické poznatky pro růst vašeho byznysu.
              </p>
            </div>
          </section>

          {/* Blog Posts Section */}
          <section 
            ref={elementRef}
            className={`py-20 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('cs-CZ')}
                        </time>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 line-clamp-2">
                        <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </a>
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <a 
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Číst více →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sf">
                Nechte si posílat naše tipy
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Přihlaste se k odběru našeho newsletteru a získejte nejnovější tipy 
                a trendy v digitálním marketingu přímo do vaší schránky.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="váš@email.cz"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Přihlásit
                </button>
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;