import { LEFT_ARM, TOP_NUB, TOP_SPECK, RIGHT_ARM, RIGHT_SPECK, BOTTOM_V, LOGO_COLORS, nextLogoUid } from "./logo-paths";

/** Just the triangle mark, tightly cropped — for compact/icon use (navbar). */
export function LogoMark({ className, title = "CybrixAZ" }: { className?: string; title?: string }) {
  const gradId = `cybrixaz-mark-icon-${nextLogoUid()}`;

  return (
    <svg viewBox="90 10 350 395" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={`${gradId}-left`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={LOGO_COLORS.leftArmTop} />
          <stop offset="100%" stopColor={LOGO_COLORS.leftArmBottom} />
        </linearGradient>
        <linearGradient id={`${gradId}-right`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={LOGO_COLORS.rightArmTop} />
          <stop offset="100%" stopColor={LOGO_COLORS.rightArmBottom} />
        </linearGradient>
      </defs>
      <g transform="translate(0,12)">
        <path d={LEFT_ARM} fill={`url(#${gradId}-left)`} fillRule="evenodd" />
        <path d={TOP_NUB} fill={LOGO_COLORS.connector} fillRule="evenodd" />
        <path d={TOP_SPECK} fill={LOGO_COLORS.connector} fillRule="evenodd" />
        <path d={RIGHT_ARM} fill={`url(#${gradId}-right)`} fillRule="evenodd" />
        <path d={RIGHT_SPECK} fill={LOGO_COLORS.connector} fillRule="evenodd" />
        <path d={BOTTOM_V} fill={LOGO_COLORS.bottomV} fillRule="evenodd" />
      </g>
    </svg>
  );
}
