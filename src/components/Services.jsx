import { services } from '../data.jsx';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-head section-head-split">
        <div>
          <div className="eyebrow">WHAT WE DO</div>
          <h2>
            Practical software solutions
            <br />
            for growing businesses.
          </h2>
        </div>
        <p className="section-intro">
          We help SMEs and startups build, improve and connect their software so they
          can operate more efficiently and focus on what matters.
        </p>
      </div>
      <div className="services-grid">
        {services.map((svc) => (
          <div className="service-card" key={svc.title}>
            <div className={`service-icon badge-${svc.color}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {svc.icon}
              </svg>
            </div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <a href="#solutions" className="card-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
