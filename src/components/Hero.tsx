import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bg-dark">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-6 py-2 mb-10 border border-gold/30 text-[10px] font-bold uppercase tracking-[4px] text-gold bg-gold/5"
        >
          Creative Portfolio 2026
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight mb-12 text-white"
        >
          AYU TRI <br /> <span className="text-gold">ANGGRAINI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl mx-auto text-sm md:text-base text-text-sub uppercase tracking-[2px] leading-relaxed mb-16"
        >
          Visual Designer & Web Developer berbasis di Indonesia, berfokus pada pengembangan identitas visual yang kuat serta implementasi kode yang bersih dan terstruktur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#posters"
            className="px-12 py-5 bg-gold text-bg-dark font-black text-xs uppercase tracking-[2px] hover:invert transition-all"
          >
            Lihat Karya
          </a>
          <a
            href="#contact"
            className="px-12 py-5 border border-border-line text-white font-black text-xs uppercase tracking-[2px] hover:bg-white hover:text-bg-dark transition-all"
          >
            Hubungi Saya
          </a>
        </motion.div>

      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-border-line -z-10 opacity-50"></div>
    </section>
  );
}
