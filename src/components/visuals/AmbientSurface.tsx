import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AmbientSurfaceProps = {
  children?: ReactNode;
  className?: string;
  grid?: boolean;
  glow?: boolean;
};

export function AmbientSurface({
  children,
  className,
  grid = false,
  glow = false,
}: AmbientSurfaceProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--brand-charcoal-raised)_80%,transparent),transparent_55%),linear-gradient(180deg,var(--brand-charcoal-deep),var(--background-primary)_45%,var(--background-primary))]"
      />
      {glow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -z-10 right-[-10%] top-[10%] h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-green)_18%,transparent),transparent_68%)]"
        />
      ) : null}
      {grid ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] max-md:opacity-20"
        />
      ) : null}
      {children}
    </div>
  );
}
