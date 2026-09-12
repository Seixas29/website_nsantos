import { cn } from "@/lib/utils";
import Image from "next/image";

const marks = {
  light: "/images/partners/fmul-pos.png",
  dark: "/images/partners/fmul-neg.png",
} as const;

export function FmulLogo({
  className,
  width,
  height,
  priority = false,
  onDarkSurface = false,
}: {
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  onDarkSurface?: boolean;
}) {
  const alt = "Faculdade de Medicina da Universidade de Lisboa";

  if (onDarkSurface) {
    return (
      <span className={cn("relative inline-flex shrink-0 overflow-visible", className)}>
        <Image
          src={marks.dark}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-full w-auto max-w-none object-contain object-left"
        />
      </span>
    );
  }

  return (
    <span className={cn("relative inline-flex shrink-0 overflow-visible", className)}>
      <Image
        src={marks.light}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-auto max-w-none object-contain object-left dark:hidden"
      />
      <Image
        src={marks.dark}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="hidden h-full w-auto max-w-none object-contain object-left dark:block"
      />
    </span>
  );
}
