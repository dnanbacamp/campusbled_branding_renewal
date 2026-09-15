"use client";

import { cloneElement, type ReactElement } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any>;
  /** Stagger delay in ms, useful when revealing items in a list. */
  delay?: number;
}

/** Fades + slides a single child element up into place the first time it scrolls into view. */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const { className, style } = children.props;

  return cloneElement(
    children,
    {
      ref,
      className: [className, "reveal", inView && "is-visible"].filter(Boolean).join(" "),
      style: { ...style, transitionDelay: delay ? `${delay}ms` : undefined },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
  );
}
