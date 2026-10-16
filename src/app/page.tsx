import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjectGrid } from "@/components/projects/FeaturedProjectGrid";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/visuals/Reveal";
import { capabilities, principles } from "@/content/capabilities";
import { getFeaturedProjects } from "@/content/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main>
      <HomeHero />

      <Reveal>
        <PageContainer className="space-y-10 py-16 md:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Products in the wild"
            description="Three live products spanning property operations, local commerce, and retail systems."
            action={
              <DirectionalLink href="/work">View all work</DirectionalLink>
            }
          />
          <FeaturedProjectGrid projects={featured} />
        </PageContainer>
      </Reveal>

      <section className="border-y border-border bg-background-secondary">
        <Reveal>
          <PageContainer className="space-y-10 py-16 md:py-24">
            <SectionHeading
              eyebrow="Capabilities"
              title="What RURANGO can build"
              description="Capabilities grounded in shipped product work — not a generic services catalogue."
              action={
                <DirectionalLink href="/capabilities">
                  All capabilities
                </DirectionalLink>
              }
            />
            <div className="border-t border-border">
              {capabilities.map((capability, index) => (
                <CapabilityItem
                  key={capability.title}
                  capability={capability}
                  index={index}
                  compact
                />
              ))}
            </div>
          </PageContainer>
        </Reveal>
      </section>

      <Reveal>
        <PageContainer className="space-y-10 py-16 md:py-24">
          <SectionHeading
            eyebrow="Studio"
            title="Working principles"
            description="A quieter frame for how the work is designed and engineered."
            action={
              <DirectionalLink href="/studio">About the studio</DirectionalLink>
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
      </Reveal>

      <ClosingCta />
    </main>
  );
}
