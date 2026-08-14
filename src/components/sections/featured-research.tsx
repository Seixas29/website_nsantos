import { researchAxes } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowRight, Dna, Microscope, Sparkles } from "lucide-react";
import Link from "next/link";

const featured = researchAxes.slice(0, 3);
const icons = [Dna, Sparkles, Microscope] as const;
const accents = [
  "from-[#0b3d3a] via-[#0f7f78] to-[#3db8ae]",
  "from-[#0a2a3a] via-[#1a6b8a] to-[#3db8ae]",
  "from-[#0d2f2c] via-[#12706a] to-[#7ec8c2]",
] as const;

export function FeaturedResearch({
  locale,
  title,
  lead,
  learnMore,
}: {
  locale: Locale;
  title: string;
  lead: string;
  learnMore: string;
}) {
  return (
    <section id="research" className="bg-paper py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/55 md:text-lg">{lead}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((axis, i) => {
            const Icon = icons[i] ?? Dna;
            return (
              <Link
                key={axis.id}
                href={`/${locale}/research`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_30px_rgba(20,32,51,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_16px_40px_rgba(15,127,120,0.1)]"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${accents[i]}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:18px_18px]"
                  />
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125"
                  />
                  <div
                    aria-hidden
                    className="absolute -bottom-12 -left-6 h-36 w-36 rounded-full bg-black/20 blur-2xl"
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-10 w-10 text-white" strokeWidth={1.4} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 text-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink group-hover:text-teal">
                    {axis.title[locale]}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">
                    {axis.description[locale]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal">
                    {learnMore}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
