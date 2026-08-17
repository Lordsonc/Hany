import React from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section 
      id="services" 
      className="relative w-full py-16 px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto rounded-3xl my-8 bg-gradient-to-b from-[#b86b77] via-[#7a3b45] to-[#3b1820] overflow-hidden shadow-2xl shadow-black/50" 
      data-aos="fade-up"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#E5A93C]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full bg-[#3b1820]/40 border border-[#E5A93C]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="flex flex-col justify-center items-center text-center pb-8">
          <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#F5D061] text-xs sm:text-sm font-medium tracking-wide">
            What I Offer
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            My Designer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37]">
              Services
            </span>
          </h2>

          <p className="text-pink-100/85 text-xs sm:text-sm md:text-base max-w-xl mx-auto pt-2 leading-relaxed">
            From breathtaking Bridal gowns that make wedding dreams a reality to sophisticated Aso-ebi ensembles, Prom dresses, and custom couture tailored for life's most memorable occasions.
          </p>
        </div>

        <div className="w-full my-4">
          <ServiceBox />
        </div>

        <div className="text-center pt-8 border-t border-[#E5A93C]/20 mt-6">
          <span className="text-xs sm:text-sm text-[#F5D061]/80 uppercase tracking-widest font-mono">
            Bespoke Tailoring • Refined Craftsmanship • Timeless Elegance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;