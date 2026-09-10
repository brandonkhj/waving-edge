import { trustPoints } from '../data.jsx';
import { useContactModal } from '../ContactModalContext.jsx';

export default function Hero() {
  const { open: openContact } = useContactModal();

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="eyebrow">SOFTWARE FOR REAL BUSINESS</div>
          <h1 className="hero-title">Software built around your business.</h1>
          <p className="hero-subcopy">
            We design and develop web apps, internal systems and digital products for
            businesses that need more than an off-the-shelf solution. From idea and
            architecture to development, launch and ongoing support.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={openContact}>
              Discuss your project →
            </button>
            <a href="#services" className="btn btn-secondary">
              Explore our services
            </a>
          </div>
          <ul className="trust-row">
            {trustPoints.map((point) => (
              <li key={point.label}>
                <span className="trust-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {point.icon}
                  </svg>
                </span>
                {point.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <img
            src="/images/hero.jpg"
            alt="Desk setup with an iMac and MacBook showing design and code work, a Starbucks cup, and a plant"
            className="panel-photo"
          />
          <p className="hero-panel-caption">
            Ideas
            <br />
            Systems
            <br />
            Better ways
          </p>
        </div>
      </div>
    </section>
  );
}
