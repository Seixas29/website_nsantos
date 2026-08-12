import { ExternalHubs } from "@/components/sections/external-hubs";
import { Hero } from "@/components/sections/hero";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ResearchAxes } from "@/components/sections/research-axes";
import { StatsBand } from "@/components/sections/stats-band";
import { TeamPreview } from "@/components/sections/team-preview";
import { siteConfig } from "@/data/site";
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
    title: { absolute: `${siteConfig.name} | GIMM` },
    description: siteConfig.description[locale],
  };
}

export default async function HomePage({
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
      <Hero
        locale={locale}
        eyebrow={t(dict, "home.eyebrow")}
        headline={t(dict, "home.headline")}
        subhead={t(dict, "home.subhead")}
        ctaResearch={t(dict, "home.ctaResearch")}
        ctaContact={t(dict, "home.ctaContact")}
      />
      <ResearchAxes
        locale={locale}
        eyebrow={t(dict, "home.axesEyebrow")}
        title={t(dict, "home.axesTitle")}
        lead={t(dict, "home.axesLead")}
        linkLabel={t(dict, "home.axesLink")}
      />
      <ExternalHubs
        locale={locale}
        eyebrow={t(dict, "home.hubsEyebrow")}
        title={t(dict, "home.hubsTitle")}
        lead={t(dict, "home.hubsLead")}
        visitLabel={t(dict, "home.visitSite")}
        soonLabel={t(dict, "home.comingSoon")}
      />
      <StatsBand
        locale={locale}
        eyebrow={t(dict, "home.statsEyebrow")}
        title={t(dict, "home.statsTitle")}
      />
      <TeamPreview
        locale={locale}
        eyebrow={t(dict, "home.teamEyebrow")}
        title={t(dict, "home.teamTitle")}
        lead={t(dict, "home.teamLead")}
        linkLabel={t(dict, "home.teamLink")}
      />
      <PartnersMarquee
        locale={locale}
        eyebrow={t(dict, "home.partnersEyebrow")}
        title={t(dict, "home.partnersTitle")}
      />
    </>
  );
}
