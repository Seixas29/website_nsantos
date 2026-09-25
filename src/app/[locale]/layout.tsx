import { DocumentLang } from "@/components/i18n/document-lang";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LabJsonLd } from "@/components/seo/lab-json-ld";
import { siteConfig } from "@/data/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
import { pageSeo } from "@/lib/page-seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;

  return {
    ...pageSeo({
      locale,
      path: "",
      title: `${siteConfig.name} | GIMM`,
      description: siteConfig.description[locale],
      absolute: true,
    }),
    authors: [
      {
        name: "Nuno C. Santos",
        url: siteConfig.social.orcid.url,
      },
    ],
    other: {
      citation_author_orcid: siteConfig.social.orcid.id,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="flex min-h-full flex-col">
      <LabJsonLd />
      <DocumentLang locale={locale} />
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        locale={locale}
        tagline={t(dict, "footer.tagline")}
        rights={t(dict, "footer.rights")}
        privacy={t(dict, "footer.privacy")}
      />
    </div>
  );
}
