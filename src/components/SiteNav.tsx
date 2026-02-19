import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { config } from "@/lib/config";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-ot-border bg-ot-surface">
      <div className="ot-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <img
            src="/assets/spool/spool-icon.svg"
            alt={`${config.siteName} logo`}
            className="h-7 w-7"
          />
          <span className="text-base font-bold tracking-tight text-ot-text">
            {config.siteName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
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
          <ThemeToggle />
          <a
            href={config.threadmarkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-btn bg-ot-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
          >
            Explore Threadmark
            <span className="text-xs opacity-70">↗</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-ot-muted transition-colors hover:text-ot-text"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-fade-in border-t border-ot-border bg-ot-surface md:hidden">
          <nav className="ot-container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`py-1 text-sm font-medium transition-colors ${
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
              className="mt-2 inline-flex items-center gap-1.5 self-start rounded-btn bg-ot-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
            >
              Explore Threadmark ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
