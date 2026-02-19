import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-ot-bg">
      <div className="max-w-md px-6 text-center">
        <span className="mb-4 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
          404
        </span>
        <h1 className="mb-4 text-4xl font-bold text-ot-text">Page not found</h1>
        <p className="mb-8 text-ot-muted">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-btn bg-ot-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
