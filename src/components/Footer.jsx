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
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37]">Agbero</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-pink-100/80 font-light">
              Creating fast, modern, and SEO-friendly websites that help businesses grow.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-lg text-pink-100/70">
              <a 
                href="https://www.facebook.com/share/1b2N1W7PVq/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-[#3b1820]/80 border border-[#E5A93C]/30 hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:scale-110 transition-all duration-300"
              >
                <MdFacebook />
              </a>
              <a 
                href="https://www.instagram.com/tech_agbero?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-[#3b1820]/80 border border-[#E5A93C]/30 hover:border-[#E4405F] hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:scale-110 transition-all duration-300"
              >
                <AiFillInstagram />
              </a>
              <a 
                href="https://www.tiktok.com/@tech_agbero?_r=1&_t=ZS-98UzRHoLaOO" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-lg bg-[#3b1820]/80 border border-[#E5A93C]/30 hover:border-[#000000] hover:text-white hover:bg-[#000000] hover:scale-110 transition-all duration-300"
              >
                <AiFillTikTok />
              </a>
              <a 
                href="https://x.com/ajibodelawrence?s=11" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2 rounded-lg bg-[#3b1820]/80 border border-[#E5A93C]/30 hover:border-white hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <RiTwitterXFill />
              </a>
              <a 
                href="https://www.linkedin.com/in/lawrence-ajibode-604a23167?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-[#3b1820]/80 border border-[#E5A93C]/30 hover:border-[#0077B5] hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:scale-110 transition-all duration-300"
              >
                <RiLinkedinFill />
              </a>
            </div>
          </div>

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

          {/* Column 3: Collections / Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#F5D061] tracking-wide uppercase text-xs font-mono">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-1.5"><span className="text-[#E5A93C]/50">›</span> Frontend Designs</li>
              <li className="flex items-center gap-1.5"><span className="text-[#E5A93C]/50">›</span> Backend Programming</li>
              <li className="flex items-center gap-1.5"><span className="text-[#E5A93C]/50">›</span> Content Management System</li>
              <li className="flex items-center gap-1.5"><span className="text-[#E5A93C]/50">›</span> Search Engine Optimization</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Action */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#F5D061] tracking-wide uppercase text-xs font-mono">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a href="tel:+2348148201761" className="flex items-center gap-2.5 hover:text-[#F5D061] transition-colors">
                <FaPhoneAlt className="text-[#E5A93C] text-xs" />
                <span>+234 706 397 1569</span>
              </a>
              <a href="mailto:info@hanylawrence.com" className="flex items-center gap-2.5 hover:text-[#F5D061] transition-colors">
                <FaEnvelope className="text-[#E5A93C] text-xs" />
                <span>lawrenceajibode08@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-[#E5A93C] text-xs shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a 
                href="https://wa.me/2347063971569?text=Hello!%20I'm%20interested%20in%20a%20custom%20design%20consultation." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300 shadow-md hover:scale-105"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
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