import React from 'react';
import SkillsLevel from './SkillsLevel.jsx';

// Fashion design skills data
const SkillsData = [
  { name: "Bridalwear Construction & Tailoring", level: "98%" },
  { name: "Traditional Aso-Ebi & Cultural Attire", level: "98%" },
  { name: "Garment Fitting & Alteration Precision", level: "96%" },
  { name: "Bespoke Couture & Pattern Making", level: "98%" },
  { name: "Textile Selection & Fabric Draping", level: "95%" },
  { name: "Fashion Illustration & Design Concepts", level: "88%" }
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative w-full py-16 px-5 sm:px-8 md:px-12 lg:px-8 max-w-4xl mx-auto rounded-3xl my-8 bg-linear-to-b from-[#b86b77] via-[#7a3b45] to-[#3b1820] overflow-hidden shadow-2xl shadow-black/50" 
      data-aos="fade-up"
    >
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#E5A93C]/10 rounded-full blur-3xl" />
      </div>

      {/* Inner Glassmorphism Card Container */}
      <div className="w-full bg-[#3b1820]/40 border border-[#E5A93C]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center pb-8">
          <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#F5D061] text-xs sm:text-sm font-medium">
            My Craftsmanship
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Couture & <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E5A93C] to-[#F5D061]">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-pink-100/70 max-w-xl mx-auto pt-2 leading-relaxed">
            Technical precision, handmade detailing and flawless fitting standards for luxury apparel.
          </p>
        </div>

        {/* Single Column List (1 skill per line on all screens) */}
        <div className="grid grid-cols-1 gap-4 w-full my-2">
          {SkillsData.map((skill, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-5 rounded-xl border border-[#E5A93C]/30 bg-[#2c0d14]/60 hover:border-[#E5A93C] transition-all duration-300 shadow-xs flex items-center gap-4"
            >
              <div className="flex-1">
                <SkillsLevel skillName={skill.name} percentage={skill.level} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="text-center pt-8 border-t border-[#E5A93C]/20 mt-6">
          <span className="text-xs sm:text-sm text-[#F5D061] uppercase tracking-widest font-mono">
            Bespoke Tailoring • Timeless Elegance • Flawless Precision
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;