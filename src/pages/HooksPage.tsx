import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { camsData, CamsCategory, Hook, Trigger } from '@/data/camsData';
import HookCard from '@/components/HookCard';
import TriggerCard from '@/components/TriggerCard';
import { Button } from '@/components/ui/button';

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
        {/* Source TriggerCard */}
        <div className="flex flex-col items-center mb-8">
          <TriggerCard
            id={selectedTrigger.id}
            text={selectedTrigger.text}
            categoryName={category.name}
            color={category.color}
            onClick={() => navigate(`/triggers/${category.name.toLowerCase()}`)}
          />
        </div>
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
