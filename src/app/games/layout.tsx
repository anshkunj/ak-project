import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browser Games — anshkunj",
  description: "Free browser games from anshkunj. Play lightweight games directly in your browser.",
};

export default function GamesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
