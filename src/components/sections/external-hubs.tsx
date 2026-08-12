import { Button, ButtonIcon } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowUpRight } from "lucide-react";

export function ExternalHubs({
  locale,
  eyebrow,
  title,
  lead,
  visitLabel,
  soonLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  visitLabel: string;
  soonLabel: string;
}) {
  const hubs = [siteConfig.external.surveillance, siteConfig.external.insectary];

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink/55">{lead}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {hubs.map((hub, i) => {
            const hasUrl = Boolean(hub.url);
            return (
              <GlowCard key={hub.en} className="h-full bg-surface ring-line">
                <div className="flex h-full flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                      0{i + 1}
                    </p>
                    <h3 className="mt-4 font-display text-3xl text-ink md:text-4xl">
                      {hub[locale]}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/50">
                      {hub.blurb[locale]}
                    </p>
                  </div>
                  <div className="mt-10">
                    {hasUrl ? (
                      <Button asChild variant="secondary">
                        <a href={hub.url} target="_blank" rel="noopener noreferrer">
                          {visitLabel}
                          <ButtonIcon>
                            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                          </ButtonIcon>
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                        {soonLabel}
                      </span>
                    )}
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
