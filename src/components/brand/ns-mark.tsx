import { cn } from "@/lib/utils";
import Image from "next/image";

export function NsMark({
  className,
  width = 32,
  height = 32,
  priority = false,
  onDarkSurface = false,
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  /** Force the bright mark for dark backgrounds (hero/footer). */
  onDarkSurface?: boolean;
}) {
  if (onDarkSurface) {
    return (
      <span className={cn("relative inline-flex shrink-0 overflow-visible", className)}>
        <Image
          src="/images/brand/ns-mark-dark.png"
          alt=""
          width={width}
          height={height}
          priority={priority}
          className="h-full w-auto max-w-none object-contain"
          aria-hidden
        />
        <span className="sr-only">Nuno Santos Lab</span>
      </span>
    );
  }

  return (
    <span className={cn("relative inline-flex shrink-0 overflow-visible", className)}>
      <Image
        src="/images/brand/ns-mark-light.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className="h-full w-auto max-w-none object-contain dark:hidden"
        aria-hidden
      />
      <Image
        src="/images/brand/ns-mark-dark.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className="hidden h-full w-auto max-w-none object-contain dark:block"
        aria-hidden
      />
      <span className="sr-only">Nuno Santos Lab</span>
    </span>
  );
}
