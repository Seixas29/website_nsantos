"use client";

import { Button } from "@/components/ui/button";
import { NsMark } from "@/components/brand/ns-mark";
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
    home: "Home",
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
    home: "Início",
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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
  const homeHref = `/${locale}`;
  const onHome = pathname === homeHref || pathname === `${homeHref}/`;

  const linkLabel = (href: string) => {
    if (href.includes("research")) return l.research;
    if (href.includes("team")) return l.team;
    if (href.includes("publications")) return l.publications;
    return l.contact;
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-colors duration-300",
          scrolled
            ? "border-line bg-surface/95 backdrop-blur-md"
            : "border-transparent bg-surface"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 md:h-[4.25rem]">
          <Link
            href={homeHref}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <NsMark width={36} height={36} priority className="h-9 w-9" />
            <span className="font-display text-lg font-semibold leading-none tracking-[-0.02em] text-ink md:text-xl">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href={homeHref}
              className={cn(
                "relative pb-1 text-sm transition-colors",
                onHome ? "font-medium text-teal" : "text-ink/50 hover:text-ink"
              )}
            >
              {l.home}
              {onHome && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-teal" />
              )}
            </Link>
            {navLinks.map((link) => {
              const href = `/${locale}${link.href}`;
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    "relative pb-1 text-sm transition-colors",
                    active
                      ? "font-medium text-teal"
                      : "text-ink/50 hover:text-ink"
                  )}
                >
                  {linkLabel(link.href)}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-teal" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle labels={{ toLight: l.toLight, toDark: l.toDark }} />
            <Link
              href={switchedPath}
              className="rounded-full px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45 transition-colors hover:text-teal"
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
          <Link
            href={homeHref}
            className={cn(
              "font-display text-5xl text-ink transition-all duration-700",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {l.home}
          </Link>
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
