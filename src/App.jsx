import './App.css';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

import Hero     from './components/sections/Hero';
import About    from './components/sections/About';
import Skills   from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Learning from './components/sections/Learning';
import Contact  from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
