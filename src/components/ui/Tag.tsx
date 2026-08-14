import type { ReactNode } from "react";

type Variant = "accent" | "accent-2" | "neutral" | "outline" | "status-pending";

const variantClass: Record<Variant, string> = {
  accent: "tag-accent",
  "accent-2": "tag-accent-2",
  neutral: "tag-neutral",
  outline: "tag-outline",
  "status-pending": "tag-status-pending",
};

export function Tag({
  children,
  variant = "outline",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return <span className={`tag ${variantClass[variant]}`}>{children}</span>;
}
