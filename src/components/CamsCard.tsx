import React from 'react';

interface CamsCardProps {
  name: string;
  color: string; // HEX code, e.g. "#5393f5"
  onClick: () => void;
}

const CamsCard: React.FC<CamsCardProps> = ({ name, color, onClick }) => {
  return (
    <div
      className="aspect-[3/4] w-44 rounded-2xl border-4 border-black flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span
        className="font-bold text-white text-center px-2"
        style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.45rem)', // min, preferred, max
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
