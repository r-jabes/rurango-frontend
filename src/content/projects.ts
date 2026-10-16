/**
 * Portfolio projects — public facts only.
 * Role/ownership details should be confirmed before publishing case studies.
 * Do not invent metrics, clients, or testimonials.
 */

export type ProjectStatus = "shipped" | "in-progress" | "soft-launch" | "concept";
export type ProjectType = "product" | "client" | "internal" | "personal" | "concept";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  projectType: ProjectType;
  status: ProjectStatus;
  year?: number;
  role?: string;
  scope?: string[];
  technologies?: string[];
  liveUrl: string;
  featured?: boolean;
  context?: string;
  problem?: string;
  approach?: string;
  capabilities?: string[];
  notes?: string;
};

export const projects: Project[] = [
  {
    title: "Umutungo",
    slug: "umutungo",
    summary:
      "Property operations and public listings for landlords and agencies in Rwanda and East Africa — rent, units, expenses, maintenance, and vacancy fill on one account.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    liveUrl: "https://umutungo.co",
    featured: true,
    context:
      "A PropTech workspace for RWF-native rent tracking and portfolio operations, with a public listings surface for vacant inventory.",
    problem:
      "Rent status, lease timelines, expenses, and maintenance often live in notebooks, WhatsApp threads, and fragile spreadsheets — making arrears, vacancies, and month-close hard to trust.",
    approach:
      "Separate private ops (units, leases, rent, expenses, maintenance, monthly close) from a public listings host that publishes vacant units and captures prospects without exposing ops data.",
    capabilities: [
      "Rent & lease tracking",
      "Expenses and monthly property close",
      "Maintenance workflows",
      "Vacant-unit listing publish and prospect pipeline",
      "Landlord, agent, and agency plan models",
      "Tenant portal for payment claims and maintenance reports",
    ],
    notes:
      "Site includes illustrative customer quotes labeled as pilot-ready stories — do not present those as verified testimonials.",
  },
  {
    title: "Umugina",
    slug: "umugina",
    summary:
      "A Rwanda-focused marketplace that helps shoppers discover products from local sellers, compare options, and know where to find them before leaving home.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    liveUrl: "https://umugina.com",
    featured: true,
    context:
      "Local discovery marketplace connecting customers, businesses, and sales agents around structured product catalogs.",
    problem:
      "Shoppers waste time moving shop to shop hoping to find the right product, while local businesses rely on unstructured social posts that are hard to search and trust.",
    approach:
      "Publish searchable seller catalogs with prices, stock signals, and locations; support customer discovery, business dashboards, and agent referral commissions.",
    capabilities: [
      "Product explore by category",
      "Seller locations and stock status",
      "Business catalog publishing",
      "Sales agent referral and commission tracking",
      "Verification-oriented trust cues",
    ],
  },
  {
    title: "Rojisitiri",
    slug: "rojisitiri",
    summary:
      "A retail operating system for shops that scale — inventory, point of sale, customer credit, and multi-store growth in one calm workspace.",
    projectType: "product",
    status: "soft-launch",
    year: 2026,
    liveUrl: "https://rojisitiri.com",
    featured: true,
    context:
      "Retail back-office and floor operations product currently onboarding a limited set of businesses through personal setup rather than open self-serve signup.",
    problem:
      "Growing shops struggle when sales, stock, credit ledgers, and reporting live in disconnected tools — shelves disagree with the system and owners lack a clear operating picture.",
    approach:
      "Unify POS, inventory, transfers, customer credit, and owner reporting; soft-launch with hands-on onboarding of stores, catalog patterns, and team roles.",
    capabilities: [
      "Point of sale with ticket history",
      "Inventory, transfers, and purchases",
      "Customer credit ledgers beside sales",
      "Owner-facing sales and product reports",
      "Multi-store growth path",
    ],
    notes:
      "Public site frames access as request-based soft launch. Do not describe as a fully open self-serve product until that changes.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
