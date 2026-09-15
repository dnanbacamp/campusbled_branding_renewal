"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "../../components/Reveal/Reveal";
import { newsItems } from "@/lib/content";
import "./NewsPage.css";

export default function NewsPage() {
  const years = useMemo(() => {
    const unique = Array.from(new Set(newsItems.map((n) => n.date.split(".")[0])));
    return unique.sort((a, b) => Number(b) - Number(a));
  }, []);

  const [activeYear, setActiveYear] = useState(years[0]);

  const filtered = newsItems.filter((n) => n.date.startsWith(activeYear));

  return (
    <>
      <section className="news-page-hero">
        <div className="wrap page-heading">
          <h1>
            NEWS
            <span>ニュース</span>
          </h1>
          <div className="news-year-tabs">
            {years.map((year) => (
              <button
                key={year}
                className={year === activeYear ? "active" : ""}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec news-page-list">
        {filtered.length === 0 && <p className="news-page-empty">この年のお知らせはまだありません。</p>}
        {filtered.map((item, i) => (
          <Reveal key={item.slug} delay={i * 60}>
            <Link className="news-item" href={`/news/${item.slug}`}>
              <time>{item.date}</time>
              <p>{item.text}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
