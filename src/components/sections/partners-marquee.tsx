import type { ReactNode } from "react";
import { GimmLogo } from "@/components/brand/gimm-logo";
import { Marquee } from "@/components/ui/marquee";
import { partners } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function PartnerPill({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = cn(
    "mx-2 flex h-16 items-center justify-center rounded-full border border-line bg-white px-8 shadow-[0_1px_0_rgba(20,32,51,0.04)]",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(classes, "transition-opacity hover:opacity-80")}
      >
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function PartnersMarquee({
  eyebrow,
  title,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="border-y border-line py-16 md:py-20">
      <div className="mx-auto mb-10 w-full max-w-7xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl text-ink md:text-5xl">{title}</h2>
      </div>

      <Marquee pauseOnHover className="[--duration:36s]">
        {partners.map((partner) => (
          <PartnerPill key={partner.id} href={partner.url}>
            {partner.src === null ? (
              <GimmLogo
                variant="horizontal"
                width={140}
                height={36}
                className="h-7 opacity-90"
              />
            ) : (
              <img
                src={partner.src}
                alt={partner.name}
                className={cn(
                  "max-h-9 w-auto object-contain",
                  partner.id === "fmul" && "max-h-11",
                  partner.id === "horizon" && "max-h-10",
                  partner.id === "lacaixa" && "max-h-8",
                )}
              />
            )}
          </PartnerPill>
        ))}
      </Marquee>
    </section>
  );
}
