import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
