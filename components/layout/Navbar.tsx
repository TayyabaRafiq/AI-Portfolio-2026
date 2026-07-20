// components/layout/Navbar.tsx

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "AI Projects", href: "#ai-projects" },
  { label: "Technical Writing", href: "#technical-writing" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
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
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Far right: Resume button (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Download Resume</Button>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}