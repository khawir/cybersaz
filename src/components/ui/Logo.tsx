import {
  LEFT_ARM,
  TOP_NUB,
  TOP_SPECK,
  RIGHT_ARM,
  RIGHT_SPECK,
  BOTTOM_V,
  WORDMARK_CYBRI,
  WORDMARK_X,
  WORDMARK_AZ,
  TAGLINE_PATH,
  WORDMARK_NATIVE_SIZE,
  TAGLINE_NATIVE_SIZE,
  LOGO_COLORS,
  nextLogoUid,
} from "./logo-paths";

// Layout constants for the horizontal lockup — mark on the left, the
// traced wordmark + tagline stacked to its right, vertically centered
// against the mark's height. The mark (after its own translate(0,12))
// renders at x[97,436] y[18,409] — the viewBox below pads that on all
// sides so it never gets clipped, regardless of whether the tagline row
// is shown. Text is always centered against the mark's true vertical
// center, so wordmark position doesn't shift between variants. Tuned by
// eye against a rasterized preview.
const MARK_LEFT = 90;
const MARK_RIGHT_EDGE = 440;
const MARK_TOP = 18;
const MARK_BOTTOM = 409;
const MARK_CENTER_Y = (MARK_TOP + MARK_BOTTOM) / 2;
const VIEWBOX_PAD = 16;
const TEXT_GAP_X = 40;
const TEXT_SCALE = 2.5;
const TEXT_ROW_GAP = 15;

const wordmarkH = WORDMARK_NATIVE_SIZE.height * TEXT_SCALE;
const wordmarkW = WORDMARK_NATIVE_SIZE.width * TEXT_SCALE;
const taglineH = TAGLINE_NATIVE_SIZE.height * TEXT_SCALE;
const taglineW = TAGLINE_NATIVE_SIZE.width * TEXT_SCALE;
const textBlockH = wordmarkH + TEXT_ROW_GAP + taglineH;
const wordmarkY = MARK_CENTER_Y - textBlockH / 2;
const taglineY = wordmarkY + wordmarkH + TEXT_ROW_GAP;
const textX = MARK_RIGHT_EDGE + TEXT_GAP_X;

const viewBoxMinX = MARK_LEFT - VIEWBOX_PAD;
const viewBoxMinY = MARK_TOP - VIEWBOX_PAD;
const viewBoxHeight = MARK_BOTTOM - MARK_TOP + VIEWBOX_PAD * 2;
const viewBoxWidth = textX + Math.max(wordmarkW, taglineW) + VIEWBOX_PAD - viewBoxMinX;

/**
 * Full CybrixAZ lockup: the triangle mark, with the original wordmark
 * typography ("CYBRIXAZ" + "SECURE EVERY BIT") to its right — a faithful
 * vector conversion of the source art, not a re-typeset title. Both the
 * mark and the wordmark were vector-traced from logo-light-bg.png/logo.png
 * (potrace on the alpha-channel silhouette): the mark split into its 6
 * constituent strokes, the wordmark split into 3 subpath groups by
 * x-position so "CYBRI"/"X"/"AZ" keep their distinct original colors. All
 * colors come from LOGO_COLORS (sampled from the source raster),
 * independent of the site's --color-accent theme tokens.
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
      viewBox={`${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth} ${viewBoxHeight}`}
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
      <g transform={`translate(${textX},${wordmarkY}) scale(${TEXT_SCALE})`}>
        <path d={WORDMARK_CYBRI} fill={LOGO_COLORS.cybri} fillRule="evenodd" />
        <path d={WORDMARK_X} fill={LOGO_COLORS.x} fillRule="evenodd" />
        <path d={WORDMARK_AZ} fill={LOGO_COLORS.az} fillRule="evenodd" />
      </g>
      {showTagline && (
        <g transform={`translate(${textX},${taglineY}) scale(${TEXT_SCALE})`}>
          <path d={TAGLINE_PATH} fill={LOGO_COLORS.tagline} fillRule="evenodd" />
        </g>
      )}
    </svg>
  );
}
