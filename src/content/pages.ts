import type { Page } from "./types";

/**
 * Flat singleton pages — About, Contact, Services overview, Solutions
 * overview, 404 — per CYBRIXAZ_WEBSITE_CONTENT_SPEC.md. Home is deliberately
 * NOT here; see the build plan for why it stays as bespoke code (src/content/home.ts)
 * rather than this generic shape.
 */
export const PAGES: Page[] = [
  {
    slug: "services-overview",
    title: "Services",
    eyebrow: "ONE SECURITY PARTNER",
    heroHeading: "ONE SECURITY PARTNER. FROM RISK TO RESPONSE.",
    intro:
      "CybrixAZ provides cybersecurity advisory, assessment, testing, engineering and managed security operations services designed around organisational risk and operational requirements.",
    metaTitle: "Services",
    metaDescription: "CybrixAZ cybersecurity services: advisory, offensive security, security operations and security engineering.",
    blocks: [
      {
        type: "list",
        heading: "Advisory Services",
        items: [
          "Security Consultancy — design, implement and optimise cybersecurity architecture and controls.",
          "Security Assessments — measure current security maturity, identify gaps and define improvement priorities.",
          "Governance, Risk & Compliance — support security governance, risk management, policies, audits and regulatory requirements.",
        ],
      },
      {
        type: "list",
        heading: "Offensive Security and Assurance",
        items: [
          "Security Testing — identify weaknesses through structured penetration testing and security validation.",
          "Compromise Assessment — investigate systems and networks for indicators of malicious activity that may have gone undetected.",
          "Digital Forensics & Incident Response — investigate security incidents, determine scope and impact, contain malicious activity and support recovery.",
        ],
      },
      {
        type: "list",
        heading: "Security Operations",
        items: [
          "Managed Security Operations — continuous monitoring, analysis, investigation and response.",
          "Managed Security Services — continuous management, monitoring and optimisation of security technologies.",
          "Threat Hunting — proactively search for malicious activity and advanced threats.",
          "Threat Intelligence — use intelligence feeds, enrichment and threat actor information to improve defensive capability.",
        ],
      },
      {
        type: "list",
        heading: "Security Engineering",
        items: [
          "DevSecOps — integrate security into development, testing, deployment and operations.",
          "AI as a Service — use AI-driven analysis to identify security gaps and support remediation.",
        ],
      },
      {
        type: "links",
        heading: "Service Finder",
        items: [
          { label: "Understand our security posture → Security Assessments", href: "/services/security-assessments" },
          { label: "Test our defences → Security Testing", href: "/services/security-testing" },
          { label: "Need 24/7 monitoring → Managed Security Operations", href: "/services/managed-security-operations" },
          { label: "Respond to a security incident → Digital Forensics & Incident Response", href: "/forensic" },
          { label: "Governance/compliance support → Governance, Risk & Compliance", href: "/services/grc" },
          { label: "Secure software development → DevSecOps", href: "/services/devsecops" },
          { label: "Redesign or modernise security architecture → Security Consultancy", href: "/services/security-consultancy" },
        ],
      },
    ],
  },
  {
    slug: "solutions-overview",
    title: "Solutions",
    eyebrow: "CYBER SECURITY SOLUTIONS",
    heroHeading: "SECURE EVERY LAYER OF THE ATTACK SURFACE.",
    intro:
      "CybrixAZ provides cybersecurity solutions across network boundaries, identities, detection technologies, data, applications and cloud environments.",
    metaTitle: "Solutions",
    metaDescription: "CybrixAZ cybersecurity solutions across perimeter, identity, detection, data, application, cloud and social media security.",
  },
  {
    slug: "about",
    title: "About",
    eyebrow: "ABOUT CYBRIXAZ",
    heroHeading: "SECURITY BUILT AROUND REAL RISK.",
    intro:
      "CybrixAZ brings together cybersecurity advisory, engineering, testing and security operations capabilities to help organisations strengthen their security posture across the full security lifecycle.",
    metaTitle: "About",
    metaDescription: "CybrixAZ supports organisations across security strategy, design, implementation, testing, monitoring, incident response, governance and compliance.",
    blocks: [
      {
        type: "list",
        heading: "What CybrixAZ Does",
        items: [
          "Security strategy",
          "Security design",
          "Security implementation",
          "Security testing",
          "Continuous monitoring",
          "Incident response",
          "Threat intelligence",
          "Governance",
          "Compliance",
          "Security optimisation",
        ],
      },
      {
        type: "list",
        heading: "Principles",
        items: [
          "Expert-led — technical expertise should guide security decisions.",
          "Client-specific — security services should be aligned with each organisation's environment, requirements and risk profile.",
          "Integrated — security advisory, engineering, testing and operations should work together rather than operate as isolated activities.",
          "Continuous — cybersecurity should be continuously assessed, operated and improved.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    eyebrow: "START A CONVERSATION",
    heroHeading: "TELL US WHAT YOU NEED TO SECURE.",
    intro:
      "Contact CybrixAZ about cybersecurity requirements, assessments, managed services, testing, incident response and security engineering.",
    metaTitle: "Contact",
    metaDescription: "Get in touch with CybrixAZ about your cybersecurity requirements.",
  },
  {
    slug: "not-found",
    title: "Signal Lost",
    eyebrow: "SIGNAL LOST",
    heroHeading: "THIS ROUTE DOESN'T EXIST.",
    intro: "The page you're looking for has moved, been renamed, or never existed.",
    metaTitle: "Page Not Found",
    metaDescription: "The requested page could not be found.",
  },
];

export function getPageBySlug(slug: string): Page | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export const ENQUIRY_CATEGORIES = [
  "Security Assessment",
  "Managed Security Operations",
  "Penetration Testing",
  "Incident Response",
  "Governance, Risk & Compliance",
  "DevSecOps",
  "Security Consultancy",
  "AI Security Services",
  "Other",
] as const;
