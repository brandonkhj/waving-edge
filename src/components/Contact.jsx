function handleSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const subject = `Project enquiry — ${data.name || 'New project'}`;
  const body = [
    `Name: ${data.name || ''}`,
    `Company: ${data.company || ''}`,
    `Email: ${data.email || ''}`,
    '',
    "What are you looking to build?",
    data.details || '',
    '',
    `Estimated budget: ${data.budget || 'Not specified'}`,
    `Timeline: ${data.timeline || 'Not specified'}`,
  ].join('\n');
  window.location.href = `mailto:hello@wavingedgeventure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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
        <a href="#contact-form" className="btn btn-primary btn-dark">
          Discuss your project →
        </a>
      </div>

      <div className="contact-form-wrap" id="contact-form">
        <div className="section-head">
          <h2>Tell us about your project</h2>
          <p className="section-intro">
            Prefer email? Write to us directly at{' '}
            <a href="mailto:hello@wavingedgeventure.com">hello@wavingedgeventure.com</a>.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" autoComplete="organization" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="details">What are you looking to build?</label>
            <textarea
              id="details"
              name="details"
              rows="4"
              required
              placeholder="Tell us briefly about the problem you're trying to solve or the software you'd like to build."
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="budget">Estimated budget <span className="field-optional">(optional)</span></label>
              <input id="budget" name="budget" type="text" />
            </div>
            <div className="field">
              <label htmlFor="timeline">Timeline <span className="field-optional">(optional)</span></label>
              <input id="timeline" name="timeline" type="text" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Discuss your project →
          </button>
        </form>
      </div>
    </section>
  );
}
