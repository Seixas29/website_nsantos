import { GimmLogo } from "@/components/brand/gimm-logo";
import { PageHero } from "@/components/layout/page-hero";
import { ExploreCtaBand } from "@/components/sections/explore-cta-band";
import { Button, ButtonIcon } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
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
    title: locale === "pt" ? "Contacto" : "Contact",
    description:
      locale === "pt"
        ? "Contactar o Laboratório Nuno Santos no GIMM."
        : "Contact the Nuno Santos Lab at GIMM.",
  };
}

export default async function ContactPage({
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
        eyebrow={t(dict, "contact.eyebrow")}
        title={t(dict, "contact.title")}
        lead={t(dict, "contact.lead")}
        primaryCta={{
          href: `mailto:${siteConfig.email}`,
          label: t(dict, "contact.emailCta"),
        }}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              {t(dict, "contact.email")}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 block font-display text-3xl font-semibold tracking-[-0.03em] text-ink transition-colors hover:text-teal md:text-4xl"
            >
              {siteConfig.email}
            </a>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  {t(dict, "contact.emailCta")}
                  <ButtonIcon>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </ButtonIcon>
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal">
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              {t(dict, "contact.address")}
            </p>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-ink/65">
              {siteConfig.address[locale]}
            </p>

            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                {t(dict, "contact.affiliations")}
              </p>
              <a
                href="https://gimm.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block opacity-90 transition-opacity hover:opacity-100"
              >
                <GimmLogo
                  variant="horizontal"
                  width={160}
                  height={42}
                  className="h-9"
                />
              </a>
              <ul className="mt-6 space-y-3">
                {siteConfig.affiliations.map((a) => (
                  <li key={a.name}>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-wrap items-baseline gap-x-2 text-ink/70 transition-colors hover:text-teal"
                    >
                      <span className="font-medium">{a.name}</span>
                      <span className="text-sm text-ink/40 group-hover:text-teal/70">
                        {a.full}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.external.gimmLab}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-teal-soft"
              >
                {t(dict, "contact.gimmPage")}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExploreCtaBand
        title={t(dict, "contact.ctaTitle")}
        lead={t(dict, "contact.ctaLead")}
        cta={t(dict, "contact.ctaButton")}
        href={`/${locale}/research`}
      />
    </>
  );
}
