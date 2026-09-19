import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE = "https://nsantos.vercel.app";

const pages = [
  { path: "", priority: 1 },
  { path: "/research", priority: 0.9 },
  { path: "/team", priority: 0.8 },
  { path: "/publications", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-19");

  return pages.flatMap(({ path, priority }) =>
    locales.map((locale) => {
      const url = `${BASE}/${locale}${path}`;
      return {
        url,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority,
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
