import React from 'react';

interface TriggerCardProps {
  id: number;
  text: string;
  categoryName: string;
  color: string; // Tailwind background class, e.g. "bg-blue-600"
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
    className={`w-56 h-[340px] rounded-[32px] border-[8px] border-black flex flex-col justify-between cursor-pointer min-w-0 ${color}`}
    onClick={onClick}
    style={{ boxSizing: 'border-box' }}
  >
    <div className="pt-4 pb-1 text-center">
      <span className="text-2xl font-bold text-white leading-none">Trigger</span>
    </div>
    <div className="flex-grow flex items-center justify-center px-2">
      <span className="text-xl font-bold text-black text-center leading-snug">{text}</span>
    </div>
    <div className="pb-2 text-center italic text-[15px] text-white">
      {categoryName}
    </div>
  </div>
);

export default TriggerCard;