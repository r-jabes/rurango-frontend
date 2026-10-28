export type ServiceInquiryType = "software" | "website" | "seo" | "gbp";

export type Capability = {
  /** Anchor id on /capabilities. */
  id: string;
  /** Value of the matching option in the contact form's inquiry type. */
  inquiryType: ServiceInquiryType;
  title: string;
  /** One line — used where a service is listed outside /capabilities. */
  summary: string;
  description: string;
  problem: string;
  forWhom: string;
  deliverables: string[];
  /** What the client needs to bring to get started. */
  youProvide: string[];
  relatedSlugs: string[];
};

export const capabilities: Capability[] = [
  {
    id: "software",
    inquiryType: "software",
    title: "Custom software and operations platforms",
    summary:
      "Applications for the work that spreadsheets and chat threads can no longer hold: rent, stock, credit, approvals, and reporting.",
    description:
      "Purpose-built applications for businesses whose daily operations have outgrown spreadsheets and chat threads — from property and lease management to multi-store retail and local marketplaces.",
    problem:
      "Generic tools force teams to adapt their process to the software. When notebooks and chats run the business, arrears hide, stock drifts, and decisions arrive late.",
    forWhom:
      "Owners and managers who track rent, stock, credit, or approvals by hand and need one reliable record.",
    deliverables: [
      "Workflow and requirements framing, with role-based access design",
      "Application architecture, APIs, and data models",
      "Operations features such as rent, inventory, credit, and reporting",
      "Deployment and handover documentation",
    ],
    youProvide: [
      "How the work is done today, step by step",
      "Who uses it, and what each role should see",
      "Sample spreadsheets, forms, or reports you rely on now",
    ],
    relatedSlugs: ["umutungo", "rojisitiri", "umugina"],
  },
  {
    id: "websites",
    inquiryType: "website",
    title: "Websites and web applications",
    summary:
      "Business sites, customer portals, and dashboards that load fast and are easy to update.",
    description:
      "Marketing sites, customer-facing web apps, dashboards, and portals — designed for clarity on mobile and desktop, and built as accessible, responsive interfaces on a maintainable component system.",
    problem:
      "Many businesses need a credible public site or a working web app, not a disposable template that is slow, hard to update, or weak in search.",
    forWhom:
      "Businesses that need a clear public presence, a product catalogue, or a customer-facing application.",
    deliverables: [
      "Information architecture and page structure",
      "Responsive, keyboard-accessible interface implementation",
      "Forms, content models, and production deployment",
      "Design tokens and reusable components for future changes",
    ],
    youProvide: [
      "Your goals, and who the site is for",
      "Existing branding, logo, and copy — or a note that the copy needs writing",
      "Examples of sites you like or want to avoid",
    ],
    relatedSlugs: ["ipshap", "umugina", "umutungo"],
  },
  {
    id: "seo",
    inquiryType: "seo",
    title: "Search engine optimization (SEO)",
    summary:
      "Technical and on-page fixes so the right pages can be found for the right searches.",
    description:
      "Technical and on-page SEO so pages can be crawled, understood, and ranked for the queries that match your services.",
    problem:
      "A site that looks finished can still be invisible: weak titles, missing structure, slow pages, or content that never states what the business actually offers.",
    forWhom:
      "Businesses with a website that looks finished but is hard to find on Google.",
    deliverables: [
      "Technical SEO review (crawlability, metadata, indexing basics)",
      "On-page structure: titles, descriptions, headings, internal links",
      "Content recommendations tied to real services and locations",
    ],
    youProvide: [
      "Your website address, and Google Search Console access if you have it",
      "The services and locations you want to be found for",
      "Any SEO work already done",
    ],
    relatedSlugs: [],
  },
  {
    id: "google-business-profile",
    inquiryType: "gbp",
    title: "Google Business Profile and local search",
    summary: "A complete, verified listing on Google Search and Maps.",
    description:
      "Setup and optimization of Google Business Profile so the business appears correctly on Google Search and Google Maps — categories, hours, photos, and listing consistency.",
    problem:
      "Customers search nearby businesses on Google. Incomplete or unverified profiles, inconsistent name, address, and phone details, and weak categories reduce discoverability.",
    forWhom:
      "Local businesses whose customers look for them on Google Search and Maps.",
    deliverables: [
      "Google Business Profile creation or cleanup",
      "Verification support and profile optimization",
      "Guidance on photos, categories, posts, and review responses",
    ],
    youProvide: [
      "Business name, address, phone, and opening hours as they should appear",
      "Photos of the premises, products, or team",
      "Access to any existing Google listing",
    ],
    relatedSlugs: [],
  },
];

export const serviceFaq = [
  {
    question: "How does a project start?",
    answer:
      "Send a short description through the contact form: what you want to achieve, who it is for, and any deadline. The first step is scoping the problem and constraints, before anything is built. The full sequence is on the studio page.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Your goal, the people who will use the result, a deadline if there is one, and links to your current website, spreadsheets, or Google listing. Each service above lists what is most useful to bring.",
  },
  {
    question: "Can I see working examples?",
    answer:
      "Yes. The work page shows live products and a client website, each with its status, the problem it addresses, and the decisions behind it.",
  },
  {
    question: "Can you improve a site or system I already have?",
    answer:
      "Yes. SEO and Google Business Profile work normally start from an existing site or listing. For software and websites, scope is set after reviewing what exists and deciding whether to extend or replace it.",
  },
  {
    question: "How is SEO progress measured?",
    answer:
      "From Google Search Console: indexing status, impressions, and clicks for the pages that matter. Rankings depend on Google, so a specific position is not promised.",
  },
  {
    question: "Who verifies a Google Business Profile?",
    answer:
      "Google does. RURANGO prepares the profile, supports the verification steps, and completes categories, hours, photos, and consistent business details.",
  },
] as const;

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
