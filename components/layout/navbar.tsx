"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/content/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scroll-spy: highlight the link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ground">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
          hapiss<span className="text-accent">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {link.label}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        hidden={!open}
        className="border-t border-hairline bg-ground md:hidden"
      >
        <Container className="flex flex-col py-2">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "py-2.5 text-sm transition-colors",
                  isActive ? "text-accent" : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </Container>
      </nav>
    </header>
  );
}
