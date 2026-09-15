"use client";

import Link from "next/link";
import { footerColumns } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import SmartLink from "../SmartLink/SmartLink";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fgrid">
          <Link className="logo" href="/" style={{ color: "#fff" }}>
            <img className="logo-icon" src="/logo.svg" alt="" aria-hidden="true" />
            Campus Blend
          </Link>
          {footerColumns.map((col, i) => (
            <Reveal key={col.heading} delay={i * 70}>
              <div>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <SmartLink href={link.href}>{link.label}</SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="fbottom">
          <span>©2026 Campus Blend Inc.</span>
        </div>
      </div>
    </footer>
  );
}
