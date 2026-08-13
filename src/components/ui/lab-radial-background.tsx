import { cn } from "@/lib/utils";

/**
 * Soft radial wash inspired by ibelick background snippets,
 * retuned to the lab paper / teal / mist tokens (light + dark).
 */
export function LabRadialBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Base paper */}
      <div className="absolute inset-0 bg-paper" />

      {/* Top radial — ibelick-style wash from the header edge */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(15,127,120,0.14)_0%,rgba(15,127,120,0.05)_35%,transparent_70%)] dark:bg-[radial-gradient(120%_70%_at_50%_0%,rgba(61,184,174,0.16)_0%,rgba(61,184,174,0.05)_40%,transparent_72%)]" />

      {/* Right glow — balances the empty right side behind the NS mark */}
      <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_88%_42%,rgba(15,127,120,0.11)_0%,transparent_60%)] dark:bg-[radial-gradient(55%_65%_at_88%_42%,rgba(61,184,174,0.14)_0%,transparent_62%)]" />

      {/* Soft cool mist from bottom-left */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_55%_at_8%_100%,rgba(232,238,244,0.9)_0%,transparent_55%)] dark:bg-[radial-gradient(50%_55%_at_8%_100%,rgba(18,26,36,0.95)_0%,transparent_55%)]" />

      {/* Very subtle center vignette so type stays crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_35%_45%,transparent_0%,rgba(245,248,251,0.35)_100%)] dark:bg-[radial-gradient(80%_80%_at_35%_45%,transparent_0%,rgba(11,17,24,0.45)_100%)]" />
    </div>
  );
}
