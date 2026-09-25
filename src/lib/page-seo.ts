import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

export const SITE_ORIGIN = "https://nsantos.vercel.app";

type PageSeoInput = {
  locale: Locale;
  /** Path without locale, e.g. "" | "/research" | "/team" */
  path: string;
  title: string;
  description: string;
  /** Homepage: no " | Nuno Santos Lab" template. */
  absolute?: boolean;
};

export function pageSeo({
  locale,
  path,
  title,
  description,
  absolute,
}: PageSeoInput): Metadata {
  const normalized = path === "/" ? "" : path;
  const canonical = `${SITE_ORIGIN}/${locale}${normalized}`;
  const en = `${SITE_ORIGIN}/en${normalized}`;
  const pt = `${SITE_ORIGIN}/pt${normalized}`;
  const ogAlt = "Nuno Santos Lab — GIMM";

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        en,
        pt,
        "x-default": en,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Nuno Santos Lab",
      locale: locale === "pt" ? "pt_PT" : "en_GB",
      url: canonical,
      title,
      description,
      images: [
        {
          url: "/brand/og.png",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og.png"],
    },
  };
}
