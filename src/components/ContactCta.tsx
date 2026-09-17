import Link from "next/link";
import { SectionLabel } from "./ui/SectionLabel";

export function ContactCta() {
  return (
    <section id="contact" className="bg-ink py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-8">
        <div>
          <SectionLabel tone="dark">CONTACT</SectionLabel>
          <h2 className="text-2xl font-bold leading-relaxed sm:text-3xl">
            事業の「これから」を、一緒に話しませんか。
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Web・システム・AI活用など、少しのご相談からでもお気軽にご連絡ください。
          </p>
        </div>

        <Link
          href="#"
          aria-label="お問い合わせ"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-xl transition-colors hover:bg-white/10"
        >
          →
        </Link>
      </div>
    </section>
  );
}
