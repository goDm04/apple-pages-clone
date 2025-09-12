import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = (measurementId?: string) => {
  const location = useLocation();

  useEffect(() => {
    if (!measurementId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function gtag() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [measurementId]);

  // Track page views on route changes
  useEffect(() => {
    if (measurementId && window.gtag) {
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  return { trackEvent };
};