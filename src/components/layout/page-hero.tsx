import { NsMark } from "@/components/brand/ns-mark";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

function HeroLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#071018]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_70%_20%,rgba(15,127,120,0.32)_0%,transparent_55%),radial-gradient(60%_50%_at_15%_80%,rgba(61,184,174,0.16)_0%,transparent_50%),linear-gradient(160deg,#071018_0%,#0b1c28_48%,#0a1520_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3] [background-image:radial-gradient(rgba(232,238,245,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] top-[10%] hidden w-[min(42vw,420px)] select-none opacity-[0.18] lg:block"
      >
        <NsMark width={420} height={420} onDarkSurface className="h-auto w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#071018] to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-20 md:pb-20 md:pt-24">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-teal-soft">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.035em] text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {lead}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Button asChild size="lg">
                <HeroLink href={primaryCta.href}>
                  {primaryCta.label}
                  <ButtonIcon>
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </ButtonIcon>
                </HeroLink>
              </Button>
            )}
            {secondaryCta && (
              <HeroLink
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/70 hover:bg-white/5"
              >
                {secondaryCta.label}
              </HeroLink>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
