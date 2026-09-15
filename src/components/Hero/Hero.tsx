"use client";

import { Suspense, useEffect, useState, type CSSProperties } from "react";
import dynamic from "next/dynamic";
import "./Hero.css";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const LINE_1 = "技術と真心で";
const LINE_2 = "ビジネス機会を最大化する。";

function renderChars(text: string, startIndex: number) {
  return Array.from(text).map((char, i) => (
    <span key={i} className="char" style={{ "--char-index": startIndex + i } as CSSProperties}>
      {char}
    </span>
  ));
}

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const lineClass = `line${ready ? " is-visible" : ""}`;

  return (
    <section className="hero">
      <div className="hero-canvas-layer" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-inner">
        <h1>
          <span className={lineClass}>{renderChars(LINE_1, 0)}</span>
          <br />
          <span className={lineClass}>{renderChars(LINE_2, Array.from(LINE_1).length)}</span>
        </h1>
        <p className={`hero-lead${ready ? " is-visible" : ""}`}>
          SES、受託開発、自社プロダクト、AI・DX導入支援。エンジニアが育つ環境をつくり、その力でお客様の事業を前に進めます。
        </p>
      </div>
    </section>
  );
}
