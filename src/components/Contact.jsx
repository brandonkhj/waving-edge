export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <svg
          width="1800"
          height="120"
          viewBox="0 0 1800 120"
          className="contact-waves"
          aria-hidden="true"
        >
          <path
            d="M0 70 Q150 30 300 70 T600 70 T900 70 T1200 70 T1500 70 T1800 70"
            stroke="oklch(52% 0.09 200)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <h2>Ready to test your idea?</h2>
        <p>Tell us about your project — we&apos;ll follow up within a day.</p>
        <a href="mailto:hello@wavingedgeventure.com" className="btn-contact">
          hello@wavingedgeventure.com
        </a>
      </div>
    </section>
  );
}
