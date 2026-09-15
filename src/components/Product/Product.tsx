"use client";

import { productFacts, productPlans } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import "./Product.css";

export default function Product() {
  return (
    <section className="wrap sec" id="product">
      <Reveal>
        <div className="sec-intro">
          <p className="eyebrow">PRODUCT</p>
          <p>
            SESと受託開発で積み上げた知見を、自分たちのプロダクトへ。最初の一つが、Webアクセシビリティ対応のSaaS「フェアキャンパス」です。
          </p>
        </div>
      </Reveal>

      <div className="product">
        <Reveal>
          <div>
            <h3>
              <em>FAIR CAMPUS</em>
              すべての人に、
              <br />
              アクセスできるWeb体験を。
            </h3>
            <p className="desc">
              2024年4月の障害者差別解消法の改正で、合理的配慮の提供がすべての事業者の義務になりました。フェアキャンパスは、既存のサイトにタグを入れるだけでアクセシビリティ機能を追加できるSaaSです。サイトをつくり直す必要はありません。
            </p>
            <div className="facts">
              {productFacts.map((f) => (
                <div className="fact" key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="price-card">
            <p className="from">月額（税込）</p>
            <p className="amount">
              <b>980</b>
              <span>円 〜</span>
            </p>
            <p className="note">他社サービスは月額8,000円台から、最低契約期間1年が一般的です。</p>
            <div className="plans">
              {productPlans.map((p) => (
                <div className="plan" key={p.name}>
                  <b>{p.name}</b>
                  <span>{p.desc}</span>
                  <i>{p.price}</i>
                </div>
              ))}
            </div>
            <a className="btn" href="https://www.fair-campus.jp/">
              <span className="dot" aria-hidden="true" />
              フェアキャンパスを見る
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
