import Image from "next/image";
import Link from "next/link";

const COLUMN_1 = [
  { label: "私たちについて", href: "#about" },
  { label: "事業内容", href: "#services" },
  { label: "実績", href: "#case-story" },
  { label: "ご検討中の方へ", href: "#getting-started" },
];

const COLUMN_2 = [
  { label: "お知らせ", href: "#news" },
  { label: "採用情報 ↗", href: "#careers" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink-soft text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div>
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Campus Blend"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold tracking-tight">
                CampusBlend
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/60">株式会社CampusBlend</p>
          </div>

          <div className="flex gap-16">
            <ul className="space-y-3">
              {COLUMN_1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {COLUMN_2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <Link href="#" className="hover:text-white">
            プライバシーポリシー
          </Link>
          <span>© CampusBlend All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
