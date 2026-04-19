import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Poster', href: '#posters' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-bg-dark/90 backdrop-blur-md py-4 border-border-line' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-display text-2xl tracking-[2px] text-gold uppercase">AYU TRI ANGGRAINI</span>
          <span className="text-[10px] text-text-sub uppercase tracking-[3px]">Creative Designer & Web Builder</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold tracking-[2px] uppercase text-text-main hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="text-[10px] font-bold tracking-[2px] uppercase px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-bg-dark transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gold">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-bg-dark border-t border-border-line py-6 px-10 shadow-xl"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-bold tracking-[2px] uppercase text-text-main hover:text-gold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
