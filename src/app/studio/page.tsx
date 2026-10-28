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
import { howWeWork } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How RURANGO works: the practices behind its products and the five steps a project follows from first message to launch.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio · RURANGO",
    description:
      "The practices and delivery process behind RURANGO’s software, web, and search visibility work.",
    url: "/studio",
  },
};

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="How RURANGO works"
        description="The practices behind the products on this site, and the steps a project follows from first message to launch."
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
          eyebrow="Practices"
          title="What stays constant from project to project"
          description="Four habits that show up in the shipped work."
          action={
            <DirectionalLink href="/capabilities">Services</DirectionalLink>
          }
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {howWeWork.map((practice, index) => (
            <li key={practice.title}>
              <PrincipleCard
                title={practice.title}
                description={practice.description}
                index={index}
              />
            </li>
          ))}
        </ul>
      </PageContainer>

      <section
        id="process"
        className="scroll-mt-24 border-b border-border bg-background-secondary"
      >
        <PageContainer className="space-y-8 py-12 md:py-16">
          <div className="max-w-2xl space-y-3">
            <Eyebrow>Process</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From first message to launch
            </h2>
            <p className="text-foreground-secondary">
              Five steps, in order. How deep each one goes depends on whether
              the job is a product, a website, or a search visibility
              engagement.
            </p>
          </div>
          <ProcessSteps />
        </PageContainer>
      </section>

      <ClosingCta />
    </>
  );
}
