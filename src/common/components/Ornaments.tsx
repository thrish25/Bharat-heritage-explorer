import React from 'react';

/**
 * Royal Indian Heritage Vector Ornaments & Architectural Elements
 * Authentic cusped archways, stone jali lattices, royal lotus emblems, and corner carvings.
 */

// 1. Royal Lotus Logo Emblem (Header & Footer)
export const LotusEmblem: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Lotus Petals */}
    <path
      d="M50 6C42 20 25 36 10 52C28 54 42 46 50 40C58 46 72 54 90 52C75 36 58 20 50 6Z"
      stroke="#E0C27B"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="rgba(227, 185, 99, 0.15)"
    />
    {/* Inner Center Flame/Bud Petal */}
    <path
      d="M50 2C46 16 42 30 50 44C58 30 54 16 50 2Z"
      stroke="#E0C27B"
      strokeWidth="2.5"
      fill="rgba(227, 185, 99, 0.3)"
    />
    {/* Mid Flanking Petals */}
    <path
      d="M50 16C40 28 32 40 26 56C38 56 46 50 50 44C54 50 62 56 74 56C68 40 60 28 50 16Z"
      stroke="#C6A15B"
      strokeWidth="2"
      fill="rgba(197, 160, 89, 0.15)"
    />
    {/* Bottom Base Filigree / Pond Lotus Base */}
    <path
      d="M18 58C30 68 44 70 50 70C56 70 70 68 82 58C68 62 56 62 50 62C44 62 32 62 18 58Z"
      stroke="#E0C27B"
      strokeWidth="2"
      fill="#E0C27B"
    />
    {/* Small Decorative Base Beads */}
    <circle cx="50" cy="74" r="2.5" fill="#E0C27B" />
    <circle cx="42" cy="73" r="2" fill="#C6A15B" />
    <circle cx="58" cy="73" r="2" fill="#C6A15B" />
    <circle cx="34" cy="71" r="1.5" fill="#C6A15B" />
    <circle cx="66" cy="71" r="1.5" fill="#C6A15B" />
  </svg>
);

// 2. Ornamental Lotus Divider (Below Hero Title and Section Headings)
export const LotusDivider: React.FC<{ className?: string }> = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-md ${className}`}>
    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-[#E0C27B]" />
    <div className="flex items-center gap-2 px-1">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#E0C27B] bg-[#151719]" />
      <LotusEmblem className="w-6 h-5" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#E0C27B] bg-[#151719]" />
    </div>
    <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#C6A15B]/70 to-[#E0C27B]" />
  </div>
);

// 3. Indian Carved Cusped Stone Arch Canopy Framing (Full Span Framing over Hero)
export const ArchCanopyFrame: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
    {/* Left Pillar & Cusped Arch Canopy */}
    <div className="absolute top-0 left-0 bottom-0 w-36 sm:w-56 md:w-72 lg:w-88 pointer-events-none">
      <svg
        viewBox="0 0 360 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-left-top opacity-90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sandstoneGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A88C68" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#8F7545" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#242729" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#151719" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0C27B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top Arch Canopy Mass (Carved sandstone spandrel) */}
        <path
          d="M0 0 H360 C320 40 260 80 200 110 C150 135 110 170 80 220 C60 255 45 310 40 380 V800 H0 V0Z"
          fill="url(#sandstoneGradLeft)"
        />

        {/* Cusped Foil Arch Rims (Multi-foil scalloped edge) */}
        <path
          d="M360 0 C330 35 290 65 240 90 C200 110 160 140 130 180 C100 220 80 270 70 340 C60 410 55 520 50 800"
          stroke="#E0C27B"
          strokeWidth="3"
          strokeOpacity="0.75"
        />
        <path
          d="M350 0 C320 30 280 60 230 85 C190 105 150 135 120 175 C90 215 70 265 60 335 C50 405 45 515 40 800"
          stroke="#C6A15B"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeDasharray="6 3"
        />

        {/* Left Stone Pillar Capital & Mouldings */}
        <rect x="0" y="300" width="60" height="12" fill="#E0C27B" fillOpacity="0.4" />
        <rect x="0" y="316" width="55" height="6" fill="#C6A15B" fillOpacity="0.6" />
        <line x1="0" y1="300" x2="60" y2="300" stroke="#E0C27B" strokeWidth="2" />
        <line x1="0" y1="322" x2="55" y2="322" stroke="#E0C27B" strokeWidth="1.5" />

        {/* Carved Floral Medallion in Arch Spandrel */}
        <circle cx="70" cy="70" r="28" stroke="#E0C27B" strokeWidth="2" fill="rgba(36, 16, 12, 0.7)" />
        <circle cx="70" cy="70" r="20" stroke="#C6A15B" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="70" cy="70" r="10" fill="#E0C27B" fillOpacity="0.6" />
      </svg>
    </div>

    {/* Right Pillar & Cusped Arch Canopy (Mirrored) */}
    <div className="absolute top-0 right-0 bottom-0 w-36 sm:w-56 md:w-72 lg:w-88 pointer-events-none">
      <svg
        viewBox="0 0 360 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-right-top opacity-90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] scale-x-[-1]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 H360 C320 40 260 80 200 110 C150 135 110 170 80 220 C60 255 45 310 40 380 V800 H0 V0Z"
          fill="url(#sandstoneGradLeft)"
        />
        <path
          d="M360 0 C330 35 290 65 240 90 C200 110 160 140 130 180 C100 220 80 270 70 340 C60 410 55 520 50 800"
          stroke="#E0C27B"
          strokeWidth="3"
          strokeOpacity="0.75"
        />
        <path
          d="M350 0 C320 30 280 60 230 85 C190 105 150 135 120 175 C90 215 70 265 60 335 C50 405 45 515 40 800"
          stroke="#C6A15B"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeDasharray="6 3"
        />
        <rect x="0" y="300" width="60" height="12" fill="#E0C27B" fillOpacity="0.4" />
        <rect x="0" y="316" width="55" height="6" fill="#C6A15B" fillOpacity="0.6" />
        <line x1="0" y1="300" x2="60" y2="300" stroke="#E0C27B" strokeWidth="2" />
        <line x1="0" y1="322" x2="55" y2="322" stroke="#E0C27B" strokeWidth="1.5" />
        <circle cx="70" cy="70" r="28" stroke="#E0C27B" strokeWidth="2" fill="rgba(36, 16, 12, 0.7)" />
        <circle cx="70" cy="70" r="20" stroke="#C6A15B" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="70" cy="70" r="10" fill="#E0C27B" fillOpacity="0.6" />
      </svg>
    </div>
  </div>
);

// 4. Carved Indian Stone Corner Accents (for Cards & Panels)
export const CarvedCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const getTransforms = () => {
    switch (position) {
      case 'tr':
        return 'top-1 right-1 scale-x-[-1]';
      case 'bl':
        return 'bottom-1 left-1 scale-y-[-1]';
      case 'br':
        return 'bottom-1 right-1 scale-x-[-1] scale-y-[-1]';
      default:
        return 'top-1 left-1';
    }
  };

  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-5 h-5 pointer-events-none z-20 ${getTransforms()}`}
      aria-hidden="true"
    >
      <path
        d="M2 26V7C2 4.23858 4.23858 2 7 2H26"
        stroke="#E0C27B"
        strokeWidth="2"
      />
      <path
        d="M6 24V9C6 7.34315 7.34315 6 9 6H24"
        stroke="#C6A15B"
        strokeWidth="1.2"
        strokeOpacity="0.9"
      />
      <circle cx="10" cy="10" r="2" fill="#E0C27B" />
      <circle cx="18" cy="6" r="1.2" fill="#C6A15B" />
      <circle cx="6" cy="18" r="1.2" fill="#C6A15B" />
    </svg>
  );
};

