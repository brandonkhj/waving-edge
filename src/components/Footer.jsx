import WaveLogo from './WaveLogo.jsx';
import { useContactModal } from '../ContactModalContext.jsx';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const { open: openContact } = useContactModal();

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
            <button type="button" className="footer-cta-link" onClick={openContact}>
              Discuss your project →
            </button>
            <button type="button" className="footer-email" onClick={openContact}>
              hello@wavingedge.com
            </button>
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
