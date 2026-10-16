import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, principles } from "@/content/capabilities";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main>
      <PageContainer className="border-b border-border py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <Eyebrow>Technology portfolio</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.tagline}
          </h1>
          <p className="max-w-xl text-lg text-foreground-secondary">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/work" size="large">
              Explore work
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="large">
              Contact
            </ButtonLink>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="space-y-10 py-16 md:py-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Products in the wild"
          description="Three live products spanning property operations, local commerce, and retail systems."
          action={<DirectionalLink href="/work">View all work</DirectionalLink>}
        />
        <ProjectGrid projects={featured} />
      </PageContainer>

      <section className="border-y border-border bg-background-secondary">
        <PageContainer className="space-y-8 py-16 md:py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="What RURANGO can build"
            description="Capabilities grounded in shipped product work — not a generic services list."
            action={
              <DirectionalLink href="/capabilities">
                All capabilities
              </DirectionalLink>
            }
          />
          <div>
            {capabilities.map((item, index) => (
              <CapabilityItem
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      <PageContainer className="space-y-8 py-16 md:py-20">
        <SectionHeading
          eyebrow="Studio"
          title="Working principles"
          description="Proposed principles that guide how the work is designed and engineered."
          action={<DirectionalLink href="/studio">About the studio</DirectionalLink>}
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

      <section className="border-t border-border bg-brand-charcoal-deep">
        <PageContainer className="flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-xl space-y-3">
            <Eyebrow>Next step</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Discuss a project or opportunity
            </h2>
            <p className="text-foreground-secondary">
              If you have a product to build, improve, or launch — start the
              conversation.
            </p>
          </div>
          <ButtonLink href="/contact" size="large">
            Get in touch
          </ButtonLink>
        </PageContainer>
      </section>
    </main>
  );
}
