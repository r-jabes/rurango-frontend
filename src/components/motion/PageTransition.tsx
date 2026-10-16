"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useLayoutEffect, useRef } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

/**
 * Lightweight route entrance on client navigations.
 * First paint stays static. Reduced-motion skips animation.
 * Uses classList (not setState) to avoid cascading renders.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useLayoutEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    node.classList.remove("page-enter");
    // Force reflow so the animation can restart on rapid navigations.
    void node.offsetWidth;
    node.classList.add("page-enter");

    const onEnd = () => {
      node.classList.remove("page-enter");
    };
    node.addEventListener("animationend", onEnd, { once: true });

    return () => {
      node.removeEventListener("animationend", onEnd);
      node.classList.remove("page-enter");
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className="flex flex-1 flex-col">
      {children}
    </div>
  );
}
