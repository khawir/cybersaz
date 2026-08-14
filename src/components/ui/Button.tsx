import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Corners } from "./Corners";

type Variant = "primary" | "secondary" | "ghost";

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps<T>) {
  const Component = as || "button";
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : "btn-ghost";

  return (
    <Component className={`btn ${variantClass} blueprint ${className}`} {...rest}>
      {variant !== "ghost" && <Corners />}
      {children}
    </Component>
  );
}
