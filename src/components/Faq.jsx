import { faqs } from '../data.jsx';

/**
 * Native <details>/<summary>, so it is keyboard-operable, findable by the
 * browser's in-page search and works with JavaScript disabled. The same
 * content is emitted as FAQPage JSON-LD by scripts/prerender.mjs.
 */
export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="faq-inner">
        <div className="section-head">
          <div className="eyebrow">BEFORE YOU ASK</div>
          <h2>Questions we get asked first.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <svg
                  className="faq-chevron"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
