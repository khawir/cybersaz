import type { Metadata } from "next";
import { getPageBySlug } from "@/content/pages";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";

const page = getPageBySlug("contact")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} heading={page.heroHeading} lead={page.intro} />
      <section className="section">
        <div className="section-inner no-rule">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
