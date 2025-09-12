import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { t } = useLanguage();

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
    >
      <a 
        href="/" 
        className="hover:text-foreground transition-colors flex items-center"
        aria-label={t('home')}
      >
        <Home className="h-4 w-4" />
      </a>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4" />
          {item.href && !item.isActive ? (
            <a 
              href={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span 
              className={item.isActive ? 'text-foreground font-medium' : ''}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;