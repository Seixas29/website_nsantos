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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

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
          el.textContent =
            Intl.NumberFormat("en-US", {
              minimumFractionDigits: decimalPlaces,
              maximumFractionDigits: decimalPlaces,
            }).format(Number(current.toFixed(decimalPlaces))) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, direction, delay, decimalPlaces, suffix]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-tight text-ink",
        className
      )}
    >
      0{suffix}
    </span>
  );
}
