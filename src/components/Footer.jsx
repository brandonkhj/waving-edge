import WaveLogo from './WaveLogo.jsx';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <WaveLogo width={28} height={18} />
            <span className="footer-brand-name">Waving Edge Venture</span>
            <p className="footer-tagline">
              Custom software development for businesses in Malaysia and beyond.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-cta">
            <p>Let&apos;s build something useful.</p>
            <a href="#contact-form" className="footer-cta-link">
              Discuss your project →
            </a>
            <a href="mailto:hello@wavingedgeventure.com" className="footer-email">
              hello@wavingedgeventure.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 Waving Edge Venture. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
