import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import ProjectBox from './ProjectBox';

import Bridal from '../assets/Bridal.webp';
import AsoEbiGown from '../assets/AsoEbiGown.webp';
import CustomCouture from "../assets/CustomCouture.webp";
import PromDress from "../assets/PromDress.webp";

export const ProjectData = [
  {
    id: 'Bridal-couture',
    title: "Breathtaking Bridal Gown",
    description:
      "Handcrafted bespoke wedding dress featuring intricate beaded embroidery, premium silk tulle and custom fit tailoring for an unforgettable walk down the aisle.",
    image: Bridal,
    category: "Bridalwear"
  },
  {
    id: 'Aso-ebi-glam',
    title: "Sophisticated Aso-Ebi Ensemble",
    description:
      "Modern luxury cultural attire crafted with rich lace, custom corsetry and detailed embellishments designed for high-profile celebrations.",
    image: AsoEbiGown,
    category: "Aso-Ebi"
  }
];

const ProjectData2 = [
  {
    id: 'Custom-suit',
    title: "Exclusive Custom Wears",
    description:
      "Precision-tailored luxury garment built specifically to unique client measurements, modern cuts and premium fabric selections.",
    image: CustomCouture,
    category: "Bespoke"
  },
  {
    id: 'Prom-gown',
    title: "Glamorous Evening Ball Gown",
    description:
      "Show-stopping red carpet silhouette created with structured corset boning, floor-sweeping train and hand-stitched detailing.",
    image: PromDress,
    category: "Couture"
  }
];

const allEmbeddedProjects = [...ProjectData, ...ProjectData2];

const Projects = ({ ProjectData: passedData }) => {
  const projectsToDisplay = passedData && passedData.length > 0 ? passedData : allEmbeddedProjects;

  // State to manage full-view image modal
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section 
      id="projects" 
      className="relative w-full py-16 px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto rounded-3xl my-8 bg-linear-to-b from-[#b86b77] via-[#7a3b45] to-[#3b1820] overflow-hidden shadow-2xl shadow-black/50" 
      data-aos="fade-up"
    >
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#E5A93C]/10 rounded-full blur-3xl" />
      </div>

      {/* Inner Glassmorphism Card Container */}
      <div className="w-full bg-[#3b1820]/40 border border-[#E5A93C]/30 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center pb-8">
          <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-[#F5D061] text-xs sm:text-sm font-medium">
            My Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E5A93C] to-[#F5D061]">Collections</span>
          </h2>
          <p className="text-sm sm:text-base text-pink-100/80 max-w-xl mx-auto pt-2 leading-relaxed">
            Explore bespoke bridal outfits, sophisticated Aso-Ebi designs and custom couture masterpieces.
          </p>
        </div>

        {/* Project Grid Container with onViewImage handler */}
        <div className="w-full my-4">
          <ProjectBox 
            ProjectData={projectsToDisplay} 
            onViewImage={(img) => setSelectedImage(img)} 
          />
        </div>

        {/* Footer Tagline */}
        <div className="text-center pt-8 border-t border-[#E5A93C]/20 mt-6">
          <span className="text-xs sm:text-sm text-[#F5D061] uppercase tracking-widest font-mono">
            Elegance • Craftsmanship • Custom Fit
          </span>
        </div>

      </div>

      {/* FULL VIEW IMAGE LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/60 border border-[#E5A93C]/40 text-[#F5D061] hover:bg-[#E5A93C] hover:text-[#3b1820] transition-all cursor-pointer shadow-lg z-10"
            title="Close preview"
          >
            <X size={24} />
          </button>

          {/* Full Screen Image Stage */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center overflow-hidden rounded-2xl border border-[#E5A93C]/40 bg-[#2c0d14]/80 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;