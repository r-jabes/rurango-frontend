import { PageContainer } from "@/components/layout/PageContainer";
import { HeroCopy } from "@/components/sections/HeroCopy";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { HeroVisual } from "@/components/visuals/HeroVisual";

const HERO_HEIGHT = "h-[calc(100svh-4rem)] min-h-[28rem]";

/**
 * Direction B — Brand-led: refined architectural geometry (current signature path).
 */
export function HeroBrandLed() {
  return (
    <AmbientSurface
      intensity="hero"
      grid
      glow
      className={`flex ${HERO_HEIGHT} flex-col justify-center border-b border-border`}
    >
      <PageContainer className="grid w-full min-h-0 flex-1 items-center gap-5 py-5 sm:gap-6 sm:py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-8">
        <HeroCopy />

        <div className="hero-reveal hero-reveal-5 relative mx-auto w-full max-w-[14rem] max-[700px]:max-h-[28svh] sm:max-w-[18rem] lg:mx-0 lg:max-w-[min(100%,22rem)] lg:justify-self-end [@media(max-height:640px)]:hidden">
          <HeroVisual />
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
