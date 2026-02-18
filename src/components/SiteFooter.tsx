import { Link } from "react-router-dom";
import { config } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-ot-border bg-ot-surface mt-auto">
      <div className="ot-container py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-ot-accent flex items-center justify-center">
                <span className="text-white font-mono font-bold text-xs">OT</span>
              </div>
              <span className="font-bold text-ot-text text-sm">{config.siteName}</span>
            </div>
            <p className="text-xs text-ot-muted max-w-xs leading-relaxed">
              Compliance-first product data infrastructure studio.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            <Link to="/" className="text-sm text-ot-muted hover:text-ot-text transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-ot-muted hover:text-ot-text transition-colors">About</Link>
            <Link to="/blog" className="text-sm text-ot-muted hover:text-ot-text transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm text-ot-muted hover:text-ot-text transition-colors">Contact</Link>
            <Link to="/privacy" className="text-sm text-ot-muted hover:text-ot-text transition-colors">Privacy</Link>
            <a
              href={config.threadmarkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ot-accent hover:text-ot-accent-hover transition-colors font-medium"
            >
              Threadmark ↗
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-ot-border flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs text-ot-muted">
            © {new Date().getFullYear()} OpenThreads. All rights reserved.
          </p>
          <p className="text-xs text-ot-muted italic">
            Not legal advice. OpenThreads provides data infrastructure tools, not legal services.
          </p>
        </div>
      </div>
    </footer>
  );
}
