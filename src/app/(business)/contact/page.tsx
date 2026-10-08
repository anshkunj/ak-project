import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="page">
      <div className="container narrow">
        <p className="eyebrow">CONTACT US</p>
        <h1>Let&apos;s talk.</h1>
        <div className="legal-content">
          <p>
            For questions about anshkunj, our products, payments, orders,
            cancellations or refunds, please contact the website owner using
            the details below.
          </p>

          <div className="contact-card">
            <p><strong>Website / Brand:</strong> anshkunj</p>
            <p><strong>Owner:</strong> Megha Gupta</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:meghag2075@gmail.com">meghag2075@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917597087355">+91 75970 87355</a>
            </p>
          </div>

          <h2>Current product status</h2>
          <p>
            anshkunj is currently in the early stage of developing software and
            SaaS products. Product-specific features, pricing and purchase
            information will be published on the relevant product page before
            a product is offered for payment.
          </p>

          <p>
            Please use the contact details above for customer support or
            questions related to any product that becomes available.
          </p>

          <p>
            <Link href="/" className="button secondary">Back to home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
