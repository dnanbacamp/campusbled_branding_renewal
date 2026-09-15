"use client";

import AboutSubNav from "../../components/AboutSubNav/AboutSubNav";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import { philosophyLines, philosophyPrinciples } from "@/lib/content";
import "./Philosophy.css";

export default function PhilosophyPage() {
  return (
    <>
      <AboutSubNav />
      <PageHeading title="PHILOSOPHY" subtitle="経営理念" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="philosophy-lines">
            {philosophyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="philosophy-heading-bar">行動指針</h2>
        </Reveal>

        <div className="philosophy-grid">
          {philosophyPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="philosophy-item">
                <h3>
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  {p.title}
                </h3>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
