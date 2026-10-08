import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnshKunj — Software Products",
  description:
    "AnshKunj is an early-stage software venture building practical SaaS and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand">
              AnshKunj
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/#about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-brand">AnshKunj</p>
              <p className="muted">
                Software products and SaaS, built as practical digital tools.
              </p>
              <p className="muted">Website owner/contact: Megha Gupta</p>
            </div>
            <div className="footer-links">
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              <Link href="/refund-cancellation">Refund &amp; Cancellation</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} AnshKunj. All rights reserved.</span>
            <span>Owned and operated by Megha Gupta</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
