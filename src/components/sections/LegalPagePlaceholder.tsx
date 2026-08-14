import { PageHeader } from "./PageHeader";

/**
 * Privacy/Terms/Cookie Preferences are linked from the footer per the
 * content spec (§31) but no real legal copy was supplied — fabricating a
 * Privacy Policy or Terms of Service would be a real compliance risk, not
 * just a content-integrity issue, so this stays a clearly-labelled
 * placeholder rather than invented legal text.
 */
export function LegalPagePlaceholder({ heading }: { heading: string }) {
  return (
    <PageHeader eyebrow="LEGAL" heading={heading}>
      <p className="note-todo" style={{ marginTop: 24 }}>
        This page is a placeholder. CybrixAZ has not yet supplied {heading.toLowerCase()} content — publish real,
        legally-reviewed copy here before launch.
      </p>
    </PageHeader>
  );
}
