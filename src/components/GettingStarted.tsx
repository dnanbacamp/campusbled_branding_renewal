import { SectionLabel } from "./ui/SectionLabel";
import { Button } from "./ui/Button";

const LINKS = [
  { title: "対応できること", description: "ご相談いただける領域をご紹介" },
  { title: "実際のご相談事例", description: "よくある課題と支援の流れ" },
  { title: "専門家紹介", description: "一緒に取り組むメンバーについて" },
  { title: "よくあるご質問", description: "進め方・契約などの疑問にお答え" },
];

export function GettingStarted() {
  return (
    <section id="getting-started" className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionLabel>GETTING STARTED</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight">
            ご検討中の方へ
          </h2>
          <p className="mt-6 text-xl font-bold leading-relaxed">
            まだ、具体的でなくても。
            <br />
            その課題から、一緒に。
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted">
            「何から始めればいいかわからない」
            そんな段階からお気軽にご相談ください。ご相談無料で、よくあるご質問にご案内します。
          </p>

          <Button href="#" className="mt-8">
            ご検討中の方はこちら
          </Button>
        </div>

        <div className="rounded-2xl border border-line bg-white p-2">
          {LINKS.map((link, index) => (
            <a
              key={link.title}
              href="#"
              className={`flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-accent-soft ${
                index !== LINKS.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div>
                <span className="text-sm font-bold text-accent">
                  {link.title}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </span>
                <p className="mt-1 text-xs text-text-muted">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
