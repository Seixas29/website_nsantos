import Image from "next/image";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function TeamPhoto({
  name,
  photo,
  size = "md",
  className,
  priority = false,
}: {
  name: string;
  photo?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}) {
  const dims = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-36 w-36 md:h-44 md:w-44",
  }[size];

  const text = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-2xl",
  }[size];

  if (!photo) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-mist font-mono tracking-wider text-ink/70",
          dims,
          text,
          className
        )}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-mist ring-1 ring-ink/8",
        dims,
        className
      )}
    >
      <Image
        src={photo}
        alt={name}
        fill
        sizes={
          size === "xl"
            ? "176px"
            : size === "lg"
              ? "96px"
              : size === "md"
                ? "64px"
                : "48px"
        }
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
