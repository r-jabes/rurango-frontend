import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected digital products from RURANGO — property operations, local commerce, and retail systems.",
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Work"
        title="Selected products"
        description="Genuine projects with public product surfaces. Case studies expand in the next phase."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Discuss a project
          </ButtonLink>
        }
      />
      <PageContainer className="py-12 md:py-16">
        <ProjectGrid projects={projects} />
      </PageContainer>
    </main>
  );
}
