import Image from "next/image";
import Link from "next/link";

const SERVICES_LINKS = [
  { href: "/services/security-consultancy", label: "Security Consultancy" },
  { href: "/services/managed-security-operations", label: "Managed Security Operations" },
  { href: "/services/managed-security-services", label: "Managed Security Services" },
  { href: "/services/security-assessments", label: "Security Assessments" },
  { href: "/services/security-testing", label: "Security Testing" },
  { href: "/services/grc", label: "Governance, Risk & Compliance" },
  { href: "/services/devsecops", label: "DevSecOps" },
];

const SOLUTIONS_LINKS = [
  { href: "/solutions/perimeter-security", label: "Perimeter Security" },
  { href: "/solutions/identity-access", label: "Identity & Access" },
  { href: "/solutions/detection-response", label: "Detection & Response" },
  { href: "/solutions/data-protection", label: "Data Protection" },
  { href: "/solutions/application-security", label: "Application Security" },
  { href: "/solutions/cloud-security", label: "Cloud Security" },
  { href: "/solutions/social-media-security", label: "Social Media Security" },
];

const RESPONSE_LINKS = [
  { href: "/forensic", label: "Digital Forensics & Incident Response" },
  { href: "/forensic#compromise-assessment", label: "Compromise Assessment" },
  { href: "/forensic#threat-hunting", label: "Threat Hunting" },
  { href: "/services/threat-intelligence", label: "Threat Intelligence" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-preferences", label: "Cookie Preferences" },
];

function FooterColumn({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h6>{heading}</h6>
      <div className="links">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="cols">
        <div>
          <Image src="/logo.png" alt="CybrixAZ — Secure Every Bit" width={620} height={544} className="footer-logo" />
          <p
            style={{
              fontSize: 14,
              lineHeight: "22px",
              maxWidth: "36ch",
              color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
              margin: 0,
            }}
          >
            CybrixAZ provides cybersecurity services across advisory, security testing, managed operations,
            incident response, governance and security engineering.
          </p>
        </div>
        <FooterColumn heading="Services" links={SERVICES_LINKS} />
        <FooterColumn heading="Solutions" links={SOLUTIONS_LINKS} />
        <FooterColumn heading="Response" links={RESPONSE_LINKS} />
        <FooterColumn heading="Company" links={COMPANY_LINKS} />
        <FooterColumn heading="Legal" links={LEGAL_LINKS} />
      </div>
      <div className="bottom">
        <span>© {new Date().getFullYear()} CybrixAZ. All rights reserved.</span>
        <span>Secure Every Bit</span>
      </div>
    </footer>
  );
}
