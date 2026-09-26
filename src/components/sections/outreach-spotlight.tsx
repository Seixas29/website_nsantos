"use client";

import type { Locale } from "@/i18n/config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/outreach/nei-duo-smile.png",
    fit: "top" as const,
    alt: {
      en: "Eva Dias and Tomás Vieira representing the Nuno Santos Lab",
      pt: "Eva Dias e Tomás Vieira a representar o Nuno Santos Lab",
    },
  },
  {
    src: "/images/outreach/nei-duo-cage.png",
    fit: "top" as const,
    alt: {
      en: "Eva Dias and Tomás Vieira at European Researchers’ Night 2026",
      pt: "Eva Dias e Tomás Vieira na Noite Europeia dos Investigadores 2026",
    },
  },
  {
    src: "/images/outreach/nei-demo.png",
    fit: "center" as const,
    alt: {
      en: "Tomás Vieira demonstrating a sample to a visitor",
      pt: "Tomás Vieira a demonstrar uma amostra a uma visitante",
    },
  },
  {
    src: "/images/outreach/nei-activity.png",
    fit: "center" as const,
    alt: {
      en: "Eva Dias with a young visitor at the interactive booth",
      pt: "Eva Dias com um visitante jovem no stand interativo",
    },
  },
  {
    src: "/images/outreach/nei-table.jpg",
    fit: "center" as const,
    alt: {
      en: "Outreach table with mosquito samples and microscope",
      pt: "Mesa de divulgação com amostras de mosquitos e microscópio",
    },
  },
  {
    src: "/images/outreach/nei-booth.jpg",
    fit: "center" as const,
    alt: {
      en: "Lab outreach booth at European Researchers’ Night",
      pt: "Stand do laboratório na Noite Europeia dos Investigadores",
    },
  },
] as const;

export function OutreachSpotlight({
  locale,
  sectionEyebrow,
  sectionTitle,
  title,
  quote,
  body,
}: {
  locale: Locale;
  sectionEyebrow: string;
  sectionTitle: string;
  title: string;
  quote: string;
  body: string;
}) {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), 5500);
    return () => window.clearInterval(id);
  }, [go]);

  const slide = SLIDES[index];

  return (
    <section
      id="news"
      className="scroll-mt-24 border-t border-line bg-mist/30 py-20 md:py-28"
      aria-labelledby="news-section-title"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-teal">
            {sectionEyebrow}
          </p>
          <h2
            id="news-section-title"
            className="font-display text-4xl text-ink md:text-5xl"
          >
            {sectionTitle}
          </h2>
        </div>

        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_8px_40px_rgba(20,32,51,0.06)] md:grid-cols-2">
          <div className="relative min-h-[20rem] bg-[#0b1118] md:min-h-[26rem]">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt[locale]}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${slide.fit === "top" ? "object-top" : "object-center"}`}
              priority={index === 0}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-10">
              <div className="flex gap-1.5" role="tablist" aria-label={locale === "pt" ? "Fotos" : "Photos"}>
                {SLIDES.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`${i + 1} / ${total}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={locale === "pt" ? "Foto anterior" : "Previous photo"}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={locale === "pt" ? "Foto seguinte" : "Next photo"}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
              {title}
            </h3>
            <p className="mt-5 font-display text-lg font-medium italic leading-snug text-ink/70 md:text-xl">
              {quote}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/55 md:text-base">
              {body}
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
              {locale === "pt" ? "Oeiras · 25 set 2026" : "Oeiras · 25 Sep 2026"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
