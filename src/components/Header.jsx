import { useCallback, useEffect, useRef, useState } from 'react';
import WaveLogo from './WaveLogo.jsx';
import { useContactModal } from '../ContactModalContext.jsx';

// Page-absolute so they work from a service page too. From the home page the
// browser still treats them as same-document fragments and scrolls smoothly.
const links = [
  { id: 'top', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ isHome = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const { open: openContact } = useContactModal();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Esc and outside-click return focus to the toggle, because the control the
  // user was on is about to be hidden. Following a nav link does not — there
  // the user asked to move somewhere else.
  const dismissMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismissMenu();
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) dismissMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen, dismissMenu]);

  // Scrollspy: mark the nav link for whichever section the reader is in — the
  // last one whose top has crossed a line just below the 72px sticky header.
  //
  // This reads scroll position rather than using IntersectionObserver, because
  // observer callbacks stop once the boundaries have finished crossing: with
  // `scroll-behavior: smooth` the final callback lands mid-animation and the
  // highlight is left one section behind where the reader ends up.
  useEffect(() => {
    if (!isHome) return undefined;
    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const LINE = 120;
    let frame = 0;

    const sync = () => {
      frame = 0;
      let current = null;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= LINE) current = section;
      });
      setActiveId(current ? current.id : null);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [isHome]);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="/#top" onClick={closeMenu}>
        <WaveLogo alt="" />
        <span className="brand-name">
          <span className="brand-title">Waving Edge</span>
          <span className="brand-subtitle">VENTURE</span>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        ref={toggleRef}
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
          <a
            key={link.id}
            href={`/#${link.id}`}
            className="nav-link"
            aria-current={activeId === link.id ? 'location' : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="btn-cta"
          onClick={() => {
            closeMenu();
            openContact();
          }}
        >
          Discuss your project →
        </button>
      </nav>
    </header>
  );
}
