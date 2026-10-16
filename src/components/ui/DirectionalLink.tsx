import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type DirectionalLinkProps = ComponentProps<typeof Link> & {
  showArrow?: boolean;
};

export function DirectionalLink({
  className,
  showArrow = true,
  children,
  ...props
}: DirectionalLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-[var(--motion-base)]",
        "hover:text-accent",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className="translate-x-0 transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
