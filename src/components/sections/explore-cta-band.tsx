import type { Locale } from "@/i18n/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ExploreCtaBand({
  locale,
  title,
  lead,
  cta,
}: {
  locale: Locale;
  title: string;
  lead: string;
  cta: string;
}) {
  return (
    <section className="bg-teal">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center md:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl dark:text-paper">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg dark:text-paper/85">
          {lead}
        </p>
        <Link
          href={`/${locale}/research`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 dark:text-paper"
        >
          {cta}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
        </Link>
      </div>
    </section>
  );
}
