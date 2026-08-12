"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navLinks, siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const labels = {
  en: {
    research: "Research",
    team: "Team",
    publications: "Publications",
    contact: "Contact",
    open: "Open menu",
    close: "Close menu",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  pt: {
    research: "Investigação",
    team: "Equipa",
    publications: "Publicações",
    contact: "Contacto",
    open: "Abrir menu",
    close: "Fechar menu",
    toLight: "Mudar para modo claro",
    toDark: "Mudar para modo escuro",
  },
} as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const l = labels[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const switchLocale = locale === "en" ? "pt" : "en";
  const switchedPath = pathname.replace(`/${locale}`, `/${switchLocale}`);

  const linkLabel = (href: string) => {
    if (href.includes("research")) return l.research;
    if (href.includes("team")) return l.team;
    if (href.includes("publications")) return l.publications;
    return l.contact;
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
        <div
          className={cn(
            "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled
              ? "bg-surface/85 shadow-[0_12px_40px_rgba(20,32,51,0.08)] ring-1 ring-line backdrop-blur-xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
              : "bg-surface/55 ring-1 ring-line/80 backdrop-blur-md"
          )}
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 rounded-full px-3 py-1.5 transition-opacity hover:opacity-80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal font-display text-[11px] tracking-wide text-white dark:text-paper">
              NS
            </span>
            <span className="hidden font-display text-lg leading-none text-ink sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const href = `/${locale}${link.href}`;
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                    active
                      ? "bg-mist text-ink"
                      : "text-ink/45 hover:text-ink"
                  )}
                >
                  {linkLabel(link.href)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle labels={{ toLight: l.toLight, toDark: l.toDark }} />
            <Link
              href={switchedPath}
              className="rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 transition-colors hover:text-teal"
            >
              {switchLocale}
            </Link>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={`/${locale}/contact`}>{l.contact}</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? l.close : l.open}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-line md:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-4 bg-ink transition-transform duration-500",
                  open ? "translate-y-0 rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-ink transition-transform duration-500",
                  open ? "translate-y-0 -rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-paper/95 backdrop-blur-2xl transition-all duration-700 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className={cn(
                "font-display text-5xl text-ink transition-all duration-700",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {linkLabel(link.href)}
            </Link>
          ))}
          <div className="mt-8">
            <ThemeToggle labels={{ toLight: l.toLight, toDark: l.toDark }} />
          </div>
        </nav>
      </div>
    </>
  );
}
