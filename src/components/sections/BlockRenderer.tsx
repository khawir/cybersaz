import Link from "next/link";
import type { Block } from "@/content/types";

/**
 * Renders the discriminated `sections`/`content_blocks` union shared by
 * offerings and pages. Each block type maps to one fixed layout — this is
 * the constraint that keeps the admin CMS (Stage 2) a structured editor
 * rather than a page builder.
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <div key={`${block.type}-${block.heading}-${i}`} className="subsection" id={slugify(block.heading)}>
          {block.type === "list" && (
            <>
              <h3>{block.heading}</h3>
              <ul>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {block.type === "text" && (
            <>
              <h3>{block.heading}</h3>
              <p>{block.body}</p>
            </>
          )}
          {block.type === "callout" && (
            <div className="card blueprint" style={{ padding: 22, borderColor: "var(--color-accent)" }}>
              <h4 style={{ marginBottom: 6 }}>{block.heading}</h4>
              <p className="card-body" style={{ opacity: 0.9 }}>
                {block.body}
              </p>
            </div>
          )}
          {block.type === "links" && (
            <>
              <h4>{block.heading}</h4>
              <div className="toc">
                {block.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
