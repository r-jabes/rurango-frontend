import { cn } from "@/lib/cn";

type HeroGeometryProps = {
  className?: string;
};

export function HeroGeometry({ className }: HeroGeometryProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[28rem] lg:max-w-none",
        className,
      )}
    >
      <svg
        viewBox="0 0 480 480"
        className="h-full w-full hero-geometry"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="48"
          y="64"
          width="280"
          height="200"
          className="stroke-[var(--border-strong)]"
          strokeWidth="1.5"
        />
        <rect
          x="120"
          y="152"
          width="260"
          height="220"
          className="fill-[color-mix(in_srgb,var(--surface-primary)_70%,transparent)] stroke-[var(--border-subtle)]"
          strokeWidth="1.5"
        />
        <path
          d="M72 320 L200 248 L328 320 L200 392 Z"
          className="stroke-[var(--border-strong)]"
          strokeWidth="1.5"
        />
        <path
          d="M188 96 L316 48 L444 120 L316 192 Z"
          className="fill-[color-mix(in_srgb,var(--surface-secondary)_55%,transparent)] stroke-[var(--text-muted)]"
          strokeWidth="1.5"
        />
        <path
          d="M248 280 L360 216 L420 280 L360 344 Z"
          className="fill-[var(--brand-green)] hero-geometry-accent"
          opacity="0.92"
        />
        <line
          x1="72"
          y1="120"
          x2="248"
          y2="280"
          className="stroke-[var(--border-subtle)] hero-geometry-line"
          strokeWidth="1"
        />
        <line
          x1="316"
          y1="192"
          x2="360"
          y2="216"
          className="stroke-[var(--brand-green)] hero-geometry-line"
          strokeWidth="1.5"
        />
        <circle
          cx="248"
          cy="280"
          r="4"
          className="fill-[var(--brand-green)]"
        />
        <circle
          cx="360"
          cy="216"
          r="3.5"
          className="fill-[var(--brand-off-white)]"
        />
      </svg>
    </div>
  );
}
