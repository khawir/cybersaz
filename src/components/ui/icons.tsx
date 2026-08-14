import type { SVGProps } from "react";

/**
 * Line-icon set extracted from the original static site (index.html /
 * services.html) so every offering keeps the exact icon it already had.
 * All icons share the same stroke-only style and inherit color from
 * .icon-box via currentColor.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19.5 19.5L14.5 14.5" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2" />
      <circle cx="4.5" cy="5.5" r="1.5" />
      <circle cx="19.5" cy="5.5" r="1.5" />
      <circle cx="4.5" cy="18.5" r="1.5" />
      <circle cx="19.5" cy="18.5" r="1.5" />
      <path d="M12 12L4.5 5.5M12 12l7.5-6.5M12 12l-7.5 6.5M12 12l7.5 6.5" />
    </svg>
  );
}

export function TargetCrosshairIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" />
    </svg>
  );
}

export function ConcentricCirclesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l3 3M14 9l2 2" />
    </svg>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M9 21h6" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 006 0L5 7z" />
      <path d="M19 7l-3 6a3 3 0 006 0l-3-6z" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.8 2.8-2-2 2.8-2.8z" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function PerimeterBarsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V9l4-3v15M10 21V9l4-3v15M16 21V9l4-3v15" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4v5h5" />
      <path d="M20 20v-5h-5" />
      <path d="M4.6 15a8 8 0 0014.4 3.4M19.4 9A8 8 0 005 5.6" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H8l-4 4V5z" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 19a4 4 0 01-.5-8 5.5 5.5 0 0110.7-1.7A4.5 4.5 0 0117 19H6.5z" />
    </svg>
  );
}

export function ReportIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M3 20h18" />
      <path d="M6 11h2l1.5 3 2-6 1.5 3h3" />
    </svg>
  );
}

export function ChecklistIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 8h18" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function ServerRackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="6" rx="1" />
      <rect x="4" y="11" width="16" height="6" rx="1" />
      <path d="M7 6h.01M7 14h.01" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9 3.5h6a1 1 0 011 1V6H8V4.5a1 1 0 011-1z" />
      <path d="M8.5 12l1.8 1.8L14 10" />
      <path d="M8.5 17l1.8 1.8L14 15" />
    </svg>
  );
}

export const ICONS = {
  search: SearchIcon,
  network: NetworkIcon,
  targetCrosshair: TargetCrosshairIcon,
  concentricCircles: ConcentricCirclesIcon,
  key: KeyIcon,
  database: DatabaseIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  wrench: WrenchIcon,
  eye: EyeIcon,
  perimeterBars: PerimeterBarsIcon,
  refresh: RefreshIcon,
  chat: ChatIcon,
  cloud: CloudIcon,
  report: ReportIcon,
  checklist: ChecklistIcon,
  serverRack: ServerRackIcon,
  shieldCheck: ShieldCheckIcon,
} as const;

export type IconName = keyof typeof ICONS;
