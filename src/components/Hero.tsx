import { Button } from "./ui/Button";
import { HeroBackground } from "./hero/HeroBackground";

export function Hero() {
  return (
    <section
      data-hero
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink text-white"
    >
      <HeroBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-transparent lg:via-ink/35"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-28 pb-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Possibility,
            <br />
            expanded.
          </h1>

          <span className="mt-8 block text-xs font-bold tracking-[0.2em] text-accent-soft">
            WEB / SYSTEM / AI・DX
          </span>
          <p className="mt-3 text-2xl font-bold sm:text-3xl">
            ビジネスの可能性を、ともに広げる。
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Web・システム・AIの力で、事業の課題解決から、その先の成長まで。
            CampusBlendがともに考え、形にします。
          </p>

          <Button href="#contact" className="mt-10">
            まずは相談する
            <span aria-hidden>→</span>
          </Button>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-3 px-6 pb-10 text-xs tracking-[0.2em] text-white/50 lg:px-8">
        SCROLL
        <span aria-hidden className="animate-scroll-hint block">
          ↓
        </span>
      </div>
    </section>
  );
}
