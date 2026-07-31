import React from 'react';

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-1.5">
      {/* Skill Label & Percentage */}
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-medium text-pink-100/90 truncate pr-2 tracking-wide">
          {skillName}
        </span>
        <span className="text-xs font-semibold text-[#F5D061] shrink-0 font-mono">
          {percentage}
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full bg-[#1a080c] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#E5A93C]/30 shadow-inner">
        {/* Filled Progress Bar with Gold Gradient */}
        <div 
          className="h-full bg-linear-to-r from-[#E5A93C] to-[#F5D061] rounded-full transition-all duration-700 ease-out shadow-sm shadow-[#E5A93C]/20" 
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
};

export default SkillsLevel;