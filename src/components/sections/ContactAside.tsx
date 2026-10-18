import Link from "next/link";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { ContactMotion } from "@/components/visuals/ContactMotion";
import { site } from "@/content/site";

/**
 * Right-column composition for /contact — motion asset + verified next steps.
 * No invented addresses, phones, or response-time claims.
 */
export function ContactAside() {
  return (
    <aside className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-xl border border-border bg-surface/60 p-6 sm:p-8 lg:sticky lg:top-24 lg:min-h-[32rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,color-mix(in_srgb,var(--brand-green)_8%,transparent),transparent_50%)]"
      />

      <div className="relative z-10 space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Engagements
        </p>
        <p className="max-w-sm text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          From a new site to a full operations platform.
        </p>
        <p className="max-w-sm text-sm text-foreground-secondary">
          Typical inquiries cover websites and web apps, custom software,
          search engine optimization, and Google Business Profile setup for
          Search and Maps.
        </p>
      </div>

      <div className="relative z-10 w-full">
        <ContactMotion />
      </div>

      <div className="relative z-10 space-y-5 border-t border-border pt-6">
        <div className="space-y-2">
          <p className="text-sm text-foreground-secondary">
            Prefer to review the work first?
          </p>
          <DirectionalLink href="/work">Explore selected work</DirectionalLink>
        </div>

        <ul className="space-y-2 text-sm text-foreground-muted">
          <li>
            <Link
              href="/capabilities"
              className="rounded-sm text-foreground-secondary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Services and capabilities
            </Link>
          </li>
          <li>
            <Link
              href="/studio"
              className="rounded-sm text-foreground-secondary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Studio approach
            </Link>
          </li>
        </ul>

        <p className="font-mono text-[11px] tracking-[0.08em] text-foreground-muted">
          {site.name} · Built to outlast
        </p>
      </div>
    </aside>
  );
}
