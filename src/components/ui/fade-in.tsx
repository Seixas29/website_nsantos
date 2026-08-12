"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on mount instead of on scroll (for above-the-fold content) */
  immediate?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 20,
  immediate = false,
}: FadeInProps) {
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
  const hidden = { opacity: 0, y, filter: "blur(0px)" };

  return (
    <motion.div
      initial={hidden}
      {...(immediate
        ? { animate: visible }
        : {
            whileInView: visible,
            viewport: { once: true, amount: 0.2 },
          })}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
