import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "compact" | "default" | "large";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-brand-charcoal hover:bg-brand-green-hover active:translate-y-px disabled:bg-surface-secondary disabled:text-foreground-muted",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent active:translate-y-px disabled:border-border disabled:text-foreground-muted",
  tertiary:
    "bg-transparent text-foreground-secondary hover:text-accent active:translate-y-px disabled:text-foreground-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  compact: "h-9 px-3 text-sm",
  default: "h-11 px-4 text-sm",
  large: "h-12 px-6 text-base",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "default",
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium transition-colors duration-[var(--motion-base)] ease-[var(--ease-out)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {loading ? <span className="sr-only">Loading</span> : null}
      {children}
    </button>
  );
}
