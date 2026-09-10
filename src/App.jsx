import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Solutions from './components/Solutions.jsx';
import Process from './components/Process.jsx';
import TechStack from './components/TechStack.jsx';
import About from './components/About.jsx';
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
        <Solutions />
        <Process />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
