"use client";

import { contactBand } from "@/lib/content";
import Reveal from "../Reveal/Reveal";
import SmartLink from "../SmartLink/SmartLink";
import "./ContactBand.css";

export default function ContactBand() {
  return (
    <section className="band" id="contact">
      {contactBand.map((c, i) => (
        <Reveal key={c.title} delay={i * 90}>
          <SmartLink href={c.href}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <span className="btn ghost">
              <span className="dot" aria-hidden="true" />
              {c.cta}
            </span>
          </SmartLink>
        </Reveal>
      ))}
    </section>
  );
}
