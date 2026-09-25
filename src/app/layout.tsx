import type { Metadata, Viewport } from "next";
import { Sora, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
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

const themeInitScript = `(function(){try{var t=localStorage.getItem('ns-theme');if(t!=='light'&&t!=='dark'){t='light'}var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.dataset.theme=t;r.style.colorScheme=t}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sora.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
