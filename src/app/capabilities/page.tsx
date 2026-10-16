import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { capabilities } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Digital product development, frontend engineering, and operations platforms from RURANGO.",
};

export default function CapabilitiesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Capabilities"
        title="What RURANGO builds"
        description="Services and technical strengths supported by real product work across property, commerce, and retail."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Start a conversation
          </ButtonLink>
        }
      />
      <PageContainer className="py-12 md:py-16">
        {capabilities.map((item, index) => (
          <CapabilityItem
            key={item.title}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </PageContainer>
    </main>
  );
}
