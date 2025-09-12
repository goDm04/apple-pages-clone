import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <LanguageProvider initialLanguage="cs">
              <Index />
            </LanguageProvider>
          } />
          <Route path="/:lang" element={<LanguageRoute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
