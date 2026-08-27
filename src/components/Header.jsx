import WaveLogo from './WaveLogo.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <WaveLogo />
        <div className="brand-name">
          <span className="brand-title">Waving Edge</span>
          <span className="brand-subtitle">VENTURE</span>
        </div>
      </div>
      <nav className="site-nav">
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#process" className="nav-link">
          Process
        </a>
        <a href="#contact" className="btn btn-primary">
          Start a project
        </a>
      </nav>
    </header>
  );
}
