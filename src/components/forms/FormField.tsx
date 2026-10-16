import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function FieldShell({
  id,
  label,
  required,
  hint,
  error,
  children,
  className,
}: FieldShellProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-foreground-muted">
            Optional
          </span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={hintId} className="text-sm text-foreground-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlClasses =
  "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-foreground placeholder:text-foreground-muted transition-colors duration-[var(--motion-base)] focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({
  id,
  label,
  required,
  hint,
  error,
  className,
  ...props
}: TextFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      error={error}
    >
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint && !error ? `${id}-hint` : null, error ? `${id}-error` : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(controlClasses, className)}
        {...props}
      />
    </FieldShell>
  );
}

type TextAreaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
};

export function TextAreaField({
  id,
  label,
  required,
  hint,
  error,
  className,
  rows = 5,
  ...props
}: TextAreaFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      error={error}
    >
      <textarea
        id={id}
        required={required}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint && !error ? `${id}-hint` : null, error ? `${id}-error` : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(controlClasses, "resize-y min-h-28", className)}
        {...props}
      />
    </FieldShell>
  );
}
