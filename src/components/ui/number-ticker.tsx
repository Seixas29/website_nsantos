"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
}

function formatValue(value: number, decimalPlaces: number, suffix: string) {
  return (
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(value) + suffix
  );
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finalText = formatValue(value, decimalPlaces, suffix);

    const run = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) {
        el.textContent = finalText;
        return;
      }

      const start = direction === "down" ? value : 0;
      const end = direction === "down" ? 0 : value;
      const duration = 1400;
      const startTime = performance.now() + delay;

      const tick = (now: number) => {
        if (now < startTime) {
          requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * eased;
        el.textContent = formatValue(
          Number(current.toFixed(decimalPlaces)),
          decimalPlaces,
          suffix
        );
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const isInView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    if (isInView()) {
      run();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "40px 0px 40px 0px" }
    );

    observer.observe(el);

    // Never leave a stuck "0" if the observer misses the element near the fold.
    const fallback = window.setTimeout(() => {
      if (!hasAnimated.current) {
        el.textContent = finalText;
        hasAnimated.current = true;
      }
    }, 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [value, direction, delay, decimalPlaces, suffix]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-tight text-ink",
        className
      )}
    >
      {formatValue(0, decimalPlaces, suffix)}
    </span>
  );
}
