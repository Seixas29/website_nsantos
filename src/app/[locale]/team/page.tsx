import { FadeIn } from "@/components/ui/fade-in";
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
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <FadeIn className="mb-16 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
          {t(dict, "team.eyebrow")}
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl text-balance">
          {t(dict, "team.title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/55">
          {t(dict, "team.lead")}
        </p>
      </FadeIn>

      {featured && (
        <FadeIn className="mb-8">
          <div className="rounded-[2rem] border border-teal/25 bg-teal/[0.06] p-1.5">
            <div className="rounded-[calc(2rem-0.375rem)] px-8 py-10 md:flex md:items-center md:gap-10 md:px-12 md:py-14">
              <TeamPhoto
                name={featured.name}
                photo={"photo" in featured ? featured.photo : undefined}
                size="xl"
                priority
                className="mb-6 !ring-teal/30 md:mb-0"
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                  {featured.role[locale]}
                </p>
                <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
                  {featured.name}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/55">
                  {featured.bio[locale]}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((member, i) => (
          <FadeIn key={member.name} delay={(i % 6) * 0.04}>
            <div className="h-full rounded-[1.5rem] border border-line bg-surface">
              <div className="flex h-full flex-col rounded-[1.5rem] p-6">
                <TeamPhoto
                  name={member.name}
                  photo={"photo" in member ? member.photo : undefined}
                  size="lg"
                  className="mb-5"
                />
                <h3 className="font-display text-xl text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-teal">{member.role[locale]}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/50">
                  {member.bio[locale]}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
