// components/layout/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI Projects", href: "#ai-projects" },
  { label: "Skills", href: "#skills" },
  { label: "Technical Writing", href: "#technical-writing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Tayyaba Rafiq
        </Link>

        {/* Right: Nav links (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Far right: Resume button (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="/Tayyaba-Rafiq-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "hidden md:inline-flex")}
          >
            Resume
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Tayyaba-Rafiq-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(buttonVariants(), "mt-2 w-full")}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}