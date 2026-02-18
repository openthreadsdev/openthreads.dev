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
    <header className="sticky top-0 z-50 border-b border-ot-border bg-ot-surface">
      <div className="ot-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <svg
            className="h-7 w-7"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <ellipse
                cx="50"
                cy="28"
                rx="18"
                ry="5"
                fill="hsl(174, 80%, 26%)"
              />
              <path
                d="M 32 28 L 32 33 Q 32 36 50 36 Q 68 36 68 33 L 68 28"
                fill="hsl(174, 70%, 22%)"
              />
              <rect
                x="40"
                y="31"
                width="20"
                height="38"
                fill="hsl(174, 70%, 22%)"
              />
              <line
                x1="38"
                y1="38"
                x2="62"
                y2="38"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="42"
                x2="62"
                y2="42"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="46"
                x2="62"
                y2="46"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="50"
                x2="62"
                y2="50"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="54"
                x2="62"
                y2="54"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="58"
                x2="62"
                y2="58"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <line
                x1="38"
                y1="62"
                x2="62"
                y2="62"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <path
                d="M 32 69 L 32 74 Q 32 77 50 77 Q 68 77 68 74 L 68 69"
                fill="hsl(174, 70%, 22%)"
              />
              <ellipse
                cx="50"
                cy="69"
                rx="18"
                ry="5"
                fill="hsl(174, 80%, 26%)"
              />
              <g transform="rotate(-35 50 50)">
                <ellipse
                  cx="72"
                  cy="38"
                  rx="2.5"
                  ry="2"
                  fill="hsl(220, 9%, 46%)"
                  opacity="0.9"
                />
                <rect
                  x="70.8"
                  y="40"
                  width="2.4"
                  height="32"
                  fill="hsl(220, 9%, 46%)"
                />
                <path d="M 72 72 L 70 76 L 74 76 Z" fill="hsl(220, 9%, 46%)" />
              </g>
              <path
                d="M 63 48 Q 68 53 70 61"
                stroke="hsl(174, 80%, 26%)"
                strokeWidth="1.8"
                fill="none"
                opacity="0.8"
              />
            </g>
          </svg>
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
        <button
          className="text-ot-muted transition-colors hover:text-ot-text md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
