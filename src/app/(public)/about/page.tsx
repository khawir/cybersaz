import type { Metadata } from "next";
import { getPageBySlug } from "@/content/pages";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

const page = getPageBySlug("about")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heroHeading} lead={page.intro} />
      <section className="section">
        <div className="section-inner no-rule">
          <BlockRenderer blocks={page.blocks ?? []} />
        </div>
      </section>
    </>
  );
}
