import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS, getInsightBySlug } from "@/content/insights";
import { getOfferingBySlug, getOfferingHref } from "@/content/offerings";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return { title: insight.metaTitle, description: insight.metaDescription };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const relatedOffering = insight.relatedOfferingSlug ? getOfferingBySlug(insight.relatedOfferingSlug) : undefined;

  return (
    <>
      <PageHeader eyebrow={insight.category} heading={insight.title} lead={insight.standfirst}>
        <p className="card-meta" style={{ marginTop: 20 }}>
          {insight.author} · {insight.publishedAt} · {insight.readingTime}
        </p>
      </PageHeader>

      <section className="section">
        <div className="section-inner no-rule" style={{ maxWidth: "68ch" }}>
          {insight.body.map((paragraph, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: "27px" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          {relatedOffering && (
            <Link href={getOfferingHref(relatedOffering)} style={{ textDecoration: "none" }}>
              <Button>{insight.ctaLabel}</Button>
            </Link>
          )}
          <Link href="/insights" style={{ fontSize: 14, color: "var(--color-accent-bright)", textDecoration: "none" }}>
            ← View all insights
          </Link>
        </div>
      </section>
    </>
  );
}
