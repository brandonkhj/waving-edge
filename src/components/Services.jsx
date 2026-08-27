import { services } from '../data.js';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-heading">
        <h2>What we do</h2>
        <span className="section-heading-note">
          Just what you need to launch and learn — nothing padded on to inflate the
          quote.
        </span>
      </div>
      <div className="services-grid">
        {services.map((svc) => (
          <div className="service-card" key={svc.title}>
            <svg width="30" height="30" viewBox="0 0 30 30" className="service-icon">
              <circle cx="15" cy="15" r="12.5" fill="none" stroke={svc.color} strokeWidth="2" />
              <path d={svc.icon} stroke={svc.color} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
