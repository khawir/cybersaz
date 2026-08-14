import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  heading,
  lead,
  children,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{heading}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}
