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
  title: "Services & capabilities",
  description:
    "Custom software development, websites and web applications, search engine optimization (SEO), Google Business Profile setup, frontend engineering, and operations platforms from RURANGO.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Services & capabilities · RURANGO",
    description:
      "Software development, web development, SEO, and Google Business Profile services — with product work as evidence.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Software, web, and search visibility"
        description="RURANGO builds websites, applications, and platforms — and helps businesses become discoverable through search engine optimization and Google Business Profile setup on Search and Maps."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Request a proposal
          </ButtonLink>
        }
      />

      <PageContainer className="border-b border-border py-12 md:py-16">
        <SectionHeading
          eyebrow="Offerings"
          title="Services in detail"
          description="Where a capability has shipped product evidence, links to the relevant case studies appear below. SEO and Google Business Profile work are offered as discrete service engagements."
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
                How engagements typically proceed
              </h2>
              <p className="text-foreground-secondary">
                An intended working sequence for product and service work. It
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
