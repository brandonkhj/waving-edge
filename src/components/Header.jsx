import { useState } from 'react';
import WaveLogo from './WaveLogo.jsx';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="brand">
        <WaveLogo />
        <div className="brand-name">
          <span className="brand-title">Waving Edge</span>
          <span className="brand-subtitle">VENTURE</span>
        </div>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <nav id="site-nav" className={`site-nav${menuOpen ? ' open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-cta" onClick={closeMenu}>
          Start a project
        </a>
      </nav>
    </header>
  );
}
