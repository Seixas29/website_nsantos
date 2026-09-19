import { PageHero } from "@/components/layout/page-hero";
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
    title: locale === "pt" ? "Privacidade" : "Privacy",
    description:
      locale === "pt"
        ? "Aviso de privacidade do site do Laboratório Nuno Santos."
        : "Privacy notice for the Nuno Santos Lab brochure site.",
  };
}

export default async function PrivacyPage({
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
        eyebrow={t(dict, "privacy.eyebrow")}
        title={t(dict, "privacy.title")}
        lead={t(dict, "privacy.lead")}
        primaryCta={{
          href: `mailto:${siteConfig.email}`,
          label: t(dict, "privacy.emailCta"),
        }}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              {t(dict, "privacy.whatTitle")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              {t(dict, "privacy.whatBody")}
            </p>
          </div>
          <div className="border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              {t(dict, "privacy.contactTitle")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              {t(dict, "privacy.contactBody")}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block font-medium text-teal transition-colors hover:text-teal-soft"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
