"use client";

import { type ReactNode, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Optional section entrance (M-03). Content stays visible without JS
 * and when prefers-reduced-motion is set.
 */
export function Reveal({ children, className }: RevealProps) {
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

    node.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.remove("reveal-pending");
          node.classList.add("reveal-in");
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      node.classList.remove("reveal-pending", "reveal-in");
    };
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