// 5. Konark Sun Temple Stone Sundial Wheel Watermark (for About Section)
export const KonarkWheelWatermark: React.FC<{ className?: string }> = ({
  className = "w-96 h-96 opacity-15",
}) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="190" stroke="#E0C27B" strokeWidth="2.5" strokeOpacity="0.8" />
    <circle cx="200" cy="200" r="182" stroke="#C6A15B" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
    <circle cx="200" cy="200" r="172" stroke="#E0C27B" strokeWidth="2" strokeOpacity="0.7" />
    <circle cx="200" cy="200" r="158" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.4" />

    <circle cx="200" cy="200" r="54" stroke="#E0C27B" strokeWidth="3" fill="rgba(36, 16, 12, 0.4)" />
    <circle cx="200" cy="200" r="42" stroke="#C6A15B" strokeWidth="2" strokeDasharray="4 2" />
    <circle cx="200" cy="200" r="24" stroke="#E0C27B" strokeWidth="2" fill="#C6A15B" fillOpacity="0.25" />
    <circle cx="200" cy="200" r="8" fill="#E0C27B" />

    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
      <g key={`major-${idx}`} transform={`rotate(${angle} 200 200)`}>
        <line x1="200" y1="54" x2="200" y2="158" stroke="#E0C27B" strokeWidth="4" strokeOpacity="0.85" />
        <line x1="196" y1="54" x2="196" y2="158" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="204" y1="54" x2="204" y2="158" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="200" cy="106" r="10" stroke="#E0C27B" strokeWidth="2" fill="#151719" />
        <circle cx="200" cy="106" r="4" fill="#E0C27B" />
      </g>
    ))}

    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, idx) => (
      <g key={`minor-${idx}`} transform={`rotate(${angle} 200 200)`}>
        <line x1="200" y1="54" x2="200" y2="158" stroke="#C6A15B" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="6 3" />
        <circle cx="200" cy="115" r="5" stroke="#C6A15B" strokeWidth="1.5" fill="#151719" />
      </g>
    ))}

    {Array.from({ length: 32 }).map((_, idx) => {
      const angle = (idx * 360) / 32;
      return (
        <g key={`bead-${idx}`} transform={`rotate(${angle} 200 200)`}>
          <circle cx="200" cy="16" r="3" fill="#E0C27B" fillOpacity="0.7" />
        </g>
      );
    })}
  </svg>
);

// 6. Subtle Royal Indian Jali Lattice Pattern Overlay
export const JaliBackgroundPattern: React.FC<{ className?: string }> = ({
  className = "opacity-5",
}) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%23E3B963' stroke-width='0.75' stroke-opacity='0.4'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%23C5A059' fill-opacity='0.25'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
    }}
  />
);
