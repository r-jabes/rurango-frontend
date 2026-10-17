/**
 * Portfolio projects — public facts only.
 * Do not invent metrics, clients, or testimonials.
 * Role is framed as RURANGO product work; refine if ownership differs.
 *
 * Optional Studio CMS supplements live in cms-projects.generated.json
 * (via `npm run content:pull`). Static entries in this file always win
 * on slug conflicts so the live portfolio stays intact until intentionally
 * migrated.
 */

import cmsGenerated from "./cms-projects.generated.json";

export type ProjectStatus =
  | "shipped"
  | "in-progress"
  | "soft-launch"
  | "concept";

export type ProjectType =
  | "product"
  | "client"
  | "internal"
  | "personal"
  | "concept";

export type ProjectDecision = {
  title: string;
  detail: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  projectType: ProjectType;
  status: ProjectStatus;
  year?: number;
  role?: string;
  audience?: string;
  scope?: string[];
  constraints?: string[];
  technologies?: string[];
  liveUrl: string;
  /** Public path under /public, e.g. /work/umutungo/cover.png */
  previewImage?: string;
  featured?: boolean;
  context?: string;
  problem?: string;
  approach?: string;
  decisions?: ProjectDecision[];
  implementation?: string;
  outcomes?: string[];
  learnings?: string[];
  capabilities?: string[];
  notes?: string;
};

