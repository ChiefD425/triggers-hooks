import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { camsData, CamsCategory, Hook, Trigger } from '@/data/camsData';
import HookCard from '@/components/HookCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

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
      <div className="w-full max-w-6xl flex items-center justify-between mb-8">
        <Button onClick={() => navigate(`/triggers/${category.name.toLowerCase()}`)} variant="outline" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
          Hooks for "{selectedTrigger.text}"
        </h1>
        <div className="w-10"></div> {/* Placeholder for alignment */}
      </div>
      {linkedHooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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