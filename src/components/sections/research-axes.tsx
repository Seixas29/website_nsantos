"use client";

import { Button, ButtonIcon } from "@/components/ui/button";
import { researchAxes } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function ResearchAxes({
  locale,
  eyebrow,
  title,
  lead,
  linkLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  linkLabel: string;
}) {
  return (
    <section id="research" className="relative border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
              {eyebrow}
            </p>
            <h2 className="font-display text-5xl text-ink md:text-6xl lg:text-7xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/55">
              {lead}
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href={`/${locale}/research`}>
              {linkLabel}
              <ButtonIcon>
                <ArrowUpRight className="h-4 w-4 text-ink" strokeWidth={1.75} />
              </ButtonIcon>
            </Link>
          </Button>
        </div>

        <div className="space-y-3">
          {researchAxes.map((axis, i) => (
            <motion.article
              key={axis.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-line bg-surface",
                "transition-colors duration-500 hover:border-teal/35 hover:bg-mist/40"
              )}
              style={{ opacity: 1 }}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-teal transition-transform duration-500 group-hover:scale-y-100" />
              <div className="grid gap-4 px-6 py-7 md:grid-cols-[5.5rem_1fr] md:items-center md:gap-8 md:px-8">
                <p className="font-display text-4xl text-teal/80 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {axis.title[locale]}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/50 md:text-base">
                    {axis.description[locale]}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
