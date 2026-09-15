"use client";

import { useMemo, useState } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import SmartLink from "../../components/SmartLink/SmartLink";
import {
  simulatorFeatures,
  simulatorMaintenanceFee,
  simulatorPageRanges,
  simulatorSiteTypes,
} from "@/lib/content";
import "./Simulator.css";

function yen(n: number) {
  return `${n.toLocaleString("ja-JP")}円`;
}

export default function SimulatorPage() {
  const [siteTypeId, setSiteTypeId] = useState<(typeof simulatorSiteTypes)[number]["id"]>(
    simulatorSiteTypes[0].id
  );
  const [pageRangeId, setPageRangeId] = useState<(typeof simulatorPageRanges)[number]["id"]>(
    simulatorPageRanges[0].id
  );
  const [featureIds, setFeatureIds] = useState<string[]>([]);

  const siteType = simulatorSiteTypes.find((t) => t.id === siteTypeId)!;
  const pageRange = simulatorPageRanges.find((p) => p.id === pageRangeId)!;
  const selectedFeatures = simulatorFeatures.filter((f) => featureIds.includes(f.id));

  const subtotal = useMemo(
    () => siteType.base + pageRange.add + selectedFeatures.reduce((sum, f) => sum + f.add, 0),
    [siteType, pageRange, selectedFeatures]
  );

  const low = Math.round((subtotal * 0.9) / 10000) * 10000;
  const high = Math.round((subtotal * 1.15) / 10000) * 10000;

  function toggleFeature(id: string) {
    setFeatureIds((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  }

  return (
    <div className="subpage-offset">
      <PageHeading title="SIMULATOR" subtitle="料金シミュレーション" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <Reveal>
          <p style={{ margin: "0 0 40px", fontSize: 14, lineHeight: 2.1, color: "#3a3e45", maxWidth: "46em" }}>
            サイトの種類・規模・必要な機能を選ぶだけで、開発費用のおおよその目安が確認できます。
            表示される金額はあくまで目安です。正式なお見積りはお問い合わせください。
          </p>
        </Reveal>

        <div className="simulator-layout">
          <div>
            <Reveal>
              <div className="sim-block">
                <h2>
                  <i>01</i>サイトの種類
                </h2>
                <div className="sim-options">
                  {simulatorSiteTypes.map((t) => (
                    <label key={t.id} className={`sim-option${siteTypeId === t.id ? " checked" : ""}`}>
                      <span className="sim-option-top">
                        <span className="sim-option-left">
                          <input
                            type="radio"
                            name="siteType"
                            checked={siteTypeId === t.id}
                            onChange={() => setSiteTypeId(t.id)}
                          />
                          <span className="label">{t.label}</span>
                        </span>
                        <span className="price">{yen(t.base)}〜</span>
                      </span>
                      <p className="desc">{t.desc}</p>
                    </label>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="sim-block">
                <h2>
                  <i>02</i>ページ数
                </h2>
                <div className="sim-options grid-2">
                  {simulatorPageRanges.map((p) => (
                    <label key={p.id} className={`sim-option${pageRangeId === p.id ? " checked" : ""}`}>
                      <span className="sim-option-top">
                        <span className="sim-option-left">
                          <input
                            type="radio"
                            name="pageRange"
                            checked={pageRangeId === p.id}
                            onChange={() => setPageRangeId(p.id)}
                          />
                          <span className="label">{p.label}</span>
                        </span>
                        <span className="price">{p.add === 0 ? "±0円" : `+${yen(p.add)}`}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="sim-block">
                <h2>
                  <i>03</i>追加したい機能（複数選択可）
                </h2>
                <div className="sim-options grid-2">
                  {simulatorFeatures.map((f) => (
                    <label key={f.id} className={`sim-option${featureIds.includes(f.id) ? " checked" : ""}`}>
                      <span className="sim-option-top">
                        <span className="sim-option-left">
                          <input
                            type="checkbox"
                            checked={featureIds.includes(f.id)}
                            onChange={() => toggleFeature(f.id)}
                          />
                          <span className="label">{f.label}</span>
                        </span>
                        <span className="price">+{yen(f.add)}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="sim-summary">
              <h3>お見積り目安</h3>
              <p className="range">
                {yen(low)} <span>〜</span> {yen(high)}
              </p>
              <p className="maintenance">＋ 公開後の保守運用（任意）：月額{yen(simulatorMaintenanceFee)}〜</p>

              <ul className="breakdown">
                <li>
                  <span>{siteType.label}</span>
                  <span>{yen(siteType.base)}</span>
                </li>
                <li>
                  <span>{pageRange.label}</span>
                  <span>{pageRange.add === 0 ? "±0円" : `+${yen(pageRange.add)}`}</span>
                </li>
                {selectedFeatures.map((f) => (
                  <li key={f.id}>
                    <span>{f.label}</span>
                    <span>+{yen(f.add)}</span>
                  </li>
                ))}
              </ul>

              <SmartLink className="btn" href="/contact">
                <span className="dot" aria-hidden="true" />
                この内容で相談する
              </SmartLink>
              <p className="note">
                ※ 表示金額は選択条件から算出した概算です。実際のお見積りはヒアリング内容により変動します。
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
