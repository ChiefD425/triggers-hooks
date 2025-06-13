import React from 'react';
import { useNavigate } from 'react-router-dom';
import { camsData } from '@/data/camsData';
import CamsCard from '@/components/CamsCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-5xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-2">
          CAMS Triggers & Hooks
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 font-medium mt-2">
          Select a category to explore triggers and coaching hooks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {camsData.map((category) => (
          <CamsCard
            key={category.name}
            name={category.name}
            color={category.color}
            onClick={() => navigate(`/triggers/${category.name.toLowerCase()}`)}
          />
        ))}
      </div>
      <div className="mt-auto pt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;
