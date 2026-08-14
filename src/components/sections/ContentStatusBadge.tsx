import type { ContentStatus } from "@/content/types";

export function ContentStatusBadge({ status }: { status: ContentStatus }) {
  if (status === "live") return null;

  const label =
    status === "coming-soon"
      ? "Coming soon — not yet available"
      : "Requires CybrixAZ validation — proposed content, not yet confirmed";

  return (
    <p className="note-todo" role="note">
      {label}
    </p>
  );
}
