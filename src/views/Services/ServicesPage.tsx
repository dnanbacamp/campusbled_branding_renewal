"use client";

import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import SmartLink from "../../components/SmartLink/SmartLink";
import { services } from "@/lib/content";
import "./ServicesPage.css";

const SWATCHES = ["a", "b", "c", "d"];

export default function ServicesPage() {
  return (
    <div className="subpage-offset">
      <PageHeading title="SERVICES" subtitle="事業紹介" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <Reveal>
          <p style={{ margin: "0 0 8px", fontSize: 14, lineHeight: 2.1, color: "#3a3e45", maxWidth: "46em" }}>
            技術と人の成長を通じて、新しい価値を生み出し続けること。現場で積んだ経験を受託開発へ、その知見を自社プロダクトへと、事業どうしをつなげて育てています。
          </p>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div className="service-detail" id={s.slug}>
                <div className={`service-visual ${SWATCHES[i % SWATCHES.length]}`} aria-hidden="true" />
                <div>
                  <h2>
                    <em>{s.category}</em>
                    {s.name}
                  </h2>
                  <p className="desc">{s.desc}</p>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {s.slug === "product" && (
                    <SmartLink className="more" href={s.href}>
                      フェアキャンパスの詳細を見る
                      <span className="dot" aria-hidden="true" />
                    </SmartLink>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="services-cta">
            <h2>まずはお気軽にご相談ください</h2>
            <p>案件のご相談、お見積り、採用に関するご質問など、どのような内容でもお問い合わせください。</p>
            <SmartLink className="btn" href="/contact">
              <span className="dot" aria-hidden="true" />
              相談する
            </SmartLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
