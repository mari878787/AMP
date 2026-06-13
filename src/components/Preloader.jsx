import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit transition after 2.4s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2400);

    // Completely unmount after 2.9s (exit animation takes 500ms)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${exiting ? 'exiting' : ''}`}>
      <div className="blueprint-grid"></div>
      
      <div className="blueprint-content">
        {/* Architect blueprint modern building outline SVG */}
        <svg 
          width="280" 
          height="196" 
          viewBox="0 0 300 210" 
          fill="none" 
          stroke="#ba944c" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="blueprint-svg"
        >
          {/* 1. Ground datum line (draw-1) */}
          <line x1="15" y1="160" x2="285" y2="160" className="draw-1" strokeWidth="1.5" />
          
          {/* 2. Grid Axes (dashed, draw-1) */}
          <line x1="35" y1="25" x2="35" y2="170" className="dashed-line draw-1" strokeWidth="0.6" />
          <line x1="95" y1="25" x2="95" y2="170" className="dashed-line draw-1" strokeWidth="0.6" />
          <line x1="155" y1="25" x2="155" y2="170" className="dashed-line draw-1" strokeWidth="0.6" />
          <line x1="215" y1="25" x2="215" y2="170" className="dashed-line draw-1" strokeWidth="0.6" />
          <line x1="265" y1="25" x2="265" y2="170" className="dashed-line draw-1" strokeWidth="0.6" />
          
          {/* Axis Bubbles (draw-1) */}
          <circle cx="35" cy="20" r="5" className="draw-1" strokeWidth="0.8" />
          <circle cx="95" cy="20" r="5" className="draw-1" strokeWidth="0.8" />
          <circle cx="155" cy="20" r="5" className="draw-1" strokeWidth="0.8" />
          <circle cx="215" cy="20" r="5" className="draw-1" strokeWidth="0.8" />
          <circle cx="265" cy="20" r="5" className="draw-1" strokeWidth="0.8" />
          
          {/* Axis Labels (draw-5) */}
          <text x="35" y="22" className="draw-5" fontSize="6" textAnchor="middle" fill="#ba944c">A</text>
          <text x="95" y="22" className="draw-5" fontSize="6" textAnchor="middle" fill="#ba944c">B</text>
          <text x="155" y="22" className="draw-5" fontSize="6" textAnchor="middle" fill="#ba944c">C</text>
          <text x="215" y="22" className="draw-5" fontSize="6" textAnchor="middle" fill="#ba944c">D</text>
          <text x="265" y="22" className="draw-5" fontSize="6" textAnchor="middle" fill="#ba944c">E</text>

          {/* 3. Level indicators / Elevation ticks (draw-1) */}
          <line x1="10" y1="160" x2="15" y2="160" className="draw-1" strokeWidth="0.8" />
          <line x1="10" y1="117" x2="15" y2="117" className="draw-1" strokeWidth="0.8" />
          <line x1="10" y1="74" x2="15" y2="74" className="draw-1" strokeWidth="0.8" />
          <line x1="10" y1="44" x2="15" y2="44" className="draw-1" strokeWidth="0.8" />
          
          {/* Level text (draw-5) */}
          <text x="8" y="162" className="draw-5" fontSize="5" textAnchor="end" fill="#ba944c">EL. 0.00</text>
          <text x="8" y="119" className="draw-5" fontSize="5" textAnchor="end" fill="#ba944c">EL. +3.60</text>
          <text x="8" y="76" className="draw-5" fontSize="5" textAnchor="end" fill="#ba944c">EL. +7.20</text>
          <text x="8" y="46" className="draw-5" fontSize="5" textAnchor="end" fill="#ba944c">EL. +9.90</text>

          {/* 4. Slabs & Pillars (draw-2) */}
          <rect x="35" y="157" width="230" height="3" className="draw-2" strokeWidth="1" />
          <rect x="25" y="117" width="245" height="3" className="draw-2" strokeWidth="1" />
          <rect x="20" y="74" width="255" height="3" className="draw-2" strokeWidth="1" />
          <rect x="115" y="44" width="125" height="3" className="draw-2" strokeWidth="1" />
          
          {/* Ground columns */}
          <rect x="35" y="120" width="6" height="37" className="draw-2" strokeWidth="1" />
          <rect x="155" y="120" width="6" height="37" className="draw-2" strokeWidth="1" />
          <rect x="259" y="120" width="6" height="37" className="draw-2" strokeWidth="1" />

          {/* 5. Main Enclosures (draw-2, draw-3) */}
          {/* Ground floor glass block */}
          <rect x="55" y="120" width="85" height="37" className="draw-3" strokeWidth="1" />
          {/* Ground floor right solid wall */}
          <rect x="161" y="120" width="98" height="37" className="draw-2" strokeWidth="1" />
          {/* Cantilever first floor block */}
          <rect x="25" y="77" width="130" height="40" className="draw-2" strokeWidth="1.2" />
          {/* First floor recessed block */}
          <rect x="155" y="77" width="110" height="40" className="draw-2" strokeWidth="1" />
          {/* Penthouse block */}
          <rect x="120" y="47" width="110" height="27" className="draw-2" strokeWidth="1.2" />

          {/* 6. Pergola elements (draw-3, draw-4) */}
          <line x1="45" y1="74" x2="45" y2="52" className="draw-3" strokeWidth="1" />
          <line x1="95" y1="74" x2="95" y2="52" className="draw-3" strokeWidth="1" />
          <line x1="30" y1="52" x2="115" y2="52" className="draw-3" strokeWidth="1.5" />
          {/* Louvers */}
          <line x1="40" y1="52" x2="48" y2="44" className="draw-4" strokeWidth="0.8" />
          <line x1="55" y1="52" x2="63" y2="44" className="draw-4" strokeWidth="0.8" />
          <line x1="70" y1="52" x2="78" y2="44" className="draw-4" strokeWidth="0.8" />
          <line x1="85" y1="52" x2="93" y2="44" className="draw-4" strokeWidth="0.8" />
          <line x1="100" y1="52" x2="108" y2="44" className="draw-4" strokeWidth="0.8" />

          {/* 7. Detailed windows and doors (draw-3, draw-4) */}
          {/* Ground floor window mullions */}
          <line x1="76" y1="120" x2="76" y2="157" className="draw-4" strokeWidth="0.8" />
          <line x1="97" y1="120" x2="97" y2="157" className="draw-4" strokeWidth="0.8" />
          <line x1="118" y1="120" x2="118" y2="157" className="draw-4" strokeWidth="0.8" />
          
          {/* First floor corner panoramic window */}
          <rect x="30" y="82" width="70" height="30" className="draw-3" strokeWidth="0.8" />
          <line x1="30" y1="97" x2="100" y2="97" className="draw-4" strokeWidth="0.8" />
          <line x1="53" y1="82" x2="53" y2="112" className="draw-4" strokeWidth="0.8" />
          <line x1="76" y1="82" x2="76" y2="112" className="draw-4" strokeWidth="0.8" />
          
          {/* Cantilever cladding lines */}
          <line x1="115" y1="77" x2="115" y2="117" className="draw-4" strokeWidth="0.6" />
          <line x1="125" y1="77" x2="125" y2="117" className="draw-4" strokeWidth="0.6" />
          <line x1="135" y1="77" x2="135" y2="117" className="draw-4" strokeWidth="0.6" />
          <line x1="145" y1="77" x2="145" y2="117" className="draw-4" strokeWidth="0.6" />

          {/* Entrance Doors */}
          <rect x="175" y="125" width="35" height="32" className="draw-4" strokeWidth="0.8" />
          <line x1="192.5" y1="125" x2="192.5" y2="157" className="draw-4" strokeWidth="0.8" />
          <line x1="190.5" y1="138" x2="190.5" y2="146" className="draw-4" strokeWidth="0.8" />
          <line x1="194.5" y1="138" x2="194.5" y2="146" className="draw-4" strokeWidth="0.8" />
          <rect x="220" y="125" width="25" height="15" className="draw-4" strokeWidth="0.8" />
          <line x1="232.5" y1="125" x2="232.5" y2="140" className="draw-4" strokeWidth="0.6" />

          {/* Balcony Railing (dashed) */}
          <rect x="155" y="102" width="110" height="15" className="dashed-line draw-3" strokeWidth="0.8" />
          <line x1="175" y1="102" x2="175" y2="117" className="draw-4" strokeWidth="0.8" />
          <line x1="200" y1="102" x2="200" y2="117" className="draw-4" strokeWidth="0.8" />
          <line x1="225" y1="102" x2="225" y2="117" className="draw-4" strokeWidth="0.8" />
          <line x1="250" y1="102" x2="250" y2="117" className="draw-4" strokeWidth="0.8" />
          
          {/* Glass doors behind balcony */}
          <rect x="175" y="82" width="55" height="35" className="draw-3" strokeWidth="0.8" />
          <line x1="202.5" y1="82" x2="202.5" y2="117" className="draw-4" strokeWidth="0.8" />

          {/* Penthouse Facade Windows */}
          <rect x="135" y="52" width="80" height="22" className="draw-3" strokeWidth="0.8" />
          <line x1="155" y1="52" x2="155" y2="74" className="draw-4" strokeWidth="0.8" />
          <line x1="175" y1="52" x2="175" y2="74" className="draw-4" strokeWidth="0.8" />
          <line x1="195" y1="52" x2="195" y2="74" className="draw-4" strokeWidth="0.8" />

          {/* 8. Dimension Lines & Indicators (draw-4, draw-5) */}
          {/* Bottom dimension */}
          <line x1="35" y1="185" x2="265" y2="185" className="draw-4" strokeWidth="0.6" />
          <line x1="33" y1="187" x2="37" y2="183" className="draw-4" strokeWidth="0.8" />
          <line x1="153" y1="187" x2="157" y2="183" className="draw-4" strokeWidth="0.8" />
          <line x1="263" y1="187" x2="267" y2="183" className="draw-4" strokeWidth="0.8" />
          <text x="95" y="181" className="draw-5" fontSize="5" textAnchor="middle" fill="#ba944c">12.00 m</text>
          <text x="210" y="181" className="draw-5" fontSize="5" textAnchor="middle" fill="#ba944c">11.00 m</text>

          {/* Right dimension */}
          <line x1="285" y1="44" x2="285" y2="160" className="draw-4" strokeWidth="0.6" />
          <line x1="283" y1="162" x2="287" y2="158" className="draw-4" strokeWidth="0.8" />
          <line x1="283" y1="119" x2="287" y2="115" className="draw-4" strokeWidth="0.8" />
          <line x1="283" y1="76" x2="287" y2="72" className="draw-4" strokeWidth="0.8" />
          <line x1="283" y1="46" x2="287" y2="42" className="draw-4" strokeWidth="0.8" />
          <text x="289" y="142" className="draw-5" fontSize="5" textAnchor="start" fill="#ba944c">4.30 m</text>
          <text x="289" y="99" className="draw-5" fontSize="5" textAnchor="start" fill="#ba944c">4.00 m</text>
          <text x="289" y="62" className="draw-5" fontSize="5" textAnchor="start" fill="#ba944c">3.00 m</text>

          {/* 9. Compass Rose (draw-4, draw-5) */}
          <circle cx="260" cy="50" r="10" className="dashed-line draw-4" strokeWidth="0.6" />
          <line x1="245" y1="50" x2="275" y2="50" className="dashed-line draw-4" strokeWidth="0.4" />
          <line x1="260" y1="35" x2="260" y2="65" className="dashed-line draw-4" strokeWidth="0.4" />
          <path d="M 260 50 L 257 43 L 260 38 L 263 43 Z" className="draw-4" strokeWidth="0.8" fill="none" />
          <text x="260" y="34" className="draw-5" fontSize="5" textAnchor="middle" fontWeight="bold" fill="#ba944c">N</text>

          {/* 10. Scale Bar (draw-4, draw-5) */}
          <line x1="200" y1="195" x2="265" y2="195" className="draw-4" strokeWidth="0.6" />
          <line x1="200" y1="193" x2="200" y2="197" className="draw-4" strokeWidth="0.6" />
          <line x1="220" y1="193" x2="220" y2="197" className="draw-4" strokeWidth="0.6" />
          <line x1="240" y1="193" x2="240" y2="197" className="draw-4" strokeWidth="0.6" />
          <line x1="265" y1="193" x2="265" y2="197" className="draw-4" strokeWidth="0.6" />
          <text x="200" y="191" className="draw-5" fontSize="4" textAnchor="middle" fill="#ba944c">0</text>
          <text x="220" y="191" className="draw-5" fontSize="4" textAnchor="middle" fill="#ba944c">3m</text>
          <text x="240" y="191" className="draw-5" fontSize="4" textAnchor="middle" fill="#ba944c">6m</text>
          <text x="265" y="191" className="draw-5" fontSize="4" textAnchor="middle" fill="#ba944c">10m</text>
          <text x="232.5" y="203" className="draw-5" fontSize="5" textAnchor="middle" fontWeight="bold" letterSpacing="0.05em" fill="#ba944c">SCALE 1:100</text>

          {/* 11. Technical drafting curves & helpers (draw-5, dashed-line) */}
          <path d="M 25 117 A 92 92 0 0 1 117 25" className="dashed-line draw-5" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="165" x2="35" y2="157" className="dashed-line draw-5" strokeWidth="0.5" />
          <line x1="300" y1="165" x2="265" y2="157" className="dashed-line draw-5" strokeWidth="0.5" />
          <line x1="120" y1="47" x2="80" y2="15" className="dashed-line draw-5" strokeWidth="0.5" />
          
          {/* Plus sign crosshairs */}
          <path d="M 20 74 M 17 74 L 23 74 M 20 71 L 20 77" className="draw-5" strokeWidth="0.5" />
          <path d="M 275 74 M 272 74 L 278 74 M 275 71 L 275 77" className="draw-5" strokeWidth="0.5" />
          <path d="M 270 117 M 267 117 L 273 117 M 270 114 L 270 120" className="draw-5" strokeWidth="0.5" />
        </svg>

        {/* Progress indicators */}
        <div className="blueprint-progress-wrap">
          <div className="blueprint-bar">
            <div className="blueprint-fill"></div>
          </div>
          <div className="blueprint-text">DRAFTING YOUR VISION...</div>
        </div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: #060b1d; /* Matches dark navy theme */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s cubic-bezier(0.85, 0, 0.15, 1), transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
        }
        
        .preloader-overlay.exiting {
          opacity: 0;
          transform: scale(1.02);
          pointer-events: none;
        }

        /* ── Blueprint grid background paper ── */
        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-size: 36px 36px;
          background-image:
            linear-gradient(to right, rgba(186, 148, 76, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186, 148, 76, 0.04) 1px, transparent 1px);
          opacity: 0.85;
          z-index: 1;
        }

        .blueprint-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .blueprint-svg {
          max-width: 90vw;
          height: auto;
        }

        /* ── SVG drawing animations ── */
        .blueprint-svg line:not(.dashed-line),
        .blueprint-svg rect,
        .blueprint-svg path:not(.dashed-line),
        .blueprint-svg circle {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawBlueprintLines 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .blueprint-svg .dashed-line {
          opacity: 0;
          stroke-dasharray: 3 3;
          animation: fadeInDashed 1.5s ease-out forwards;
        }

        .blueprint-svg text {
          opacity: 0;
          font-family: monospace;
          font-weight: 500;
          animation: fadeInText 1.5s ease-out forwards;
        }

        .draw-1 { animation-delay: 0s !important; }
        .draw-2 { animation-delay: 0.15s !important; }
        .draw-3 { animation-delay: 0.3s !important; }
        .draw-4 { animation-delay: 0.45s !important; }
        .draw-5 { animation-delay: 0.6s !important; }

        @keyframes drawBlueprintLines {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInDashed {
          to {
            opacity: 0.4;
          }
        }

        @keyframes fadeInText {
          to {
            opacity: 0.85;
          }
        }

        /* ── Progress Bar ── */
        .blueprint-progress-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 200px;
        }

        .blueprint-bar {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .blueprint-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0%;
          background: #ba944c;
          animation: fillProgress 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .blueprint-text {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #ba944c;
          letter-spacing: 0.18em;
          text-align: center;
          opacity: 0.8;
          animation: pulseText 1.5s ease-in-out infinite alternate;
        }

        @keyframes fillProgress {
          to {
            width: 100%;
          }
        }

        @keyframes pulseText {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
