import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-bg-dark border-b border-border-line">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20">
          <div className="section-title-line">Web Projects</div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
            Development Cases
          </h2>
          <p className="text-text-sub max-w-sm text-xs uppercase tracking-[2px] leading-relaxed">
            Membangun solusi digital yang modern, responsif, dan mengutamakan pengalaman pengguna terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#151517] border border-border-line overflow-hidden hover:border-gold transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.screenshotUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Simple Overlay with Link */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-display text-xl text-white mb-4 uppercase tracking-widest italic">{project.title}</h3>
                <a 
                  href={project.liveUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-[3px] px-8 py-3 bg-gold text-bg-dark hover:invert transition-all flex items-center gap-2"
                >
                  Visit Website <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
