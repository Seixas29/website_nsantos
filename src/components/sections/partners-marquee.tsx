import { Marquee } from "@/components/ui/marquee";
import { partners } from "@/data/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

const funders = partners.filter((partner) => partner.id !== "gimm");

const invertOnDark = new Set(["fct", "compete2030", "lacaixa"]);

export function PartnersMarquee({ label }: { label: string }) {
  return (
    <div className="border-t border-white/10">
      <div className="flex items-center">
        <p className="relative z-10 hidden shrink-0 items-center whitespace-nowrap bg-linear-to-r from-[#071018] from-65% to-transparent py-5 pl-6 pr-12 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 md:flex">
          {label}
        </p>
        <div className="min-w-0 flex-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee
            pauseOnHover
            className="py-5 [--duration:50s] [--gap:3.75rem]"
          >
            {funders.map((partner) =>
              partner.src ? (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-11 items-center transition-opacity duration-300",
                    invertOnDark.has(partner.id)
                      ? "opacity-70 brightness-0 invert hover:opacity-100"
                      : "opacity-90 hover:opacity-100",
                  )}
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={140}
                    height={36}
                    unoptimized
                    className={cn(
                      "h-7 w-auto max-w-[140px] object-contain",
                      partner.id === "fmul" && "h-8",
                      partner.id === "lacaixa" && "h-6",
                      partner.id === "horizon" && "h-8 max-w-[168px]",
                    )}
                  />
                </a>
              ) : null,
            )}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
