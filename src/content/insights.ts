import type { Insight } from "./types";

/**
 * Seed articles for /insights. The content spec marks these as "editorial
 * concepts, not already-published content" (§27) — the bodies below are
 * original commentary written to that brief, deliberately free of
 * company-specific stats, client examples or certifications that aren't
 * confirmed elsewhere in the spec. Byline stays generic (no invented
 * individual's name) per the content-integrity rules.
 */
export const INSIGHTS: Insight[] = [
  {
    slug: "building-an-effective-soc-maturity-roadmap",
    category: "Security Operations",
    title: "Building an Effective SOC Maturity Roadmap",
    standfirst:
      "A maturity assessment is only useful if it turns into a roadmap. Here's how organisations can move from a maturity score to a set of priorities a security team can actually execute.",
    author: "CybrixAZ Research Team",
    publishedAt: "2026-08-14",
    readingTime: "6 min read",
    relatedOfferingSlug: "security-assessments",
    ctaLabel: "Assess Your SOC Maturity",
    metaTitle: "Building an Effective SOC Maturity Roadmap",
    metaDescription: "How organisations can assess SOC maturity and define practical improvement priorities.",
    body: [
      "Most security operations teams have a rough sense of where they stand — which alerts get missed, which processes are manual, which tools overlap. What's harder is turning that intuition into a structured roadmap that leadership can fund and a team can actually deliver against.",
      "A SOC maturity assessment gives that intuition a framework: it evaluates effectiveness and operational readiness against a recognised model, identifies capability and maturity gaps, and defines the milestones between where the SOC is today and where it needs to be. The value isn't the score itself — it's the gap analysis underneath it.",
      "The roadmap that comes out of an assessment should be sequenced, not just prioritised. Some gaps (an unmonitored log source, a missing escalation path) are quick to close and should be closed immediately. Others — building out proactive threat hunting, maturing L2/L3 investigation capability — take sustained investment over multiple quarters and depend on the quick wins being done first.",
      "The organisations that get the most out of this process treat the roadmap as a living document, revisited as the environment, threat landscape and available tooling change, rather than a one-time deliverable that gets filed away after the assessment is complete.",
    ],
  },
  {
    slug: "what-penetration-testing-should-tell-your-organisation",
    category: "Offensive Security",
    title: "What Penetration Testing Should Actually Tell Your Organisation",
    standfirst:
      "A penetration test report full of findings isn't the same as a report that changes how an organisation manages risk. The difference is whether findings connect back to business impact.",
    author: "CybrixAZ Research Team",
    publishedAt: "2026-08-14",
    readingTime: "5 min read",
    relatedOfferingSlug: "security-testing",
    ctaLabel: "Request a Security Test",
    metaTitle: "What Penetration Testing Should Actually Tell Your Organisation",
    metaDescription: "How penetration testing should connect technical findings to real security risk.",
    body: [
      "It's easy to judge a penetration test by its finding count. A long list of vulnerabilities feels thorough. But a report that lists findings without connecting them to what an attacker could actually achieve leaves the hardest question — what do we fix first, and why — unanswered.",
      "A useful test report ties each finding to severity, the affected asset, evidence, and both the technical and business impact of exploitation. A medium-severity finding on a system that touches customer data or production infrastructure can matter more than a high-severity finding on an isolated test environment. Impact framing is what turns a finding list into a remediation priority list.",
      "Scope matters just as much as findings. Black box, grey box and code-assisted testing surface different classes of issue precisely because they start from different assumptions about what an attacker already knows. An organisation that only ever runs the same style of test against the same systems will keep validating the same assumptions instead of testing new ones.",
      "Finally, a test isn't complete until remediation is verified. A retest against previously identified findings is what confirms a fix actually closed the gap, rather than just changed its shape.",
    ],
  },
  {
    slug: "moving-from-compliance-activity-to-cyber-resilience",
    category: "Governance, Risk & Compliance",
    title: "Moving from Compliance Activity to Cyber Resilience",
    standfirst:
      "Passing an audit and being resilient to a real incident are not the same achievement. Here's why compliance activity should be a byproduct of good security practice, not the goal itself.",
    author: "CybrixAZ Research Team",
    publishedAt: "2026-08-14",
    readingTime: "5 min read",
    relatedOfferingSlug: "grc",
    ctaLabel: "Discuss Governance and Compliance",
    metaTitle: "Moving from Compliance Activity to Cyber Resilience",
    metaDescription: "The difference between meeting compliance requirements and developing effective cybersecurity resilience.",
    body: [
      "Compliance frameworks exist because they encode a reasonable baseline of security practice. But an organisation that treats a framework as the finish line — rather than a floor — tends to build a security programme optimised for the audit cycle, not for the incident that happens between audits.",
      "The gap shows up in specific ways: policies that exist on paper but aren't operationally enforced, controls that are technically 'in place' but not monitored for effectiveness, and risk registers that get updated once a year instead of being a living input into decision-making.",
      "Resilience asks a different question than compliance does. Compliance asks: can we demonstrate that a control exists? Resilience asks: if this control fails, or this asset is compromised, what happens next, and how quickly do we recover? A governance programme built around risk assessments, policy review and executive reporting — rather than a static checklist — tends to answer both questions at once, because the risk-based view naturally surfaces where a compliant-looking control is actually a weak one.",
      "None of this makes compliance activity unnecessary — regulatory and framework obligations are real and often mandatory. It means the most effective governance programmes use compliance requirements as one input into a broader risk management operating model, rather than treating the audit as the objective.",
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
