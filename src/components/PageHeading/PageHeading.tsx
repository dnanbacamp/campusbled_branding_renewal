"use client";

import Reveal from "../Reveal/Reveal";
import "./PageHeading.css";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <Reveal>
      <div className="wrap page-heading">
        <h1>
          {title}
          <span>{subtitle}</span>
        </h1>
      </div>
    </Reveal>
  );
}
