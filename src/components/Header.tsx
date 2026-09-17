"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const NAV_ITEMS = [
  { label: "私たちについて", href: "#about" },
  { label: "事業内容", href: "#services" },
  { label: "実績", href: "#case-story" },
  { label: "ご検討中の方へ", href: "#getting-started" },
  { label: "お知らせ", href: "#news" },
  { label: "採用情報", href: "#careers" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    // Stay transparent while the full-height hero is behind the bar, then
    // hand over to the solid state exactly when the light sections arrive.
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-white"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Campus Blend" width={28} height={28} />
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Campus Blend
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="#contact" className="px-5 py-2.5">
          お問い合わせ
        </Button>
      </div>
    </header>
  );
}
