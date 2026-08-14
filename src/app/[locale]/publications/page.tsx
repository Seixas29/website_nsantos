import { PageHero } from "@/components/layout/page-hero";
import { ExploreCtaBand } from "@/components/sections/explore-cta-band";
import { publications } from "@/data/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return {
    title: locale === "pt" ? "Publicações" : "Publications",
    description:
      locale === "pt"
        ? "Publicações selecionadas do Laboratório Nuno Santos."
        : "Selected publications from the Nuno Santos Lab.",
  };
}

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t(dict, "publications.eyebrow")}
        title={t(dict, "publications.title")}
        lead={t(dict, "publications.lead")}
        primaryCta={{
          href: `/${locale}/research`,
          label: t(dict, "publications.ctaButton"),
        }}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-3 px-6">
          {publications.map((pub) => (
            <article
              key={pub.doi}
              className="group rounded-2xl border border-line bg-surface px-5 py-6 transition-all hover:border-teal/30 hover:shadow-[0_8px_28px_rgba(15,127,120,0.08)] md:px-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white dark:text-paper">
                  {pub.year}
                </span>
                <span className="text-xs text-ink/40">{pub.journal}</span>
              </div>
              <h2 className="mt-3 max-w-4xl font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-ink md:text-2xl">
                {pub.title}
              </h2>
              <p className="mt-3 text-sm text-ink/50">{pub.authors}</p>
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-teal-soft"
              >
                {t(dict, "publications.viewDoi")}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </article>
          ))}
        </div>
      </section>

      <ExploreCtaBand
        title={t(dict, "publications.ctaTitle")}
        lead={t(dict, "publications.ctaLead")}
        cta={t(dict, "publications.ctaButton")}
        href={`/${locale}/research`}
      />
    </>
  );
}
