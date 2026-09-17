export function ImagePlaceholder({
  label,
  sublabel,
  tone = "light",
  className = "",
}: {
  label: string;
  sublabel?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const textColor = tone === "dark" ? "text-white/70" : "text-text-muted";
  const bg = tone === "dark" ? "bg-white/10" : "bg-placeholder/60";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl text-center ${bg} ${className}`}
    >
      <span className={`text-2xl font-light ${textColor}`}>+</span>
      <span className={`text-xs font-semibold ${textColor}`}>{label}</span>
      {sublabel ? (
        <span className={`text-[11px] tracking-wide ${textColor} opacity-70`}>
          {sublabel}
        </span>
      ) : null}
    </div>
  );
}
