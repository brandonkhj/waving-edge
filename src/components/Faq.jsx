import { useState } from 'react';
import { faqs } from '../data.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((open) => (open === i ? -1 : i));

  return (
    <section id="faq" className="faq">
      <div className="section-head">
        <div className="eyebrow">FAQ</div>
        <h2>Common questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div className="faq-item" key={faq.q}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={open}
                onClick={() => toggle(i)}
              >
                <h3>{faq.q}</h3>
                <span className="faq-symbol" aria-hidden="true">
                  {open ? '–' : '+'}
                </span>
              </button>
              {open && <p className="faq-answer">{faq.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
