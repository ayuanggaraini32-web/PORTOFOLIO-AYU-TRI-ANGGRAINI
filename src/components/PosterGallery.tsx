import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { POSTERS } from '../constants';
import { X, ZoomIn } from 'lucide-react';
import { Poster } from '../types';

export default function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(POSTERS.map(p => p.category)))];

  const filteredPosters = filter === 'All' 
    ? POSTERS 
    : POSTERS.filter(p => p.category === filter);

  return (
    <section id="posters" className="py-24 bg-bg-dark border-y border-border-line">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="flex-1">
            <div className="section-title-line">Poster Design</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
              Selected Works
            </h2>
            <p className="text-text-sub max-w-md text-xs uppercase tracking-[2px] leading-relaxed">
              Curated collection of visual aesthetics, from corporate branding to underground art events.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[2px] px-6 py-2 border transition-all ${
                  filter === cat 
                    ? 'bg-gold border-gold text-bg-dark' 
                    : 'border-border-line text-text-sub hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosters.map((poster) => (
              <motion.div
                layout
                key={poster.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer border border-border-line bg-[#1a1a1c]"
                onClick={() => setSelectedPoster(poster)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={poster.imageUrl}
                    alt={poster.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <ZoomIn className="text-gold mb-2" size={20} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-display text-sm tracking-wide lowercase italic">{poster.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedPoster(null)}
          >
            <button 
              className="absolute top-10 right-10 text-gold hover:rotate-90 transition-transform duration-300"
              onClick={() => setSelectedPoster(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="border border-gold/20 p-2">
                <img
                  src={selectedPoster.imageUrl}
                  alt={selectedPoster.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="text-white">
                <div className="section-title-line">{selectedPoster.category}</div>
                <h2 className="font-display text-5xl mb-6 italic">{selectedPoster.title}</h2>
                <p className="text-text-sub text-sm leading-relaxed mb-10 tracking-wide font-light">
                  {selectedPoster.description}
                </p>
                <div className="flex gap-4">
                   <button className="text-[10px] font-bold uppercase tracking-[2px] px-8 py-3 bg-gold text-bg-dark">Enquire Project</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
