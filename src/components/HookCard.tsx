import React from 'react';

interface HookCardProps {
  text: string;
  categoryName: string;
  color: string; // e.g. "border-blue-600"
}

const HookCard: React.FC<HookCardProps> = ({
  text,
  categoryName,
  color,
}) => {
  const borderColorClass = color.replace('bg-', 'border-');
  const textColorClass = color.replace('bg-', 'text-');

  return (
    <div
      className={`w-56 h-[340px] rounded-[32px] border-[8px] flex flex-col justify-between cursor-pointer min-w-0 bg-black ${borderColorClass}`}
      style={{ boxSizing: 'border-box' }}
    >
      <div className="pt-4 pb-1 text-center">
        <span className="text-2xl font-bold text-white leading-none">Hook</span>
      </div>
      <div className="flex-grow flex items-center justify-center px-2">
        <span className="text-lg font-bold text-white text-center leading-snug">{text}</span>
      </div>
      <div className={`pb-2 text-center italic text-[15px] ${textColorClass}`}>
        {categoryName}
      </div>
    </div>
  );
};

export default HookCard;