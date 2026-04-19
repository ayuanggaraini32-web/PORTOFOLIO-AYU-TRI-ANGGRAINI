import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PosterGallery from './components/PosterGallery';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-gold selection:text-bg-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <PosterGallery />
        <About />
        <ProjectSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
