"use client";

import { works } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import "./Works.css";

export default function Works() {
  return (
    <section className="wrap sec" id="works">
      <Reveal>
        <div className="sec-intro">
          <p className="eyebrow">WORKS</p>
          <p>大学、医療法人、地域コミュニティなど、利用者の幅が広い現場のサイトを多く手がけています。</p>
        </div>
      </Reveal>

      <div className="works">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={i * 100}>
            <article className="work">
              <img className="work-shot" src={w.image} alt={w.title} />
              <span className="tag">Web制作</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <p className="client">{w.client}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
