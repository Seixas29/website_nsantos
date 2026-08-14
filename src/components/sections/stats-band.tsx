import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { Award, BookOpen, FlaskConical, Layers } from "lucide-react";

const icons = [Layers, BookOpen, FlaskConical, Award] as const;

export function StatsBand({ locale }: { locale: Locale }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:gap-6 md:py-14">
        {stats.map((stat, i) => {
          const Icon = icons[i] ?? Layers;
          return (
            <div key={stat.label.en} className="flex flex-col items-start gap-3 md:items-center md:text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <NumberTicker
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-semibold text-ink md:text-5xl"
              />
              <p className="text-sm font-medium text-teal">{stat.label[locale]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
