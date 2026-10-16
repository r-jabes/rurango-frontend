import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles, qualityStandards } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How RURANGO approaches digital product design and engineering — principles, process, and quality standards.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio · RURANGO",
    description:
      "How RURANGO approaches digital product design and engineering.",
    url: "/studio",
  },
};

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="Working with intent"
        description="RURANGO designs and builds software. The portfolio is the proof — not a corporate story or fictional team."
        grid
        actions={
          <>
            <ButtonLink href="/work">See the work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </>
        }
      />

      <PageContainer className="space-y-10 border-b border-border py-12 md:py-16">
        <SectionHeading
          eyebrow="Principles"
          title="How decisions get made"
          description="Working principles that keep interfaces clear, code maintainable, and claims honest."
          action={
            <DirectionalLink href="/capabilities">Capabilities</DirectionalLink>
          }
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <PrincipleCard
                title={principle.title}
                description={principle.description}
                index={index}
              />
            </li>
          ))}
        </ul>
      </PageContainer>

      <section className="border-b border-border bg-background-secondary">
        <PageContainer className="space-y-8 py-12 md:py-16">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              An intended delivery sequence
            </h2>
            <p className="text-foreground-secondary">
              This is how RURANGO intends to take work from problem to release.
              It is a working approach — not a promise of unlimited capacity or
              an established multi-person agency structure.
            </p>
          </div>
          <ProcessSteps />
        </PageContainer>
      </section>

      <PageContainer className="space-y-10 py-12 md:py-16">
        <SectionHeading
          eyebrow="Quality"
          title="Standards that travel with the work"
          description="Practical bars for responsiveness, accessibility, maintainability, and content integrity."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {qualityStandards.map((standard, index) => (
            <li key={standard.title}>
              <PrincipleCard
                title={standard.title}
                description={standard.description}
                index={index}
              />
            </li>
          ))}
        </ul>
      </PageContainer>

      <ClosingCta />
    </>
  );
}
