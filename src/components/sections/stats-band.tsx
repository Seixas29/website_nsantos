import { NumberTicker } from "@/components/ui/number-ticker";
import { stats } from "@/data/site";
import type { Locale } from "@/i18n/config";

export function StatsBand({
  locale,
  eyebrow,
  title,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-mist/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--glow),transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl text-ink md:text-6xl">{title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label.en}>
              <NumberTicker
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-5xl text-teal md:text-7xl"
              />
              <p className="mt-3 text-sm text-ink/50">{stat.label[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
