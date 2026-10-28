import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    logo: absoluteUrl(site.brand.appIcon),
    knowsAbout: [...site.serviceKeywords],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service catalog for crawlers — no ratings, reviews, or invented outcomes. */
export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    image: absoluteUrl(site.brand.appIcon),
    areaServed: {
      "@type": "Country",
      name: "Rwanda",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RURANGO services",
      itemListElement: capabilities.map((capability, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          description: capability.description,
          url: absoluteUrl(`/capabilities#${capability.id}`),
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
