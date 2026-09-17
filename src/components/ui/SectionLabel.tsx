export function SectionLabel({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`block text-xs font-bold tracking-[0.2em] mb-3 ${
        tone === "dark" ? "text-accent-soft" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}
