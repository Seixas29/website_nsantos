"use client";

import { cn } from "@/lib/utils";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 3,
  gridGap = 6,
  color = "13, 115, 119",
  maxOpacity = 0.22,
  flickerChance = 0.12,
}: FlickeringGridProps) {
  const cells = 120;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(${color}, ${maxOpacity}) ${squareSize}px, transparent ${squareSize}px)`,
          backgroundSize: `${squareSize + gridGap}px ${squareSize + gridGap}px`,
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0">
        {Array.from({ length: cells }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-[1px] bg-teal animate-flicker"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              opacity: 0,
              animationDelay: `${(i % 20) * 0.18}s`,
              animationDuration: `${2.2 + (i % 7) * 0.35}s`,
              ["--flicker-chance" as string]: flickerChance,
            }}
          />
        ))}
      </div>
    </div>
  );
}
