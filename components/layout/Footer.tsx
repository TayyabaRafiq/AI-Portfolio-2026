// components/layout/Footer.tsx

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// lucide-react v1 removed brand icons (including GitHub) entirely.
// Using small inline SVGs instead of adding a new icon-pack dependency.
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const EMAIL = "tayyabaaliowais@gmail.com";
const GITHUB_URL = "https://github.com/TayyabaRafiq";
const LINKEDIN_URL = "https://www.linkedin.com/in/tayyaba-rafiq-0652702bb/";

// Same Gmail compose approach used in Contact.tsx — avoids the blank-tab
// issue mailto: links can cause in browsers like Edge.
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}`;

const footerNavLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI Projects", href: "#ai-projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Technical Writing", href: "#technical-writing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Identity */}
          <div className="flex flex-col gap-3 md:max-w-xs">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Tayyaba Rafiq
            </span>
            <span className="text-sm font-medium text-primary">
              AI Developer | AI Engineer
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building AI agents, RAG systems, and intelligent web
              applications.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Social */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">
              Connect
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Tayyaba Rafiq via Gmail"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tayyaba Rafiq on GitHub (opens in a new tab)"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tayyaba Rafiq on LinkedIn (opens in a new tab)"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Tayyaba Rafiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}