import React from 'react';
import { AiFillTikTok, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { RiTwitterXFill, RiLinkedinFill } from 'react-icons/ri';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-linear-to-b from-[#3b1820] via-[#2c0d14] to-[#1a080d] text-pink-100/80 pt-16 pb-8 px-5 sm:px-8 md:px-12 lg:px-8 border-t border-[#E5A93C]/20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-48 flex items-start justify-center pointer-events-none -z-10">
        <div className="h-20 w-3/4 bg-linear-to-r from-[#E5A93C]/10 via-[#b86b77]/15 to-[#E5A93C]/10 blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#F5D061] tracking-wide uppercase text-xs font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleScroll(`#${item.toLowerCase()}`)}
                    className="hover:text-[#F5D061] transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-[#E5A93C]/50">›</span> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-[#E5A93C]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-100/60 text-center sm:text-left font-light">
          <p>© {currentYear} Tech_Agbero. All rights reserved.</p>
          <p className="tracking-widest uppercase font-mono text-[10px] text-[#F5D061]/70">
            Elegance • Precision • Luxury
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;