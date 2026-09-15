"use client";

import Link from "next/link";
import Reveal from "../Reveal/Reveal";

/** Self-contained so the JSX passed to <Reveal> never crosses a Server->Client boundary. */
export default function NewsDetailBody() {
  return (
    <>
      <Reveal>
        <p style={{ fontSize: 14, lineHeight: 2, color: "#3a3e45", maxWidth: "46em" }}>
          詳細な記事本文は準備中です。最新情報はお知らせ一覧よりご確認ください。
        </p>
      </Reveal>
      <Reveal delay={80}>
        <Link className="more" href="/news">
          お知らせ一覧へ戻る
          <span className="dot" aria-hidden="true" />
        </Link>
      </Reveal>
    </>
  );
}
