import type { Metadata } from "next";
import { LegalPagePlaceholder } from "@/components/sections/LegalPagePlaceholder";

export const metadata: Metadata = { title: "Cookie Preferences" };

export default function CookiePreferencesPage() {
  return <LegalPagePlaceholder heading="Cookie Preferences" />;
}
