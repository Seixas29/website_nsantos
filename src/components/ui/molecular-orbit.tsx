"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ORBITS = [
  { r: 70, duration: 18, reverse: false, size: 8 },
  { r: 110, duration: 26, reverse: true, size: 6 },
  { r: 150, duration: 34, reverse: false, size: 10 },
];

export function MolecularOrbit() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[28rem]">
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(13,115,119,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(12,18,34,0.12),transparent_50%)] blur-2xl" />

      <div className="absolute inset-[28%] rounded-full bg-ink shadow-[0_0_60px_rgba(13,115,119,0.35)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper/70">
            GIMM
          </span>
        </div>
      </div>

      {ready &&
        ORBITS.map((orbit, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-ink/10"
            style={{
              width: orbit.r * 2,
              height: orbit.r * 2,
              marginLeft: -orbit.r,
              marginTop: -orbit.r,
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: orbit.reverse ? -360 : 360 }}
              transition={{
                duration: orbit.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_18px_rgba(13,115,119,0.55)]"
                style={{ width: orbit.size, height: orbit.size }}
              />
            </motion.div>
          </div>
        ))}

      <motion.div
        className="absolute -right-2 top-[18%] rounded-2xl bg-paper/80 px-3 py-2 text-[11px] shadow-[0_10px_40px_rgba(12,18,34,0.08)] ring-1 ring-ink/8 backdrop-blur-md"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <span className="font-mono uppercase tracking-[0.16em] text-teal">
          AFM
        </span>
        <p className="mt-0.5 text-ink/55">Nanoscale forces</p>
      </motion.div>

      <motion.div
        className="absolute -left-1 bottom-[22%] rounded-2xl bg-paper/80 px-3 py-2 text-[11px] shadow-[0_10px_40px_rgba(12,18,34,0.08)] ring-1 ring-ink/8 backdrop-blur-md"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <span className="font-mono uppercase tracking-[0.16em] text-teal">
          Vectors
        </span>
        <p className="mt-0.5 text-ink/55">Aedes · Wolbachia</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[8%] right-[8%] rounded-2xl bg-ink px-3 py-2 text-[11px] text-paper shadow-[0_10px_40px_rgba(12,18,34,0.2)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.7 }}
      >
        <span className="font-mono uppercase tracking-[0.16em] text-teal-soft">
          Membranes
        </span>
        <p className="mt-0.5 text-paper/55">Biophysics live</p>
      </motion.div>
    </div>
  );
}
