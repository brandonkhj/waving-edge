import { stats } from '../data.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          GET YOUR FIRST IDEA LIVE
        </div>
        <h1 className="hero-title">Start small. Prove it works. Then grow.</h1>
        <p className="hero-subcopy">
          No bloated quotes, no features you don&apos;t need. We build a lean, working
          version of your idea for a fraction of the usual cost — so you can test it in
          the real market before spending more.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
          <a href="#services" className="btn btn-secondary">
            See services
          </a>
        </div>
      </div>

      <div className="stats-panel">
        <svg
          width="1800"
          height="280"
          viewBox="0 0 1800 280"
          className="stats-waves"
          aria-hidden="true"
        >
          <path
            d="M0 190 Q150 130 300 190 T600 190 T900 190 T1200 190 T1500 190 T1800 190"
            stroke="oklch(52% 0.09 200 / 0.5)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 230 Q150 280 300 230 T600 230 T900 230 T1200 230 T1500 230 T1800 230"
            stroke="oklch(75% 0.03 210 / 0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 150 Q150 90 300 150 T600 150 T900 150 T1200 150 T1500 150 T1800 150"
            stroke="oklch(85% 0.02 210 / 0.5)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
