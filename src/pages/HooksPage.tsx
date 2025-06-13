import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { camsData, CamsCategory, Hook, Trigger } from '@/data/camsData';
import HookCard from '@/components/HookCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Import Card components

const HooksPage: React.FC = () => {
  const { categoryName, triggerId } = useParams<{ categoryName: string; triggerId: string }>();
  const navigate = useNavigate();

  const category: CamsCategory | undefined = camsData.find(
    (c) => c.name.toLowerCase() === categoryName?.toLowerCase()
  );

  const selectedTriggerId = parseInt(triggerId || '0', 10);
  const selectedTrigger: Trigger | undefined = category?.triggers.find(
    (t) => t.id === selectedTriggerId
  );

  if (!category || !selectedTrigger) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Content Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The requested category or trigger could not be found.
        </p>
        <Button onClick={() => navigate('/')}>
          Return to CAMS Selection
        </Button>
      </div>
    );
  }

  const linkedHooks: Hook[] = category.hooks.filter((hook) =>
    hook.linkedTriggers.includes(selectedTrigger.id)
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-5xl mx-auto mb-8">
        {/* Breadcrumbs */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/triggers/${category.name.toLowerCase()}`} className="hover:underline text-blue-700">
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-700">Hooks</span>
        </nav>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
          Hooks for &quot;{selectedTrigger.text}&quot;
        </h1>
        {/* Optional Subtitle */}
        <p className="text-base sm:text-lg text-gray-500 mb-6">
          Coaching hooks linked to this trigger.
        </p>

        {/* Source Trigger Card */}
        <Card className="mb-8 p-4 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-xl font-bold text-gray-700 dark:text-gray-200">
              Source Trigger:
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-lg text-gray-900 dark:text-gray-50">
              {selectedTrigger.text}
            </p>
          </CardContent>
        </Card>

      </div>
      {/* Centered grid with breathing room */}
      {linkedHooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 items-start mt-4">
          {linkedHooks.map((hook: Hook, index: number) => (
            <HookCard
              key={index}
              text={hook.text}
              categoryName={category.name}
              color={category.color}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-8">
          No hooks found for this trigger.
        </p>
      )}
    </div>
  );
};

export default HooksPage;