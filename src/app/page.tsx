import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="eyebrow">EARLY-STAGE SOFTWARE VENTURE</div>
          <h1>Building practical software for the way people work and learn.</h1>
          <p className="hero-copy">
            anshkunj is an early-stage software venture focused on building
            useful SaaS and digital products. Our products are currently under
            development.
          </p>
          <div className="actions">
            <Link className="button primary" href="/contact">
              Contact Us
            </Link>
            <Link className="button secondary" href="/tools">
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">ABOUT anshkunj</p>
            <h2>Products are being built before they are launched.</h2>
          </div>
          <div className="prose">
            <p>
              We are working on software products designed to solve practical
              problems for individuals and businesses. The first products and
              paid plans will be published here as they become ready.
            </p>
            <p>
              This website is currently an informational presence for the
              venture. No paid product is being advertised on this page at
              present.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container cards">
          <article className="card">
            <div className="card-number">01</div>
            <h3>SaaS products</h3>
            <p>
              Cloud-based software designed around focused, real-world use
              cases.
            </p>
          </article>
          <article className="card">
            <div className="card-number">02</div>
            <h3>Digital tools</h3>
            <p>
              Lightweight tools that make repetitive or complicated workflows
              simpler.
            </p>
          </article>
          <article className="card">
            <div className="card-number">03</div>
            <h3>Continuous development</h3>
            <p>
              Products are validated, improved and launched incrementally
              rather than presented before they are ready.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <div>
            <p className="eyebrow">CURRENT STATUS</p>
            <h2>We are building.</h2>
            <p className="muted">
              Product-specific pricing, features, billing and fulfilment
              information will be displayed clearly on the relevant product
              page before any payment is requested.
            </p>
          </div>
          <Link className="button primary" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
