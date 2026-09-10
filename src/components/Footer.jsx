import WaveLogo from './WaveLogo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <WaveLogo width={28} height={18} />
          <span className="footer-brand-name">Waving Edge Venture</span>
        </div>
        <p className="footer-tagline">
          Lean, MVP-first software development — test your idea in the real market
          before spending more.
        </p>
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Waving Edge Venture. All rights reserved.
          </span>
          <a href="mailto:hello@wavingedgeventure.com" className="footer-email">
            hello@wavingedgeventure.com
          </a>
        </div>
      </div>
    </footer>
  );
}
