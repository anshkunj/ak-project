import Link from "next/link";
import { Card, Badge } from "@/components/ui";
import { tools } from "@/lib/tools/registry";

export const metadata = {
  title: "Online Tools — anshkunj",
  description: "Free browser-based tools for developers, students, and everyday tasks.",
};

export default function ToolsPage() {
  return (
    <main className="tool-page">
      <div className="container">
        <header className="tools-index-header">
          <Badge>TOOLS</Badge>
          <h1>Useful tools, right in your browser.</h1>
          <p>Fast, focused utilities for common developer, calculator, and everyday tasks. No account required.</p>
        </header>
        <div className="tools-grid">
          {tools.map((tool) => (
            <Link key={tool.slug} href={tool.href}>
              <Card interactive className="tool-index-card">
                <Badge>{tool.category}</Badge>
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
                <span className="tool-card-link">Open tool →</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
