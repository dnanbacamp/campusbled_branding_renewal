"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutMenuItems } from "@/lib/content";
import "./AboutSubNav.css";

export default function AboutSubNav() {
  const pathname = usePathname();

  return (
    <nav className="about-subnav">
      <div className="wrap">
        {aboutMenuItems.map((item) => (
          <Link key={item.to} href={item.to} className={pathname === item.to ? "active" : ""}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
