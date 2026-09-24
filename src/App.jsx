import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Approach from './components/Approach.jsx';
import Process from './components/Process.jsx';
import Solutions from './components/Solutions.jsx';
import TechStack from './components/TechStack.jsx';
import About from './components/About.jsx';
import Proof from './components/Proof.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import ServicePage from './components/ServicePage.jsx';
import { ContactModalProvider } from './ContactModalContext.jsx';
import { matchRoute } from './routes.js';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Process />
      <Solutions />
      <TechStack />
      <About />
      <Proof />
      <Faq />
      <Contact />
    </>
  );
}

/**
 * Every route is prerendered to its own index.html and navigation between them
 * is a plain full page load, so the path can be read once at render time — no
 * router, no history handling, and the hydrated tree always matches the markup
 * that was served.
 */
export default function App({ path }) {
  const pathname = path ?? (typeof window === 'undefined' ? '/' : window.location.pathname);
  const route = matchRoute(pathname);

  return (
    <ContactModalProvider>
      <div className="page">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header isHome={!route.service} />
        <main id="main">
          {route.service ? <ServicePage service={route.service} /> : <Home />}
        </main>
        <Footer />
      </div>
      <ContactModal />
    </ContactModalProvider>
  );
}
