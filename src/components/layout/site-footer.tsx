import { GimmLogo } from "@/components/brand/gimm-logo";
import { siteConfig } from "@/data/site";
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
    <footer className="mt-auto border-t border-line bg-mist/50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-3xl text-ink">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-ink/50">{tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-ink/40">
            {siteConfig.address[locale]}
          </p>
          <a
            href="https://gimm.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block opacity-80 transition-opacity hover:opacity-100"
          >
            <GimmLogo variant="horizontal" width={180} height={48} className="h-10" />
          </a>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-ink/70 transition-colors hover:text-teal"
          >
            {siteConfig.email}
          </a>
          <div className="flex flex-wrap gap-4">
            {siteConfig.affiliations.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/40 transition-colors hover:text-ink"
              >
                {a.name}
              </a>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="text-ink/40 transition-colors hover:text-ink"
            >
              {locale === "pt" ? "Contacto" : "Contact"}
            </Link>
          </div>
          <p className="text-xs text-ink/35">
            © {new Date().getFullYear()} {siteConfig.name}. {rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
