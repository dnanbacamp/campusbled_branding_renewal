import { SectionLabel } from "./ui/SectionLabel";
import { Button, TextLink } from "./ui/Button";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

const CASES = [
  {
    category: "Web制作・Web改善",
    title: "コーポレートサイト制作の事例",
    description: "クライアント名・案件名（仮）課題・提案・実施内容・成果を記載",
    imageLabel: "実績写真・画面1",
  },
  {
    category: "システム開発",
    title: "業務システム開発の事例",
    description: "クライアント名・案件名（仮）課題・提案・実施内容・成果を記載",
    imageLabel: "実績写真・画面2",
  },
  {
    category: "AI・DX導入支援",
    title: "業務のデジタル化を支援した事例",
    description: "クライアント名・案件名（仮）課題・提案・実施内容・成果を記載",
    imageLabel: "実績写真・画面3",
  },
];

export function CaseStories() {
  return (
    <section id="case-story" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>CASE STORY</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight">事例ストーリー</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
          課題にどう向き合い、何を形にしたのかをご紹介します。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASES.map((item) => (
            <div key={item.title} className="flex flex-col">
              <ImagePlaceholder
                label={item.imageLabel}
                sublabel="IMAGE PLACEHOLDER"
                className="aspect-[4/3] w-full"
              />

              <span className="mt-4 text-xs font-semibold text-text-muted">
                {item.category}
              </span>
              <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>

              <TextLink href="#" className="mt-4">
                事例を見る
                <span aria-hidden>→</span>
              </TextLink>
            </div>
          ))}
        </div>

        <Button href="#" variant="outline" className="mt-10">
          事例ストーリーをすべて見る
        </Button>
      </div>
    </section>
  );
}
