import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = ComponentProps<typeof Link> & {
  external?: boolean;
};

export function TextLink({
  className,
  external,
  target,
  rel,
  children,
  ...props
}: TextLinkProps) {
  const isExternal = external || target === "_blank";

  return (
    <Link
      className={cn(
        "text-foreground underline decoration-border-strong underline-offset-4 transition-colors duration-[var(--motion-base)]",
        "hover:text-accent hover:decoration-accent",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        className,
      )}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? rel ?? "noopener noreferrer" : rel}
      {...props}
    >
      {children}
    </Link>
  );
}
