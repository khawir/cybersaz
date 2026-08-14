import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

export function Input(props: ComponentPropsWithoutRef<"input">) {
  return <input className="input" {...props} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className="input" {...props} />;
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return <select className="input" {...props} />;
}
