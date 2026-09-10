import { trustPoints } from '../data.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          SOFTWARE FOR REAL BUSINESSES
        </div>
        <h1 className="hero-title">Software built around your business.</h1>
        <p className="hero-subcopy">
          We design and develop web applications, internal systems and digital products
          for businesses that need more than an off-the-shelf solution. From idea and
          architecture to development, launch and ongoing support.
        </p>
        <div className="hero-actions">
          <a href="#contact-form" className="btn btn-primary">
            Discuss your project
          </a>
          <a href="#services" className="btn btn-secondary">
            Explore our services
          </a>
        </div>
        <ul className="trust-row">
          {trustPoints.map((point) => (
            <li key={point.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {point.icon}
              </svg>
              {point.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
