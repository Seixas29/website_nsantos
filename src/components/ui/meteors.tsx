"use client";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

/** Deterministic positions — avoids hydration mismatches from Math.random() */
function meteorStyle(i: number, total: number): React.CSSProperties {
  const t = (i + 1) / (total + 1);
  return {
    top: `${(t * 73 + ((i * 17) % 11)) % 80}%`,
    left: `${(t * 91 + ((i * 29) % 19)) % 100}%`,
    animationDelay: `${(i * 0.37) % 4}s`,
    animationDuration: `${2.8 + (i % 5) * 0.7}s`,
  };
}

export function Meteors({ number = 18, className }: MeteorsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {Array.from({ length: number }, (_, i) => (
        <span
          key={i}
          style={meteorStyle(i, number)}
          className="animate-meteor absolute h-0.5 w-0.5 rounded-full bg-teal shadow-[0_0_8px_rgba(61,255,200,0.8)]"
        >
          <span className="absolute top-1/2 -z-10 h-px w-14 -translate-y-1/2 bg-linear-to-r from-teal/70 to-transparent" />
        </span>
      ))}
    </div>
  );
}
