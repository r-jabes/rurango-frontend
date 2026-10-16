import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageIntro } from "@/components/sections/PageIntro";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { principles } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How RURANGO approaches digital product design and engineering.",
};

export default function StudioPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Studio"
        title="Working with intent"
        description="RURANGO is a technology practice focused on designing and engineering useful digital products — without inventing a corporate mythology."
        actions={
          <>
            <ButtonLink href="/work">See the work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </>
        }
      />
      <PageContainer className="space-y-8 py-12 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Principles</h2>
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
    </main>
  );
}
