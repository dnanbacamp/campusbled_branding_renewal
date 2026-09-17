import { SectionLabel } from "./ui/SectionLabel";
import { Button } from "./ui/Button";

const NEWS_ITEMS = [
  {
    date: "20XX.XX.XX",
    category: "お知らせ",
    title: "コーポレートサイトに関するお知らせ（仮）",
  },
  {
    date: "20XX.XX.XX",
    category: "事業情報",
    title: "サービスに関するお知らせ（仮）",
  },
  {
    date: "20XX.XX.XX",
    category: "採用情報",
    title: "採用に関するお知らせ（仮）",
  },
];

export function News() {
  return (
    <section id="news" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>NEWS</SectionLabel>
        <h2 className="text-3xl font-bold tracking-tight">お知らせ</h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {NEWS_ITEMS.map((item) => (
            <a
              key={item.title}
              href="#"
              className="flex flex-col gap-2 py-5 transition-colors hover:opacity-70 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="text-sm text-text-muted sm:w-32 sm:shrink-0">
                {item.date}
              </span>
              <span className="text-xs font-semibold text-accent sm:w-24 sm:shrink-0">
                {item.category}
              </span>
              <span className="text-sm font-medium text-ink">
                {item.title}
                <span aria-hidden className="ml-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        <Button href="#" variant="outline" className="mt-8">
          お知らせ一覧
        </Button>
      </div>
    </section>
  );
}
