import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-border-line bg-bg-dark">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-[2px] uppercase">
              AYU TRI ANGGRAINI
            </h3>
            <p className="text-[10px] text-text-sub uppercase tracking-[3px] font-bold">
              Creative Designer & Web Builder. Based in Indonesia.
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink icon={<Instagram size={18} />} link="https://www.instagram.com/ayutri.design/" />
            <SocialLink icon={<Github size={18} />} link="https://github.com/ayu-tri-anggraini" />
            <SocialLink icon={<Linkedin size={18} />} link="https://linkedin.com/in/ayu-tri-anggraini" />
            <SocialLink icon={<Twitter size={18} />} link="https://twitter.com/ayutri_design" />
          </div>


          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase font-bold tracking-[2px] text-text-sub mb-2">
              © {currentYear} Ayu Tri Anggraini
            </p>
            <p className="text-[10px] font-bold text-gold uppercase tracking-[2px]">
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, link }: { icon: React.ReactNode, link: string }) {
  return (
    <a 
      href={link} 
      className="w-10 h-10 border border-border-line flex items-center justify-center text-text-sub hover:bg-gold hover:text-bg-dark hover:border-gold transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}
