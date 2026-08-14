import Link from "next/link";
import type { Offering } from "@/content/types";
import { resolveRelated } from "@/content/offerings";
import { PageHeader } from "./PageHeader";
import { ContentStatusBadge } from "./ContentStatusBadge";
import { BlockRenderer } from "./BlockRenderer";
import { IconBox } from "@/components/ui/IconBox";
import { Button } from "@/components/ui/Button";

/**
 * Shared layout for every service/solution detail page (16 routes in
 * Stage 1) so each offering only supplies data, not a bespoke layout.
 */
export function OfferingTemplate({ offering }: { offering: Offering }) {
  const related = resolveRelated(offering);

  return (
    <>
      <PageHeader eyebrow={offering.eyebrow} heading={offering.heroHeading} lead={offering.intro}>
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 16 }}>
          <IconBox icon={offering.icon} size="lg" />
          <ContentStatusBadge status={offering.contentStatus} />
        </div>
      </PageHeader>

      {offering.sections.length > 0 && (
        <section className="section">
          <div className="section-inner no-rule">
            <BlockRenderer blocks={offering.sections} />
          </div>
        </section>
      )}

      <section className="section">
        <div
          className="section-inner"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}
        >
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Button>{offering.ctaLabel}</Button>
          </Link>

          {related.length > 0 && (
            <div className="toc">
              {related.map((r) => (
                <Link key={r.href} href={r.href}>
                  {r.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
