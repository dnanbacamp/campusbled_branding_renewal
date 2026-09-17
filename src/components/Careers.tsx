import { SectionLabel } from "./ui/SectionLabel";
import { Button } from "./ui/Button";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

export function Careers() {
  return (
    <section id="careers" className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionLabel>CAREERS</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight">採用情報</h2>
          <p className="mt-6 text-xl font-bold leading-relaxed">
            ともに考え、つくり、
            <br />
            次の可能性へ。
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted">
            仕事への想いや働く環境、募集職種など、CampusBlendでの働き方をご紹介します。
          </p>

          <Button href="#" variant="outline" className="mt-8">
            採用サイトを見る
            <span aria-hidden>↗</span>
          </Button>
          <p className="mt-3 text-xs text-text-muted">
            外部の採用ページに遷移します
          </p>
        </div>

        <ImagePlaceholder
          label="メンバー・働く環境の写真"
          sublabel="IMAGE PLACEHOLDER"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
