"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutMenuItems, navLinks } from "@/lib/content";
import "./Header.css";

export default function Header() {
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setAboutMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!aboutMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setAboutMenuOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setAboutMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [aboutMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const aboutActive = (pathname ?? "").startsWith("/about");

  return (
    <div className="header-root" ref={menuRef}>
      <header className="header">
        <Link className="logo" href="/">
          <img className="logo-icon" src="/logo.svg" alt="" aria-hidden="true" />
          Campus Blend
        </Link>
        <nav className="nav">
          <button
            type="button"
            className={`nav-menu-trigger${aboutActive ? " active" : ""}`}
            aria-expanded={aboutMenuOpen}
            onClick={() => setAboutMenuOpen((v) => !v)}
          >
            会社概要
            <span className={`chevron${aboutMenuOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          お問い合わせ
        </Link>
        <button
          type="button"
          className={`hamburger${mobileMenuOpen ? " open" : ""}`}
          aria-expanded={mobileMenuOpen}
          aria-label="メニュー"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {aboutMenuOpen && (
        <div className="mega-menu">
          <div className="wrap mega-menu-inner">
            <p className="mega-menu-label">会社概要</p>
            <div className="mega-menu-grid">
              {aboutMenuItems.map((item) => (
                <Link key={item.to} href={item.to} className="mega-tile" onClick={() => setAboutMenuOpen(false)}>
                  <span className={`mega-tile-swatch ${item.swatch}`} aria-hidden="true" />
                  <span className="mega-tile-label">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            type="button"
            className={`mobile-menu-section-trigger${aboutActive ? " active" : ""}`}
            aria-expanded={mobileAboutOpen}
            onClick={() => setMobileAboutOpen((v) => !v)}
          >
            会社概要
            <span className={`chevron${mobileAboutOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          {mobileAboutOpen && (
            <div className="mobile-menu-sublist">
              {aboutMenuItems.map((item) => (
                <Link key={item.to} href={item.to} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="mobile-menu-cta" href="/contact" onClick={() => setMobileMenuOpen(false)}>
            お問い合わせ
          </Link>
        </div>
      )}
    </div>
  );
}
