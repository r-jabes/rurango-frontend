import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "compact" | "default" | "large";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-brand-charcoal hover:bg-brand-green-hover active:translate-y-px",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent active:translate-y-px",
  tertiary:
    "bg-transparent text-foreground-secondary hover:text-accent active:translate-y-px",
};

const sizeClasses: Record<ButtonSize, string> = {
  compact: "h-9 px-3 text-sm",
  default: "h-11 px-4 text-sm",
  large: "h-12 px-6 text-base",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-[var(--motion-base)] ease-[var(--ease-out)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
