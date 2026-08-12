import { FadeIn } from "@/components/ui/fade-in";
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
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <FadeIn className="mb-16 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
          {t(dict, "publications.eyebrow")}
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl text-balance">
          {t(dict, "publications.title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/55">
          {t(dict, "publications.lead")}
        </p>
      </FadeIn>

      <div className="space-y-3">
        {publications.map((pub, i) => (
          <FadeIn key={pub.doi} delay={i * 0.04}>
            <article className="rounded-[1.5rem] border border-line bg-surface transition-colors hover:border-teal/25">
              <div className="rounded-[1.5rem] px-6 py-6 md:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-teal">{pub.year}</span>
                  <span className="text-xs text-ink/35">{pub.journal}</span>
                </div>
                <h2 className="mt-3 max-w-4xl font-display text-2xl leading-snug text-ink md:text-[1.65rem]">
                  {pub.title}
                </h2>
                <p className="mt-3 text-sm text-ink/50">{pub.authors}</p>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-teal"
                >
                  {t(dict, "publications.viewDoi")}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
