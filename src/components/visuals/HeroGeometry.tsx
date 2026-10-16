import { cn } from "@/lib/cn";

type HeroGeometryProps = {
  className?: string;
};

/**
 * Signature architectural composition for the home hero (BG-03).
 * Decorative only — aria-hidden. Remains legible with reduced motion.
 */
export function HeroGeometry({ className }: HeroGeometryProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto aspect-square h-full w-full max-h-full",
        className,
      )}
    >
      <svg
        viewBox="0 0 520 520"
        className="hero-geometry h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Construction grid */}
        <g className="hero-geo-grid" opacity="0.45">
          {Array.from({ length: 9 }, (_, i) => {
            const v = 60 + i * 50;
            return (
              <g key={`g-${i}`}>
                <line
                  x1={v}
                  y1="48"
                  x2={v}
                  y2="472"
                  className="stroke-[var(--border-subtle)]"
                  strokeWidth="0.75"
                />
                <line
                  x1="48"
                  y1={v}
                  x2="472"
                  y2={v}
                  className="stroke-[var(--border-subtle)]"
                  strokeWidth="0.75"
                />
              </g>
            );
          })}
        </g>

        {/* Outer registration frame */}
        <rect
          x="40"
          y="40"
          width="440"
          height="440"
          className="hero-geo-frame stroke-[var(--border-strong)]"
          strokeWidth="1.25"
        />
        <rect
          x="52"
          y="52"
          width="416"
          height="416"
          className="hero-geo-frame stroke-[var(--border-subtle)]"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />

        {/* Corner ticks */}
        <g className="hero-geo-frame stroke-[var(--brand-green)]" strokeWidth="1.5">
          <path d="M40 64 L40 40 L64 40" />
          <path d="M456 40 L480 40 L480 64" />
          <path d="M480 456 L480 480 L456 480" />
          <path d="M64 480 L40 480 L40 456" />
        </g>

        {/* Deep structural plane */}
        <rect
          x="88"
          y="108"
          width="248"
          height="176"
          className="hero-geo-plane-1 fill-[color-mix(in_srgb,var(--brand-charcoal-deep)_70%,transparent)] stroke-[var(--border-strong)]"
          strokeWidth="1.25"
        />

        {/* Raised modular block */}
        <rect
          x="168"
          y="188"
          width="236"
          height="196"
          className="hero-geo-plane-2 fill-[color-mix(in_srgb,var(--surface-primary)_78%,transparent)] stroke-[var(--border-subtle)]"
          strokeWidth="1.25"
        />

        {/* Vertical column system */}
        <g className="hero-geo-plane-3 hero-geo-detail">
          {[188, 228, 268, 308].map((x) => (
            <line
              key={x}
              x1={x}
              y1="198"
              x2={x}
              y2="374"
              className="stroke-[var(--border-subtle)]"
              strokeWidth="1"
            />
          ))}
          <line
            x1="178"
            y1="248"
            x2="394"
            y2="248"
            className="stroke-[var(--border-subtle)]"
            strokeWidth="1"
          />
          <line
            x1="178"
            y1="308"
            x2="394"
            y2="308"
            className="stroke-[var(--border-subtle)]"
            strokeWidth="1"
          />
        </g>

        {/* Axonometric roof / diamond plane */}
        <path
          d="M210 78 L348 36 L456 108 L318 150 Z"
          className="hero-geo-plane-2 fill-[color-mix(in_srgb,var(--surface-secondary)_50%,transparent)] stroke-[var(--text-muted)]"
          strokeWidth="1.25"
        />

        {/* Lower isometric footing */}
        <path
          d="M96 348 L214 286 L332 348 L214 410 Z"
          className="hero-geo-plane-3 stroke-[var(--border-strong)]"
          strokeWidth="1.25"
        />

        {/* Connector lines */}
        <line
          x1="88"
          y1="140"
          x2="210"
          y2="286"
          className="hero-geometry-line stroke-[var(--border-subtle)]"
          strokeWidth="1"
        />
        <line
          x1="318"
          y1="150"
          x2="360"
          y2="220"
          className="hero-geometry-line stroke-[var(--brand-green)]"
          strokeWidth="1.5"
        />
        <line
          x1="404"
          y1="188"
          x2="404"
          y2="384"
          className="hero-geometry-line hero-geo-detail stroke-[var(--border-subtle)]"
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {/* Accent mass — primary lime focal */}
        <path
          d="M292 268 L372 220 L428 268 L372 316 Z"
          className="hero-geometry-accent fill-[var(--brand-green)]"
          opacity="0.92"
        />

        {/* Small secondary module */}
        <rect
          x="112"
          y="300"
          width="56"
          height="56"
          className="hero-geo-plane-3 fill-[color-mix(in_srgb,var(--surface-secondary)_40%,transparent)] stroke-[var(--border-strong)]"
          strokeWidth="1.25"
        />
        <rect
          x="124"
          y="312"
          width="16"
          height="16"
          className="hero-geo-detail fill-[var(--brand-green)]"
          opacity="0.85"
        />

        {/* Nodes */}
        <circle
          cx="210"
          cy="286"
          r="4"
          className="hero-geo-plane-3 fill-[var(--brand-green)]"
        />
        <circle
          cx="360"
          cy="220"
          r="3.5"
          className="hero-geo-plane-3 fill-[var(--brand-off-white)]"
        />
        <circle
          cx="404"
          cy="384"
          r="3"
          className="hero-geo-detail fill-[var(--text-muted)]"
        />

        {/* Editorial labels */}
        <g
          className="hero-geo-label"
          style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        >
          <text
            x="64"
            y="92"
            fill="var(--brand-green)"
            fontSize="10"
            letterSpacing="0.16em"
          >
            SYSTEM 001
          </text>
          <text
            x="456"
            y="448"
            textAnchor="end"
            fill="var(--text-muted)"
            fontSize="10"
            letterSpacing="0.14em"
          >
            FORM / FUNCTION
          </text>
          <text
            x="404"
            y="172"
            textAnchor="middle"
            className="hero-geo-detail"
            fill="var(--text-muted)"
            fontSize="9"
            letterSpacing="0.12em"
          >
            DESIGN × ENG
          </text>
        </g>

        {/* Dimension mark */}
        <g className="hero-geo-label hero-geo-detail">
          <line
            x1="72"
            y1="432"
            x2="200"
            y2="432"
            className="stroke-[var(--border-strong)]"
            strokeWidth="1"
          />
          <line
            x1="72"
            y1="426"
            x2="72"
            y2="438"
            className="stroke-[var(--border-strong)]"
            strokeWidth="1"
          />
          <line
            x1="200"
            y1="426"
            x2="200"
            y2="438"
            className="stroke-[var(--border-strong)]"
            strokeWidth="1"
          />
          <text
            x="136"
            y="424"
            textAnchor="middle"
            fill="var(--text-muted)"
            fontSize="9"
            letterSpacing="0.14em"
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
            }}
          >
            MODULAR
          </text>
        </g>
      </svg>
    </div>
  );
}
