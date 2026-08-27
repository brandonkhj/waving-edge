export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow">DIGITAL SOLUTIONS &amp; SOFTWARE</div>
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

      <svg
        width="1400"
        height="220"
        viewBox="0 0 1400 220"
        className="hero-waves"
        aria-hidden="true"
      >
        <path
          d="M0 130 Q87 90 175 130 T350 130 T525 130 T700 130 T875 130 T1050 130 T1225 130 T1400 130"
          stroke="oklch(88% 0.02 210)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 170 Q87 210 175 170 T350 170 T525 170 T700 170 T875 170 T1050 170 T1225 170 T1400 170"
          stroke="oklch(92% 0.015 210)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </section>
  );
}
