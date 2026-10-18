import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjectGrid } from "@/components/projects/FeaturedProjectGrid";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software from RURANGO — Umutungo (property operations), Umugina (local marketplace), and Rojisitiri (multi-store retail).",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · RURANGO",
    description:
      "Shipped products that demonstrate RURANGO’s software and web engineering.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected products"
        description="Live software that shows how RURANGO designs and ships websites, applications, and operations platforms — property management, local commerce, and multi-store retail."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Discuss a similar project
          </ButtonLink>
        }
      />
      <PageContainer className="space-y-8 py-12 md:py-16">
        <FeaturedProjectGrid projects={projects} />
      </PageContainer>
      <ClosingCta />
    </>
  );
}
