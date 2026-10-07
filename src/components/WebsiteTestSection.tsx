import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const copy = {
  cs: { title: "Otestujte svůj web", desc: "Zadejte adresu a během chvíle uvidíte, jak si váš web stojí v rychlosti, SEO a přístupnosti. Měří to Google PageSpeed na mobilu.", btn: "Otestovat", loading: "Měřím… (cca 20–40 s)", perf: "Rychlost", seo: "SEO", a11y: "Přístupnost", bp: "Osvědčené postupy", cta: "Chci lepší výsledek", err: "Web se nepodařilo změřit. Zkontrolujte adresu nebo to zkuste znovu.", ph: "např. vasefirma.cz" },
  en: { title: "Test your website", desc: "Enter a URL and see how your site scores on speed, SEO and accessibility. Measured by Google PageSpeed on mobile.", btn: "Run test", loading: "Measuring… (about 20–40 s)", perf: "Performance", seo: "SEO", a11y: "Accessibility", bp: "Best practices", cta: "I want a better score", err: "Could not measure the site. Check the URL or try again.", ph: "e.g. yourcompany.com" },
  de: { title: "Testen Sie Ihre Website", desc: "Geben Sie eine Adresse ein und sehen Sie, wie Ihre Website bei Geschwindigkeit, SEO und Barrierefreiheit abschneidet. Gemessen mit Google PageSpeed (mobil).", btn: "Testen", loading: "Messung läuft… (ca. 20–40 s)", perf: "Leistung", seo: "SEO", a11y: "Barrierefreiheit", bp: "Best Practices", cta: "Ich will ein besseres Ergebnis", err: "Die Website konnte nicht gemessen werden. Prüfen Sie die Adresse.", ph: "z. B. ihrefirma.de" },
};

type Scores = { performance: number; seo: number; accessibility: number; "best-practices": number };

const tone = (v: number) => (v >= 90 ? "text-score-good" : v >= 50 ? "text-score-mid" : "text-score-bad");

export default function WebsiteTestSection() {
  const { language } = useLanguage();
  const c = copy[language];
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scores, setScores] = useState<Scores | null>(null);

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = url.trim();
    if (!target) return;
    const full = /^https?:\/\//.test(target) ? target : `https://${target}`;
    setLoading(true); setError(false); setScores(null);
    try {
      const qs = ["performance", "seo", "accessibility", "best-practices"].map((k) => `category=${k}`).join("&");
      const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(full)}&strategy=mobile&${qs}`);
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      const cat = json.lighthouseResult.categories;
      setScores({
        performance: Math.round(cat.performance.score * 100),
        seo: Math.round(cat.seo.score * 100),
        accessibility: Math.round(cat.accessibility.score * 100),
        "best-practices": Math.round(cat["best-practices"].score * 100),
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const items: [keyof Scores, string][] = [["performance", c.perf], ["seo", c.seo], ["accessibility", c.a11y], ["best-practices", c.bp]];

  return (
    <section id="test-webu" className="w-full bg-gradient-ink py-24 text-background md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-sf text-4xl font-bold leading-tight text-background md:text-6xl">{c.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-background/60 md:text-lg">{c.desc}</p>
        </div>
        <form onSubmit={run} className="glass-dark mt-10 flex max-w-3xl flex-col gap-3 rounded-full p-2 sm:flex-row">
          <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder={c.ph} aria-label="URL" className="h-12 flex-1 rounded-full border-0 bg-transparent px-5 font-sf text-background placeholder:text-background/40 focus-visible:ring-0 focus-visible:ring-offset-0" />
          <Button type="submit" disabled={loading} size="lg" className="h-12 rounded-full bg-background px-8 font-sf font-semibold text-foreground hover:bg-background/90">
            {loading ? c.loading : c.btn}
          </Button>
        </form>
        {error && <p className="mt-6 text-background/70">{c.err}</p>}
        {scores && (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {items.map(([k, label]) => (
              <div key={k} className="glass-dark rounded-3xl p-6 text-center">
                <div className={`font-sf text-5xl font-bold ${tone(scores[k])}`}>{scores[k]}</div>
                <div className="mt-2 text-sm text-background/60">{label}</div>
              </div>
            ))}
          </div>
        )}
        {scores && (
          <a href="#kontakt" className="mt-8 inline-flex rounded-full bg-background px-8 py-3 font-sf font-semibold text-foreground transition active:scale-[0.97]">{c.cta}</a>
        )}
      </div>
    </section>
  );
}
