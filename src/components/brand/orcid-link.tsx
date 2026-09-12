import { OrcidIcon } from "@/components/brand/orcid-icon";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function OrcidLink({
  className,
  tone = "light",
  showLabel = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  showLabel?: boolean;
}) {
  const { id, url } = siteConfig.social.orcid;

  return (
    <a
      href={url}
      target="_blank"
      rel="me noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-colors",
        tone === "dark"
          ? "text-white/55 hover:text-teal-soft"
          : "text-ink/70 hover:text-teal",
        className
      )}
    >
      <OrcidIcon className="h-5 w-5" />
      {showLabel ? (
        <span>
          ORCID iD{" "}
          <span className="font-mono tracking-wide">{id}</span>
        </span>
      ) : (
        <span className="font-mono tracking-wide">{id}</span>
      )}
    </a>
  );
}
