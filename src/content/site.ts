export const site = {
  name: "RURANGO",
  tagline: "Custom software, websites, and search visibility.",
  description:
    "RURANGO designs and builds custom software, websites, and web applications. Services also include search engine optimization and Google Business Profile setup for visibility on Google Search and Maps. Shipped products include Umutungo, Umugina, and Rojisitiri.",
  /** Short phrases for metadata and structured data — not ranking claims. */
  serviceKeywords: [
    "software development",
    "web development",
    "web applications",
    "custom software",
    "search engine optimization",
    "SEO",
    "Google Business Profile",
    "local search",
    "operations platforms",
  ] as const,
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/capabilities" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ],
  brand: {
    lightLogo: "/icons/light_logo.png",
    darkLogo: "/icons/dark_logo.png",
    appIcon: "/icons/app_icon.png",
  },
} as const;
