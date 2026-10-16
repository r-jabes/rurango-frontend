import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Product development, frontend engineering, and operations software — shown through Umutungo, Umugina, and Rojisitiri.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Capabilities · RURANGO",
    description:
      "Product development, frontend engineering, and operations software from RURANGO.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="What RURANGO can help build"
        description="End-to-end product work and frontend engineering, drawn from the same products linked below."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        }
      />

      <PageContainer className="border-b border-border py-12 md:py-16">
        <SectionHeading
          eyebrow="Capabilities"
          title="Shown in live work"
          description="Each capability points to case studies where you can see the product yourself."
          className="mb-10"
        />
        <div className="border-t border-border">
          {capabilities.map((capability, index) => (
            <CapabilityItem
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </PageContainer>

      <section className="border-b border-border bg-background-secondary">
        <PageContainer className="space-y-8 py-12 md:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <Eyebrow>Delivery approach</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How work moves from problem to release
              </h2>
              <p className="text-foreground-secondary">
                An intended working sequence for product engagements. It
                describes how RURANGO approaches delivery — not a claim about a
                large formal team.
              </p>
            </div>
            <DirectionalLink href="/studio">Studio principles</DirectionalLink>
          </div>
          <ProcessSteps />
        </PageContainer>
      </section>

      <ClosingCta />
    </>
  );
}
