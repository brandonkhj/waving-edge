import { aboutPoints } from '../data.jsx';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-copy">
        <div className="eyebrow">ABOUT WAVING EDGE</div>
        <h2>Experienced software development, without the agency overhead.</h2>
        <p>
          Waving Edge Venture is an independent software development studio focused on
          building practical, maintainable software for businesses. We work closely
          with clients from initial requirements and architecture through development,
          deployment and long-term support.
        </p>
      </div>
      <ul className="about-points">
        {aboutPoints.map((point) => (
          <li key={point.label}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {point.icon}
            </svg>
            {point.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
