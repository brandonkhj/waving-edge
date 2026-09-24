import { useContactModal } from '../ContactModalContext.jsx';

export default function ServicePage({ service }) {
  const { open: openContact } = useContactModal();

  return (
    <article className="service-page" id="top">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/#services">Services</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{service.pageTitle}</span>
      </nav>

      <header className="service-page-head">
        <div className={`service-icon badge-${service.color}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {service.icon}
          </svg>
        </div>
        <h1>{service.pageTitle}</h1>
        <p className="service-page-lead">{service.lead}</p>
        <button type="button" className="btn btn-primary" onClick={openContact}>
          Discuss your project →
        </button>
      </header>

      <div className="service-page-grid">
        <section className="service-page-block" aria-labelledby={`${service.slug}-outcomes`}>
          <h2 id={`${service.slug}-outcomes`}>What you get</h2>
          <ul className="service-page-list">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        {/* Both right-hand blocks share one column so the shorter of the two
            cannot be stranded on a row sized by the list opposite it. */}
        <div className="service-page-side">
          <section className="service-page-block" aria-labelledby={`${service.slug}-examples`}>
            <h2 id={`${service.slug}-examples`}>Typical projects</h2>
            <ul className="tech-pills service-page-pills">
              {service.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </section>

          <section className="service-page-block" aria-labelledby={`${service.slug}-fit`}>
            <h2 id={`${service.slug}-fit`}>Who this is for</h2>
            <p className="service-page-fit">{service.fit}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
