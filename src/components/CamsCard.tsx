import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CamsCardProps {
  name: string;
  color: string; // Tailwind background color class
  onClick: () => void;
}

const CamsCard: React.FC<CamsCardProps> = ({ name, color, onClick }) => {
  return (
    <Card
      className={cn(
        "w-48 h-48 flex flex-col items-center justify-center text-white cursor-pointer transition-transform transform hover:scale-105 border-2 border-white",
        color
      )}
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
      </CardContent>
    </Card>
  );
};

export default CamsCard;