"use client";

import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import "./Tools.css";

export default function Tools() {
  return (
    <section className="wrap sec" style={{ paddingTop: 0 }}>
      <div className="tools">
        <Reveal>
          <a className="tool a" href="#">
            <div>
              <h3>サービス資料ダウンロード</h3>
              <p>事業内容、進め方、費用の考え方をまとめた資料をお送りします。</p>
            </div>
            <span className="circle" aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={100}>
          <Link className="tool b" href="/simulator">
            <div>
              <h3>費用見積もりシミュレーター</h3>
              <p>ページ数や機能を選ぶだけで、おおよその費用感がその場でわかります。</p>
            </div>
            <span className="circle" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
