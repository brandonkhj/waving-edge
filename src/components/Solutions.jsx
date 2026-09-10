import { solutions } from '../data.jsx';

export default function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="section-head">
        <div className="eyebrow">SOLUTIONS FOR DIFFERENT NEEDS</div>
        <h2>Flexible software solutions across different industries.</h2>
        <p className="section-intro">
          Every business is different. We build software that adapts to your goals,
          workflows and industry.
        </p>
      </div>
      <div className="solutions-grid">
        {solutions.map((sol) => (
          <div className="solution-block" key={sol.title}>
            <div className="solution-head">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {sol.icon}
              </svg>
              <h3>{sol.title}</h3>
            </div>
            <p>{sol.desc}</p>
            <ul className="chip-list">
              {sol.examples.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
