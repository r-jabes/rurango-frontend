import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { FieldShell } from "./FormField";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  options: readonly SelectOption[];
};

export function SelectField({
  id,
  label,
  required,
  hint,
  error,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      error={error}
    >
      <select
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint && !error ? `${id}-hint` : null, error ? `${id}-error` : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(
          "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-foreground transition-colors duration-[var(--motion-base)] focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value || "empty"} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
