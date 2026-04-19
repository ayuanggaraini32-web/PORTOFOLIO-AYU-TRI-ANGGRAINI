import { motion } from 'framer-motion';

export default function About() {
  const designSkills = ['Canva'];
  const webSkills = ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'];

  return (
    <section id="about" className="py-24 bg-bg-dark text-text-main relative overflow-hidden border-b border-border-line">
      {/* Texture background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="section-title-line">Design Skills</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-16">
              {designSkills.map(skill => (
                <li key={skill} className="text-xs uppercase tracking-[2px] text-text-sub flex justify-between border-b border-border-line pb-2">
                  {skill} <span className="text-gold">Expert</span>
                </li>
              ))}
            </ul>

            <div className="section-title-line">Web Tech</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {webSkills.map(skill => (
                <li key={skill} className="text-xs uppercase tracking-[2px] text-text-sub flex justify-between border-b border-border-line pb-2">
                  {skill} <span className="text-gold">Advanced</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="section-title-line">Biography</div>
            <h2 className="font-display text-5xl md:text-7xl mb-10 tracking-tighter text-white">
              Creative <span className="italic text-gold">Soul</span>, Technical <span className="italic">Mind</span>.
            </h2>
            <p className="text-text-sub font-light text-lg mb-12 leading-relaxed tracking-wide">
              Graphic Designer & Web Developer berbasis di Indonesia. Saya fokus pada estetika visual yang kuat dan kode yang bersih, menjembatani kesenjangan antara desain yang indah dan teknologi yang fungsional.
            </p>
            
            <div className="p-8 border border-gold-muted bg-gold/5 rounded-sm">
               <p className="text-xs text-gold uppercase tracking-[3px] italic mb-2">"Design is not just what it looks like and feels like. Design is how it works."</p>
               <span className="text-[10px] text-text-sub uppercase tracking-[1px]">— Steve Jobs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
