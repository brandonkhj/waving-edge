export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="final-cta">
        <svg
          width="1800"
          height="120"
          viewBox="0 0 1800 120"
          className="final-cta-waves"
          aria-hidden="true"
        >
          <path
            d="M0 70 Q150 30 300 70 T600 70 T900 70 T1200 70 T1500 70 T1800 70"
            stroke="oklch(52% 0.09 200)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="eyebrow eyebrow-dark">LET'S BUILD TOGETHER</span>
        <h2>Have a software project in mind?</h2>
        <p>
          Tell us what you&apos;re trying to build, improve or automate. We can help
          you work out the right technical approach before development begins.
        </p>
        <a href="mailto:hello@wavingedge.com" className="btn btn-primary btn-dark">
          Discuss your project →
        </a>
        <p className="final-cta-email">hello@wavingedge.com</p>
      </div>
    </section>
  );
}
