"use client";

import { GimmLogo } from "@/components/brand/gimm-logo";
import { NsMark } from "@/components/brand/ns-mark";
import { Button, ButtonIcon } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero({
  locale,
  eyebrow,
  headline,
  subhead,
  ctaResearch,
  ctaTeam,
}: {
  locale: Locale;
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaResearch: string;
  ctaTeam: string;
}) {
  return (
    <section className="relative isolate min-h-[min(92dvh,820px)] overflow-hidden bg-[#071018]">
      {/* Atmospheric scientific field — brand colors, no stock photos */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_70%_20%,rgba(15,127,120,0.35)_0%,transparent_55%),radial-gradient(60%_50%_at_15%_80%,rgba(61,184,174,0.18)_0%,transparent_50%),linear-gradient(160deg,#071018_0%,#0b1c28_48%,#0a1520_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(232,238,245,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[8%] hidden w-[min(58vw,560px)] select-none opacity-[0.22] lg:block"
      >
        <NsMark width={560} height={560} priority onDarkSurface className="h-auto w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#071018] to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(92dvh,820px)] w-full max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div
          className="mb-8 flex animate-hero-rise items-center gap-4"
          style={{ animationDelay: "0.04s" }}
        >
          <a
            href="https://gimm.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex opacity-90 transition-opacity hover:opacity-100"
          >
            <GimmLogo
              variant="lockup"
              width={180}
              height={48}
              priority
              onDarkSurface
              className="h-8 md:h-9"
            />
          </a>
          <span className="hidden h-6 w-px bg-white/20 sm:block" />
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 sm:block">
            {eyebrow}
          </p>
        </div>

        <h1
          className="max-w-4xl animate-hero-rise font-display text-[clamp(2.4rem,6.5vw,4.75rem)] leading-[1.02] tracking-[-0.035em] text-white"
          style={{ animationDelay: "0.12s" }}
        >
          {headline}
        </h1>

        <p
          className="mt-6 max-w-2xl animate-hero-rise text-base leading-relaxed text-white/70 md:text-lg"
          style={{ animationDelay: "0.28s" }}
        >
          {subhead}
        </p>

        <div
          className="mt-10 flex animate-hero-rise flex-wrap items-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <Button asChild size="lg">
            <Link href={`/${locale}/research`}>
              {ctaResearch}
              <ButtonIcon>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </ButtonIcon>
            </Link>
          </Button>
          <Link
            href={`/${locale}/team`}
            className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/70 hover:bg-white/5"
          >
            {ctaTeam}
          </Link>
        </div>
      </div>
    </section>
  );
}
