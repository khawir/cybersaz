import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS } from "@/content/insights";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card, CardKicker, CardTitle, CardBody } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical cybersecurity analysis, guidance and commentary from CybrixAZ.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="CYBRIX INTELLIGENCE"
        heading="INSIGHT FOR THE NEXT THREAT."
        lead="Publish practical cybersecurity analysis, guidance and commentary relevant to organisations, security teams and decision makers."
      />

      <section className="section">
        <div className="section-inner no-rule grid-3">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.slug} index={i}>
              <Link href={`/insights/${insight.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card style={{ padding: 22 }}>
                  <CardKicker>{insight.category}</CardKicker>
                  <CardTitle>{insight.title}</CardTitle>
                  <CardBody>{insight.standfirst}</CardBody>
                  <span className="card-meta">{insight.readingTime}</span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
