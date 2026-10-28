export type Capability = {
  title: string;
  /** One line — used where a service is listed outside /capabilities. */
  summary: string;
  description: string;
  problem: string;
  deliverables: string[];
  relatedSlugs: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Custom software development",
    summary:
      "Applications for workflows that have outgrown spreadsheets and chat threads.",
    description:
      "Purpose-built applications for workflows that outgrow spreadsheets, chat threads, and disconnected tools — from internal systems to multi-user platforms.",
    problem:
      "Generic tools force teams to adapt their process to the software. Important rules live in people’s heads, and reporting stays incomplete.",
    deliverables: [
      "Requirements framing and role-based access design",
      "Application architecture, APIs, and data models",
      "Implementation, deployment, and handover documentation",
    ],
    relatedSlugs: ["umutungo", "rojisitiri", "umugina"],
  },
  {
    title: "Websites and web applications",
    summary:
      "Business sites, customer portals, and dashboards that load fast and are easy to update.",
    description:
      "Marketing sites, customer-facing web apps, dashboards, and portals — designed for clarity on mobile and desktop, then engineered for maintainable delivery.",
    problem:
      "Many businesses need a credible public site or a working web app, not a disposable template that is slow, hard to update, or weak in search.",
    deliverables: [
      "Information architecture and page structure",
      "Responsive UI implementation with accessible interactions",
      "Forms, content models, and production deployment",
    ],
    relatedSlugs: ["umugina", "umutungo"],
  },
  {
    title: "Search engine optimization (SEO)",
    summary:
      "Technical and on-page fixes so the right pages can be found for the right searches.",
    description:
      "Technical and on-page SEO so pages can be crawled, understood, and ranked for the queries that match your services.",
    problem:
      "A site that looks finished can still be invisible: weak titles, missing structure, slow pages, or content that never states what the business actually offers.",
    deliverables: [
      "Technical SEO review (crawlability, metadata, indexing basics)",
      "On-page structure: titles, descriptions, headings, internal links",
      "Content recommendations tied to real services and locations",
    ],
    relatedSlugs: [],
  },
  {
    title: "Google Business Profile and local search",
    summary: "A complete, verified listing on Google Search and Maps.",
    description:
      "Setup and optimization of Google Business Profile so the business appears correctly on Google Search and Google Maps — categories, hours, photos, and listing consistency.",
    problem:
      "Customers search nearby businesses on Google. Incomplete or unverified profiles, inconsistent name/address/phone data, and weak categories reduce discoverability.",
    deliverables: [
      "Google Business Profile creation or cleanup",
      "Verification support and profile optimization",
      "Guidance on photos, categories, posts, and review responses",
    ],
    relatedSlugs: [],
  },
  {
    title: "Frontend engineering",
    summary:
      "Accessible, responsive interfaces built on a maintainable component system.",
    description:
      "Interfaces with clear hierarchy, responsive layouts, accessible controls, and reusable component systems — the same standard applied to this portfolio.",
    problem:
      "Products lose trust when the UI is fragile, inaccessible, or inconsistent — even when the underlying idea is sound.",
    deliverables: [
      "Responsive, keyboard-accessible interfaces",
      "Design tokens and maintainable component libraries",
      "Performance-conscious rendering and reduced-motion support",
    ],
    relatedSlugs: ["umugina", "umutungo"],
  },
  {
    title: "Operations platforms",
    summary:
      "Rent, stock, credit, and reporting tools for the people running day-to-day operations.",
    description:
      "Software for day-to-day operations: property and lease management, shop inventory and sales, and marketplace discovery for local commerce.",
    problem:
      "When notebooks and chats run the business, arrears hide, stock drifts, and decisions arrive too late.",
    deliverables: [
      "Ops tools for rent, inventory, credit, and reporting",
      "Role-appropriate access for owners, managers, and staff",
      "Clear separation between public surfaces and private ledgers",
    ],
    relatedSlugs: ["umutungo", "rojisitiri", "umugina"],
  },
];

/** Practices shown on /studio — each one points to something visible in the work. */
export const howWeWork = [
  {
    title: "Start from the workflow",
    description:
      "Each product begins with how the work is done today: who records what, where it breaks, and what the owner needs to see. Umutungo treats month-end as a real workflow, and Rojisitiri reports across stores rather than one till.",
  },
  {
    title: "Keep public and private apart",
    description:
      "Public pages and private ledgers are separate surfaces. Umutungo keeps property operations apart from its public listings, and access follows the role.",
  },
  {
    title: "Build for the device in hand",
    description:
      "Layouts are recomposed for narrow screens, controls are labelled, focus is visible, and motion respects reduced-motion settings. This site is held to the same bar.",
  },
  {
    title: "Show status, claim only what is verified",
    description:
      "Every project is marked shipped, soft launch, or concept. Outcomes appear only when they can be backed up.",
  },
] as const;

export const processSteps = [
  {
    title: "Scope the problem and constraints",
    description:
      "Clarify goals, users, budget and timeline constraints, and whether the need is a website, application, platform, SEO work, or Google Business Profile setup.",
  },
  {
    title: "Define the approach",
    description:
      "Agree on deliverables, information architecture or profile structure, technical approach, and success criteria before implementation begins.",
  },
  {
    title: "Design and build",
    description:
      "Implement the interface, systems, or listing work with clear milestones — keeping private data, public pages, and ownership boundaries explicit.",
  },
  {
    title: "Validate quality",
    description:
      "Check usability, accessibility, performance, and indexing readiness. Confirm forms, metadata, and profile details before launch.",
  },
  {
    title: "Launch and iterate",
    description:
      "Ship a coherent release, review Search Console or listing status where relevant, and refine based on how the live product or profile performs.",
  },
] as const;
