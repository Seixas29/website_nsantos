import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE = "https://nsantos.vercel.app";

const pages = [
  { path: "", lastModified: new Date("2026-09-20") },
  { path: "/research", lastModified: new Date("2026-09-20") },
  { path: "/team", lastModified: new Date("2026-09-19") },
  { path: "/publications", lastModified: new Date("2026-09-19") },
  { path: "/contact", lastModified: new Date("2026-09-19") },
  { path: "/privacy", lastModified: new Date("2026-09-19") },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, lastModified }) =>
    locales.map((locale) => {
      const url = `${BASE}/${locale}${path}`;
      return {
        url,
        lastModified,
        alternates: {
          languages: {
            en: `${BASE}/en${path}`,
            pt: `${BASE}/pt${path}`,
          },
        },
      };
    }),
  );
}
