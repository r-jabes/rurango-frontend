import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroCopy } from "@/components/sections/HeroCopy";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { getFeaturedProjects } from "@/content/projects";

const HERO_HEIGHT = "h-[calc(100svh-4rem)] min-h-[28rem]";

/**
 * Direction C — Experimental: brand type field + multi-project evidence.
 * Shows every featured product, not a single cover.
 */
export function HeroExperimental() {
  const featured = getFeaturedProjects();

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

      <PageContainer className="relative z-10 grid w-full min-h-0 flex-1 items-center gap-6 py-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:py-8">
        <HeroCopy compact />

        <div className="hero-reveal hero-reveal-5 relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative rounded-xl border border-border bg-surface/40 p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              <span>Selected work</span>
              <span className="text-accent">
                {String(featured.length).padStart(2, "0")} products
              </span>
            </div>

            {/* Staggered stack — all featured covers visible */}
            <div
              aria-hidden="true"
              className="relative mx-auto h-[min(36svh,14.5rem)] w-full max-w-md sm:h-[min(40svh,16.5rem)]"
            >
              {featured.map((project, index) => {
                const layers = [
                  "left-[2%] top-[4%] z-[1] w-[78%] -rotate-[4deg] opacity-75",
                  "left-[12%] top-[18%] z-[2] w-[80%] rotate-[2deg] opacity-90",
                  "left-[6%] top-[34%] z-[3] w-[86%] -rotate-[0.5deg]",
                ];
                const layer = layers[index] ?? layers[layers.length - 1];

                return (
                  <div
                    key={project.slug}
                    className={`absolute overflow-hidden rounded-md border border-border bg-brand-charcoal-deep shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)] ${layer}`}
                  >
                    {project.previewImage ? (
                      <div className="relative aspect-[24/11] w-full">
                        <Image
                          src={project.previewImage}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 70vw, 380px"
                          className="object-contain object-center p-1"
                          priority={index === 0}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Named project index — equal weight for each product */}
            <ul
              className="relative z-10 mt-4 grid gap-2 border-t border-border pt-3"
              style={{
                gridTemplateColumns: `repeat(${Math.max(featured.length, 1)}, minmax(0, 1fr))`,
              }}
            >
              {featured.map((project, index) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block rounded-md px-1 py-1.5 transition-colors hover:bg-surface-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <p className="font-mono text-[10px] text-foreground-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-0.5 truncate text-xs font-medium text-foreground group-hover:text-accent sm:text-sm">
                      {project.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

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
