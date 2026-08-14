import { PageHero } from "@/components/layout/page-hero";
import { ExploreCtaBand } from "@/components/sections/explore-cta-band";
import { TeamPhoto } from "@/components/ui/team-photo";
import { team } from "@/data/site";
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
    title: locale === "pt" ? "Equipa" : "Team",
    description:
      locale === "pt"
        ? "Equipa do Laboratório Nuno Santos no GIMM."
        : "Nuno Santos Lab team at GIMM.",
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  const featured = team.find((m) => "featured" in m && m.featured);
  const rest = team.filter((m) => m !== featured);

  return (
    <>
      <PageHero
        eyebrow={t(dict, "team.eyebrow")}
        title={t(dict, "team.title")}
        lead={t(dict, "team.lead")}
        primaryCta={{
          href: `/${locale}/contact`,
          label: t(dict, "team.ctaButton"),
        }}
      />

      {featured && (
        <section className="border-b border-line bg-surface">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:gap-14 md:py-20">
            <TeamPhoto
              name={featured.name}
              photo={"photo" in featured ? featured.photo : undefined}
              size="xl"
              priority
              className="!ring-teal/25"
            />
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                {featured.role[locale]}
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/55 md:text-lg">
                {featured.bio[locale]}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-x-8 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((member) => (
            <article key={member.name} className="flex flex-col">
              <TeamPhoto
                name={member.name}
                photo={"photo" in member ? member.photo : undefined}
                size="lg"
                className="mb-5"
              />
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-teal">
                {member.role[locale]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/50">
                {member.bio[locale]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ExploreCtaBand
        title={t(dict, "team.ctaTitle")}
        lead={t(dict, "team.ctaLead")}
        cta={t(dict, "team.ctaButton")}
        href={`/${locale}/contact`}
      />
    </>
  );
}
