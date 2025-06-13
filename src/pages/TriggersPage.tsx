import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { camsData, CamsCategory, Trigger } from '@/data/camsData';
import TriggerCard from '@/components/TriggerCard';
import { Button } from '@/components/ui/button';

const TriggersPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();

  const category: CamsCategory | undefined = camsData.find(
    (c) => c.name.toLowerCase() === categoryName?.toLowerCase()
  );

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The CAMS category "{categoryName}" does not exist.
        </p>
        <Button onClick={() => navigate('/')}>
          Return to CAMS Selection
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-5xl mx-auto mb-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-2">
          <Link to="/" className="hover:underline text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-700">{category.name}</span>
        </nav>
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          {category.name} Triggers
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {category.triggers.map((trigger: Trigger) => (
          <TriggerCard
            key={trigger.id}
            id={trigger.id}
            text={trigger.text}
            categoryName={category.name}
            color={category.color}
            onClick={() => navigate(`/hooks/${category.name.toLowerCase()}/${trigger.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TriggersPage;
