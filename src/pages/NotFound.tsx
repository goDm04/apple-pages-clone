import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Stránka nenalezena</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Omlouváme se, ale stránka kterou hledáte neexistuje nebo byla přesunuta.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
