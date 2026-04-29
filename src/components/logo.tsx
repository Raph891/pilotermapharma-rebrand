import { cn } from "@/lib/utils";

export function Logo({
  className,
  mark = false,
  invert = false,
}: {
  className?: string;
  mark?: boolean;
  invert?: boolean;
}) {
  if (mark) {
    return (
      <svg
        className={cn("h-8 w-8", className)}
        viewBox="0 0 64 64"
        role="img"
        aria-label="PiloterMaPharma"
      >
        <rect x="0" y="0" width="64" height="64" rx="14" fill="#1E3A8A" />
        <path
          d="M14 46 L26 34 L34 40 L50 20"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="20" r="4" fill="#F59E0B" />
        <rect x="36" y="9" width="18" height="6" rx="3" fill="#FFFFFF" />
      </svg>
    );
  }

  const piloterColor = invert ? "#FFFFFF" : "#0F172A";
  const pharmaColor = invert ? "#F59E0B" : "#1E3A8A";
  const markBg = invert ? "#FFFFFF" : "#1E3A8A";
  const arrowColor = invert ? "#1E3A8A" : "#F59E0B";
  const dotColor = invert ? "#1E3A8A" : "#F59E0B";
  const capsuleColor = invert ? "#1E3A8A" : "#FFFFFF";

  return (
    <svg
      className={cn("h-7 w-auto", className)}
      viewBox="0 0 220 44"
      role="img"
      aria-label="PiloterMaPharma"
    >
      <g transform="translate(2 6)">
        <rect x="0" y="0" width="32" height="32" rx="8" fill={markBg} />
        <path
          d="M8 24 L14 18 L18 21 L24 11"
          fill="none"
          stroke={arrowColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="11" r="2.2" fill={dotColor} />
        <rect x="18.5" y="5.5" width="9" height="3.2" rx="1.6" fill={capsuleColor} opacity="0.95" />
      </g>
      <g
        fontFamily="Inter, -apple-system, Segoe UI, Roboto, sans-serif"
        fontWeight="600"
        fontSize="17"
        letterSpacing="-0.3"
      >
        <text x="44" y="28" fill={piloterColor}>
          Piloter
        </text>
        <text x="98" y="28" fill={pharmaColor}>
          MaPharma
        </text>
      </g>
    </svg>
  );
}
