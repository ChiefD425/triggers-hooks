import React from 'react';

interface CamsCardProps {
  name: string;
  color: string; // Tailwind background color class, e.g. "bg-blue-600"
  onClick: () => void;
}

const CamsCard: React.FC<CamsCardProps> = ({ name, color, onClick }) => {
  return (
    <div
      className={`aspect-[3/4] w-44 rounded-2xl border-4 border-black flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${color}`}
      onClick={onClick}
    >
      <span
        className="font-bold text-white text-center"
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.6rem)',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default CamsCard;
