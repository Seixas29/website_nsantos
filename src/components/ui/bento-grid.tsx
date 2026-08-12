"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  description: string;
  className?: string;
  index?: number;
}

export function BentoCard({
  name,
  description,
  className,
  index = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-teal/30 hover:bg-mist/50",
        className
      )}
    >
      <div className="relative flex h-full flex-col justify-between px-6 py-6">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/10 blur-2xl opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="relative">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-2xl leading-tight text-ink">
            {name}
          </h3>
        </div>
        <p className="relative mt-6 max-w-sm text-sm leading-relaxed text-ink/45">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
