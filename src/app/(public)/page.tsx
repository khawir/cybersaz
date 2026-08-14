import type { Metadata } from "next";
import Link from "next/link";
import { HOME } from "@/content/home";
import { getOfferingBySlug } from "@/content/offerings";
import { INSIGHTS } from "@/content/insights";
import { Button } from "@/components/ui/Button";
import { Card, CardKicker, CardTitle, CardBody } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { OfferingCard } from "@/components/sections/OfferingCard";

export const metadata: Metadata = {
  title: "CybrixAZ — Secure Every Bit",
  description:
    "CybrixAZ helps organisations identify exposure, strengthen defences, detect threats and respond with confidence through expert-led cybersecurity services.",
};

export default function HomePage() {
  const featuredServices = HOME.featuredServices.slugs.map((slug) => getOfferingBySlug(slug)!);
  const securitySolutions = HOME.securitySolutions.slugs.map((slug) => getOfferingBySlug(slug)!);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "88px max(28px, calc((100% - 1200px) / 2 + 28px)) 64px" }}>
        <Reveal>
          <span
            style={{
              display: "block",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-accent-bright)",
              marginBottom: 14,
            }}
          >
            {HOME.hero.eyebrow}
          </span>
        </Reveal>
        <Reveal index={1}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)" as never,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              maxWidth: "16ch",
              margin: 0,
            }}
          >
            {HOME.hero.heading}
          </h1>
        </Reveal>
        <Reveal index={2}>
          <div style={{ maxWidth: "62ch", marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {HOME.hero.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 17, lineHeight: "28px", margin: 0, color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal index={3}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link href={HOME.hero.primaryCta.href} style={{ textDecoration: "none" }}>
              <Button>{HOME.hero.primaryCta.label}</Button>
            </Link>
            <Link href={HOME.hero.secondaryCta.href} style={{ textDecoration: "none" }}>
              <Button variant="secondary">{HOME.hero.secondaryCta.label}</Button>
            </Link>
          </div>
        </Reveal>
        <Reveal index={4}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
            {HOME.hero.capabilityLabels.map((label) => (
              <Tag key={label} variant="outline">
                {label}
              </Tag>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Core capabilities */}
      <div className="trust-strip">
        <span className="trust-label">Core capabilities</span>
        {HOME.coreCapabilities.map((capability, i) => (
          <Reveal key={capability} index={i} className="tag tag-outline">
            {capability}
          </Reveal>
        ))}
      </div>

      {/* The cybersecurity challenge */}
      <section className="section">
        <div className="section-inner grid-2">
          <h2 style={{ fontSize: 30, textTransform: "uppercase" }}>{HOME.challenge.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>{HOME.challenge.statement}</p>
            {HOME.challenge.body.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: "26px", margin: 0, color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ fontSize: 28, textTransform: "uppercase", marginBottom: 32 }}>{HOME.lifecycle.heading}</h2>
          <div className="grid-2">
            {HOME.lifecycle.stages.map((stage, i) => (
              <Reveal key={stage.name} index={i}>
                <Card style={{ padding: 24 }}>
                  <CardKicker>Stage {i + 1}</CardKicker>
                  <CardTitle>{stage.name}</CardTitle>
                  <CardBody>{stage.purpose}</CardBody>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                    {stage.items.map((item) => (
                      <Tag key={item} variant="neutral">
                        {item}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, textTransform: "uppercase", margin: 0 }}>{HOME.featuredServices.heading}</h2>
            <Link href="/services" style={{ fontSize: 14, color: "var(--color-accent-bright)", textDecoration: "none" }}>
              View all services →
            </Link>
          </div>
          <div className="grid-3">
            {featuredServices.map((offering, i) => (
              <OfferingCard key={offering.slug} offering={offering} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Security operations */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ fontSize: 28, textTransform: "uppercase" }}>{HOME.securityOperations.heading}</h2>
          <p style={{ fontSize: 15, lineHeight: "26px", maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            {HOME.securityOperations.body}
          </p>
          <p style={{ fontSize: 12, color: "var(--color-accent-bright)", fontStyle: "italic" }}>{HOME.securityOperations.illustrativeNote}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
            {HOME.securityOperations.eventSequence.map((step, i) => (
              <Reveal key={step.event} index={i}>
                <div className="card blueprint" style={{ padding: 16, minWidth: 180 }}>
                  <div className="card-kicker">{step.status}</div>
                  <div className="card-title" style={{ fontSize: 15 }}>
                    {step.event}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOC service levels */}
      <section className="section">
        <div className="section-inner grid-3">
          {HOME.socLevels.levels.map((level, i) => (
            <Reveal key={level.name} index={i}>
              <Card style={{ padding: 22, height: "100%" }}>
                <CardTitle>{level.name}</CardTitle>
                <ul style={{ fontSize: 13, opacity: 0.85, paddingLeft: "1.1em" }}>
                  {level.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="section-inner no-rule" style={{ marginTop: 24 }}>
          <Link href={HOME.socLevels.ctaHref} style={{ textDecoration: "none" }}>
            <Button variant="secondary">{HOME.socLevels.ctaLabel}</Button>
          </Link>
        </div>
      </section>

      {/* Incident response */}
      <section className="section">
        <div className="section-inner">
          <span className="card-kicker">{HOME.incidentResponse.label}</span>
          <h2 style={{ fontSize: 28, textTransform: "uppercase" }}>{HOME.incidentResponse.heading}</h2>
          <p style={{ fontSize: 15, lineHeight: "26px", maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            {HOME.incidentResponse.body}
          </p>
          <Link href={HOME.incidentResponse.ctaHref} style={{ textDecoration: "none" }}>
            <Button>{HOME.incidentResponse.ctaLabel}</Button>
          </Link>
        </div>
      </section>

      {/* Security solutions */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ fontSize: 28, textTransform: "uppercase", marginBottom: 32 }}>{HOME.securitySolutions.heading}</h2>
          <div className="grid-3">
            {securitySolutions.map((offering, i) => (
              <OfferingCard key={offering.slug} offering={offering} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Framework-aware delivery */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ fontSize: 24, textTransform: "uppercase" }}>{HOME.frameworkAware.heading}</h2>
          <p style={{ fontSize: 15, lineHeight: "26px", maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            {HOME.frameworkAware.body}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {HOME.frameworkAware.frameworks.map((framework) => (
              <Tag key={framework} variant="outline">
                {framework}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* AI security */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <IconBox icon="network" size="lg" />
            <div style={{ flex: 1, minWidth: 260 }}>
              <span className="card-kicker">{HOME.aiSecurity.label}</span>
              <h2 style={{ fontSize: 28, textTransform: "uppercase" }}>{HOME.aiSecurity.heading}</h2>
              <p style={{ fontSize: 15, lineHeight: "26px", maxWidth: "68ch", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
                {HOME.aiSecurity.body}
              </p>
              <Link href={HOME.aiSecurity.ctaHref} style={{ textDecoration: "none" }}>
                <Button variant="secondary">{HOME.aiSecurity.ctaLabel}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement approach */}
      <section className="section">
        <div className="section-inner">
          <h2 style={{ fontSize: 28, textTransform: "uppercase", marginBottom: 32 }}>{HOME.engagementApproach.heading}</h2>
          <div className="grid-3">
            {HOME.engagementApproach.steps.map((step, i) => (
              <Reveal key={step.step} index={i}>
                <Card style={{ padding: 20 }}>
                  <div className="card-kicker">{step.step}</div>
                  <CardTitle>{step.name}</CardTitle>
                  <CardBody>{step.body}</CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <div>
              <span className="card-kicker">{HOME.insightsPreview.label}</span>
              <h2 style={{ fontSize: 28, textTransform: "uppercase", margin: 0 }}>{HOME.insightsPreview.heading}</h2>
            </div>
            <Link href="/insights" style={{ fontSize: 14, color: "var(--color-accent-bright)", textDecoration: "none" }}>
              {HOME.insightsPreview.ctaLabel} →
            </Link>
          </div>
          <div className="grid-3">
            {INSIGHTS.map((insight, i) => (
              <Reveal key={insight.slug} index={i}>
                <Link href={`/insights/${insight.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card style={{ padding: 22 }}>
                    <CardKicker>{insight.category}</CardKicker>
                    <CardTitle>{insight.title}</CardTitle>
                    <CardBody>{insight.standfirst}</CardBody>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ paddingBottom: 96 }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, textTransform: "uppercase", maxWidth: "24ch", margin: "0 auto 24px" }}>{HOME.finalCta.heading}</h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={HOME.finalCta.primary.href} style={{ textDecoration: "none" }}>
              <Button>{HOME.finalCta.primary.label}</Button>
            </Link>
            <Link href={HOME.finalCta.secondary.href} style={{ textDecoration: "none" }}>
              <Button variant="secondary">{HOME.finalCta.secondary.label}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
