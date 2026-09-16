"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutMenuItems, navLinks } from "@/lib/content";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <div className={`header-root${menuOpen ? " menu-open" : ""}`}>
      <header className="header">
        <Link className="logo" href="/">
          <img className="logo-icon" src="/logo.svg" alt="" aria-hidden="true" />
          Campus Blend
        </Link>
        <button
          type="button"
          className={`menu-trigger${menuOpen ? " open" : ""}`}
          aria-expanded={menuOpen}
          aria-label="メニュー"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {!menuOpen && <span className="menu-trigger-label">MENU</span>}
          <span className="menu-trigger-icon" aria-hidden="true">
            {menuOpen ? (
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M5 5L19 19M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </span>
        </button>
      </header>

      <div className={`fullscreen-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <div className="fullscreen-menu-body wrap">
          <div className="menu-group">
            <p className="menu-group-label">MENU</p>
            <nav className="menu-links">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={close}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="menu-group">
            <p className="menu-group-label">会社概要</p>
            <nav className="menu-links">
              {aboutMenuItems.map((item) => (
                <Link key={item.to} href={item.to} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="menu-group">
            <p className="menu-group-label">CONTACT</p>
            <nav className="menu-links">
              <Link href="/contact" onClick={close}>
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
