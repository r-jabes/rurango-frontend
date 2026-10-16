import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { HeroGeometry } from "@/components/visuals/HeroGeometry";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <AmbientSurface
      intensity="hero"
      grid
      glow
      className="border-b border-border"
    >
      <PageContainer className="grid items-center gap-12 py-16 md:gap-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-28">
        <div className="relative z-10 max-w-xl space-y-6">
          <div className="hero-reveal hero-reveal-1">
            <Eyebrow>RURANGO · Technology portfolio</Eyebrow>
          </div>
          <h1 className="hero-reveal hero-reveal-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            Digital experiences,{" "}
            <span className="text-accent">engineered</span> with intent.
          </h1>
          <p className="hero-reveal hero-reveal-3 max-w-lg text-lg text-foreground-secondary">
            {site.description}
          </p>
          <div className="hero-reveal hero-reveal-4 flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/work" size="large">
              Explore work
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="large">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-5 relative">
          <HeroGeometry />
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
