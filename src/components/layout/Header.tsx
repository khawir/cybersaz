import Link from "next/link";
import { Corners } from "@/components/ui/Corners";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavScrollShadow } from "@/components/layout/NavScrollShadow";
import { getOfferingsByKind, getOfferingHref } from "@/content/offerings";
import {
  WrenchIcon,
  DatabaseIcon,
  SearchIcon,
  NetworkIcon,
  ShieldCheckIcon,
  ReportIcon,
} from "@/components/ui/icons";

const services = getOfferingsByKind("service");
const solutions = getOfferingsByKind("solution");

const NAV_LINKS = [
  { href: "/services", label: "Services", Icon: WrenchIcon, dropdown: services.map((o) => ({ label: o.title, href: getOfferingHref(o) })) },
  { href: "/solutions", label: "Solutions", Icon: DatabaseIcon, dropdown: solutions.map((o) => ({ label: o.title, href: getOfferingHref(o) })) },
  { href: "/forensic", label: "Forensic", Icon: SearchIcon },
  { href: "/ai", label: "AI", Icon: NetworkIcon },
  { href: "/about", label: "About", Icon: ShieldCheckIcon },
  { href: "/insights", label: "Insights", Icon: ReportIcon },
];

export function Header() {
  return (
    <nav className="nav sticky top-0 z-20 bg-(--color-bg) border-b border-(--color-divider)">
      <NavScrollShadow />
      <Link href="/" style={{ display: "flex", alignItems: "center", marginRight: "auto", textDecoration: "none" }}>
        <Logo className="nav-brand-lockup" showTagline={false} />
      </Link>

      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="nav-item">
            <Link href={link.href}>
              <span className="nav-link-icon">
                <link.Icon />
              </span>
              {link.label}
            </Link>
            {link.dropdown && (
              <div className="nav-dropdown">
                {link.dropdown.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/contact" style={{ textDecoration: "none", marginLeft: "var(--space-3)" }}>
          <button type="button" className="btn btn-primary blueprint">
            <Corners />
            Talk to an Expert
          </button>
        </Link>
      </div>

      <MobileNav links={[...NAV_LINKS.map(({ href, label }) => ({ href, label })), { href: "/contact", label: "Contact" }]} />
    </nav>
  );
}
