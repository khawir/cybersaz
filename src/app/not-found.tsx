import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPageBySlug } from "@/content/pages";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";

const page = getPageBySlug("not-found")!;

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader eyebrow={page.eyebrow} heading={page.heroHeading} lead={page.intro}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginTop: 24 }}>
            <Button>Return to Secure Path</Button>
          </Link>
        </PageHeader>
      </main>
      <Footer />
    </>
  );
}
