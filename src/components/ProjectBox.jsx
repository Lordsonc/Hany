import React from 'react';
import { Eye } from 'lucide-react';

const ProjectBox = ({ ProjectData, onViewImage }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-center">
      {ProjectData.map((project, index) => (
        <div
          key={project.id || index}
          className="group relative h-96 sm:h-112 w-full rounded-2xl overflow-hidden border border-[#E5A93C]/40 bg-[#3b1820]/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-[#E5A93C] last:lg:col-span-2 last:lg:w-1/2 last:lg:mx-auto"
        >
          {/* Background Project Image */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-[#2c0d14] via-[#3b1820]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

          {/* Floating Content Area */}
          <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 text-left">
            <span className="text-xs uppercase tracking-widest text-[#F5D061] font-semibold mb-1">
              {project.category}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#F5D061] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>

            {/* View Image Action */}
            <div className="pt-3 border-t border-[#E5A93C]/30 flex items-center justify-end">
              <button
                onClick={() => onViewImage(project.image)}
                className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] hover:scale-105 text-[#3b1820] text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Eye size={15} />
                <span>View Full Image</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;