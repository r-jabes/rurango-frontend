"use client";

import { type ReactNode, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export type RevealVariant = "section" | "text" | "media" | "visual";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Motion pattern — maps to CSS classes in globals.css */
  variant?: RevealVariant;
  /** Extra delay in ms once visible (stagger helper). */
  delay?: number;
};

/**
 * Scroll-triggered entrance. Content stays visible without JS
 * and when prefers-reduced-motion is set.
 */
export function Reveal({
  children,
  className,
  variant = "section",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    node.classList.add("reveal-pending", `reveal-${variant}`);
    if (delay > 0) {
      node.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.remove("reveal-pending");
          node.classList.add("reveal-in");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      node.classList.remove(
        "reveal-pending",
        "reveal-in",
        `reveal-${variant}`,
      );
      node.style.removeProperty("--reveal-delay");
    };
  }, [variant, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
