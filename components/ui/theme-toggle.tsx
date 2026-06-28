"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Theme toggle. Icons are driven by the `.dark` class via CSS, so the correct
 * one shows before hydration (next-themes sets the class before paint) — no
 * flash, no mounted guard needed. `resolvedTheme` is only read inside onClick,
 * which runs after mount.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-9 items-center justify-center rounded-md border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <Sun className="hidden size-4 dark:block" aria-hidden />
      <Moon className="block size-4 dark:hidden" aria-hidden />
    </button>
  );
}
