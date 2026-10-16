import Image from "next/image";
import { cn } from "@/lib/cn";

type ProjectMediaProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /**
   * contain — full designed covers / screenshots (default).
   * cover — only for assets intended to fill a crop frame.
   */
  fit?: "contain" | "cover";
  /** Outer frame ratio. Covers are ~2.18:1 designed heroes. */
  aspect?: "cover" | "landscape" | "portrait";
};

const aspectClass = {
  /** Matches current PNG covers (~1896×868). */
  cover: "aspect-[24/11]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
} as const;

/**
 * Project preview frame: stable outer ratio with contained cover art
 * so designed edges stay visible. Letterboxing uses a deliberate surface.
 */
export function ProjectMedia({
  src,
  alt,
  className,
  priority = false,
  fit = "contain",
  aspect = "cover",
}: ProjectMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border",
        "bg-[linear-gradient(160deg,var(--brand-charcoal-deep),var(--surface-primary)_55%,var(--background-secondary))]",
        "transition-[border-color] duration-[var(--motion-base)] ease-[var(--ease-out)]",
        "group-hover:border-border-strong group-focus-within:border-accent/60",
        aspectClass[aspect],
        className,
      )}
    >
      {/* Intentional empty-space treatment when image is contained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
          className={cn(
            "relative z-[1] transition-[filter,transform] duration-[var(--motion-base)] ease-[var(--ease-out)]",
            "group-hover:brightness-[1.06] group-focus-within:brightness-[1.06]",
            fit === "contain"
              ? "object-contain object-center p-1.5 sm:p-2"
              : "object-cover object-top group-hover:scale-[1.015] group-focus-within:scale-[1.015]",
          )}
        />
      ) : (
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,var(--background-secondary),var(--surface-secondary))]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Preview
            </p>
            <p className="mt-1 truncate text-sm text-foreground-secondary">
              {alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
