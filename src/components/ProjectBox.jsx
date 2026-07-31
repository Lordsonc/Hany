import React from 'react';
import { Eye } from 'lucide-react';

const ProjectBox = ({ ProjectData = [], onViewImage }) => {
  if (!ProjectData || ProjectData.length === 0) {
    return (
      <div className="text-center text-pink-100/60 py-12">
        No collection pieces available right now.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
      {ProjectData.map((project, index) => (
        <div 
          key={project.id || index} 
          className="flex flex-col border border-[#E5A93C]/40 hover:border-[#E5A93C] rounded-2xl p-4 sm:p-5 shadow-xl bg-[#2c0d14] transition-all duration-300 group overflow-hidden"
        >
          {/* Image Container with standard <img> tag */}
          <div 
            onClick={() => onViewImage && onViewImage(project.image)}
            className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl mb-4 shrink-0 bg-[#1a080c] border border-[#E5A93C]/20 cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title || "Fashion collection preview"} 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Title, Description & Action Button */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F5D061] transition-colors leading-snug">
                  {project.title}
                </h3>
                {project.category && (
                  <span className="text-[10px] sm:text-xs font-mono bg-[#E5A93C]/10 text-[#F5D061] px-2.5 py-1 rounded-md border border-[#E5A93C]/30 shrink-0">
                    {project.category}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-pink-100/80 leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>

            {/* View Full Image Action Bar */}
            <div className="pt-3 border-t border-[#E5A93C]/20 flex items-center justify-end">
              <button
                type="button"
                onClick={() => onViewImage && onViewImage(project.image)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-linear-to-r from-[#F5D061] via-[#E5A93C] to-[#D4AF37] hover:scale-105 text-[#3b1820] text-xs font-bold transition-all duration-300 ease-in-out shadow-md shadow-black/40 cursor-pointer"
              >
                <Eye size={14} />
                <span>View</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;