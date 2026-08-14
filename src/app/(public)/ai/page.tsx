import type { Metadata } from "next";
import { getOfferingBySlug } from "@/content/offerings";
import { OfferingTemplate } from "@/components/sections/OfferingTemplate";

const offering = getOfferingBySlug("ai")!;

export const metadata: Metadata = {
  title: offering.metaTitle,
  description: offering.metaDescription,
};

export default function AiPage() {
  return <OfferingTemplate offering={offering} />;
}
