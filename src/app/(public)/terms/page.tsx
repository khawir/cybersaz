import type { Metadata } from "next";
import { LegalPagePlaceholder } from "@/components/sections/LegalPagePlaceholder";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <LegalPagePlaceholder heading="Terms" />;
}
