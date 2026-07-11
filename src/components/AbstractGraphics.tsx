import React from "react";

// Graphic 1: Diagnóstico Empresarial (High-fidelity growth tracker, golden gradients, micro metrics)
export const DiagnosticGraphic = () => (
  <svg
    id="graphic-diagnostic-svg"
    className="w-full max-w-[210px] h-[145px]"
    viewBox="0 0 210 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* High-end gradients */}
      <linearGradient id="diag-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" />
        <stop offset="50%" stopColor="#EAD27B" />
        <stop offset="100%" stopColor="#B8911F" />
      </linearGradient>
      <linearGradient id="diag-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#D8AC28" stopOpacity="0.0" />
      </linearGradient>
      <linearGradient id="diag-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.25" />
        <stop offset="100%" stopColor="white" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="diag-bar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F4D79" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0F2A44" stopOpacity="0.3" />
      </linearGradient>
      
      {/* Glow Filter */}
      <filter id="diag-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <style>
      {`
        @keyframes diagFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes diagPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        @keyframes diagDraw {
          to { stroke-dashoffset: 0; }
        }
        .diag-animated-float {
          animation: diagFloat 4s ease-in-out infinite;
        }
        .diag-animated-pulse {
          transform-origin: center;
          animation: diagPulse 2s ease-in-out infinite;
        }
        .diag-animated-curve {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: diagDraw 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}
    </style>

    {/* Grid Background */}
    <g opacity="0.12">
      <line x1="20" y1="20" x2="190" y2="20" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="20" y1="50" x2="190" y2="50" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="20" y1="80" x2="190" y2="80" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="20" y1="110" x2="190" y2="110" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="20" y1="130" x2="190" y2="130" stroke="white" strokeWidth="0.5" />
      
      <line x1="35" y1="15" x2="35" y2="135" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="75" y1="15" x2="75" y2="135" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="115" y1="15" x2="115" y2="135" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="155" y1="15" x2="155" y2="135" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
    </g>

    {/* Subtle Data Indicators (Left Axis numbers) */}
    <g opacity="0.2" fill="white" fontSize="7" fontFamily="monospace" letterSpacing="0.05em">
      <text x="8" y="23">100</text>
      <text x="8" y="53">75</text>
      <text x="8" y="83">50</text>
      <text x="8" y="113">25</text>
    </g>

    {/* Elegant Metric Bars with border */}
    {/* Bar 1 */}
    <g>
      <rect x="42" y="75" width="14" height="55" rx="3" fill="url(#diag-bar-grad)" stroke="white" strokeOpacity="0.05" />
      <rect x="42" y="105" width="14" height="25" rx="3" fill="url(#diag-white-grad)" />
    </g>
    {/* Bar 2 */}
    <g>
      <rect x="82" y="55" width="14" height="75" rx="3" fill="url(#diag-bar-grad)" stroke="white" strokeOpacity="0.05" />
      <rect x="82" y="85" width="14" height="45" rx="3" fill="url(#diag-white-grad)" />
    </g>
    {/* Bar 3 */}
    <g>
      <rect x="122" y="40" width="14" height="90" rx="3" fill="url(#diag-bar-grad)" stroke="white" strokeOpacity="0.05" />
      <rect x="122" y="65" width="14" height="65" rx="3" fill="url(#diag-white-grad)" />
    </g>
    {/* Bar 4 (Highlighted Golden Bar) */}
    <g>
      <rect x="162" y="20" width="14" height="110" rx="3" fill="url(#diag-bar-grad)" stroke="#D8AC28" strokeOpacity="0.15" />
      <rect x="162" y="45" width="14" height="85" rx="3" fill="url(#diag-gold-grad)" fillOpacity="0.15" />
      <rect x="162" y="20" width="14" height="25" rx="3" fill="url(#diag-gold-grad)" className="animate-pulse" />
    </g>

    {/* Area Under the curve */}
    <path
      d="M20,125 Q45,100 80,75 T145,55 T200,18 V130 H20 Z"
      fill="url(#diag-area-grad)"
      opacity="0.7"
    />

    {/* Trend Line (Spline Curve) with glowing shadow */}
    <path
      d="M20,125 Q45,100 80,75 T145,55 T200,18"
      fill="none"
      stroke="url(#diag-gold-grad)"
      strokeWidth="2.5"
      strokeLinecap="round"
      filter="url(#diag-glow)"
      className="diag-animated-curve"
    />

    {/* Tiny Glowing Nodes along the trajectory */}
    <circle cx="80" cy="75" r="3.5" fill="white" stroke="#D8AC28" strokeWidth="1.5" />
    <circle cx="145" cy="55" r="3.5" fill="#D8AC28" />
    <circle cx="145" cy="55" r="8" stroke="#D8AC28" strokeWidth="1" strokeOpacity="0.4" className="diag-animated-pulse" />
    
    <circle cx="200" cy="18" r="4" fill="#D8AC28" />
    <circle cx="200" cy="18" r="9" stroke="#D8AC28" strokeWidth="1.5" strokeOpacity="0.5" />

    {/* Top Right Label Tag */}
    <g transform="translate(30, 24)">
      <g className="diag-animated-float">
        <rect x="0" y="0" width="52" height="15" rx="4" fill="#0F2A44" stroke="#D8AC28" strokeOpacity="0.3" strokeWidth="0.75" />
        <text x="6" y="10" fill="#D8AC28" fontSize="6.5" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">CAGR +42%</text>
      </g>
    </g>
  </svg>
);

// Graphic 2: WhatsApp (High-fidelity corporate messaging, glassmorphic bubbles, golden metrics)
export const WhatsAppGraphic = () => (
  <svg
    id="graphic-whatsapp-svg"
    className="w-full max-w-[210px] h-[145px]"
    viewBox="0 0 210 145"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Gradients */}
      <linearGradient id="wa-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" />
        <stop offset="50%" stopColor="#F5DF93" />
        <stop offset="100%" stopColor="#B8911F" />
      </linearGradient>
      <linearGradient id="wa-glass-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1F4D79" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#0F2A44" stopOpacity="0.45" />
      </linearGradient>
      <linearGradient id="wa-glass-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#0F2A44" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="wa-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D8AC28" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#D8AC28" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#D8AC28" stopOpacity="0.1" />
      </linearGradient>
      
      {/* Glow filter */}
      <filter id="wa-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <style>
      {`
        @keyframes waFloatLeft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes waFloatRight {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes waPulseBeacon {
          0%, 100% { r: 5; opacity: 0.3; }
          50% { r: 10; opacity: 0.7; }
        }
        @keyframes waDash {
          to { stroke-dashoffset: -30; }
        }
        .wa-animated-left {
          animation: waFloatLeft 4s ease-in-out infinite;
        }
        .wa-animated-right {
          animation: waFloatRight 4.5s ease-in-out infinite;
        }
        .wa-animated-pulse {
          animation: waPulseBeacon 2.5s ease-in-out infinite;
        }
        .wa-animated-orbit {
          stroke-dasharray: 6 6;
          animation: waDash 10s linear infinite;
        }
      `}
    </style>

    {/* Concentric advisory background lines */}
    <g opacity="0.1">
      <circle cx="105" cy="72" r="60" stroke="white" strokeWidth="0.75" className="wa-animated-orbit" />
      <circle cx="105" cy="72" r="40" stroke="#D8AC28" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="105" cy="72" r="20" stroke="white" strokeWidth="0.5" />
    </g>

    {/* Connection beams */}
    <path d="M50,62 C90,40 120,45 150,88" stroke="url(#wa-line-grad)" strokeWidth="1.5" fill="none" opacity="0.5" />
    
    {/* Central Pulsing Advisory Beacon */}
    <circle cx="105" cy="72" r="4" fill="#D8AC28" />
    <circle cx="105" cy="72" r="10" stroke="#D8AC28" strokeWidth="1" className="wa-animated-pulse" />

    {/* Bubble Left: Client Request (Glassmorphic blue container) */}
    <g transform="translate(6, 22)">
      <g className="wa-animated-left">
        {/* Small profile circle */}
        <circle cx="12" cy="12" r="10" fill="#1F4D79" stroke="white" strokeOpacity="0.1" />
        <text x="12" y="14.5" fill="white" fillOpacity="0.7" fontSize="7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">C</text>

        {/* Bubble Shell */}
        <path
          d="M28,5 C28,5 28,0 34,0 H80 C86,0 90,4 90,10 V30 C90,36 86,40 80,40 H34 C28,40 28,35 28,35"
          fill="url(#wa-glass-left)"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        
        {/* Content lines inside */}
        <line x1="38" y1="12" x2="72" y2="12" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="20" x2="68" y2="20" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="28" x2="58" y2="28" stroke="#D8AC28" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Timestamp */}
        <text x="74" y="34" fill="white" fillOpacity="0.3" fontSize="5.5" fontFamily="monospace">14:02</text>
      </g>
    </g>

    {/* Bubble Right: Advisory Response (Glassmorphic gold-tinted container) */}
    <g transform="translate(112, 78)">
      <g className="wa-animated-right">
        {/* Bubble Shell */}
        <path
          d="M68,5 C68,5 68,0 62,0 H12 C6,0 2,4 2,10 V30 C2,36 6,40 12,40 H62 C68,40 68,35 68,35"
          fill="url(#wa-glass-right)"
          stroke="url(#wa-gold-grad)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        
        {/* Small profile circle right */}
        <circle cx="84" cy="28" r="10" fill="#0F2A44" stroke="#D8AC28" strokeWidth="1" />
        <text x="84" y="30.5" fill="#D8AC28" fontSize="7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">JL</text>

        {/* Content lines inside */}
        <line x1="12" y1="12" x2="58" y2="12" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="20" x2="50" y2="20" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="28" x2="42" y2="28" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />

        {/* Double checkmarks & Timestamp */}
        <text x="44" y="34" fill="white" fillOpacity="0.4" fontSize="5.5" fontFamily="monospace">14:03</text>
        {/* Two tiny double checkmark paths */}
        <path d="M51,32 L53,34 L57,30 M55,32 L57,34 L61,30" stroke="#D8AC28" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  </svg>
);

// Graphic 3: Instagram (Concentric square grids, editorial frame structures)
export const InstagramGraphic = () => (
  <svg
    id="graphic-instagram-svg"
    className="w-full max-w-[200px] h-[140px]"
    viewBox="0 0 200 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gold-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" />
        <stop offset="100%" stopColor="#B8911F" />
      </linearGradient>
    </defs>
    
    {/* Editorial grid boxes */}
    <g opacity="0.15">
      <rect x="25" y="25" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
      <rect x="80" y="25" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
      <rect x="135" y="25" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
      <rect x="25" y="75" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
      <rect x="80" y="75" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
      <rect x="135" y="75" width="40" height="40" rx="6" stroke="white" strokeWidth="1" />
    </g>

    {/* Highlight Main Focus Lens */}
    <g className="animate-float-slow">
      {/* Outer Editorial Lens Square */}
      <rect
        x="68" y="38" width="64" height="64" rx="16"
        fill="#1F4D79"
        fillOpacity="0.6"
        stroke="url(#gold-grad-3)"
        strokeWidth="2"
      />
      {/* Inner Concentric Circle */}
      <circle cx="100" cy="70" r="18" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
      
      {/* Tiny Flash Dot */}
      <circle cx="118" cy="52" r="3" fill="#D8AC28" />
      <circle cx="118" cy="52" r="6" stroke="#D8AC28" strokeWidth="0.5" strokeOpacity="0.5" className="animate-ping" />
    </g>

    {/* Flowing Organic Ring Details */}
    <path
      d="M30,120 Q100,90 170,120"
      fill="none"
      stroke="url(#gold-grad-3)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
  </svg>
);

// Graphic 4: Final Reunião CTA (Strategic calendar agenda)
export const CalendarGraphic = () => (
  <svg
    id="graphic-calendar-svg"
    className="w-full max-w-[200px] h-[140px]"
    viewBox="0 0 200 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gold-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8AC28" />
        <stop offset="100%" stopColor="#B8911F" />
      </linearGradient>
    </defs>

    {/* Calendar card shell */}
    <rect x="40" y="25" width="120" height="90" rx="12" fill="#1F4D79" fillOpacity="0.4" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
    
    {/* Calendar header bar */}
    <path d="M40,37 C40,29 48,25 56,25 H144 C152,25 160,29 160,37 V45 H40 V37 Z" fill="#1F4D79" fillOpacity="0.9" />
    
    {/* Header Dots simulating binder rings */}
    <circle cx="65" cy="35" r="2.5" fill="#D8AC28" />
    <circle cx="100" cy="35" r="2.5" fill="white" fillOpacity="0.5" />
    <circle cx="135" cy="35" r="2.5" fill="#D8AC28" />

    {/* Grid Grid Items */}
    <g opacity="0.3">
      {/* Calendar Slots */}
      <rect x="52" y="55" width="16" height="12" rx="2" fill="white" />
      <rect x="76" y="55" width="16" height="12" rx="2" fill="white" />
      <rect x="100" y="55" width="16" height="12" rx="2" fill="white" />
      <rect x="124" y="55" width="16" height="12" rx="2" fill="white" />
      <rect x="132" y="55" width="16" height="12" rx="2" fill="white" className="hidden" />

      <rect x="52" y="75" width="16" height="12" rx="2" fill="white" />
      <rect x="76" y="75" width="16" height="12" rx="2" fill="white" />
      
      <rect x="124" y="75" width="16" height="12" rx="2" fill="white" />

      <rect x="52" y="95" width="16" height="12" rx="2" fill="white" />
      <rect x="76" y="95" width="16" height="12" rx="2" fill="white" />
      <rect x="100" y="95" width="16" height="12" rx="2" fill="white" />
    </g>

    {/* Highlighted Booking Node (The Slot Chosen) */}
    <rect x="100" y="75" width="16" height="12" rx="2" fill="url(#gold-grad-4)" className="animate-pulse" />
    <circle cx="108" cy="81" r="2" fill="#0F2A44" />

    {/* Diagonal elegant target lines */}
    <path
      d="M20,15 L55,45"
      stroke="#D8AC28"
      strokeWidth="0.75"
      strokeOpacity="0.6"
      strokeDasharray="2 2"
    />
    <circle cx="20" cy="15" r="3" fill="#D8AC28" />
    
    <path
      d="M145,95 L180,125"
      stroke="white"
      strokeWidth="0.75"
      strokeOpacity="0.4"
      strokeDasharray="2 2"
    />
    <circle cx="180" cy="125" r="3" fill="white" fillOpacity="0.5" />
  </svg>
);
