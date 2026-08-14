import type { CSSProperties, ReactNode } from "react";
import { Corners } from "./Corners";

export function Card({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`card blueprint ${className}`} style={style}>
      <Corners />
      {children}
    </div>
  );
}

export function CardKicker({ children }: { children: ReactNode }) {
  return <span className="card-kicker">{children}</span>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="card-title">{children}</h3>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className="card-body">{children}</p>;
}
