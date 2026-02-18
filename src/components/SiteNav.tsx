import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { config } from "@/lib/config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-ot-surface border-b border-ot-border">
      <div className="ot-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-ot-accent flex items-center justify-center">
            <span className="text-white font-mono font-bold text-xs">OT</span>
          </div>
          <span className="font-bold text-ot-text text-base tracking-tight">
            {config.siteName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-ot-accent"
                  : "text-ot-muted hover:text-ot-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={config.threadmarkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-ot-accent hover:bg-ot-accent-hover px-4 py-2 rounded-btn transition-colors"
          >
            Explore Threadmark
            <span className="text-xs opacity-70">↗</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ot-muted hover:text-ot-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ot-border bg-ot-surface animate-fade-in">
          <nav className="ot-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-1 transition-colors ${
                  location.pathname === link.href
                    ? "text-ot-accent"
                    : "text-ot-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={config.threadmarkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-ot-accent hover:bg-ot-accent-hover px-4 py-2.5 rounded-btn transition-colors mt-2 self-start"
            >
              Explore Threadmark ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
