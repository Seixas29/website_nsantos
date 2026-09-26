import { Button, ButtonIcon } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function OutreachSpotlight({
  locale,
  eyebrow,
  title,
  quote,
  body,
  ctaIg,
  imageAlt,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  quote: string;
  body: string;
  ctaIg: string;
  imageAlt: string;
}) {
  const ig = siteConfig.social.instagram;

  return (
    <section
      id="outreach"
      className="scroll-mt-24 border-t border-line bg-mist/30 py-20 md:py-28"
      aria-labelledby="outreach-title"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_8px_40px_rgba(20,32,51,0.06)] md:grid-cols-2">
          <figure className="relative m-0 min-h-[18rem] bg-[#0b1118] md:min-h-[22rem]">
            <Image
              src="/images/outreach/nei-duo-cage.jpg"
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />
          </figure>

          <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
              {eyebrow}
            </p>
            <h2
              id="outreach-title"
              className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-5 font-display text-lg font-medium italic leading-snug text-ink/70 md:text-xl">
              {quote}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/55 md:text-base">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={ig.url} target="_blank" rel="noopener noreferrer">
                  {ctaIg}
                  <ButtonIcon>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </ButtonIcon>
                </a>
              </Button>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                {locale === "pt" ? "Oeiras · 25 set 2026" : "Oeiras · 25 Sep 2026"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
