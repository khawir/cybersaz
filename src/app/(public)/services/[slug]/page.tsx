import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOfferingsByKind, getOfferingBySlug } from "@/content/offerings";
import { OfferingTemplate } from "@/components/sections/OfferingTemplate";

export function generateStaticParams() {
  return getOfferingsByKind("service").map((o) => ({ slug: o.slug }));
}

function getServiceOrNotFound(slug: string) {
  const offering = getOfferingBySlug(slug);
  if (!offering || offering.kind !== "service" || offering.path) notFound();
  return offering;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offering = getServiceOrNotFound(slug);
  return { title: offering.metaTitle, description: offering.metaDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offering = getServiceOrNotFound(slug);
  return <OfferingTemplate offering={offering} />;
}
