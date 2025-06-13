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
        "w-64 h-48 flex flex-col justify-between text-white cursor-pointer transition-transform transform hover:scale-105",
        color
      )}
      onClick={onClick}
    >
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm font-semibold text-center">Trigger</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center p-3 text-center">
        <p className="text-sm">{text}</p>
      </CardContent>
      <div className="p-2 text-xs text-center opacity-80">
        {categoryName}
      </div>
    </Card>
  );
};

export default TriggerCard;