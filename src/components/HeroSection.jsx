import React from 'react';
import { Download } from 'lucide-react';
import ProfilePicture from '../assets/ProfilePicture.webp';

const HeroSection = () => {
  // Direct client to WhatsApp
  const handleHireMe = () => {
    const phoneNumber = '2348000000000'; 
    const message = encodeURIComponent("Hello Hany, I am interested in hiring your bespoke design services.");
    window.open(`https://wa.me/${2348133984867}?text=${"Thank you for contacting Hany Lawrence Designs! Please let us know how we can help you."}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home" 
      className="relative w-full py-16 px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto rounded-3xl my-8 bg-linear-to-b from-[#b86b77] via-[#7a3b45] to-[#3b1820] overflow-hidden shadow-2xl shadow-black/50" 
      data-aos="zoom-in-up"
    >
      {/* Background Ambient Glows - Warm Gold Lens Flare */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start justify-center pointer-events-none -z-10">
        <div className="h-28 w-2/3 bg-linear-to-br from-[#E5A93C]/25 to-[#b86b77]/20 blur-3xl opacity-60"></div>
        <div className="h-20 w-3/4 bg-linear-to-r from-rose-400/20 to-[#F5D061]/20 opacity-40 blur-2xl"></div>
      </div>

      {/* Inner Glassmorphism Card Container (Matches Contact Section) */}
      <div className="relative z-10 w-full bg-[#3b1820]/40 border border-[#E5A93C]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center py-6 max-w-2xl md:max-w-3xl lg:max-w-none mx-auto">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:py-6 text-center lg:text-left">
            <div>
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37]">
                  Hany
                </span>{' '}
                👋
              </h1>
            </div>

            <h2 className="text-pink-100/95 font-medium text-sm sm:text-base md:text-lg leading-tight py-3 tracking-wide">
              Creative Director of Hany Lawrence Designs
            </h2>

            <p className="text-pink-100/85 text-xs sm:text-sm leading-relaxed mt-1">
              I create timeless designs that celebrate beauty, confidence, and individuality.
              Every design is thoughtfully conceived and meticulously crafted, blending exceptional craftsmanship with refined creativity to produce outstanding outfits that leave a lasting impression. 
            </p>

            <p className="text-pink-100/85 text-xs sm:text-sm leading-relaxed py-3">
              From breathtaking Bridal outfits that make wedding dreams a reality and sophisticated Aso-ebi ensembles to glamorous Prom dresses and bespoke Custom Wears tailored for life's most memorable occasions, every design reflects elegance, precision and uncompromising quality.
            </p>

            <div className="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max mx-auto lg:mx-0 relative z-20">
              {/* Button 1: Hire Me */}
              <button 
                onClick={handleHireMe}
                className="px-8 py-3.5 rounded-full bg-linear-to-r from-[#F5D061] via-[#c08c2a] to-[#D4AF37] hover:scale-105 transition-all duration-300 ease-in-out text-[#3b1820] font-bold w-full sm:w-auto text-center shadow-lg shadow-black/30 cursor-pointer"
              >
                Hire Me
              </button>

              {/* Button 2: Download Resume (Commented out)
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="border border-[#E5A93C]/60 px-7 py-3 rounded-full hover:scale-105 transition-all duration-300 ease-in-out text-[#F5D061] font-medium w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
              >
                <div className="flex items-center">
                  <Download size={18} className="text-[#F5D061] group-hover:translate-y-0.5 transition-transform" />
                </div>
                <span>Download resume</span>
              </a>
              */}
            </div>
          </div>

          {/* Right Column: Curvy Blob Profile Picture */}
          <div className="mt-8 lg:mt-0 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex justify-center items-center">
              
              {/* Soft Gold/Amber Glow behind image */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#E5A93C]/35 to-[#b86b77]/30 opacity-60 rounded-full blur-3xl transform scale-110 pointer-events-none"></div>

              {/* Outer Thin Gold Border Frame */}
              <div className="absolute inset-0 border border-[#E5A93C]/40 rounded-[58%_42%_48%_52%/48%_58%_42%_52%] scale-105 pointer-events-none transition-all duration-500 hover:scale-110"></div>

              {/* Main Curvy Image Container */}
              <div className="relative z-10 w-full h-full p-1.5 bg-[#3b1820]/40 border border-[#E5A93C]/60 rounded-[58%_42%_48%_52%/48%_58%_42%_52%] shadow-2xl overflow-hidden backdrop-blur-xs">
                <img
                  src={ProfilePicture}
                  alt="Hany Lawrence profile picture"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_12%] scale-105 rounded-[58%_42%_48%_52%/48%_58%_42%_52%]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;