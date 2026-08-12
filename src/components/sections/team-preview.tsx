import { Button, ButtonIcon } from "@/components/ui/button";
import { TeamPhoto } from "@/components/ui/team-photo";
import { team } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function TeamPreview({
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
  const withPhotos = team.filter((m) => "photo" in m && m.photo);
  const preview = withPhotos.slice(0, 6);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl text-ink md:text-6xl">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/55">{lead}</p>
          </div>
          <Button asChild variant="secondary">
            <Link href={`/${locale}/team`}>
              {linkLabel}
              <ButtonIcon>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </ButtonIcon>
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-teal/30 hover:bg-mist/40"
            >
              <div className="p-6">
                <TeamPhoto
                  name={member.name}
                  photo={"photo" in member ? member.photo : undefined}
                  size="lg"
                  className="mb-5 ring-line"
                />
                <h3 className="font-display text-xl text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-teal">{member.role[locale]}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/50">
                  {member.bio[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
