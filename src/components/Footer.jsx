import WaveLogo from './WaveLogo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <WaveLogo width={24} height={16} />
        <span>Waving Edge Venture</span>
      </div>
      <span className="footer-copyright">© 2026 Waving Edge Venture. All rights reserved.</span>
    </footer>
  );
}
