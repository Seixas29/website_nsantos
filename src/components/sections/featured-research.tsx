import { researchAxes } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowRight, Bug, HeartPulse, Ribbon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featured = researchAxes.slice(0, 3);
const icons = [Bug, HeartPulse, Ribbon] as const;

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
            const Icon = icons[i] ?? Bug;
            return (
              <Link
                key={axis.id}
                href={`/${locale}/research#${axis.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_30px_rgba(20,32,51,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_16px_40px_rgba(15,127,120,0.1)]"
              >
                <div className="relative h-48 overflow-hidden bg-[#0b1118]">
                  <Image
                    src={axis.photo}
                    alt={axis.photoAlt[locale]}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-ink/35 via-transparent to-black/10"
                  />
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
