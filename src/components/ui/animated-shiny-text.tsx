import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedShinyText({
  children,
  className,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-shiny-text bg-size-[200%_auto] bg-clip-text text-transparent",
        "bg-linear-to-r from-ink/50 via-teal to-ink/50",
        className
      )}
    >
      {children}
    </span>
  );
}
