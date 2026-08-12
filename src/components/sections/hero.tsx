"use client";

import { GimmLogo } from "@/components/brand/gimm-logo";
import { Button, ButtonIcon } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
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
    <section className="relative isolate min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--paper)_0%,var(--mist)_48%,var(--paper)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_70%_0%,var(--glow),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[40vh] w-[50vw] bg-[radial-gradient(circle,rgba(15,127,120,0.08),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(61,184,174,0.1),transparent_70%)]" />

      {/* Quiet brand watermark — fills the right without competing with the title */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[18%] hidden w-[min(52vw,520px)] select-none opacity-[0.07] dark:opacity-[0.1] lg:block"
      >
        <GimmLogo
          variant="logomark"
          width={520}
          height={520}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-36 md:pb-24 md:pt-32">
        <div
          className="mb-10 flex animate-hero-rise items-center gap-5"
          style={{ animationDelay: "0.04s" }}
        >
          <a
            href="https://gimm.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
          >
            <GimmLogo
              variant="horizontal"
              width={168}
              height={44}
              priority
              className="h-9 md:h-10"
            />
          </a>
          <span className="hidden h-8 w-px bg-line sm:block" />
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 sm:block">
            {eyebrow}
          </p>
        </div>

        <h1
          className="max-w-4xl animate-hero-rise font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] tracking-[-0.04em] text-ink"
          style={{ animationDelay: "0.12s" }}
        >
          {headline}
        </h1>

        <div
          className="mt-7 h-px w-28 origin-left animate-hero-line bg-linear-to-r from-teal via-teal/55 to-transparent"
          style={{ animationDelay: "0.28s" }}
        />

        <p
          className="mt-7 max-w-xl animate-hero-rise text-lg leading-relaxed text-ink/60 md:text-xl"
          style={{ animationDelay: "0.34s" }}
        >
          {subhead}
        </p>

        <div
          className="mt-10 flex animate-hero-rise flex-wrap items-center gap-3"
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
          className="mt-16 flex animate-hero-rise flex-wrap items-end justify-between gap-8 border-t border-line pt-8"
          style={{ animationDelay: "0.56s" }}
        >
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div>
              <NumberTicker
                value={100}
                suffix="+"
                delay={200}
                className="font-display text-3xl text-ink md:text-4xl"
              />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                {locale === "pt" ? "Publicações" : "Publications"}
              </p>
            </div>
            <div>
              <NumberTicker
                value={6}
                delay={320}
                className="font-display text-3xl text-ink md:text-4xl"
              />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                {locale === "pt" ? "Projetos ativos" : "Active projects"}
              </p>
            </div>
            <div>
              <NumberTicker
                value={5}
                delay={440}
                className="font-display text-3xl text-ink md:text-4xl"
              />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                {locale === "pt" ? "Prémios" : "Awards"}
              </p>
            </div>
          </div>

          <a
            href="#research"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40 transition-colors hover:text-teal"
          >
            {locale === "pt" ? "Explorar" : "Explore"}
            <ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
