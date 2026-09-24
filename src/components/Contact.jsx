import { useEffect, useRef } from 'react';
import { useContactModal } from '../ContactModalContext.jsx';

export default function Contact() {
  const { open: openContact } = useContactModal();
  const wavesRef = useRef(null);

  // waveDrift loops forever. prefers-reduced-motion already neutralises it, but
  // for everyone else it keeps the compositor busy long after the band has
  // scrolled away, so park it whenever it is out of view.
  useEffect(() => {
    const waves = wavesRef.current;
    if (!waves || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      waves.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    });
    observer.observe(waves);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="final-cta">
        <svg
          width="1800"
          height="120"
          viewBox="0 0 1800 120"
          className="final-cta-waves"
          ref={wavesRef}
          aria-hidden="true"
        >
          <path
            d="M0 70 Q150 30 300 70 T600 70 T900 70 T1200 70 T1500 70 T1800 70"
            stroke="#15d1c1"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="eyebrow eyebrow-dark">LET'S BUILD TOGETHER</span>
        <h2>Have a software project in mind?</h2>
        <p>
          Tell us what you&apos;re trying to build, improve or automate. We can help
          you work out the right technical approach before development begins.
        </p>
        <button type="button" className="btn btn-primary btn-dark" onClick={openContact}>
          Discuss your project →
        </button>
        <p className="final-cta-email">hello@wavingedge.com</p>
      </div>
    </section>
  );
}
