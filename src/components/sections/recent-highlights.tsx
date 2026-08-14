import { awards, publications } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Highlight = {
  kind: "award" | "publication";
  year: number;
  title: string;
  href: string;
};

export function RecentHighlights({
  locale,
  title,
  viewAll,
  awardLabel,
  publicationLabel,
}: {
  locale: Locale;
  title: string;
  viewAll: string;
  awardLabel: string;
  publicationLabel: string;
}) {
  const highlights: Highlight[] = [
    ...awards.slice(0, 2).map((a) => ({
      kind: "award" as const,
      year: a.year,
      title: a.title[locale],
      href: `/${locale}/research`,
    })),
    ...publications.slice(0, 2).map((p) => ({
      kind: "publication" as const,
      year: p.year,
      title: p.title,
      href: `/${locale}/publications`,
    })),
  ]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section className="border-y border-line bg-mist/40 py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            {title}
          </h2>
          <Link
            href={`/${locale}/research`}
            className="hidden rounded-full border border-line px-4 py-2 text-sm text-ink/70 transition-colors hover:border-teal/40 hover:text-teal sm:inline-flex"
          >
            {viewAll}
          </Link>
        </div>

        <div className="space-y-3">
          {highlights.map((item) => (
            <Link
              key={`${item.kind}-${item.year}-${item.title.slice(0, 24)}`}
              href={item.href}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface px-4 py-4 shadow-[0_4px_20px_rgba(20,32,51,0.03)] transition-all hover:border-teal/30 hover:shadow-[0_8px_28px_rgba(15,127,120,0.08)] md:gap-6 md:px-6"
            >
              <span className="shrink-0 rounded-full bg-teal px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white dark:text-paper">
                {item.kind === "award" ? awardLabel : publicationLabel}
              </span>
              <span className="hidden shrink-0 font-mono text-xs text-ink/40 sm:block">
                {item.year}
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-ink md:text-base">
                {item.title}
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-0.5 group-hover:text-teal"
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
