import type { Metadata } from "next";
import { getOfferingBySlug } from "@/content/offerings";
import { OfferingTemplate } from "@/components/sections/OfferingTemplate";

const offering = getOfferingBySlug("forensic")!;

export const metadata: Metadata = {
  title: offering.metaTitle,
  description: offering.metaDescription,
};

export default function ForensicPage() {
  return <OfferingTemplate offering={offering} />;
}
