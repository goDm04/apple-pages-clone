import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { ...corsHeaders, "Content-Type": "application/json" },
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return reply({ error: "Method not allowed" }, 405);
  let target: URL;
  try {
    const body = await req.json();
    if (typeof body.url !== "string" || body.url.length > 2048) return reply({ error: "Invalid URL" }, 400);
    target = new URL(body.url);
    if (!["https:", "http:"].includes(target.protocol) || target.username || target.password || !target.hostname.includes(".")) {
      return reply({ error: "Invalid public URL" }, 400);
    }
  } catch { return reply({ error: "Invalid URL" }, 400); }
  const key = Deno.env.get("GOOGLE_PAGESPEED_API_KEY");
  if (!key) return reply({ error: "not_configured" }, 503);
  const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  endpoint.searchParams.set("url", target.toString());
  endpoint.searchParams.set("strategy", "mobile");
  endpoint.searchParams.set("key", key);
  const categories = ["performance", "seo", "accessibility", "best-practices"];
  categories.forEach(category => endpoint.searchParams.append("category", category));
  try {
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(120000) });
    if (!response.ok) {
      const details = await response.text();
      console.error(`PageSpeed failed [${response.status}]: ${details.replaceAll(key, "[redacted]")}`);
      return reply({ error: "Provider request failed", status: response.status, details: details.replaceAll(key, "[redacted]") }, response.status);
    }
    const result = await response.json();
    const scores: Record<string, number> = {};
    for (const category of categories) {
      const score = result.lighthouseResult?.categories?.[category]?.score;
      if (typeof score !== "number") return reply({ error: "Incomplete measurement" }, 502);
      scores[category] = Math.round(score * 100);
    }
    return reply({ scores });
  } catch { return reply({ error: "Measurement unavailable" }, 504); }
});