import { cn } from "@/lib/cn";

type ContactSignatureProps = {
  className?: string;
};

/**
 * Bespoke architectural composition for the contact aside.
 * Decorative geometry + brand structure — not a stock illustration.
 */
export function ContactSignature({ className }: ContactSignatureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-square w-full max-w-[22rem] overflow-hidden",
        className,
      )}
    >
      <svg
        viewBox="0 0 420 420"
        className="contact-signature h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="contact-glow" cx="70%" cy="30%" r="55%">
            <stop
              offset="0%"
              stopColor="var(--brand-green)"
              stopOpacity="0.18"
            />
            <stop offset="55%" stopColor="var(--brand-green)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="420" height="420" fill="url(#contact-glow)" />

        {/* Construction grid */}
        <g opacity="0.4" className="contact-sig-grid">
          {Array.from({ length: 7 }, (_, i) => {
            const v = 60 + i * 50;
            return (
              <g key={i}>
                <line
                  x1={v}
                  y1="48"
                  x2={v}
                  y2="372"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.75"
                />
                <line
                  x1="48"
                  y1={v}
                  x2="372"
                  y2={v}
                  stroke="var(--border-subtle)"
                  strokeWidth="0.75"
                />
              </g>
            );
          })}
        </g>

        {/* Outer frame */}
        <rect
          className="contact-sig-frame"
          x="52"
          y="52"
          width="316"
          height="316"
          rx="4"
          stroke="var(--border-strong)"
          strokeWidth="1.25"
        />

        {/* Layered planes */}
        <rect
          className="contact-sig-plane"
          x="78"
          y="92"
          width="168"
          height="112"
          rx="3"
          fill="color-mix(in srgb, var(--brand-charcoal-raised) 88%, transparent)"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />
        <rect
          className="contact-sig-plane"
          x="168"
          y="168"
          width="152"
          height="128"
          rx="3"
          fill="color-mix(in srgb, var(--surface-secondary) 70%, transparent)"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />
        <rect
          className="contact-sig-plane"
          x="108"
          y="248"
          width="120"
          height="72"
          rx="3"
          fill="color-mix(in srgb, var(--brand-charcoal-deep) 80%, transparent)"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />

        {/* Accent module */}
        <rect
          className="contact-sig-accent"
          x="286"
          y="78"
          width="48"
          height="48"
          rx="3"
          fill="color-mix(in srgb, var(--brand-green) 88%, transparent)"
        />
        <path
          className="contact-sig-line"
          d="M102 148 H246 M246 148 V236 M186 236 H288"
          stroke="var(--brand-green)"
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.85"
        />

        {/* Corner marks */}
        <path
          d="M52 76 V52 H76 M344 52 H368 V76 M368 344 V368 H344 M76 368 H52 V344"
          stroke="var(--brand-off-white)"
          strokeWidth="1.25"
          opacity="0.55"
        />

        <text
          x="86"
          y="128"
          fill="var(--text-muted)"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          letterSpacing="0.12em"
          className="contact-sig-label"
        >
          FORM
        </text>
        <text
          x="186"
          y="214"
          fill="var(--text-muted)"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          letterSpacing="0.12em"
          className="contact-sig-label"
        >
          FUNCTION
        </text>
      </svg>
    </div>
  );
}
