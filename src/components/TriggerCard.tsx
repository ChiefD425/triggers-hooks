import React from 'react';

interface TriggerCardProps {
  id: number;
  text: string;
  categoryName: string;
  color: string;
  onClick: () => void;
}

const TriggerCard: React.FC<TriggerCardProps> = ({
  id,
  text,
  categoryName,
  color,
  onClick,
}) => (
  <div
    className={`w-44 h-[270px] rounded-[24px] border-[4px] border-black flex flex-col justify-between cursor-pointer min-w-0 ${color}`}
    onClick={onClick}
    style={{ boxSizing: 'border-box' }}
  >
    {/* Header */}
    <div className="pt-3 pb-1 text-center">
      <span className="text-lg font-bold text-white leading-none">Trigger</span>
    </div>
    {/* Main Text */}
    <div className="flex-grow flex items-center justify-center px-1">
      <span className="text-sm font-bold text-black text-center leading-snug">{text}</span>
    </div>
    {/* Footer */}
    <div className="pb-1 text-center italic text-[13px] text-[#697c96]">
      {categoryName}
    </div>
  </div>
);

export default TriggerCard;
