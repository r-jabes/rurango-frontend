import { cn } from "@/lib/cn";

type NotFoundGeometryProps = {
  className?: string;
};

export function NotFoundGeometry({ className }: NotFoundGeometryProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <svg
        viewBox="0 0 640 360"
        className="absolute right-0 top-8 h-auto w-[min(28rem,70vw)] opacity-70 max-md:opacity-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="80"
          y="48"
          width="220"
          height="140"
          className="stroke-[var(--border-subtle)]"
          strokeWidth="1.5"
        />
        <rect
          x="180"
          y="120"
          width="200"
          height="150"
          className="fill-[color-mix(in_srgb,var(--surface-primary)_50%,transparent)] stroke-[var(--border-strong)]"
          strokeWidth="1.5"
        />
        <path
          d="M320 80 L420 40 L520 100 L420 160 Z"
          className="stroke-[var(--border-subtle)]"
          strokeWidth="1.5"
        />
        <path
          d="M400 200 L460 168 L500 200 L460 232 Z"
          className="fill-[var(--brand-green)]"
          opacity="0.85"
        />
        <line
          x1="120"
          y1="100"
          x2="400"
          y2="200"
          className="stroke-[var(--border-subtle)]"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
