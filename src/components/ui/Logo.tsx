import { LEFT_ARM, TOP_NUB, TOP_SPECK, RIGHT_ARM, RIGHT_SPECK, BOTTOM_V, LOGO_COLORS, nextLogoUid } from "./logo-paths";

/**
 * Full CybrixAZ lockup (mark + wordmark [+ tagline]) as a single inline
 * SVG — a faithful vector conversion of the original logo.png, not a
 * recolor. The mark's outline was vector-traced from logo-light-bg.png
 * (potrace, alpha-channel silhouette) and split into its constituent
 * strokes so each can carry its own sampled fill. All colors come from
 * LOGO_COLORS (sampled from the source raster), independent of the site's
 * --color-accent theme tokens. For compact/icon use (e.g. the navbar) see
 * LogoMark instead.
 */
export function Logo({
  className,
  title = "CybrixAZ — Secure Every Bit",
  showTagline = true,
}: {
  className?: string;
  title?: string;
  showTagline?: boolean;
}) {
  const gradId = `cybrixaz-mark-${nextLogoUid()}`;

  return (
    <svg
      viewBox={showTagline ? "0 0 620 544" : "0 0 620 500"}
      className={className}
      role="img"
      aria-label={title}
    >
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
      <text
        x="310"
        y="465"
        textAnchor="middle"
        fontFamily="var(--font-heading)"
        fontWeight={700}
        fontSize={52}
        letterSpacing={2}
      >
        <tspan fill={LOGO_COLORS.cybri}>CYBRI</tspan>
        <tspan fill={LOGO_COLORS.x}>X</tspan>
        <tspan fill={LOGO_COLORS.az}>AZ</tspan>
      </text>
      {showTagline && (
        <text
          x="310"
          y="528"
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontWeight={600}
          fontSize={17}
          letterSpacing={6}
          fill={LOGO_COLORS.tagline}
        >
          SECURE EVERY BIT
        </text>
      )}
    </svg>
  );
}
