"use client";

import { jobs, recruitBenefits, recruitSteps } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import Link from "next/link";
import "./Recruit.css";

export default function Recruit() {
  return (
    <section className="wrap sec" id="recruit">
      <div className="recruit">
        <Reveal>
          <div>
            <p className="eyebrow">RECRUIT</p>
            <p className="recruit-lead">
              目的はプロダクト。
              <br />
              仲間と創る、新しい未来。
            </p>
            <p className="recruit-body">
              SES事業はゴールではなく、エンジニアが安心して力をつけるための土台だと考えています。そこで築いた技術と利益を、受託開発、AI開発、そして自社プロダクトへ。案件をこなす人ではなく、これからのプロダクトを一緒につくる仲間を探しています。
            </p>
          </div>
        </Reveal>

        <div className="steps">
          {recruitSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="step">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="benefits">
          {recruitBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="benefit">
                <h4>{b.title}</h4>
                <ul>
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="jobs">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <a className="job" href={job.href}>
                <h4>{job.title}</h4>
                <span className="pay">{job.pay}</span>
                <span className="circle" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <a className="pill" href="https://en-gage.net/campusblend_jobs/">
            募集中の6職種をすべて見る
            <span className="circle" aria-hidden="true" />
          </a>
          <Link className="pill" href="/about/message">
            代表メッセージを読む
            <span className="circle" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
