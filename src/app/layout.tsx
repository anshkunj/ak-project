import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "anshkunj — Software Products",
  description:
    "anshkunj is an early-stage software venture building practical SaaS and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <title>Anshkunj</title>
        <meta name="google-adsense-account" content="ca-pub-2579120692263294" />
      </head>
      <body className="site-body">
        <ThemeProvider>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand">
              anshkunj
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/tools">Tools</Link>
              <Link href="/#about">About</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/contact">Contact</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-brand">anshkunj</p>
              <p className="muted">
                Software products and SaaS, built as practical digital tools.
              </p>
              <br />
              <p className="color-surface-muted">Website owner/contact: Megha Gupta</p>
            </div>
            <div className="footer-links">
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              <Link href="/refund-cancellation">Refund &amp; Cancellation</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} anshkunj. All rights reserved.</span>
            <span>Owned and operated by Megha Gupta</span>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
