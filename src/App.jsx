import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ProblemSolving />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
