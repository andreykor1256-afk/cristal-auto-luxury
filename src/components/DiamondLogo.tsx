interface DiamondLogoProps {
  size?: number;
  className?: string;
}

const DiamondLogo = ({ size = 64, className = "" }: DiamondLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_0_12px_hsl(var(--neon)/0.9)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="diamondFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(190 100% 80%)" />
          <stop offset="50%" stopColor="hsl(180 100% 55%)" />
          <stop offset="100%" stopColor="hsl(200 100% 35%)" />
        </linearGradient>
      </defs>
      <g stroke="hsl(var(--neon))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="url(#diamondFace)" fillOpacity="0.15">
        {/* Outer diamond */}
        <path d="M12 22 L32 8 L52 22 L32 58 Z" />
        {/* Top horizontal girdle */}
        <path d="M12 22 L52 22" />
        {/* Inner facets from top */}
        <path d="M22 22 L32 8 L42 22" />
        {/* Facets to bottom point */}
        <path d="M12 22 L32 58" />
        <path d="M22 22 L32 58" />
        <path d="M42 22 L32 58" />
        <path d="M52 22 L32 58" />
      </g>
    </svg>
  );
};

export default DiamondLogo;
