import { GimmLogo } from "@/components/brand/gimm-logo";
import { Button, ButtonIcon } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
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
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <FadeIn className="mb-16 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
          {t(dict, "contact.eyebrow")}
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl text-balance">
          {t(dict, "contact.title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/55">
          {t(dict, "contact.lead")}
        </p>
      </FadeIn>

      <div className="grid gap-4 lg:grid-cols-2">
        <FadeIn>
          <div className="h-full rounded-[1.75rem] border border-line bg-surface">
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] p-8 md:p-10">
              <div>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                  <Mail className="h-5 w-5 text-ink/70" strokeWidth={1.5} />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                  {t(dict, "contact.email")}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block font-display text-3xl text-ink transition-colors hover:text-teal"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="mt-10">
                <Button asChild>
                  <a href={`mailto:${siteConfig.email}`}>
                    {t(dict, "contact.emailCta")}
                    <ButtonIcon>
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </ButtonIcon>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="h-full rounded-[1.75rem] border border-line bg-surface">
            <div className="flex h-full flex-col rounded-[1.75rem] p-8 md:p-10">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                <MapPin className="h-5 w-5 text-ink/70" strokeWidth={1.5} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                {t(dict, "contact.address")}
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-ink/65">
                {siteConfig.address[locale]}
              </p>

              <div className="mt-10 border-t border-line pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                  {t(dict, "contact.affiliations")}
                </p>
                <a
                  href="https://gimm.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block opacity-80 transition-opacity hover:opacity-100"
                >
                  <GimmLogo variant="horizontal" width={160} height={42} className="h-9" />
                </a>
                <ul className="mt-6 space-y-3">
                  {siteConfig.affiliations.map((a) => (
                    <li key={a.name}>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-ink/70 transition-colors hover:text-teal"
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
                  className="mt-6 inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-teal"
                >
                  {t(dict, "contact.gimmPage")}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
