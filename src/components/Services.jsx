import { services } from '../data.jsx';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-head">
        <div className="eyebrow">WHAT WE DO</div>
        <h2>Just what you need to launch and learn</h2>
      </div>
      <div className="services-grid">
        {services.map((svc) => (
          <div className="service-card" key={svc.title}>
            <div className="service-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {svc.icon}
              </svg>
            </div>
            <div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
