/**
 * Portfolio projects — public facts only.
 * Do not invent metrics, clients, or testimonials.
 * Role is framed as RURANGO product work; refine if ownership differs.
 */

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

export const projects: Project[] = [
  {
    title: "Umutungo",
    slug: "umutungo",
    summary:
      "Property operations and public listings for landlords and agencies in Rwanda and East Africa — rent, units, expenses, maintenance, and vacancy fill on one account.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    role: "Product design and engineering",
    audience:
      "Landlords, property managers, agents, and agencies operating RWF-native portfolios in Rwanda and East Africa.",
    liveUrl: "https://umutungo.co",
    featured: true,
    context:
      "Umutungo is a PropTech workspace for portfolio operations, with a separate public listings surface for vacant inventory. Ops stays private; seekers browse published rentals without seeing internal ledgers.",
    problem:
      "Rent status, lease timelines, expenses, and maintenance often live in notebooks, WhatsApp threads, and fragile spreadsheets — so arrears hide, vacancies drag on, and month-close becomes archaeology.",
    constraints: [
      "RWF-native rent and reporting expectations for Rwanda and East Africa",
      "Clear separation between private ops data and public listings",
      "Plan models for landlords, agents, and agencies with scoped access",
    ],
    approach:
      "Model the product as two related surfaces: an ops workspace (units, leases, rent, expenses, maintenance, monthly close) and a listings host that publishes only chosen vacant inventory, captures prospects, and attributes leases without exposing ops.",
    decisions: [
      {
        title: "Ops and listings as separate hosts",
        detail:
          "Public browsing never shares the same trust boundary as owner ledgers. Occupied inventory can auto-pause while vacant units remain publishable.",
      },
      {
        title: "Role-scoped workspaces",
        detail:
          "Landlord, agent, and agency plans define entitlements — units, managers, listing caps — so growth is visible before limits surprise month-end.",
      },
      {
        title: "Month-close as a first-class workflow",
        detail:
          "Income, costs, and occupancy signals are gathered into a period report rather than rebuilt from chats and spreadsheets.",
      },
    ],
    implementation:
      "Public product surfaces include a free-trial path, dashboard-style portfolio overview, asset setup, maintenance and expense tracking, and a listings publish/prospect flow. Tenant-facing capabilities include payment claims and maintenance reports.",
    scope: [
      "Marketing and product experience for umutungo.co",
      "Property ops concepts: units, leases, rent status, expenses, maintenance",
      "Public listings and prospect pipeline framing",
      "Plan differentiation for landlords, agents, and agencies",
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
      "Live public product at umutungo.co with trial and sign-in paths",
      "Clear dual-surface narrative: private ops + public vacancy listings",
    ],
    learnings: [
      "Property software earns trust when month-close and access boundaries are as clear as the marketing story.",
      "Listings attribution only works if publish state stays tied to real vacancy — not a disconnected brochure site.",
    ],
    notes:
      "The live site includes illustrative customer quotes labeled as pilot-ready stories. Those are not presented here as verified testimonials.",
  },
  {
    title: "Umugina",
    slug: "umugina",
    summary:
      "A Rwanda-focused marketplace that helps shoppers discover products from local sellers, compare options, and know where to find them before leaving home.",
    projectType: "product",
    status: "shipped",
    year: 2026,
    role: "Product design and engineering",
    audience:
      "Shoppers comparing local inventory, businesses publishing catalogs, and sales agents earning on attributed sales.",
    liveUrl: "https://umugina.com",
    featured: true,
    context:
      "UMUGINA is a local discovery marketplace. Customers explore structured listings with prices, stock, and seller locations; businesses publish catalogs; agents promote products with referral tracking.",
    problem:
      "People spend hours moving shop to shop hoping to find the right product, while local businesses rely on unstructured social posts that are hard to search, compare, or trust.",
    constraints: [
      "Must support discover-then-visit behavior, not only online checkout",
      "Three participant roles: customer, business, sales agent",
      "Trust cues without inventing fees or promises the product does not support",
    ],
    approach:
      "Lead with exploration — categories, recently added listings, stock status, and map-linked seller destinations — then give businesses and agents dedicated workspaces for catalogs and commissions.",
    decisions: [
      {
        title: "Discovery before displacement",
        detail:
          "The product frames itself as helping people shop with purpose: find and compare first, then visit or buy — not as a replacement for every physical trip.",
      },
      {
        title: "Structured catalogs over social posts",
        detail:
          "Searchable SKUs with price, stock, and location give customers a destination instead of another feed scroll.",
      },
      {
        title: "Agent attribution as a first-class path",
        detail:
          "Referral codes and commission tracking sit beside customer and business flows so growth loops are productized, not informal.",
      },
    ],
    implementation:
      "Public surfaces include explore, category browsing, cart/sign-in entry points, and an about narrative for customers, sellers, and agents. Live listings span electronics, fashion, home, and more from named local shops.",
    scope: [
      "Marketing and marketplace experience for umugina.com",
      "Customer discovery and comparison flows",
      "Business catalog and agent earning narratives",
    ],
    capabilities: [
      "Product explore by category",
      "Seller locations and stock status",
      "Business catalog publishing",
      "Sales agent referral and commission tracking",
      "Verification-oriented trust cues",
    ],
    outcomes: [
      "Live marketplace at umugina.com with real local listings",
      "Clear three-sided model: customers, businesses, agents",
    ],
    learnings: [
      "Local commerce products need destination clarity — price alone is not enough without where to go.",
      "Trust language should stay within what verification and reviews actually support.",
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
    role: "Product design and engineering",
    audience:
      "Retail owners and teams running one or more stores who need POS, stock, credit, and reporting in a single operating picture.",
    liveUrl: "https://rojisitiri.com",
    featured: true,
    context:
      "Rojisitiri positions itself as a retail operating system: floor selling and back-office control from one source of truth. Access is currently request-based while onboarding stays personal.",
    problem:
      "Growing shops struggle when sales, stock, credit ledgers, and reporting live in disconnected tools — shelves disagree with the system and owners lack a clear operating picture across locations.",
    constraints: [
      "Soft launch with limited, personally onboarded businesses",
      "Must feel calm and fast for cashiers without hiding owner visibility",
      "Multi-store growth path without losing a shared catalog and stock story",
    ],
    approach:
      "Unify POS tickets, inventory transfers and purchases, customer credit beside sales, and owner reports — then onboard stores, catalog patterns, and roles by hand before opening cold self-serve signup.",
    decisions: [
      {
        title: "Soft launch over open signup",
        detail:
          "Early access is request-based so store setup, catalog patterns, and team roles can be configured with the business — keeping the product sharp while the operating model is proven.",
      },
      {
        title: "Credit next to the ticket",
        detail:
          "Customer balances live beside sales so credit decisions happen with context, not in a separate spreadsheet after the fact.",
      },
      {
        title: "One operating picture across stores",
        detail:
          "Transfers, stock, and reporting are framed for multi-location growth from day one, even while the first cohort stays small.",
      },
    ],
    implementation:
      "The public site presents POS, inventory, credit, and reporting capabilities, a three-step onboarding narrative, and a request-access form for retailers. Workspace sign-in is available for already onboarded teams.",
    scope: [
      "Marketing and product narrative for rojisitiri.com",
      "Retail OS concept across POS, inventory, credit, and reports",
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
      "Public soft-launch presence at rojisitiri.com",
      "Clear request-access path for retailers and sign-in for onboarded workspaces",
    ],
    learnings: [
      "For operational software, constrained onboarding can be a product decision — not only a go-to-market delay.",
      "Status honesty matters: soft launch should read as intentional focus, not unfinished marketing.",
    ],
    notes:
      "Do not describe Rojisitiri as a fully open self-serve product while access remains request-based.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
