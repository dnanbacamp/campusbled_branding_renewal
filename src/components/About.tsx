import { SectionLabel } from "./ui/SectionLabel";
import { Button, TextLink } from "./ui/Button";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

const SUB_LINKS = [
  { label: "私たちの想い/MVV", href: "#" },
  { label: "代表メッセージ", href: "#" },
  { label: "会社概要", href: "#" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight">私たちについて</h2>
          <p className="mt-6 text-xl font-bold leading-relaxed">
            技術と対話で、
            <br />
            事業の「これから」をつくる。
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted">
            課題を整理するところから、つくること、育てることまで。
            お客様の想いをくみ取り、事業に合った方法を一緒に考えます。
          </p>

          <Button href="#" variant="outline" className="mt-8">
            私たちについて詳しく見る
            <span aria-hidden>→</span>
          </Button>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
            {SUB_LINKS.map((link) => (
              <TextLink key={link.label} href={link.href}>
                {link.label}
                <span aria-hidden>→</span>
              </TextLink>
            ))}
          </div>
        </div>

        <ImagePlaceholder
          label="チーム・働く風景の写真"
          sublabel="IMAGE PLACEHOLDER"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
