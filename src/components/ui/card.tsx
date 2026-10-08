import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`ui-card ${interactive ? "ui-card-interactive" : ""} ${className}`.trim()}
      {...props}
    />
  );
}
