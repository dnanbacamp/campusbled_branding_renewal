import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 border border-accent",
  outline:
    "bg-white text-ink border border-line hover:border-accent hover:text-accent",
  "outline-dark":
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-70 transition-opacity ${className}`}
    >
      {children}
    </Link>
  );
}
