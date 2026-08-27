import { steps } from '../data.js';

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-inner">
        <h2>How we work</h2>
        <div className="process-grid">
          <svg
            width="100%"
            height="2"
            className="process-line"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
            aria-hidden="true"
          >
            <line x1="0" y1="1" x2="1000" y2="1" stroke="oklch(85% 0.015 210)" strokeWidth="2" strokeDasharray="1 10" />
          </svg>
          {steps.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
