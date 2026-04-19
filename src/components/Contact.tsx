import { motion } from 'framer-motion';
import React from 'react';
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-dark text-text-main">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20">
          <div className="section-title-line">Connect</div>
          <h2 className="font-display text-5xl md:text-8xl text-white mb-6 uppercase tracking-wider">
            Let's Collaborate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <p className="text-text-sub text-lg leading-relaxed font-light max-w-lg italic">
              "Every great design starts with an even better conversation."
            </p>
            
            <div className="grid gap-10">
              <ContactItem icon={<Mail size={20} />} title="Email" detail="ayuanggaraini32@gmail.com" link="mailto:ayuanggaraini32@gmail.com" />
              <ContactItem icon={<MessageCircle size={20} />} title="WhatsApp" detail="+62 851-3711-2189" link="https://wa.me/6285137112189" />
              <ContactItem icon={<Instagram size={20} />} title="Instagram" detail="@ayuanggaraini32" link="https://www.instagram.com/ayuanggaraini32/" />

            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#151517] p-12 border border-border-line rounded-sm"
          >
            <form className="space-y-10">
               <div className="space-y-4">
                 <label className="text-[10px] uppercase font-bold tracking-[2px] text-gold">Full Name</label>
                 <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-border-line focus:border-gold outline-none pb-4 text-sm tracking-wide" />
               </div>
               <div className="space-y-4">
                 <label className="text-[10px] uppercase font-bold tracking-[2px] text-gold">Email Address</label>
                 <input type="email" placeholder="email@address.com" className="w-full bg-transparent border-b border-border-line focus:border-gold outline-none pb-4 text-sm tracking-wide" />
               </div>
               <div className="space-y-4">
                 <label className="text-[10px] uppercase font-bold tracking-[2px] text-gold">Message</label>
                 <textarea rows={4} placeholder="Describe your project" className="w-full bg-transparent border-b border-border-line focus:border-gold outline-none pb-4 text-sm tracking-wide resize-none"></textarea>
               </div>
               <button className="w-full py-5 bg-gold text-bg-dark font-black uppercase tracking-[3px] text-xs hover:invert transition-all flex items-center justify-center gap-4">
                 Send Inquiry <Send size={16} />
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, detail, link }: { icon: React.ReactNode, title: string, detail: string, link: string }) {
  return (
    <a href={link} className="group flex items-center gap-6">
      <div className="w-12 h-12 border border-border-line flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-bg-dark transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] uppercase font-bold tracking-[2px] text-text-sub mb-1">{title}</h4>
        <p className="text-xl text-white group-hover:text-gold transition-colors font-display italic">{detail}</p>
      </div>
    </a>
  );
}
