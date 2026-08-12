import { DocumentLang } from "@/components/i18n/document-lang";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
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
    title: { absolute: `${siteConfig.name} | GIMM` },
    description: siteConfig.description[locale],
    alternates: {
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    openGraph: {
      title: `${siteConfig.name} | GIMM`,
      description: siteConfig.description[locale],
      locale: locale === "pt" ? "pt_PT" : "en_GB",
      type: "website",
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
      <DocumentLang locale={locale} />
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        locale={locale}
        tagline={t(dict, "footer.tagline")}
        rights={t(dict, "footer.rights")}
      />
    </div>
  );
}
