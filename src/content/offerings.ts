import type { Offering } from "./types";

/**
 * Every service and solution page's content, mirrored 1:1 from
 * CYBRIXAZ_WEBSITE_CONTENT_SPEC.md. This module is the single source of
 * truth for Stage 1's static rendering and doubles as Stage 2's DB seed
 * data — the `offerings` table (see the build plan) stores the same shape.
 *
 * Where the spec explicitly marks something unconfirmed/proposed
 * ("requires CybrixAZ validation", "proposed copy") that caveat is kept in
 * the copy itself rather than smoothed over, per the spec's content-
 * integrity rules.
 */
export const OFFERINGS: Offering[] = [
  // ---------------------------------------------------------------- Services
  {
    kind: "service",
    slug: "security-consultancy",
    title: "Security Consultancy",
    category: "Advisory",
    eyebrow: "ADVISORY / ARCHITECTURE",
    heroHeading: "DESIGN SECURITY AROUND THE BUSINESS.",
    intro:
      "CybrixAZ provides cybersecurity consultancy to help organisations design, implement and optimise security measures based on business requirements, security risks and regulatory obligations.",
    icon: "shield",
    ctaLabel: "Talk to a Security Architect",
    contentStatus: "live",
    metaTitle: "Security Consultancy",
    metaDescription:
      "Design, implement and optimise cybersecurity architecture and controls with CybrixAZ security consultancy.",
    related: ["security-assessments", "grc", "devsecops"],
    sections: [
      {
        type: "list",
        heading: "Security Design",
        items: [
          "Current security posture analysis",
          "Security architecture design",
          "Network security design",
          "Data protection strategy",
          "Access control design",
          "Security control selection",
          "Alignment with existing IT environments",
        ],
      },
      {
        type: "text",
        heading: "Security Solutions",
        body: "CybrixAZ evaluates client requirements and recommends appropriate security technologies — including SIEM, SOAR, DLP, PAM, IAM, IGA, EDR, XDR, NDR, MFA, ZTNA and database security. The objective is to integrate selected solutions into the existing environment with minimal disruption.",
      },
      {
        type: "list",
        heading: "Security Implementation",
        items: [
          "Security solution deployment",
          "Configuration",
          "Testing",
          "Validation",
          "Integration",
          "Operational handover",
          "Support for client IT and security teams",
          "Solution training where applicable",
        ],
      },
      {
        type: "list",
        heading: "DevSecOps Implementation",
        items: [
          "Secure coding guidance",
          "Continuous security testing",
          "Vulnerability management",
          "Automated security checks",
          "Security integration into the software development lifecycle",
        ],
      },
      {
        type: "list",
        heading: "Security Optimisation",
        items: [
          "Security control reviews",
          "Security solution optimisation",
          "Policy review",
          "Security configuration review",
          "Identification of improvement opportunities",
          "Recommendations to strengthen existing security infrastructure",
        ],
      },
      {
        type: "list",
        heading: "Engagement Approach",
        items: ["Discover", "Design", "Implement", "Validate", "Optimise"],
      },
    ],
  },
  {
    kind: "service",
    slug: "managed-security-operations",
    title: "Managed Security Operations",
    category: "Security Operations",
    eyebrow: "SECURITY OPERATIONS / 24×7",
    heroHeading: "SEE MORE. RESPOND FASTER.",
    intro:
      "CybrixAZ provides continuous security monitoring, incident analysis, threat investigation and response services to support end-to-end cybersecurity operations.",
    icon: "report",
    ctaLabel: "Talk to Our Security Operations Team",
    contentStatus: "live",
    metaTitle: "Managed Security Operations",
    metaDescription:
      "Continuous monitoring, incident analysis, threat investigation and response across SOC L1, L2 and L3.",
    related: ["managed-security-services", "forensic", "threat-intelligence"],
    sections: [
      {
        type: "text",
        heading: "Managed Security Operations",
        body: "CybrixAZ works with clients to understand security requirements, operational priorities, security pain points, existing security technologies and required levels of SOC support. Managed SOC services may be delivered across L1, L2 and L3 levels based on client requirements.",
      },
      {
        type: "list",
        heading: "SOC Operating Model",
        items: [
          "Monitor — continuously monitor security alerts and events.",
          "Triage — assess suspicious activity and determine severity.",
          "Investigate — analyse incidents to understand root cause, scope and impact.",
          "Contain — coordinate actions to limit the impact of threats.",
          "Hunt — search proactively for hidden or advanced threats.",
          "Improve — use findings to strengthen security controls and operational readiness.",
        ],
      },
      {
        type: "list",
        heading: "SOC L1 Services",
        items: [
          "Continuous monitoring",
          "Security event monitoring",
          "SIEM alert monitoring",
          "Initial incident triage",
          "Severity assessment",
          "Basic threat analysis",
          "Identification of potential threats and vulnerabilities",
        ],
      },
      {
        type: "list",
        heading: "SOC L2 Services",
        items: [
          "In-depth incident analysis",
          "Root cause investigation",
          "Impact assessment",
          "Incident response coordination",
          "Stakeholder coordination",
          "Threat containment",
          "Threat mitigation",
        ],
      },
      {
        type: "list",
        heading: "SOC L3 Services",
        items: [
          "Advanced threat analysis",
          "Digital forensics",
          "Proactive threat hunting",
          "Threat intelligence",
          "Security advisory",
          "Threat actor profiling",
          "Analysis of threat tactics, techniques and procedures",
        ],
      },
      {
        type: "text",
        heading: "Technologies Referenced by the Source",
        body: "Managed security operations may involve technologies such as SIEM, SOAR, EDR, XDR, EPP and firewalls, deployed on client premises or in cloud environments. Specific vendors are not listed unless confirmed.",
      },
      {
        type: "links",
        heading: "Integrated Advanced Services",
        items: [
          { label: "Digital Forensics & Incident Response", href: "/forensic" },
          { label: "Compromise Assessment", href: "/forensic#compromise-assessment" },
          { label: "Threat Hunting", href: "/forensic#threat-hunting" },
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "managed-security-services",
    title: "Managed Security Services",
    category: "Security Operations",
    eyebrow: "SECURITY OPERATIONS",
    heroHeading: "YOUR SECURITY TOOLS. EXPERTLY OPERATED.",
    intro:
      "CybrixAZ provides continuous configuration, monitoring and optimisation of security technologies to help organisations maximise the effectiveness of their existing security investments.",
    icon: "serverRack",
    ctaLabel: "Discuss Managed Security Services",
    contentStatus: "live",
    metaTitle: "Managed Security Services",
    metaDescription: "Continuous configuration, monitoring and optimisation of SIEM, SOAR, EDR, XDR and identity technologies.",
    related: ["managed-security-operations", "detection-response"],
    sections: [
      { type: "text", heading: "Managed SIEM", body: "Management and optimisation of Security Information and Event Management platforms." },
      { type: "text", heading: "Managed SOAR", body: "Management and optimisation of Security Orchestration, Automation and Response capabilities." },
      { type: "text", heading: "Managed EDR", body: "Management and monitoring of Endpoint Detection and Response technologies." },
      { type: "text", heading: "Managed XDR", body: "Management and monitoring of Extended Detection and Response technologies." },
      { type: "text", heading: "Managed Identity & Access", body: "Management and optimisation of identity and access security technologies." },
      { type: "list", heading: "Service Lifecycle", items: ["Configure", "Monitor", "Tune", "Respond", "Optimise"] },
    ],
  },
  {
    kind: "service",
    slug: "soc-as-a-service",
    title: "SOC as a Service",
    category: "Security Operations",
    eyebrow: "SECURITY OPERATIONS",
    heroHeading: "SECURITY OPERATIONS. BUILT TO SCALE.",
    intro:
      "A short introductory description may be added once the commercial SOCaaS service scope is approved.",
    icon: "serverRack",
    ctaLabel: "Register Interest",
    contentStatus: "coming-soon",
    metaTitle: "SOC as a Service (Coming Soon)",
    metaDescription: "CybrixAZ SOC as a Service is coming soon.",
    related: ["managed-security-operations"],
    sections: [],
  },
  {
    kind: "service",
    slug: "security-assessments",
    title: "Security Assessments",
    category: "Advisory",
    eyebrow: "ASSESS / PRIORITISE / IMPROVE",
    heroHeading: "KNOW WHERE YOU STAND. KNOW WHAT TO FIX NEXT.",
    intro:
      "CybrixAZ security assessments evaluate current cybersecurity controls, maturity and readiness, identify gaps and provide actionable recommendations for improvement.",
    icon: "shieldCheck",
    ctaLabel: "Request a Security Assessment",
    contentStatus: "live",
    metaTitle: "Security Assessments",
    metaDescription: "SOC, cyber security, OT and DevSecOps maturity assessments against ISO, NIST, CIS and industry frameworks.",
    related: ["security-consultancy", "grc", "managed-security-operations", "devsecops"],
    sections: [
      {
        type: "list",
        heading: "SOC Maturity Assessment",
        items: [
          "Evaluate SOC effectiveness",
          "Assess operational readiness",
          "Identify capability gaps",
          "Identify maturity gaps",
          "Define improvement recommendations",
          "Define milestones toward the desired state",
          "Referenced against CMMI, NIST CSF, ISO 27001 and industry best practices",
        ],
      },
      {
        type: "list",
        heading: "Cyber Security Maturity Assessment",
        items: [
          "Security controls",
          "Policies",
          "Procedures",
          "Security maturity",
          "Effectiveness of current security practices",
          "Current state vs. desired state",
          "Recommended actions",
        ],
      },
      {
        type: "callout",
        heading: "Five-Level Maturity Model",
        body: "The source describes a five-level maturity model for this assessment. The exact names of the five levels require CybrixAZ confirmation before publication.",
      },
      {
        type: "list",
        heading: "OT Security Maturity Assessment",
        items: [
          "Understand current OT security posture",
          "Identify areas for improvement",
          "Strengthen resilience",
          "Establish an improvement roadmap",
          "Address cyber risks to industrial and critical infrastructure environments",
          "Referenced against the Cybersecurity Capability Maturity Model (C2M2) and NIST CSF",
          "May cover both IT and OT assets and environments",
        ],
      },
      {
        type: "list",
        heading: "DevSecOps Maturity Assessment",
        items: [
          "Development",
          "Security testing",
          "Integration",
          "Deployment",
          "Operational security practices",
          "Current maturity vs. target maturity",
          "Recommended improvement actions",
        ],
      },
      {
        type: "list",
        heading: "Compromise Assessment",
        items: [
          "Log analysis",
          "System artefact analysis",
          "Network traffic analysis",
          "Identification of indicators of compromise",
          "Remediation recommendations",
        ],
      },
      {
        type: "list",
        heading: "Assessment Deliverables",
        items: ["Current state", "Target state", "Identified gaps", "Risks", "Recommendations", "Priority actions", "Improvement roadmap", "Milestones"],
      },
      {
        type: "list",
        heading: "Framework References",
        items: ["ISO 27000 family", "NIST CSF", "NIST SP 800-53", "CIS", "HIPAA", "HITRUST", "SOC 2", "GDPR"],
      },
    ],
  },
  {
    kind: "service",
    slug: "security-testing",
    title: "Security Testing",
    category: "Offensive Security and Assurance",
    eyebrow: "OFFENSIVE SECURITY",
    heroHeading: "THINK LIKE AN ATTACKER. FIX WHAT MATTERS.",
    intro: "CybrixAZ security testing helps organisations identify exploitable weaknesses before they become real-world incidents.",
    icon: "targetCrosshair",
    ctaLabel: "Request a Penetration Test",
    contentStatus: "live",
    metaTitle: "Security Testing",
    metaDescription: "Black box, grey box, web, mobile, OT, IoT and AI-assisted penetration testing from CybrixAZ.",
    related: ["security-assessments", "application-security", "devsecops", "perimeter-security"],
    sections: [
      {
        type: "text",
        heading: "Black Box External Penetration Testing",
        body: "Conducted from the perspective of an external attacker with no prior knowledge of internal systems — simulating real-world external attack scenarios, identifying externally exploitable vulnerabilities, and assessing externally accessible attack paths.",
      },
      {
        type: "text",
        heading: "Grey Box Internal Penetration Testing",
        body: "Performed with partial knowledge of the environment, combining external testing with limited internal context to enable more targeted testing from an authorised internal perspective.",
      },
      {
        type: "text",
        heading: "Targeted Penetration Testing",
        body: "Focuses on specific systems, applications, components or high-risk areas, with scope agreed in advance.",
      },
      {
        type: "text",
        heading: "Code-Assisted Penetration Testing",
        body: "Combines penetration testing with source-level or code-level insight to identify vulnerabilities not easily visible through black-box testing, improving overall testing coverage.",
      },
      {
        type: "list",
        heading: "Network Infrastructure Penetration Testing",
        items: ["Confidentiality", "Integrity", "Availability", "Internal attacker scenarios", "External attacker scenarios", "Security controls", "Network behaviour"],
      },
      {
        type: "list",
        heading: "Web Application Penetration Testing",
        items: [
          "User interfaces",
          "APIs",
          "Third-party integrations",
          "Plugins",
          "Backend services",
          "Data flows",
          "May be performed using black-box, grey-box or white-box approaches depending on scope",
        ],
      },
      {
        type: "list",
        heading: "Mobile Application Penetration Testing",
        items: ["iOS", "Android", "Local storage", "Application permissions", "Communications", "Application behaviour", "Backend interactions"],
      },
      {
        type: "text",
        heading: "AI-Assisted Penetration Testing",
        body: "Positioned around security testing automation, vulnerability discovery, attack-surface analysis, repetitive task automation, vulnerability prioritisation and assisted validation.",
      },
      {
        type: "list",
        heading: "OT Penetration Testing",
        items: [
          "Industrial control systems",
          "SCADA",
          "PLCs",
          "Industrial devices",
          "Operational communications",
          "Purpose: identify vulnerabilities that could affect system availability, operational continuity, industrial processes, safety or physical systems",
        ],
      },
      {
        type: "list",
        heading: "IoT Penetration Testing",
        items: [
          "Smart devices",
          "Sensors",
          "Communication protocols",
          "Associated applications",
          "Supporting software",
          "Purpose: identify weaknesses that could result in unauthorised access, information leakage or device compromise",
        ],
      },
      {
        type: "callout",
        heading: "Testing Process (Proposed)",
        body: "Scope → Discover → Validate → Exploit Safely → Assess Impact → Report → Remediate → Retest. This process is proposed customer-facing content pending CybrixAZ approval, not yet a confirmed methodology.",
      },
      {
        type: "list",
        heading: "Reporting",
        items: ["Finding", "Severity", "Affected asset", "Evidence", "Potential business impact", "Technical impact", "Recommended remediation", "Retest status where applicable"],
      },
    ],
  },
  {
    kind: "service",
    slug: "grc",
    title: "Governance, Risk & Compliance",
    category: "Advisory",
    eyebrow: "GOVERN / RISK / COMPLY",
    heroHeading: "TURN SECURITY OBLIGATIONS INTO AN OPERATING MODEL.",
    intro:
      "CybrixAZ Governance, Risk and Compliance services help organisations connect security governance, risk decisions, policies, controls and regulatory requirements.",
    icon: "scale",
    ctaLabel: "Discuss Governance and Compliance",
    contentStatus: "live",
    metaTitle: "Governance, Risk & Compliance",
    metaDescription: "Governance frameworks, risk assessments, policies and security audits aligned to ISO, NIST, HIPAA and GDPR.",
    related: ["security-assessments", "security-consultancy"],
    sections: [
      { type: "list", heading: "Governance Framework", items: ["Oversight", "Accountability", "Decision making", "Security responsibility", "Compliance management"] },
      {
        type: "text",
        heading: "Compliance Programme Design & Implementation",
        body: "Design and implement compliance programmes aligned with applicable industry standards and regulatory requirements.",
      },
      {
        type: "list",
        heading: "Risk Assessments",
        items: [
          "Identification of security risks",
          "Assessment of potential impact",
          "Evaluation of risks to assets and operations",
          "Prioritisation of risks",
          "Risk treatment planning",
          "Alignment with organisational risk appetite",
        ],
      },
      { type: "list", heading: "Policies & Procedures", items: ["Cybersecurity policies", "Security procedures", "Governance documentation", "Compliance-related procedures"] },
      {
        type: "list",
        heading: "Security Audits",
        items: ["Security controls", "Policies", "Procedures", "Compliance processes", "Helps identify control weaknesses, non-compliance and improvement requirements"],
      },
      { type: "list", heading: "Framework References", items: ["ISO 27000 family", "NIST CSF", "NIST SP 800-53", "CIS", "HIPAA", "HITRUST", "SOC 2", "GDPR"] },
      { type: "list", heading: "Executive Reporting", items: ["Enterprise security risks", "Control coverage", "Compliance gaps", "Remediation status", "Risk trends"] },
    ],
  },
  {
    kind: "service",
    slug: "devsecops",
    title: "DevSecOps",
    category: "Security Engineering",
    eyebrow: "SECURE SOFTWARE DELIVERY",
    heroHeading: "BUILD SECURITY IN. NOT AFTER.",
    intro: "CybrixAZ DevSecOps services integrate security practices into the software development lifecycle so weaknesses can be identified and addressed earlier.",
    icon: "refresh",
    ctaLabel: "Assess Your DevSecOps Maturity",
    contentStatus: "live",
    metaTitle: "DevSecOps",
    metaDescription: "Vulnerability management, container security, CI/CD security and application security testing from CybrixAZ.",
    related: ["security-testing", "application-security", "security-assessments"],
    sections: [
      {
        type: "list",
        heading: "Vulnerability Management",
        items: ["Vulnerability identification", "Vulnerability assessment", "Remediation planning", "Remediation tracking", "Continuous vulnerability management"],
      },
      {
        type: "list",
        heading: "Container Security",
        items: ["Container image security", "Container runtime security", "Orchestration security", "Docker security", "Kubernetes security controls"],
      },
      {
        type: "text",
        heading: "Application Security Testing",
        body: "Integrate security testing into software development — referred to as static and dynamic application security testing until CybrixAZ confirms the exact acronym and terminology.",
      },
      { type: "list", heading: "Public Key Infrastructure", items: ["PKI deployment", "PKI management", "Secure authentication support", "Secure communications"] },
      {
        type: "text",
        heading: "CI/CD Security",
        body: "Integrate security checks into CI/CD pipelines to identify weaknesses earlier and reduce security defects reaching production.",
      },
      {
        type: "links",
        heading: "DevSecOps Maturity Assessment",
        items: [{ label: "Assess Your DevSecOps Maturity", href: "/services/security-assessments" }],
      },
    ],
  },
  {
    kind: "service",
    slug: "threat-intelligence",
    title: "Threat Intelligence",
    category: "Security Operations",
    eyebrow: "THREAT INTELLIGENCE",
    heroHeading: "KNOW WHAT IS TARGETING YOU.",
    intro:
      "CybrixAZ threat intelligence supports proactive defence by gathering and enriching security intelligence and helping organisations understand relevant threats and threat actors.",
    icon: "eye",
    ctaLabel: "Discuss Threat Intelligence",
    contentStatus: "live",
    metaTitle: "Threat Intelligence",
    metaDescription: "Threat intelligence feeds, enrichment and threat actor profiling to support proactive defence.",
    related: ["managed-security-operations", "forensic"],
    sections: [
      {
        type: "text",
        heading: "Threat Intelligence Feeds",
        body: "Use intelligence feeds to support security monitoring and analysis. CybrixAZ does not claim proprietary global feeds unless confirmed.",
      },
      { type: "text", heading: "Intelligence Enrichment", body: "Use threat intelligence to enrich security events and improve context." },
      { type: "list", heading: "Threat Actor Profiling", items: ["Tactics", "Techniques", "Procedures"] },
      { type: "text", heading: "Threat Hunting Support", body: "Use intelligence to improve proactive threat hunting." },
      { type: "text", heading: "Incident Response Support", body: "Use intelligence to support investigation and response." },
    ],
  },
  {
    kind: "service",
    slug: "forensic",
    path: "/forensic",
    title: "Digital Forensics & Incident Response",
    category: "Offensive Security and Assurance",
    eyebrow: "DFIR / INCIDENT RESPONSE",
    heroHeading: "WHEN AN INCIDENT HITS, MOVE WITH EVIDENCE.",
    intro:
      "CybrixAZ Digital Forensics and Incident Response services help organisations establish incident scope, understand impact, contain malicious activity and define appropriate remediation.",
    icon: "search",
    ctaLabel: "Request Incident Response",
    contentStatus: "live",
    metaTitle: "Digital Forensics & Incident Response",
    metaDescription: "Forensic analysis, incident response, compromise assessment and threat hunting from CybrixAZ.",
    related: ["managed-security-operations", "security-assessments", "threat-intelligence"],
    sections: [
      { type: "list", heading: "In-Depth Forensic Analysis", items: ["What happened", "Affected systems", "Attack path", "Root cause", "Scope", "Impact"] },
      {
        type: "list",
        heading: "Incident Response",
        items: ["Manual response actions", "Automated response actions where appropriate", "Containment", "Mitigation", "Response coordination"],
      },
      { type: "list", heading: "Comprehensive Reporting", items: ["Incident findings", "Scope", "Evidence", "Impact", "Response actions", "Recommendations"] },
      {
        type: "list",
        heading: "Remediation and Recommendations",
        items: ["Close identified security gaps", "Reduce recurrence risk", "Strengthen affected systems", "Improve controls"],
      },
      {
        type: "callout",
        heading: "Incident Response Process (Proposed)",
        body: "Stabilise → Preserve → Investigate → Contain → Recover → Improve. Proposed customer-facing content pending CybrixAZ confirmation, not yet a formal methodology.",
      },
      {
        type: "list",
        heading: "Compromise Assessment",
        items: [
          "Evidence collection",
          "Log analysis",
          "System artefact review",
          "Network traffic analysis",
          "Indicator-of-compromise identification",
          "Remediation recommendations",
        ],
      },
      {
        type: "list",
        heading: "Threat Hunting",
        items: ["Hidden malicious activity", "Advanced threats", "Suspicious behaviour", "Threats that may evade traditional security controls"],
      },
    ],
  },
  {
    kind: "service",
    slug: "ai",
    path: "/ai",
    title: "AI as a Service",
    category: "Security Engineering",
    eyebrow: "AI / SECURITY INTELLIGENCE",
    heroHeading: "FIND THE GAP. PRIORITISE THE RISK. ACT FASTER.",
    intro:
      "CybrixAZ uses AI-driven analysis to evaluate security controls, processes and configurations, identify weaknesses and support more efficient remediation.",
    icon: "network",
    ctaLabel: "Discuss AI Security Services",
    contentStatus: "live",
    metaTitle: "AI as a Service",
    metaDescription: "AI-driven analysis to discover, prioritise and resolve security gaps, with human oversight throughout.",
    related: ["security-assessments", "managed-security-operations", "devsecops"],
    sections: [
      { type: "list", heading: "Discover", items: ["Security controls", "Configurations", "Security processes", "Security posture"] },
      {
        type: "list",
        heading: "Prioritise",
        items: ["Which weaknesses are most important", "Which issues require attention first", "Which controls require improvement"],
      },
      {
        type: "list",
        heading: "Resolve",
        items: ["Reduce manual effort", "Accelerate remediation decisions", "Improve control effectiveness", "Strengthen security posture"],
      },
      {
        type: "callout",
        heading: "AI Augments Expertise. It Doesn't Remove Accountability.",
        body: "AI outputs support expert decision making. CybrixAZ does not claim unreviewed autonomous security decisions unless this is genuinely part of the service model.",
      },
    ],
  },

  // --------------------------------------------------------------- Solutions
  {
    kind: "solution",
    slug: "perimeter-security",
    title: "Perimeter Security",
    eyebrow: "PERIMETER SECURITY",
    heroHeading: "STOP THREATS AT THE BOUNDARY.",
    intro: "CybrixAZ perimeter security solutions help organisations protect externally exposed systems, applications and communications.",
    icon: "perimeterBars",
    ctaLabel: "Discuss Perimeter Security",
    contentStatus: "live",
    metaTitle: "Perimeter Security",
    metaDescription: "Email security, next-generation firewalls, web application firewalls and anti-DDoS capabilities.",
    related: ["security-consultancy"],
    sections: [
      {
        type: "list",
        heading: "Capabilities",
        items: [
          "Email Security — confirmed capability; detailed delivery scope requires validation before product-specific claims.",
          "Next Generation Firewalls — confirmed capability; detailed delivery scope requires validation before product-specific claims.",
          "Web Application Firewalls — confirmed capability; detailed delivery scope requires validation before product-specific claims.",
          "Anti-DDoS — confirmed capability; detailed delivery scope requires validation before product-specific claims.",
        ],
      },
    ],
  },
  {
    kind: "solution",
    slug: "identity-access",
    title: "Identity & Access",
    eyebrow: "IDENTITY & ACCESS",
    heroHeading: "CONTROL WHO CAN ACCESS WHAT, FROM WHERE.",
    intro: "CybrixAZ identity and access solutions help organisations control access to systems, applications and privileged resources.",
    icon: "key",
    ctaLabel: "Discuss Identity Security",
    contentStatus: "live",
    metaTitle: "Identity & Access",
    metaDescription: "Privileged access management, IAM, IGA, mobile device management, ZTNA and multi-factor authentication.",
    related: ["security-consultancy", "managed-security-services"],
    sections: [
      {
        type: "list",
        heading: "Capabilities",
        items: [
          "Privileged Access Management",
          "Identity and Access Management",
          "Identity Governance and Administration",
          "Mobile Device Management",
          "Zero Trust Network Access",
          "Multi-factor Authentication",
        ],
      },
    ],
  },
  {
    kind: "solution",
    slug: "detection-response",
    title: "Detection & Response",
    eyebrow: "DETECTION & RESPONSE",
    heroHeading: "TURN SECURITY SIGNALS INTO ACTION.",
    intro: "CybrixAZ detection and response capabilities help organisations identify suspicious activity, correlate security events and coordinate response.",
    icon: "concentricCircles",
    ctaLabel: "Explore Detection and Response Services",
    contentStatus: "live",
    metaTitle: "Detection & Response",
    metaDescription: "EDR, XDR, NDR, SIEM and SOAR capabilities backed by CybrixAZ security operations.",
    related: ["managed-security-operations"],
    sections: [
      {
        type: "list",
        heading: "Capabilities",
        items: [
          "Endpoint Detection and Response",
          "Extended Detection and Response",
          "Network Detection and Response",
          "Security Information and Event Management",
          "Security Orchestration and Automated Response",
        ],
      },
      {
        type: "links",
        heading: "Related Services",
        items: [
          { label: "Managed Security Operations", href: "/services/managed-security-operations" },
          { label: "Managed Security Services", href: "/services/managed-security-services" },
          { label: "Digital Forensics & Incident Response", href: "/forensic" },
          { label: "Threat Hunting", href: "/forensic#threat-hunting" },
        ],
      },
    ],
  },
  {
    kind: "solution",
    slug: "data-protection",
    title: "Data Protection",
    eyebrow: "DATA PROTECTION",
    heroHeading: "KNOW THE DATA. CONTROL THE DATA. PROTECT THE DATA.",
    intro: "CybrixAZ data protection solutions help organisations identify, control and protect sensitive information across their environments.",
    icon: "database",
    ctaLabel: "Discuss Data Protection",
    contentStatus: "live",
    metaTitle: "Data Protection",
    metaDescription: "Data loss prevention, data classification, and database protection and analytics.",
    related: ["security-consultancy"],
    sections: [
      { type: "list", heading: "Capabilities", items: ["Data Loss Prevention", "Data Classification", "Database Protection & Analytics"] },
    ],
  },
  {
    kind: "solution",
    slug: "application-security",
    title: "Application Security",
    eyebrow: "APPLICATION SECURITY",
    heroHeading: "SECURE APPLICATIONS ACROSS THE DEVELOPMENT LIFECYCLE.",
    intro:
      "The source confirms Application Security as a capability but does not define a detailed service catalogue. This heading and the sections below are proposed content pending CybrixAZ validation.",
    icon: "shieldCheck",
    ctaLabel: "Explore Application Security",
    contentStatus: "requires-validation",
    metaTitle: "Application Security",
    metaDescription: "Application security capability — detailed service scope pending CybrixAZ validation.",
    related: ["security-testing", "devsecops"],
    sections: [
      {
        type: "list",
        heading: "Proposed Sections for Future Completion",
        items: [
          "Application Security Overview",
          "Application Security Architecture",
          "Application Security Testing",
          "Secure Development",
          "DevSecOps Integration",
          "Vulnerability Management",
        ],
      },
      {
        type: "links",
        heading: "Cross-links",
        items: [
          { label: "Security Testing", href: "/services/security-testing" },
          { label: "DevSecOps", href: "/services/devsecops" },
        ],
      },
    ],
  },
  {
    kind: "solution",
    slug: "cloud-security",
    title: "Cloud Security",
    eyebrow: "CLOUD SECURITY",
    heroHeading: "SECURE CLOUD ENVIRONMENTS WITH CONFIDENCE.",
    intro:
      "The source confirms Cloud Security as a capability but does not define a detailed service catalogue. This heading and the sections below are proposed content pending CybrixAZ validation. CybrixAZ does not claim CNAPP, CSPM, CWPP, CIEM or cloud-provider partnerships unless separately confirmed.",
    icon: "cloud",
    ctaLabel: "Explore Cloud Security",
    contentStatus: "requires-validation",
    metaTitle: "Cloud Security",
    metaDescription: "Cloud security capability — detailed service scope pending CybrixAZ validation.",
    related: ["security-consultancy", "managed-security-operations", "devsecops"],
    sections: [
      {
        type: "list",
        heading: "Proposed Sections for Future Completion",
        items: ["Cloud Security Overview", "Cloud Identity", "Workload Security", "Configuration Security", "Cloud Data Protection", "Cloud Monitoring", "DevSecOps Integration"],
      },
    ],
  },
  {
    kind: "solution",
    slug: "social-media-security",
    title: "Social Media Security",
    eyebrow: "SOCIAL MEDIA SECURITY",
    heroHeading: "PROTECT YOUR DIGITAL PRESENCE.",
    intro:
      "The source confirms Social Media Security as a capability but does not define a detailed service catalogue. This heading and the sections below are proposed content pending CybrixAZ validation.",
    icon: "chat",
    ctaLabel: "Explore Social Media Security",
    contentStatus: "requires-validation",
    metaTitle: "Social Media Security",
    metaDescription: "Social media security capability — detailed service scope pending CybrixAZ validation.",
    related: [],
    sections: [
      {
        type: "list",
        heading: "Proposed Sections for Future Completion",
        items: ["Digital Brand Exposure", "Account Compromise Risk", "Impersonation Risk", "Monitoring", "Response"],
      },
    ],
  },
];

export function getOfferingHref(offering: Offering): string {
  if (offering.path) return offering.path;
  return offering.kind === "service" ? `/services/${offering.slug}` : `/solutions/${offering.slug}`;
}

export function getOfferingBySlug(slug: string): Offering | undefined {
  return OFFERINGS.find((o) => o.slug === slug);
}

export function getOfferingsByKind(kind: Offering["kind"]): Offering[] {
  return OFFERINGS.filter((o) => o.kind === kind && !o.path);
}

export function resolveRelated(offering: Offering): { label: string; href: string }[] {
  return (offering.related ?? [])
    .map((slug) => getOfferingBySlug(slug))
    .filter((o): o is Offering => Boolean(o))
    .map((o) => ({ label: o.title, href: getOfferingHref(o) }));
}
