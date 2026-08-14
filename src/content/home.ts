/**
 * Homepage content — kept as bespoke code rather than a DB-editable row.
 * Most of its ~15 sections either cross-reference other entities (featured
 * services, lifecycle stages, insights preview — pulled from offerings.ts /
 * insights.ts by slug below) or are one-off curatorial copy that changes at
 * redesign cadence, not content cadence. See the build plan for the full
 * rationale.
 */
export const HOME = {
  hero: {
    eyebrow: "CYBER SECURITY / SECURE EVERY BIT",
    heading: "SECURITY WITHOUT BLIND SPOTS.",
    intro: [
      "CybrixAZ helps organisations identify exposure, strengthen defences, detect threats and respond with confidence through expert-led cybersecurity services.",
      "From security architecture and penetration testing to managed security operations, incident response and governance, CybrixAZ protects the systems organisations depend on.",
    ],
    primaryCta: { label: "Book a Security Assessment", href: "/services/security-assessments" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    capabilityLabels: ["Advisory", "Testing", "Defence", "Response"],
  },
  coreCapabilities: [
    "24/7 Security Operations",
    "Incident Response",
    "Security Testing",
    "Threat Intelligence",
    "Governance & Compliance",
  ],
  challenge: {
    heading: "THE ATTACK SURFACE HAS CHANGED",
    statement: "THE MORE CONNECTED YOUR BUSINESS BECOMES, THE MORE THERE IS TO PROTECT.",
    body: [
      "Organisations increasingly rely on interconnected digital infrastructure for operations. As connectivity increases across identities, endpoints, networks, applications, data and cloud environments, the attack surface expands.",
      "Cyber threats continue to increase in complexity and frequency. Organisations therefore require a combination of security architecture, continuous monitoring, vulnerability management, threat detection, incident response, security testing, governance and regulatory compliance.",
    ],
  },
  lifecycle: {
    heading: "ONE SECURITY PARTNER. ACROSS THE FULL LIFECYCLE.",
    stages: [
      {
        name: "Assess",
        items: ["Security Assessments", "Penetration Testing", "Risk Assessments", "Compromise Assessment"],
        purpose: "Understand the current security posture, identify weaknesses and prioritise improvement.",
      },
      {
        name: "Design & Harden",
        items: ["Security Consultancy", "Security Architecture", "Identity Security", "Perimeter Security", "Data Protection", "Cloud Security"],
        purpose: "Design and implement appropriate security controls and strengthen the environment.",
      },
      {
        name: "Detect & Respond",
        items: ["Managed Security Operations", "SIEM", "XDR", "Threat Hunting", "Incident Response"],
        purpose: "Monitor security activity, identify threats, investigate suspicious behaviour and respond to incidents.",
      },
      {
        name: "Govern & Optimise",
        items: ["Governance, Risk & Compliance", "Security Policies", "Regulatory Compliance", "DevSecOps", "Security Optimisation"],
        purpose: "Ensure security controls remain effective, aligned with business requirements and continually improved.",
      },
    ],
  },
  featuredServices: {
    heading: "SECURITY, ENGINEERED AROUND YOUR RISK.",
    slugs: ["managed-security-operations", "security-testing", "security-consultancy", "security-assessments", "grc", "devsecops"],
  },
  securityOperations: {
    heading: "FROM SIGNAL TO RESPONSE.",
    body: "Security incidents rarely arrive as a clean alert. CybrixAZ combines telemetry, analysis and expert response to identify meaningful security events, investigate threats and support timely containment and remediation.",
    illustrativeNote: "The sequence below is illustrative, not real customer telemetry.",
    eventSequence: [
      { event: "Suspicious authentication", status: "Detected" },
      { event: "Privilege escalation", status: "Correlated" },
      { event: "Lateral movement", status: "Contained" },
      { event: "Endpoint isolation", status: "Complete" },
    ],
  },
  socLevels: {
    levels: [
      { name: "L1 — Monitor", items: ["Continuous security monitoring", "Initial incident triage", "Basic threat analysis"] },
      {
        name: "L2 — Investigate",
        items: ["In-depth incident analysis", "Incident response coordination", "Threat containment", "Threat mitigation"],
      },
      {
        name: "L3 — Hunt and Analyse",
        items: ["Advanced threat analysis", "Digital forensics", "Proactive threat hunting", "Threat intelligence", "Security advisory", "Threat actor profiling"],
      },
    ],
    ctaLabel: "Explore Managed Security Operations",
    ctaHref: "/services/managed-security-operations",
  },
  incidentResponse: {
    label: "INCIDENT RESPONSE",
    heading: "AN INCIDENT DOESN'T WAIT FOR BUSINESS HOURS.",
    body: "When a security incident has already occurred, speed and evidence matter. CybrixAZ helps organisations establish the scope of an incident, identify affected systems, investigate the cause and impact, contain malicious activity, reduce further damage, and provide remediation recommendations.",
    ctaLabel: "Explore Digital Forensics & Incident Response",
    ctaHref: "/forensic",
  },
  securitySolutions: {
    heading: "PROTECTION AT EVERY LAYER.",
    slugs: ["perimeter-security", "identity-access", "detection-response", "data-protection", "application-security", "cloud-security", "social-media-security"],
  },
  frameworkAware: {
    heading: "FRAMEWORK-AWARE DELIVERY",
    body: "CybrixAZ security assessments and governance engagements may be aligned with recognised cybersecurity and regulatory frameworks based on client requirements. CybrixAZ does not describe itself as certified or accredited by these frameworks unless separately verified.",
    frameworks: ["ISO 27000 family", "NIST Cybersecurity Framework", "NIST SP 800-53", "CIS", "HIPAA", "HITRUST", "SOC 2", "GDPR"],
  },
  aiSecurity: {
    label: "AI / SECURITY",
    heading: "FIND THE GAPS HUMANS CAN MISS.",
    body: "CybrixAZ applies AI-driven analysis to security controls, processes and configurations to help identify security gaps, prioritise weaknesses and accelerate remediation.",
    ctaLabel: "Explore AI as a Service",
    ctaHref: "/ai",
  },
  engagementApproach: {
    heading: "FROM ASSESSMENT TO CONTINUOUS DEFENCE.",
    steps: [
      { step: "01", name: "Assess", body: "Understand the environment, security posture, risks and requirements." },
      { step: "02", name: "Design", body: "Define appropriate security architecture, controls and solutions." },
      { step: "03", name: "Implement", body: "Deploy, configure and validate security technologies and processes." },
      { step: "04", name: "Operate", body: "Monitor, manage and respond across the environment." },
      { step: "05", name: "Optimise", body: "Assess effectiveness, improve controls and adapt to changing threats." },
    ],
  },
  insightsPreview: {
    label: "CYBRIX INTELLIGENCE",
    heading: "THINK AHEAD OF THE THREAT.",
    ctaLabel: "View All Insights",
  },
  finalCta: {
    heading: "WHERE IS YOUR BIGGEST SECURITY GAP?",
    primary: { label: "Talk to a Cybersecurity Expert", href: "/contact" },
    secondary: { label: "Explore Assessments", href: "/services/security-assessments" },
  },
};
