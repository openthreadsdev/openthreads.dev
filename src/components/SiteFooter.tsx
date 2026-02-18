import { Link } from "react-router-dom";
import { config } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ot-border bg-ot-surface">
      <div className="ot-container py-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-ot-accent">
                <span className="font-mono text-xs font-bold text-white">
                  OT
                </span>
              </div>
              <span className="text-sm font-bold text-ot-text">
                {config.siteName}
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-ot-muted">
              Compliance-first product data infrastructure studio.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            <Link
              to="/"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-ot-muted transition-colors hover:text-ot-text"
            >
              Privacy
            </Link>
            <a
              href={config.threadmarkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ot-accent transition-colors hover:text-ot-accent-hover"
            >
              Threadmark ↗
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ot-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-ot-muted">
            © {new Date().getFullYear()} OpenThreads. All rights reserved.
          </p>
          <p className="text-xs italic text-ot-muted">
            Not legal advice. OpenThreads provides data infrastructure tools,
            not legal services.
          </p>
        </div>
      </div>
    </footer>
  );
}
