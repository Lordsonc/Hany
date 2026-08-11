import React from 'react';
import { AiFillTikTok, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full overflow-hidden bg-linear-to-b from-[#b86b77] via-[#7a3b45] to-[#3b1820] py-16 px-5 sm:px-8 md:px-12 lg:px-8" 
      data-aos="fade-up"
    >
      {/* Background Ambient Glows - Matching Hero Lens Flare */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start justify-center pointer-events-none">
        <div className="h-28 w-2/3 bg-linear-to-br from-[#E5A93C]/25 to-[#b86b77]/20 blur-3xl opacity-60"></div>
        <div className="h-20 w-3/4 bg-linear-to-r from-rose-400/20 to-[#F5D061]/20 opacity-40 blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl lg:max-w-7xl mx-auto">
        <div className="w-full bg-[#3b1820]/40 border border-[#E5A93C]/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between">
          
          {/* Header Section */}
          <div className="flex flex-col justify-center items-center text-center pb-6">
            <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#F5D061] text-xs sm:text-sm font-medium">
              Who We Are
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37]">Us</span>
            </h2>
            <p className="text-sm sm:text-base text-pink-100/85 max-w-xl mx-auto pt-2 leading-relaxed">
              Dedicated to bringing your dream attire to life with precision, elegance, and luxury craftsmanship.
            </p>
          </div>

          {/* Main Body Paragraph */}
          <div className="my-4 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-pink-100/90 leading-relaxed font-light">
              Welcome to our haute couture and bespoke fashion studio! We are a dedicated team of master tailors and designers committed to sartorial excellence. Our expertise spans Custom Bridalwear, Sophisticated Aso-Ebi, Red-carpet evening Gowns and tailored luxury outfits. We take immense pride in delivering timeless, high-quality garments that perfectly complement your personal aesthetic and celebrate life’s most special moments.
            </p>
          </div>

          {/* Footer Section: Social Links & Direct Action Buttons */}
          <div className="flex flex-col items-center space-y-6 pt-8 border-t border-[#E5A93C]/20 mt-6">
            
            {/* Social Links Row with Brand Colors on Hover */}
            <div className="flex items-center justify-center gap-4 text-pink-100/70 text-xl sm:text-2xl">
              <a 
                href="https://www.facebook.com/profile.php?id=61576788627670" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-[#3b1820]/60 border border-[#E5A93C]/30 hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <MdFacebook />
              </a>
              <a 
                href="https://www.instagram.com/hany_lawrence_designs" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-[#3b1820]/60 border border-[#E5A93C]/30 hover:border-[#E4405F] hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <AiFillInstagram />
              </a>
              <a 
                href="https://www.tiktok.com/@hany_lawrence_designs" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-xl bg-[#3b1820]/60 border border-[#E5A93C]/30 hover:border-[#000000] hover:text-[#000000] hover:bg-[#000000]/10 hover:scale-110 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <AiFillTikTok />
              </a>
            </div>

            {/* Call & WhatsApp Action Buttons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-sm">
              <a 
                href="tel:+2348148201761" 
                className="flex-1 flex items-center justify-center gap-2 bg-[#3b1820]/80 hover:bg-[#3b1820] border border-[#E5A93C]/40 hover:border-[#E5A93C] text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5"
                onClick={(e) => e.stopPropagation()}
              >
                <FaPhoneAlt className="text-xs text-[#F5D061]" />
                <span>Call Us</span>
              </a>

              {/* Green Official WhatsApp Button */}
              <a 
                href="https://wa.me/2348148201761?text=Hello!%20I'm%20interested%20in%20a%20custom%20design%20consultation." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shadow-black/30 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <FaWhatsapp className="text-lg text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;