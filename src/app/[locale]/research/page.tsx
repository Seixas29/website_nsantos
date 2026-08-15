import { PageHero } from "@/components/layout/page-hero";
import { ExploreCtaBand } from "@/components/sections/explore-cta-band";
import {
  awards,
  previousProjects,
  projects,
  researchAreas,
  researchAxes,
  siteConfig,
} from "@/data/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
import {
  Activity,
  Dna,
  HeartPulse,
  Microscope,
  Radar,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const axisIcons = [Dna, Sparkles, Microscope, HeartPulse, Activity, Radar] as const;
const axisAccents = [
  "from-[#0b3d3a] via-[#0f7f78] to-[#3db8ae]",
  "from-[#0a2a3a] via-[#1a6b8a] to-[#3db8ae]",
  "from-[#0d2f2c] via-[#12706a] to-[#7ec8c2]",
  "from-[#1a3a4a] via-[#0f6b7a] to-[#4db8c4]",
  "from-[#0c2f3a] via-[#156b78] to-[#3db8ae]",
  "from-[#12352f] via-[#0f7f78] to-[#5ec4b8]",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  return {
    title: locale === "pt" ? "Investigação" : "Research",
    description: siteConfig.description[locale],
  };
}

export default async function ResearchPage({
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
        eyebrow={t(dict, "research.eyebrow")}
        title={t(dict, "research.title")}
        lead={t(dict, "research.lead")}
        primaryCta={{
          href: `/${locale}/team`,
          label: t(dict, "research.ctaButton"),
        }}
        secondaryCta={{
          href: `/${locale}/contact`,
          label: t(dict, "research.ctaContact"),
        }}
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            {t(dict, "research.overviewTitle")}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-ink/60">
            {siteConfig.overview[locale].map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="mb-8 font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            {t(dict, "research.areasTitle")}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {researchAreas.map((area) => (
              <span
                key={area.en}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink/70"
              >
                {area[locale]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
              {t(dict, "research.axesTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/55 md:text-lg">
              {t(dict, "research.axesLead")}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {researchAxes.map((axis, i) => {
              const Icon = axisIcons[i] ?? Dna;
              const accent = axisAccents[i] ?? axisAccents[0];
              return (
                <article
                  key={axis.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_30px_rgba(20,32,51,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_16px_40px_rgba(15,127,120,0.1)]"
                >
                  <div
                    className={`relative flex h-44 items-center justify-center overflow-hidden bg-linear-to-br ${accent}`}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px]"
                    />
                    <div
                      aria-hidden
                      className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125"
                    />
                    <div
                      aria-hidden
                      className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full bg-black/20 blur-2xl"
                    />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-10 w-10 text-white" strokeWidth={1.4} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-teal">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                      {axis.title[locale]}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">
                      {axis.description[locale]}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
              {t(dict, "research.projectsTitle")}
            </h2>
            <p className="mt-4 text-base text-ink/55">
              {t(dict, "research.projectsLead")}
            </p>
          </div>
          <div className="space-y-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-line bg-surface px-5 py-5 transition-colors hover:border-teal/30 md:px-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white dark:text-paper">
                    {project.years}
                  </span>
                  <span className="text-xs text-ink/40">{project.funding}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/55">
                  {project.description[locale]}
                </p>
                <p className="mt-3 text-xs text-ink/40">{project.role[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="mb-8 font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            {t(dict, "research.previousTitle")}
          </h2>
          <div className="space-y-2">
            {previousProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-1 border-b border-line py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <p className="w-28 shrink-0 font-mono text-xs text-ink/40">
                  {project.years}
                </p>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-ink/50">
                    {project.description[locale]}
                  </p>
                  <p className="mt-2 text-xs text-ink/35">
                    {project.role[locale]} · {project.funding}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2 className="mb-8 font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
            {t(dict, "research.awardsTitle")}
          </h2>
          <div className="space-y-3">
            {awards.map((award) => (
              <div
                key={`${award.year}-${award.title.en}`}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-surface px-5 py-5 sm:flex-row sm:items-baseline sm:gap-6 md:px-7"
              >
                <span className="shrink-0 rounded-full bg-teal/10 px-3 py-1 font-mono text-sm text-teal">
                  {award.year}
                </span>
                <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                  {award.title[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExploreCtaBand
        title={t(dict, "research.ctaTitle")}
        lead={t(dict, "research.ctaLead")}
        cta={t(dict, "research.ctaButton")}
        href={`/${locale}/team`}
      />
    </>
  );
}
