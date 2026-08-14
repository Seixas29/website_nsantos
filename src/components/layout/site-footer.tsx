import { GimmLogo } from "@/components/brand/gimm-logo";
import { NsMark } from "@/components/brand/ns-mark";
import { navLinks, siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import Link from "next/link";

export function SiteFooter({
  locale,
  tagline,
  rights,
}: {
  locale: Locale;
  tagline: string;
  rights: string;
}) {
  return (
    <footer className="mt-auto bg-[#0b1118] text-[#e8eef5]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <NsMark width={36} height={36} className="h-9 w-9" onDarkSurface />
            <p className="font-display text-xl font-semibold tracking-[-0.02em]">
              {siteConfig.name.trim()}
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/40">
            {siteConfig.description[locale].slice(0, 140)}…
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/90">
            {locale === "pt" ? "Links rápidos" : "Quick links"}
          </p>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li>
              <Link href={`/${locale}`} className="transition-colors hover:text-teal-soft">
                {locale === "pt" ? "Início" : "Home"}
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${locale}${link.href}`}
                  className="transition-colors hover:text-teal-soft"
                >
                  {link.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/90">
            {locale === "pt" ? "Contacto" : "Contact"}
          </p>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-teal-soft"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="leading-relaxed">{siteConfig.address[locale]}</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide text-white/90">
            {locale === "pt" ? "Afiliações" : "Affiliations"}
          </p>
          <ul className="mb-6 space-y-2.5 text-sm text-white/50">
            {siteConfig.affiliations.map((a) => (
              <li key={a.name}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-soft"
                >
                  {a.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://gimm.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block opacity-90 transition-opacity hover:opacity-100"
          >
            <GimmLogo
              variant="horizontal"
              width={160}
              height={42}
              onDarkSurface
              className="h-9"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl px-6 py-5">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {siteConfig.name.trim()} · {rights.trim()}
          </p>
        </div>
      </div>
    </footer>
  );
}
