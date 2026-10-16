import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroCopy } from "@/components/sections/HeroCopy";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { getFeaturedProjects } from "@/content/projects";

const HERO_HEIGHT = "h-[calc(100svh-4rem)] min-h-[28rem]";

/**
 * Direction C — Experimental: oversized type field + single product fragment
 * and modular frame marks. Evidence-first without stock spectacle.
 */
export function HeroExperimental() {
  const lead = getFeaturedProjects()[0];

  return (
    <AmbientSurface
      intensity="hero"
      grid
      glow
      className={`relative flex ${HERO_HEIGHT} flex-col justify-center overflow-hidden border-b border-border`}
    >
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] z-0 select-none text-center font-semibold leading-none tracking-[-0.04em] text-foreground/[0.04] sm:top-[12%] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem]"
      >
        RURANGO
      </p>

      <PageContainer className="relative z-10 grid w-full min-h-0 flex-1 items-center gap-8 py-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12 lg:py-8">
        <HeroCopy compact />

        <div className="hero-reveal hero-reveal-5 relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="relative rounded-xl border border-border bg-surface/40 p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              <span>Selected signal</span>
              <span className="text-accent">{lead?.title ?? "Work"}</span>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-border bg-brand-charcoal-deep">
              {lead?.previewImage ? (
                <div className="relative aspect-[24/11] w-full">
                  <Image
                    src={lead.previewImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-contain object-center p-1.5"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-[24/11] bg-surface" />
              )}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px] text-foreground-muted">
              <span className="rounded border border-border px-2 py-1.5">
                Product
              </span>
              <span className="rounded border border-border px-2 py-1.5">
                Interface
              </span>
              <span className="rounded border border-border px-2 py-1.5 text-accent">
                Shipped
              </span>
            </div>

            {/* Corner construction marks */}
            <span
              aria-hidden="true"
              className="absolute left-1 top-1 h-3 w-3 border-l border-t border-accent/70"
            />
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 h-3 w-3 border-r border-t border-accent/70"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-accent/70"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-accent/70"
            />
          </div>
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
