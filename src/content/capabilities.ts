export type Capability = {
  title: string;
  description: string;
  problem: string;
  deliverables: string[];
  relatedSlugs: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Digital product development",
    description:
      "From problem framing through shipped software — interfaces and systems people can run day to day.",
    problem:
      "Products stall when the problem, the interface, and the build are treated as separate jobs — or when the result never becomes something a real team can trust.",
    deliverables: [
      "Clear problem framing and experience definition",
      "Shipped products with distinct roles for each participant",
      "Launch paths that fit the moment, including soft launch when focus matters",
    ],
    relatedSlugs: ["umutungo", "umugina", "rojisitiri"],
  },
  {
    title: "Frontend engineering",
    description:
      "Interfaces with strong hierarchy, responsive layouts, accessible interactions, and maintainable component systems.",
    problem:
      "Products lose credibility when the UI is fragile, inaccessible, or inconsistent — even if the underlying idea is sound.",
    deliverables: [
      "Responsive, keyboard-accessible interfaces",
      "Reusable component systems and design tokens",
      "Performance-conscious rendering and reduced-motion support",
    ],
    relatedSlugs: ["umugina", "umutungo"],
  },
  {
    title: "Operations platforms",
    description:
      "Software for the work that already happens: rent and leases, shop inventory and sales, local marketplace discovery.",
    problem:
      "When notebooks, chats, and disconnected tools run the business, arrears hide, stock drifts, and credit risk shows up too late.",
    deliverables: [
      "Ops tools for rent, inventory, credit, and reporting",
      "Access that fits owners, managers, agents, and teams",
      "Public listings or marketplaces kept separate from private ledgers",
    ],
    relatedSlugs: ["umutungo", "rojisitiri", "umugina"],
  },
];

export const principles = [
  {
    title: "Clarity before complexity",
    description:
      "Structure, typography, and hierarchy come first. Effects support the message rather than replace it.",
  },
  {
    title: "Craft in the details",
    description:
      "Focus states, empty states, spacing, and media treatment are part of the product — not polish left for later.",
  },
  {
    title: "Engineering with purpose",
    description:
      "Architecture and implementation choices should make the product easier to use, maintain, and extend.",
  },
  {
    title: "Performance by design",
    description:
      "Lightweight rendering, honest loading behavior, and reduced-motion support are design requirements.",
  },
] as const;

/** Intended delivery sequence — not a claim about a large formal team. */
export const processSteps = [
  {
    title: "Understand the problem and constraints",
    description:
      "Start with who the product is for, what must remain true operationally, and which constraints (currency, roles, launch mode) shape the solution.",
  },
  {
    title: "Define the experience and technical approach",
    description:
      "Translate the problem into participant flows, information architecture, and an implementation path that can ship without inventing scale.",
  },
  {
    title: "Design and implement the solution",
    description:
      "Build the interface and systems together — keeping private ops, public surfaces, and role boundaries explicit.",
  },
  {
    title: "Test usability, accessibility, and reliability",
    description:
      "Check keyboard paths, reduced motion, empty and error states, and whether the product still makes sense without decorative effects.",
  },
  {
    title: "Deliver, review, and improve",
    description:
      "Ship a coherent release, review what the live product teaches, and refine — including soft-launch onboarding when focus beats open signup.",
  },
] as const;

export const qualityStandards = [
  {
    title: "Responsive composition",
    description:
      "Layouts are recomposed for narrow viewports — not simply stacked desktop sections.",
  },
  {
    title: "Accessibility as quality",
    description:
      "Semantic structure, visible focus, labeled controls, and reduced-motion support are part of the definition of done.",
  },
  {
    title: "Maintainable systems",
    description:
      "Shared tokens and components keep the portfolio and product surfaces consistent without fragile one-offs.",
  },
  {
    title: "Honest content",
    description:
      "Claims stay within verified work. Concepts, soft launches, and illustrative stories are labeled — never presented as fabricated proof.",
  },
] as const;
