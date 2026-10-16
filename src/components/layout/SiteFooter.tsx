import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { PageContainer } from "./PageContainer";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-brand-charcoal-deep">
      <PageContainer className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            aria-label="RURANGO home"
          >
            <Image
              src={site.brand.lightLogo}
              alt="RURANGO"
              width={150}
              height={34}
              className="h-7 w-auto"
            />
          </Link>
          <p className="max-w-md text-sm text-foreground-secondary">
            {site.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
              Navigate
            </p>
            <nav aria-label="Footer">
              <ul className="mt-3 space-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm text-foreground-secondary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
              Next step
            </p>
            <p className="mt-3 text-sm text-foreground-secondary">
              Explore the work, or get in touch about a product or opportunity.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-accent transition-colors hover:text-brand-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              Contact
            </Link>
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-border">
        <PageContainer className="flex flex-col gap-2 py-5 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name}
          </p>
          <p>Built to outlast.</p>
        </PageContainer>
      </div>
    </footer>
  );
}
