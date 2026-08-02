import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  className = "h-9 w-9",
  size,
  showText = false,
  textClassName = "font-syne text-xl font-bold tracking-wider text-white"
}: LogoProps) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={size ? { width: size, height: size } : undefined}
      >
        {/* Top border bar */}
        <rect x="0" y="0" width="500" height="28" fill="#FF5A1F" />
        
        {/* Bottom border bar */}
        <rect x="0" y="472" width="500" height="28" fill="#FF5A1F" />
        
        {/* Main Geometric "N" Mark */}
        {/* Left Stem & inner diagonal fold */}
        <polygon points="112,76 166,76 166,350 338,424 112,424" fill="#FF5A1F" />
        
        {/* Right Stem & outer diagonal fold */}
        <polygon points="338,76 388,76 388,424 112,76 166,76 338,350" fill="#FF5A1F" />
      </svg>

      {showText && (
        <span className={textClassName}>
          NIHAL
        </span>
      )}
    </div>
  );
}
