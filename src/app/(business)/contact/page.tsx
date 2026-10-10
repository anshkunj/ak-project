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
            <p>
              <strong>Address:</strong><br />
              E-193<br />
              Near Chota Park, Mohan Nagar<br />
              Hindaun – 322230<br />
              Rajasthan, India
            </p>
          </div>

          <h2>Business & Status</h2>
          <p>
            For questions, support requests, product-related inquiries, or business collaborations, please reach out using the contact details above. We’ll get back to you as soon as possible.
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
