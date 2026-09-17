import { SectionLabel } from "./ui/SectionLabel";
import { Button, TextLink } from "./ui/Button";

const SERVICES = [
  {
    no: "01",
    title: "受託開発",
    description:
      "Web制作からAI・システム開発まで、事業に必要な仕組みを形にします。",
    tags: ["Web制作・Web開発", "システム開発", "AI・DX導入支援"],
  },
  {
    no: "02",
    title: "伴走支援",
    description: "公開・導入して終わりではなく、運用・改善・マーケティングまで支えます。",
    tags: ["運用保守", "マーケティング支援"],
  },
  {
    no: "03",
    title: "SaaS・SES",
    description:
      "自社プロダクトの提供と、技術人材によるプロジェクト支援。",
    tags: ["SES", "SaaS開発"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>OUR SERVICES</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight">事業内容</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
          課題に合わせて、必要な支援を組み合わせます。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.no}
              className="flex flex-col rounded-2xl border border-line bg-white p-8"
            >
              <span className="text-sm font-bold text-accent">
                {service.no}
              </span>
              <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <TextLink href="#" className="mt-6">
                詳しく見る
                <span aria-hidden>→</span>
              </TextLink>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-text-muted">
          ※PCカード全体のクリックで各サービスページへ遷移（同様のリンク挙動は他タブでも共通）
        </p>

        <Button href="#" variant="outline" className="mt-6">
          事業内容をすべて見る
        </Button>
      </div>
    </section>
  );
}
