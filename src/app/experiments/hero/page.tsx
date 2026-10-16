import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { HeroBrandLed } from "@/components/sections/hero/HeroBrandLed";
import { HeroExperimental } from "@/components/sections/hero/HeroExperimental";
import { HeroProductLed } from "@/components/sections/hero/HeroProductLed";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Hero experiments",
  robots: { index: false, follow: false },
};

const directions = [
  {
    id: "a",
    label: "A · Product-led",
    summary:
      "Layered real project covers. Strong evidence of shipped work; denser visual.",
    Hero: HeroProductLed,
  },
  {
    id: "b",
    label: "B · Brand-led",
    summary:
      "Architectural geometry signature. Ownable brand mark; less product proof in-frame.",
    Hero: HeroBrandLed,
  },
  {
    id: "c",
    label: "C · Experimental",
    summary:
      "Oversized type field + framed product signal. Editorial and distinctive.",
    Hero: HeroExperimental,
  },
] as const;

/**
 * Temporary comparison surface for hero directions.
 * Not linked from primary navigation. Safe to remove after selection.
 */
export default function HeroExperimentsPage() {
  return (
    <div className="pb-24">
      <PageContainer className="space-y-4 border-b border-border py-10">
        <Eyebrow>Internal · not indexed</Eyebrow>
        <h1 className="text-3xl font-semibold tracking-tight">
          Hero direction comparison
        </h1>
        <p className="max-w-2xl text-foreground-secondary">
          Three live prototypes using production tokens and real project
          assets. Compare in the browser, then promote the winner to the
          homepage.{" "}
          <Link href="/" className="text-accent underline-offset-2 hover:underline">
            Return home
          </Link>
        </p>
        <nav className="flex flex-wrap gap-3 pt-2 text-sm">
          {directions.map((d) => (
            <a
              key={d.id}
              href={`#hero-${d.id}`}
              className="rounded-md border border-border px-3 py-1.5 text-foreground-secondary transition-colors hover:border-border-strong hover:text-foreground"
            >
              {d.label}
            </a>
          ))}
        </nav>
      </PageContainer>

      {directions.map(({ id, label, summary, Hero }) => (
        <section key={id} id={`hero-${id}`} className="scroll-mt-20">
          <PageContainer className="space-y-2 py-6">
            <h2 className="text-lg font-semibold text-foreground">{label}</h2>
            <p className="max-w-2xl text-sm text-foreground-secondary">
              {summary}
            </p>
          </PageContainer>
          <Hero />
        </section>
      ))}
    </div>
  );
}
