import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroCopy } from "@/components/sections/HeroCopy";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { getFeaturedProjects } from "@/content/projects";

const HERO_HEIGHT = "h-[calc(100svh-4rem)] min-h-[28rem]";

/**
 * Direction A — Product-led: art-directed stack of real project covers.
 * Uses only verified portfolio assets.
 */
export function HeroProductLed() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <AmbientSurface
      intensity="hero"
      glow
      className={`flex ${HERO_HEIGHT} flex-col justify-center border-b border-border`}
    >
      <PageContainer className="grid w-full min-h-0 flex-1 items-center gap-6 py-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:py-8">
        <HeroCopy />

        <div
          aria-hidden="true"
          className="hero-reveal hero-reveal-5 relative mx-auto hidden h-[min(52svh,22rem)] w-full max-w-xl sm:block lg:mx-0 lg:h-[min(58svh,26rem)] lg:max-w-none lg:justify-self-end"
        >
          {featured.map((project, index) => {
            const offsets = [
              "left-[4%] top-[8%] z-[1] w-[78%] rotate-[-3.5deg]",
              "left-[18%] top-[28%] z-[2] w-[78%] rotate-[1.5deg]",
              "left-[10%] top-[48%] z-[3] w-[82%] rotate-[-1deg]",
            ];
            return (
              <div
                key={project.slug}
                className={`absolute overflow-hidden rounded-lg border border-border bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75)] ${offsets[index]}`}
              >
                {project.previewImage ? (
                  <div className="relative aspect-[24/11] w-full">
                    <Image
                      src={project.previewImage}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 420px"
                      className="object-contain object-center p-1"
                      priority={index === 0}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
