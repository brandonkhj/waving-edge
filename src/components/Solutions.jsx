import { solutions } from '../data.jsx';

export default function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="solutions-panel" aria-hidden="true">
        <p className="solutions-panel-caption">From ideas to real solutions</p>
      </div>

      <div className="solutions-copy">
        <div className="eyebrow">SOLUTIONS FOR DIFFERENT NEEDS</div>
        <h2>Flexible software solutions across different industries.</h2>
        <p>
          Every business is different. We build software that adapts to your goals,
          workflows and industry.
        </p>
        <ul className="solutions-list">
          {solutions.map((sol) => (
            <li key={sol.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {sol.icon}
              </svg>
              {sol.label}
            </li>
          ))}
        </ul>
        <a href="#contact-form" className="card-link">
          Explore all solutions →
        </a>
      </div>
    </section>
  );
}
