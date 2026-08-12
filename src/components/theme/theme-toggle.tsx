"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className,
  labels = { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
}: {
  className?: string;
  labels?: { toLight: string; toDark: string };
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? labels.toLight : labels.toDark}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full text-ink/55 transition-colors hover:bg-ink/5 hover:text-ink",
        className
      )}
    >
      {/* Icons follow html.dark from the FOUC script — no hydration flicker */}
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.75} />
      <Moon className="h-4 w-4 dark:hidden" strokeWidth={1.75} />
    </button>
  );
}
