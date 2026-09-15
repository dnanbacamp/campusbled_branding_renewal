"use client";

import AboutSubNav from "../../components/AboutSubNav/AboutSubNav";
import PageHeading from "../../components/PageHeading/PageHeading";
import Reveal from "../../components/Reveal/Reveal";
import { messageContent } from "@/lib/content";
import "./Message.css";

export default function MessagePage() {
  return (
    <>
      <AboutSubNav />
      <PageHeading title="MESSAGE" subtitle="メッセージ" />

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="message-visual" aria-hidden="true" />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="message-heading">{messageContent.heading}</h2>
        </Reveal>

        <div className="message-body">
          {messageContent.paragraphs.map((p, i) => (
            <Reveal key={i} delay={120 + i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="message-sign">
            <span className="title">{messageContent.signatureTitle}</span>
            <span>{messageContent.signatureName}</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}
