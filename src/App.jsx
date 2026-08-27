import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
