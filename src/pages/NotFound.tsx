import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-ot-bg">
      <div className="text-center max-w-md px-6">
        <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-4 block">404</span>
        <h1 className="text-4xl font-bold text-ot-text mb-4">Page not found</h1>
        <p className="text-ot-muted mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-ot-accent hover:bg-ot-accent-hover text-white font-semibold px-5 py-2.5 rounded-btn transition-colors text-sm"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
