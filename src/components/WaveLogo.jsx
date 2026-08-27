export default function WaveLogo({ width = 34, height = 22 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 22" className="wave-logo">
      <path
        d="M2 14 Q9 4 17 14 T32 14"
        stroke="oklch(52% 0.09 200)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
