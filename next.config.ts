import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV !== "production";
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  // React reconstructs call stacks with eval() in next dev only.
  ...(isDev ? ["'unsafe-eval'"] : []),
  "https://va.vercel-scripts.com",
].join(" ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      `default-src 'self'; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src ${scriptSrc}; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'`,
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
