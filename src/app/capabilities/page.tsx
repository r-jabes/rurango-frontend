import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqList } from "@/components/sections/FaqList";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, serviceFaq } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, websites and web apps, SEO, and Google Business Profile setup — each with its scope, what to bring, and related work.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Services · RURANGO",
    description:
      "Custom software, websites and web applications, SEO, and Google Business Profile — each with its scope, what to bring, and related work.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Software, web, and search visibility"
        description="Four services: build the software, build the website, make it findable on Google, and make the business appear correctly on Maps."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Describe your project
          </ButtonLink>
        }
      />

      <PageContainer className="border-b border-border py-12 md:py-16">
        <SectionHeading
          eyebrow="Offerings"
          title="Services in detail"
          description="Each service lists the problem it addresses, who it is for, what you receive, what to bring, and the related projects."
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
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </PageContainer>

      <section className="border-b border-border bg-background-secondary">
        <PageContainer className="space-y-8 py-12 md:py-16">
          <SectionHeading
            eyebrow="Questions"
            title="Before you get in touch"
            description="Short answers on how work starts and what to expect."
          />
          <FaqList items={serviceFaq} />
        </PageContainer>
      </section>

      <ClosingCta />
    </>
  );
}
