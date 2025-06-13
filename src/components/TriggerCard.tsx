import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TriggerCardProps {
  id: number;
  text: string;
  categoryName: string;
  color: string; // Tailwind background color class for the category
  onClick: () => void;
}

const TriggerCard: React.FC<TriggerCardProps> = ({ id, text, categoryName, color, onClick }) => {
  return (
    <Card
      className={cn(
        "w-48 h-64 flex flex-col justify-between text-white cursor-pointer transition-transform transform hover:scale-105 border-6 border-black",
        color
      )}
      onClick={onClick}
    >
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm font-semibold text-center text-white">Trigger</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center p-3 text-center">
        <p className="text-lg font-bold text-black">{text}</p>
      </CardContent>
      <div className="p-2 text-xs text-center text-gray-100 italic">
        {categoryName}
      </div>
    </Card>
  );
};

export default TriggerCard;