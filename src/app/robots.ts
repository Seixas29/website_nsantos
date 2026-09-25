import type { MetadataRoute } from "next";

const BASE = "https://nsantos.vercel.app";
const disallow: string[] = [];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "Claude-SearchBot", allow: "/", disallow },
      { userAgent: "Claude-User", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
