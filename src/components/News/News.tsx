"use client";

import { useState } from "react";
import Link from "next/link";
import { newsItems, newsTabs } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import "./News.css";

export default function News() {
  const [activeTab, setActiveTab] = useState(newsTabs[0]);

  return (
    <section className="wrap sec" id="news" style={{ paddingTop: 0 }}>
      <p className="eyebrow">NEWS</p>
      <div className="news-tabs" role="tablist">
        {newsTabs.map((tab) => (
          <button
            key={tab}
            className="chip"
            role="tab"
            aria-selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {newsItems.map((item, i) => (
        <Reveal key={item.slug} delay={i * 70}>
          <Link className="news-item" href={`/news/${item.slug}`}>
            <time>{item.date}</time>
            <p>{item.text}</p>
          </Link>
        </Reveal>
      ))}
      <Link className="more" href="/news">
        VIEW MORE
        <span className="dot" aria-hidden="true" />
      </Link>
    </section>
  );
}
