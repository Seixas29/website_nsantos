"use client";

import { GimmLogo } from "@/components/brand/gimm-logo";
import { NsMark } from "@/components/brand/ns-mark";
import { Button, ButtonIcon } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero({
  locale,
  eyebrow,
  headline,
  subhead,
  ctaResearch,
  ctaContact,
}: {
  locale: Locale;
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaResearch: string;
  ctaContact: string;
}) {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-x-clip">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--paper)_0%,var(--mist)_48%,var(--paper)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_70%_0%,var(--glow),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[40vh] w-[50vw] bg-[radial-gradient(circle,rgba(15,127,120,0.1),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(61,184,174,0.12),transparent_70%)]" />

      {/* Lab mark — real visual presence on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[2%] top-[14%] hidden w-[min(52vw,520px)] select-none opacity-[0.28] dark:opacity-[0.34] lg:block"
      >
        <NsMark width={520} height={520} priority className="h-auto w-full" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-center overflow-visible px-6 pb-16 pt-28 md:pb-20 md:pt-28">
        <div
          className="mb-6 flex animate-hero-rise items-center gap-4 overflow-visible"
          style={{ animationDelay: "0.04s" }}
        >
          <a
            href="https://gimm.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 overflow-visible py-1 pr-1 opacity-90 transition-opacity hover:opacity-100"
          >
            <GimmLogo
              variant="lockup"
              width={200}
              height={50}
              priority
              className="h-9 overflow-visible md:h-10"
            />
          </a>
          <span className="hidden h-7 w-px shrink-0 bg-line sm:block" />
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 sm:block">
            {eyebrow}
          </p>
        </div>

        <p
          className="mb-4 animate-hero-rise font-display text-2xl tracking-[-0.02em] text-ink md:text-3xl"
          style={{ animationDelay: "0.08s" }}
        >
          {siteConfig.name}
        </p>

        <h1
          className="max-w-4xl animate-hero-rise font-display text-[clamp(2.5rem,7.2vw,5.25rem)] leading-[0.96] tracking-[-0.04em] text-ink"
          style={{ animationDelay: "0.14s" }}
        >
          {headline}
        </h1>

        <div
          className="mt-6 h-px w-28 origin-left animate-hero-line bg-linear-to-r from-teal via-teal/55 to-transparent"
          style={{ animationDelay: "0.28s" }}
        />

        <p
          className="mt-6 max-w-xl animate-hero-rise text-lg leading-relaxed text-ink/72 md:text-xl"
          style={{ animationDelay: "0.34s" }}
        >
          {subhead}
        </p>

        <div
          className="mt-8 flex animate-hero-rise flex-wrap items-center gap-3"
          style={{ animationDelay: "0.44s" }}
        >
          <Button asChild size="lg">
            <Link href={`/${locale}/research`}>
              {ctaResearch}
              <ButtonIcon>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </ButtonIcon>
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={`/${locale}/contact`}>{ctaContact}</Link>
          </Button>
        </div>

        <div
          className="mt-12 flex animate-hero-rise justify-start border-t border-line pt-6"
          style={{ animationDelay: "0.56s" }}
        >
          <a
            href="#research"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50 transition-colors hover:text-teal"
          >
            {locale === "pt" ? "Explorar" : "Explore"}
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
