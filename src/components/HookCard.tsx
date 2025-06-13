import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HookCardProps {
  text: string;
  categoryName: string;
  color: string; // Tailwind background color class for the category
}

const HookCard: React.FC<HookCardProps> = ({ text, categoryName, color }) => {
  return (
    <Card
      className={cn(
        "w-48 h-64 flex flex-col justify-between text-white border-2",
        "bg-black", // Main background is black
        `border-[var(--${color.replace('bg-', '')})]`, // Use the category color for the border
      )}
    >
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm font-semibold text-center text-white">Hook</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center p-3 text-center">
        <p className="text-lg font-bold text-white">{text}</p>
      </CardContent>
      <div className="p-2 text-xs text-center text-gray-100 italic">
        {categoryName}
      </div>
    </Card>
  );
};

export default HookCard;