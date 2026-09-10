import { techStack } from '../data.jsx';

export default function TechStack() {
  return (
    <section className="tech">
      <div className="tech-inner">
        <div className="section-head tech-head">
          <div className="eyebrow">TECHNOLOGIES WE WORK WITH</div>
          <h2>Modern and reliable technology.</h2>
          <p className="section-intro">
            We choose the right tools for the job, focusing on stability, performance
            and long-term maintainability.
          </p>
        </div>
        <ul className="tech-pills">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
