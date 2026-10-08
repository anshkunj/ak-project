import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
};

export function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`ui-badge ui-badge-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
