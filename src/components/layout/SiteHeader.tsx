"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageContainer } from "./PageContainer";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <PageContainer className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          aria-label="RURANGO home"
        >
          <Image
            src={site.brand.lightLogo}
            alt="RURANGO"
            width={160}
            height={36}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {site.nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            const isContact = item.href === "/contact";

            if (isContact) {
              return (
                <ButtonLink
                  key={item.href}
                  href={item.href}
                  variant="primary"
                  size="compact"
                  className="ml-2"
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </ButtonLink>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-base)]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                  active
                    ? "text-accent"
                    : "text-foreground-secondary hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform duration-[var(--motion-base)]",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-opacity duration-[var(--motion-base)]",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform duration-[var(--motion-base)]",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </PageContainer>

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className={cn(
          "border-t border-border bg-background md:hidden",
          open && "nav-panel-enter",
        )}
      >
        <PageContainer className="flex flex-col gap-1 py-4">
          {site.nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-3 text-base transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                  active
                    ? "bg-surface text-accent"
                    : "text-foreground-secondary hover:bg-surface hover:text-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </PageContainer>
      </div>
    </header>
  );
}
