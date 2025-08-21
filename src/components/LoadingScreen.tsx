import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-16 w-auto animate-pulse"
        />
        
        {/* Loading spinner */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-muted"></div>
          <div className="absolute top-0 h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-muted-foreground text-sm font-medium animate-pulse">
          Načítání...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;