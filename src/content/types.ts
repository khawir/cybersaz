import type { IconName } from "@/components/ui/icons";

export type ContentStatus = "live" | "requires-validation" | "coming-soon";

export type Block =
  | { type: "list"; heading: string; items: string[] }
  | { type: "text"; heading: string; body: string }
  | { type: "callout"; heading: string; body: string }
  | { type: "links"; heading: string; items: { label: string; href: string }[] };

export type OfferingKind = "service" | "solution";

export interface Offering {
  kind: OfferingKind;
  slug: string;
  /** Overrides the default /services/[slug] or /solutions/[slug] route — used by Forensic and AI. */
  path?: string;
  title: string;
  category?: string;
  eyebrow: string;
  heroHeading: string;
  intro: string;
  icon: IconName;
  ctaLabel: string;
  contentStatus: ContentStatus;
  sections: Block[];
  metaTitle: string;
  metaDescription: string;
  /** Related offering slugs, rendered as a cross-link strip when present. */
  related?: string[];
}

/** Flat singleton pages: About, Contact, Services-overview, Solutions-overview, 404. */
export interface Page {
  slug: string;
  title: string;
  eyebrow: string;
  heroHeading: string;
  intro: string;
  blocks?: Block[];
  metaTitle: string;
  metaDescription: string;
}

export interface Insight {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  body: string[];
  relatedOfferingSlug?: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
}
