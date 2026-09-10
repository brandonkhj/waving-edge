import { approachPoints } from '../data.jsx';

export default function Approach() {
  return (
    <section className="approach">
      <div className="approach-copy">
        <div className="eyebrow">OUR APPROACH</div>
        <h2>A partner who understands your business.</h2>
        <p>
          We work closely with you to understand your goals, translate them into
          practical solutions and build software that fits your business — not the
          other way around.
        </p>
        <ul className="approach-points">
          {approachPoints.map((point) => (
            <li key={point.label}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {point.icon}
              </svg>
              {point.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="approach-panel" aria-hidden="true">
        <p className="approach-panel-caption">Good Software Better Business</p>
      </div>
    </section>
  );
}
