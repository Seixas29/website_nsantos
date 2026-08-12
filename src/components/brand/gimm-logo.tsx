import { cn } from "@/lib/utils";
import Image from "next/image";

const marks = {
  logomark: {
    light: "/images/gimm_logo/GIMM_TERTIARY_LOGOMARK_POS_RGB.png",
    dark: "/images/gimm_logo/GIMM_TERTIARY_LOGOMARK_NEG_RGB.png",
  },
  horizontal: {
    light: "/images/gimm_logo/GIMM_PRIMARY_HORIZONTAL_POS_RGB.png",
    dark: "/images/gimm_logo/GIMM_PRIMARY_HORIZONTAL_NEG_RGB.png",
  },
} as const;

export function GimmLogo({
  variant = "logomark",
  className,
  width,
  height,
  priority = false,
}: {
  variant?: keyof typeof marks;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const pair = marks[variant];

  return (
    <span className={cn("relative inline-flex", className)}>
      <Image
        src={pair.light}
        alt="GIMM – Gulbenkian Institute for Molecular Medicine"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto dark:hidden"
      />
      <Image
        src={pair.dark}
        alt="GIMM – Gulbenkian Institute for Molecular Medicine"
        width={width}
        height={height}
        priority={priority}
        className="hidden h-auto w-auto dark:block"
      />
    </span>
  );
}
