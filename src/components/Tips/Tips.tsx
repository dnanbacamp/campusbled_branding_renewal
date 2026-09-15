"use client";

import { tips } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import "./Tips.css";

export default function Tips() {
  return (
    <section className="mist" id="tips">
      <div className="wrap sec">
        <Reveal>
          <div className="sec-intro">
            <p className="eyebrow">TIPS</p>
            <p>制作の現場で実際に聞かれることを、担当者が記事にしています。</p>
          </div>
        </Reveal>
        <div className="tips">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <a className="tip" href="#">
                <div className="tip-thumb" />
                <div>
                  <h3>{t.title}</h3>
                  <span>{t.date}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <a className="more" href="#">
          VIEW MORE
          <span className="dot" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
