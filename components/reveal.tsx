"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "text" fades + rises; "image" wipes open with a slow zoom-settle. */
  variant?: "text" | "image";
  style?: CSSProperties;
};

/**
 * Lightweight scroll reveal: one shared IntersectionObserver, no animation library.
 * Content is in the DOM from the first paint (good for SEO); only opacity/transform animate.
 */
let observer: IntersectionObserver | null = null;
const getObserver = () => {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "in");
        if (el.hasAttribute("data-reveal-img")) el.setAttribute("data-reveal-img", "in");
        observer?.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );
  return observer;
};

export function Reveal({ as: Tag = "div", children, className, delay = 0, variant = "text", style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el || !io) return;
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  const attr = variant === "image" ? { "data-reveal-img": "" } : { "data-reveal": "" };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
      {...attr}
    >
      {children}
    </Tag>
  );
}
