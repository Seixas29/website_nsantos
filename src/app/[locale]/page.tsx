import { ExploreCtaBand } from "@/components/sections/explore-cta-band";
import { FeaturedResearch } from "@/components/sections/featured-research";
import { Hero } from "@/components/sections/hero";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { RecentHighlights } from "@/components/sections/recent-highlights";
import { StatsBand } from "@/components/sections/stats-band";
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
        ctaTeam={t(dict, "home.ctaTeam")}
      />
      <StatsBand locale={locale} />
      <FeaturedResearch
        locale={locale}
        title={t(dict, "home.featuredTitle")}
        lead={t(dict, "home.featuredLead")}
        learnMore={t(dict, "home.learnMore")}
      />
      <RecentHighlights
        locale={locale}
        title={t(dict, "home.highlightsTitle")}
        viewAll={t(dict, "home.highlightsViewAll")}
        awardLabel={t(dict, "home.awardLabel")}
        publicationLabel={t(dict, "home.publicationLabel")}
      />
      <ExploreCtaBand
        locale={locale}
        title={t(dict, "home.ctaBandTitle")}
        lead={t(dict, "home.ctaBandLead")}
        cta={t(dict, "home.ctaBandButton")}
      />
      <PartnersMarquee
        locale={locale}
        eyebrow={t(dict, "home.partnersEyebrow")}
        title={t(dict, "home.partnersTitle")}
      />
    </>
  );
}
