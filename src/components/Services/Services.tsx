"use client";

import Link from "next/link";
import { services } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import SmartLink from "../SmartLink/SmartLink";
import "./Services.css";

export default function Services() {
  return (
    <section className="mist" id="services">
      <div className="wrap sec">
        <Reveal>
          <div className="sec-intro">
            <p className="eyebrow">SERVICES</p>
            <p>
              技術と人の成長を通じて、新しい価値を生み出し続けること。現場で積んだ経験を受託開発へ、その知見を自社プロダクトへと、事業どうしをつなげて育てています。
            </p>
          </div>
        </Reveal>

        <h2 className="h2">
          事業内容
          <small>SES / DEVELOPMENT / PRODUCT / AI</small>
        </h2>

        <div className="rows">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <SmartLink className="row" href={s.href}>
                <div className="row-name">
                  <em>{s.category}</em>
                  {s.name}
                </div>
                <p>{s.desc}</p>
                <span className="circle" aria-hidden="true" />
              </SmartLink>
            </Reveal>
          ))}
        </div>

        <Link className="more" href="/services">
          事業紹介ページを見る
          <span className="dot" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
