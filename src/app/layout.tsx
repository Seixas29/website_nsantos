import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1412" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nsantos.vercel.app"),
  title: {
    default: "Nuno Santos Lab | GIMM",
    template: "%s | Nuno Santos Lab",
  },
  description:
    "Biomembranes, nanomedicine and vector biology research group at the Gulbenkian Institute for Molecular Medicine.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Nuno Santos Lab",
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: "Nuno Santos Lab — GIMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/og.png"],
  },
};

/**
 * Root layout is a passthrough so `[locale]/layout` can own `<html lang>`.
 * @see https://next-intl.dev/docs/getting-started/app-router
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
