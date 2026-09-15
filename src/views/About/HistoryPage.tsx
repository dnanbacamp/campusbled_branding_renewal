"use client";

import AboutSubNav from "../../components/AboutSubNav/AboutSubNav";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import { historyEntries } from "@/lib/content";
import "./History.css";

export default function HistoryPage() {
  return (
    <>
      <AboutSubNav />
      <PageHeading title="HISTORY" subtitle="沿革" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="history-list">
          {historyEntries.map((block, i) => (
            <Reveal key={block.year + i} delay={i * 70}>
              <div className="history-year">
                <time>{block.year}</time>
                <div className="history-entries">
                  {block.entries.map((e, j) => (
                    <div className="history-entry" key={j}>
                      <b>{e.month}</b>
                      <span>{e.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
