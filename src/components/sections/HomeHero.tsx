import { HeroExperimental } from "@/components/sections/hero/HeroExperimental";

/**
 * Homepage hero — Direction C (Experimental) selected after comparing
 * product-led, brand-led, and experimental prototypes at /experiments/hero.
 *
 * Why C: pairs brand typography presence with a real product cover signal,
 * keeps CTAs clear, adapts cleanly on mobile, and proves shipped work
 * without a dense overlapping stack. Alternatives remain on the experiments page.
 */
export function HomeHero() {
  return <HeroExperimental />;
}
