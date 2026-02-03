import { useEffect } from 'react';
import Header from './components/Header';
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
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 transition-colors duration-300">
      <Header />
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
