import "./CurveDivider.css";

interface CurveDividerProps {
  /** "up" = peak points into the section above; "down" = peak points into the section below */
  direction?: "up" | "down";
  fill?: string;
}

// Hill shape: base spans the full width, apex sits as a single point touching
// the opposite edge - so placed right after the hero, the apex lands exactly
// on the 100vh boundary line.
const PATH_UP = "M0,100 C0,52 20,0 50,0 C80,0 100,52 100,100 Z";
const PATH_DOWN = "M0,0 C0,48 20,100 50,100 C80,100 100,48 100,0 Z";

export default function CurveDivider({ direction = "up", fill }: CurveDividerProps) {
  return (
    <div className="curve" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <path d={direction === "up" ? PATH_UP : PATH_DOWN} fill={fill ?? "var(--mist)"} />
      </svg>
    </div>
  );
}
