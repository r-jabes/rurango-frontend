import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";

export function ClosingCta() {
  return (
    <AmbientSurface
      intensity="cta"
      glow
      grid
      className="border-t border-border"
    >
      <PageContainer className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="relative z-10 max-w-xl space-y-4">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Discuss a website, application, or search visibility project
          </h2>
          <p className="text-foreground-secondary">
            Whether you need custom software, a business website, SEO, or a
            Google Business Profile that appears correctly on Maps — describe
            the work and we will respond with clear next steps.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="large">
            Contact RURANGO
          </ButtonLink>
          <ButtonLink href="/capabilities" variant="secondary" size="large">
            Browse services
          </ButtonLink>
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
