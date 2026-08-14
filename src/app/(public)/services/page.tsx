import type { Metadata } from "next";
import { getPageBySlug } from "@/content/pages";
import { getOfferingsByKind } from "@/content/offerings";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlockRenderer } from "@/components/sections/BlockRenderer";
import { OfferingCard } from "@/components/sections/OfferingCard";

const page = getPageBySlug("services-overview")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ServicesPage() {
  const services = getOfferingsByKind("service");

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heroHeading} lead={page.intro} />

      <section className="section">
        <div className="section-inner no-rule grid-3">
          {services.map((offering, i) => (
            <OfferingCard key={offering.slug} offering={offering} index={i} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <BlockRenderer blocks={page.blocks ?? []} />
        </div>
      </section>
    </>
  );
}
