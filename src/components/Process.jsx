import { steps } from '../data.jsx';

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-inner">
        <div className="section-head">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>From your idea to something people can use</h2>
        </div>
        <div className="process-grid">
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
