import { trustPoints } from '../data.jsx';

export default function Hero() {
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
            <a href="#contact-form" className="btn btn-primary">
              Discuss your project →
            </a>
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

        <div className="hero-panel" aria-hidden="true">
          <svg className="hero-panel-waves" width="520" height="420" viewBox="0 0 520 420" fill="none">
            <path d="M-20 120 Q110 60 240 120 T500 120" stroke="oklch(52% 0.09 200 / 0.35)" strokeWidth="2" />
            <path d="M-20 220 Q110 280 240 220 T500 220" stroke="oklch(45% 0.06 140 / 0.35)" strokeWidth="2" />
            <path d="M-20 320 Q110 260 240 320 T500 320" stroke="oklch(52% 0.09 200 / 0.2)" strokeWidth="2" />
          </svg>
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
