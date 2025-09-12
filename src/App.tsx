import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrapper component to extract language from URL and pass to provider
const LanguageRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLanguage = lang && ['en', 'de'].includes(lang) ? lang as 'en' | 'de' : 'cs';
  
  return (
    <LanguageProvider initialLanguage={validLanguage}>
      <Index />
    </LanguageProvider>
  );
};

// Component that uses Google Analytics inside Router context
const RoutesWithAnalytics = () => {
  const { trackEvent } = useGoogleAnalytics('G-XXXXXXXXXX'); // Replace with actual GA4 Measurement ID
  
  return (
    <Routes>
      <Route path="/" element={
        <LanguageProvider initialLanguage="cs">
          <Index />
        </LanguageProvider>
      } />
      <Route path="/services" element={
        <LanguageProvider initialLanguage="cs">
          <Services />
        </LanguageProvider>
      } />
      <Route path="/blog" element={
        <LanguageProvider initialLanguage="cs">
          <Blog />
        </LanguageProvider>
      } />
      <Route path="/:lang" element={<LanguageRoute />} />
      <Route path="/:lang/services" element={<LanguageRoute />} />
      <Route path="/:lang/blog" element={<LanguageRoute />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RoutesWithAnalytics />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
