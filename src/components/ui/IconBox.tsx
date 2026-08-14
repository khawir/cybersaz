import { ICONS, type IconName } from "./icons";

export function IconBox({
  icon,
  size = "md",
}: {
  icon: IconName;
  size?: "md" | "lg";
}) {
  const Icon = ICONS[icon];
  return (
    <div className={`icon-box ${size === "lg" ? "icon-lg" : ""}`}>
      <Icon />
    </div>
  );
}
