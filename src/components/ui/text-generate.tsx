"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextGenerateProps {
  words: string;
  className?: string;
  delay?: number;
}

export function TextGenerate({
  words,
  className,
  delay = 0.1,
}: TextGenerateProps) {
  const parts = words.split(" ");

  return (
    <h1
      className={cn(
        "font-display text-[clamp(3.4rem,11vw,7rem)] leading-[0.9] tracking-tight text-ink text-balance",
        className
      )}
    >
      {parts.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.22em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2 + i * delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
