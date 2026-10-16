import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AmbientIntensity = "hero" | "cta" | "subtle" | "plain";

type AmbientSurfaceProps = {
  children?: ReactNode;
  className?: string;
  grid?: boolean;
  glow?: boolean;
  /** Visual weight of the charcoal gradient treatment (BG-01). */
  intensity?: AmbientIntensity;
};

const intensityGradient: Record<AmbientIntensity, string> = {
  hero: "bg-[radial-gradient(ellipse_at_18%_0%,color-mix(in_srgb,var(--brand-charcoal-raised)_85%,transparent),transparent_58%),linear-gradient(180deg,var(--brand-charcoal-deep),var(--background-primary)_42%,var(--background-primary))]",
  cta: "bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--brand-charcoal-raised)_70%,transparent),transparent_55%),linear-gradient(165deg,var(--brand-charcoal-deep),var(--background-primary)_70%)]",
  subtle:
    "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brand-charcoal-deep)_55%,var(--background-primary)),var(--background-primary)_70%)]",
  plain: "bg-transparent",
};

export function AmbientSurface({
  children,
  className,
  grid = false,
  glow = false,
  intensity = "hero",
}: AmbientSurfaceProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          intensityGradient[intensity],
        )}
      />
      {glow ? (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-green)_16%,transparent),transparent_70%)]",
            intensity === "cta"
              ? "left-[-8%] bottom-[-20%] h-[min(22rem,60vw)] w-[min(22rem,60vw)]"
              : "right-[-10%] top-[8%] h-[min(28rem,70vw)] w-[min(28rem,70vw)]",
          )}
        />
      ) : null}
      {grid ? (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]",
            intensity === "subtle" || intensity === "cta"
              ? "opacity-[0.22] max-md:opacity-[0.12]"
              : "opacity-[0.35] max-md:opacity-20",
          )}
        />
      ) : null}
      {children}
    </div>
  );
}
