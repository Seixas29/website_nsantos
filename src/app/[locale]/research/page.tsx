import { FadeIn } from "@/components/ui/fade-in";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
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
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <FadeIn className="mb-16 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
          {t(dict, "research.eyebrow")}
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl text-balance">
          {t(dict, "research.title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/55">
          {t(dict, "research.lead")}
        </p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/60">
          {siteConfig.overview[locale].map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mb-8">
        <h2 className="font-display text-3xl text-ink">
          {t(dict, "research.areasTitle")}
        </h2>
      </FadeIn>
      <FadeIn className="mb-20 flex flex-wrap gap-2">
        {researchAreas.map((area) => (
          <span
            key={area.en}
            className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink/70"
          >
            {area[locale]}
          </span>
        ))}
      </FadeIn>

      <FadeIn className="mb-8">
        <h2 className="font-display text-3xl text-ink">
          {t(dict, "research.axesTitle")}
        </h2>
      </FadeIn>

      <BentoGrid className="mb-24">
        {researchAxes.map((axis, i) => (
          <BentoCard
            key={axis.id}
            index={i}
            name={axis.title[locale]}
            description={axis.description[locale]}
            className={axis.span}
          />
        ))}
      </BentoGrid>

      <FadeIn className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl text-ink">
          {t(dict, "research.projectsTitle")}
        </h2>
        <p className="mt-4 text-base text-ink/55">
          {t(dict, "research.projectsLead")}
        </p>
      </FadeIn>

      <div className="mb-20 space-y-3">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.04}>
            <article className="rounded-[1.5rem] border border-line bg-surface">
              <div className="rounded-[1.5rem] px-6 py-6 md:px-8">
                <p className="font-mono text-xs tracking-wide text-teal">
                  {project.years}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/55">
                  {project.description[locale]}
                </p>
                <p className="mt-3 text-xs text-ink/40">
                  {project.role[locale]} · {project.funding}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mb-8">
        <h2 className="font-display text-3xl text-ink">
          {t(dict, "research.previousTitle")}
        </h2>
      </FadeIn>
      <div className="mb-20 space-y-3">
        {previousProjects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.03}>
            <article className="rounded-[1.5rem] border border-line bg-surface/70 px-6 py-5 md:px-8">
              <p className="font-mono text-xs tracking-wide text-ink/40">
                {project.years}
              </p>
              <h3 className="mt-1 font-display text-xl text-ink">
                {project.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/50">
                {project.description[locale]}
              </p>
              <p className="mt-2 text-xs text-ink/35">
                {project.role[locale]} · {project.funding}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mb-8">
        <h2 className="font-display text-3xl text-ink">
          {t(dict, "research.awardsTitle")}
        </h2>
      </FadeIn>
      <div className="space-y-3">
        {awards.map((award, i) => (
          <FadeIn key={`${award.year}-${award.title.en}`} delay={i * 0.03}>
            <div className="flex flex-col gap-1 rounded-[1.25rem] border border-line bg-surface px-6 py-5 sm:flex-row sm:items-baseline sm:gap-6 md:px-8">
              <p className="shrink-0 font-mono text-sm text-teal">{award.year}</p>
              <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                {award.title[locale]}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
