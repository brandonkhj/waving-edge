import { proofStats, caseStudies } from '../data.jsx';

/**
 * Social proof, which the site currently has none of — the single largest gap
 * against the "Feature-Rich Showcase" pattern this kind of B2B services site
 * maps to, where proof sits immediately before the closing CTA.
 *
 * Renders nothing while `proofStats` and `caseStudies` are empty. That is
 * deliberate: invented testimonials, placeholder logos and made-up numbers are
 * worse than an honest gap. Fill the arrays in data.jsx with real projects and
 * the section appears.
 */
export default function Proof() {
  if (proofStats.length === 0 && caseStudies.length === 0) return null;

  return (
    <section id="work" className="proof">
      <div className="proof-inner">
        <div className="section-head">
          <div className="eyebrow">SELECTED WORK</div>
          <h2>What we have built.</h2>
        </div>

        {proofStats.length > 0 ? (
          <dl className="proof-stats">
            {proofStats.map((stat) => (
              <div className="proof-stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {caseStudies.length > 0 ? (
          <div className="proof-grid">
            {caseStudies.map((study) => (
              <article className="proof-card" key={study.title}>
                <h3>{study.title}</h3>
                <p className="proof-problem">
                  <span className="proof-label">Problem</span>
                  {study.problem}
                </p>
                <p className="proof-built">
                  <span className="proof-label">Built</span>
                  {study.built}
                </p>
                <p className="proof-outcome">
                  <span className="proof-label">Outcome</span>
                  {study.outcome}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
