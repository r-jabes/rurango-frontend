import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { NotFoundGeometry } from "@/components/visuals/NotFoundGeometry";

export default function NotFound() {
  return (
    <AmbientSurface intensity="subtle" className="relative flex-1">
      <NotFoundGeometry />
      <PageContainer className="relative z-10 flex flex-1 flex-col justify-center py-24 md:py-32">
        <div className="max-w-xl space-y-6">
          <Eyebrow>404</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="text-lg text-foreground-secondary">
            The route you requested does not exist or may have moved. Head home
            or browse the work instead.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/">Back home</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              View work
            </ButtonLink>
          </div>
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
