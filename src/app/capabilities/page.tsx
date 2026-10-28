import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
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
          description="Each service lists the problem it addresses, what you receive, and the related projects."
          className="mb-10"
          action={
            <DirectionalLink href="/studio#process">
              How a project runs
            </DirectionalLink>
          }
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

      <ClosingCta />
    </>
  );
}
