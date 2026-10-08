import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui";

type ToolShellProps = {
  category: string;
  title: string;
  description: string;
  children: ReactNode;
  howToUse?: ReactNode;
  examples?: ReactNode;
  faq?: ReactNode;
  relatedTools?: Array<{ name: string; href: string }>;
};

export function ToolShell({ category, title, description, children, howToUse, examples, faq, relatedTools = [] }: ToolShellProps) {
  return (
    <main className="tool-page">
      <div className="container">
        <nav className="tool-breadcrumb" aria-label="Breadcrumb">
          <Link href="/tools">Tools</Link><span aria-hidden="true">/</span><span>{title}</span>
        </nav>
        <header className="tool-header">
          <Badge>{category}</Badge>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        <section className="tool-workspace" aria-label={title + " workspace"}>{children}</section>
        {howToUse && <section className="tool-content-section"><h2>How to use</h2><div className="tool-prose">{howToUse}</div></section>}
        {examples && <section className="tool-content-section"><h2>Examples</h2><div className="tool-prose">{examples}</div></section>}
        {faq && <section className="tool-content-section"><h2>Frequently asked questions</h2><div className="tool-faq">{faq}</div></section>}
        {relatedTools.length > 0 && (
          <section className="tool-content-section">
            <h2>Related tools</h2>
            <div className="tool-related-grid">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="tool-related-card">
                  <span>{tool.name}</span><span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
