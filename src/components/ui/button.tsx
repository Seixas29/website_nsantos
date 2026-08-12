import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-variant={variant}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        variant === "primary" &&
          "bg-teal text-white shadow-[0_10px_28px_rgba(15,127,120,0.22)] hover:bg-teal-soft dark:text-paper dark:shadow-[0_10px_28px_rgba(61,184,174,0.2)]",
        variant === "secondary" &&
          "bg-surface text-ink ring-1 ring-line hover:ring-teal/35 hover:bg-mist/60",
        variant === "ghost" && "text-ink/60 hover:text-ink hover:bg-ink/5",
        size === "default" && "px-6 py-3 text-sm",
        size === "sm" && "px-4 py-2 text-xs",
        size === "lg" && "px-7 py-3.5 text-base",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function ButtonIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[variant=secondary]:bg-ink/5 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
      {children}
    </span>
  );
}
