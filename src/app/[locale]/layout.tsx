import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LabJsonLd } from "@/components/seo/lab-json-ld";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/data/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, t } from "@/i18n/get-dictionary";
import { pageSeo } from "@/lib/page-seo";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('ns-theme');if(t!=='light'&&t!=='dark'){t='light'}var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.dataset.theme=t;r.style.colorScheme=t}catch(e){}})();`;

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
    <html
      lang={locale}
      className={`${sourceSans.variable} ${sora.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <ThemeProvider>
          <div className="flex min-h-full flex-col">
            <LabJsonLd />
            <SiteHeader locale={locale} />
            <main className="flex-1">{children}</main>
            <SiteFooter
              locale={locale}
              tagline={t(dict, "footer.tagline")}
              rights={t(dict, "footer.rights")}
              privacy={t(dict, "footer.privacy")}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