const staticProjects: Project[] = [
  {
    title: "Umutungo",
    slug: "umutungo",
    summary:
      "Property software for landlords and agencies in Rwanda: rent, leases, expenses, and maintenance in one place — with a public listings site to fill vacant units.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    role: "Product design and engineering",
    audience:
      "Landlords, property managers, agents, and agencies running rental portfolios in Rwanda and East Africa, priced and reported in RWF.",
    liveUrl: "https://umutungo.co",
    previewImage: "/work/umutungo/cover.png",
    featured: true,
    context:
      "Umutungo is two products under one account. Owners run the portfolio in a private ops workspace — units, leases, rent, costs, maintenance, and month-end reports. Separately, vacant inventory can be published to listings.umutungo.co so renters and buyers can browse without seeing internal ledgers.",
    problem:
      "Most portfolios still live in notebooks, WhatsApp threads, and spreadsheets. Rent status is unclear, vacancies sit longer than they should, and closing the month means reconstructing the truth from chats and files.",
    constraints: [
      "Built around RWF rent and reporting for Rwanda and East Africa",
      "Private ops data must never leak onto the public listings site",
      "Plans for landlords, agents, and agencies with different access limits",
    ],
    approach:
      "Treat operations and listings as related but separate hosts. The workspace is the system of record. Listings only show what the owner chooses to publish. When a unit is occupied, it can stop appearing publicly; when it is vacant again, it can go back up.",
    decisions: [
      {
        title: "Keep ops and listings apart",
        detail:
          "Seekers browse published rentals, sales, land, and commercial stock. Owners keep ledgers, expense history, and maintenance private. Same account, different trust boundary.",
      },
      {
        title: "Plans that match how people work",
        detail:
          "Landlord, agent, and agency plans set unit counts, managers, and listing caps up front — so growth limits are visible before month-end surprises.",
      },
      {
        title: "Month-end as a real workflow",
        detail:
          "Income, costs, and occupancy roll into a period report per property instead of being rebuilt from chats and spreadsheets.",
      },
    ],
    implementation:
      "The live product includes a free trial, portfolio dashboard, property and unit setup, expense and maintenance tracking, tenant payment claims and repair reports, and a publish/prospect flow for vacant units on the listings site.",
    scope: [
      "Product and marketing experience for umutungo.co",
      "Ops concepts: units, leases, rent status, expenses, maintenance",
      "Public listings and prospect pipeline",
      "Plan models for landlords, agents, and agencies",
    ],
    capabilities: [
      "Rent and lease tracking",
      "Expenses and monthly property close",
      "Maintenance workflows",
      "Vacant-unit listing publish and prospect pipeline",
      "Landlord, agent, and agency plan models",
      "Tenant portal for payment claims and maintenance reports",
    ],
    outcomes: [
      "Live product at umutungo.co with trial and sign-in",
      "Public listings at listings.umutungo.co for rent, sale, land, and commercial",
    ],
    learnings: [
      "Property owners trust software more when month-end and access rules are as clear as the marketing story.",
      "A listings site only helps if publish state follows real vacancy — not a brochure that drifts from the portfolio.",
    ],
    notes:
      "The live marketing site includes illustrative customer quotes labeled as pilot-ready stories. They are not treated here as verified testimonials.",
  },
  {
    title: "Umugina",
    slug: "umugina",
    summary:
      "A Rwanda marketplace where shoppers see what local sellers stock, at what price, and where — before they leave home. Businesses list catalogs; agents earn on attributed sales.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    role: "Product design and engineering",
    audience:
      "Shoppers comparing local inventory, shops publishing catalogs, and sales agents who earn commission on referred sales.",
    liveUrl: "https://umugina.com",
    previewImage: "/work/umugina/cover.png",
    featured: true,
    context:
      "Umugina is a three-sided marketplace based in Kigali. Customers browse real listings with prices, stock status, and seller locations. Businesses publish searchable catalogs instead of relying on social posts. Sales agents get referral codes and track commissions when attributed sales complete.",
    problem:
      "People still walk shop to shop hoping something is in stock. Local businesses post on social media, but those posts are hard to search, compare, or trust — so trips stay guesswork.",
    constraints: [
      "Support discover-then-visit as much as online checkout",
      "Serve customers, businesses, and sales agents without collapsing the roles",
      "Trust language must match what verification actually covers",
    ],
    approach:
      "Lead with exploration: categories, recently added listings, stock, and map-linked destinations. Give businesses a place to publish structured SKUs. Give agents a workspace for referrals and payouts.",
    decisions: [
      {
        title: "Discovery before the trip",
        detail:
          "The product is not trying to replace every visit to a physical shop. It helps people know what is available and where to go — then they visit or buy.",
      },
      {
        title: "Catalogs instead of feed posts",
        detail:
          "Searchable products with price, stock, and location beat another scroll through WhatsApp or Instagram.",
      },
      {
        title: "Agents as a real path",
        detail:
          "Referral codes and commission tracking sit next to buyer and seller flows, so growth is not an informal side channel.",
      },
    ],
    implementation:
      "The live site includes explore, category browsing, cart and sign-in, plus account paths for shoppers, sellers, and agents. Listings cover electronics, fashion, home, and more from named shops in places like Kigali and Musanze.",
    scope: [
      "Marketplace experience for umugina.com",
      "Customer discovery and comparison",
      "Business catalog publishing and agent earning flows",
    ],
    capabilities: [
      "Product explore by category",
      "Seller locations and stock status",
      "Business catalog publishing",
      "Sales agent referral and commission tracking",
      "Verification badges as a trust signal",
    ],
    outcomes: [
      "Live marketplace at umugina.com with real local listings",
      "Clear roles for customers, businesses, and sales agents",
    ],
    learnings: [
      "Price alone is not enough — shoppers need a destination and stock truth.",
      "Verification should be described as a review signal, not a guarantee of quality or delivery.",
    ],
  },
  {
    title: "Rojisitiri",
    slug: "rojisitiri",
    summary:
      "Retail software for shops that grow beyond one till: point of sale, inventory, customer credit, and reporting across stores — currently in soft launch.",
    projectType: "product",
    status: "soft-launch",
    year: 2026,
    role: "Product design and engineering",
    audience:
      "Retail owners and teams running one or more stores who need POS, stock, credit, and reporting in the same system.",
    liveUrl: "https://rojisitiri.com",
    previewImage: "/work/rojisitiri/cover.png",
    featured: true,
    context:
      "Rojisitiri is a retail operating system: cashiers sell on the floor while owners track stock, credit, and performance from the same source of truth. Access is request-based while early businesses are onboarded in person.",
    problem:
      "As shops add locations, sales, stock counts, credit ledgers, and reports end up in separate tools. Shelves disagree with the system, and owners lose a clear view of what is actually happening.",
    constraints: [
      "Soft launch with a small set of personally onboarded businesses",
      "Fast enough for cashiers without hiding owner visibility",
      "Ready for multi-store stock transfers from early on",
    ],
    approach:
      "Put POS tickets, inventory transfers and purchases, customer credit, and owner reports in one product. Set up stores, catalogs, and roles with each business before opening cold self-serve signup.",
    decisions: [
      {
        title: "Soft launch on purpose",
        detail:
          "Early access is request-based so store setup, catalog patterns, and team roles can be configured with the business — keeping the product sharp while the model is proven.",
      },
      {
        title: "Credit next to the sale",
        detail:
          "Customer balances sit beside the ticket so credit decisions happen with context, not in a spreadsheet after closing.",
      },
      {
        title: "Multi-store from day one",
        detail:
          "Transfers, stock, and reporting are designed for more than one location, even while the first cohort stays small.",
      },
    ],
    implementation:
      "The public site covers POS, inventory, credit, and reporting, explains the three-step onboarding path, and collects access requests. Already onboarded teams can sign in to their workspace.",
    scope: [
      "Product and marketing narrative for rojisitiri.com",
      "Retail flows across POS, inventory, credit, and reports",
      "Soft-launch access and onboarding framing",
    ],
    capabilities: [
      "Point of sale with ticket history",
      "Inventory, transfers, and purchases",
      "Customer credit ledgers beside sales",
      "Owner-facing sales and product reports",
      "Multi-store growth path",
    ],
    outcomes: [
      "Public soft-launch site at rojisitiri.com",
      "Request-access path for retailers and sign-in for onboarded workspaces",
    ],
    learnings: [
      "For ops software, limited onboarding can be a product choice — not just a delay before open signup.",
      "Calling it a soft launch should read as focus, not unfinished marketing.",
    ],
    notes:
      "Do not describe Rojisitiri as open self-serve signup while access remains request-based.",
  },
];

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Project>;
  return (
    typeof candidate.title === "string" &&
    typeof candidate.slug === "string" &&
    typeof candidate.summary === "string" &&
    typeof candidate.projectType === "string" &&
    typeof candidate.status === "string" &&
    typeof candidate.liveUrl === "string"
  );
}

function mergeWithStudioProjects(base: Project[]): Project[] {
  const rawProjects: unknown[] = Array.isArray(cmsGenerated.projects)
    ? (cmsGenerated.projects as unknown[])
    : [];
  const generated = rawProjects.filter(isProject);
  if (generated.length === 0) return base;

  const staticSlugs = new Set(base.map((project) => project.slug));
  const extras = generated.filter((project) => !staticSlugs.has(project.slug));
  return [...base, ...extras];
}

/** Public project list: static source of truth + optional Studio supplements. */
export const projects: Project[] = mergeWithStudioProjects(staticProjects);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
