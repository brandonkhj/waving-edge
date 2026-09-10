import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Approach from './components/Approach.jsx';
import Process from './components/Process.jsx';
import Solutions from './components/Solutions.jsx';
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
        <Approach />
        <Process />
        <Solutions />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
