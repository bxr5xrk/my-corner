import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button } from 'shared/ui/Button/Button';

interface ToggleProps {
  isCollapsed: boolean;
  onToggle: VoidFunction;
}

export const Toggle = ({ isCollapsed, onToggle }: ToggleProps) => {
  return (
    <Button
      className="opacity-0 duration-300 transition-opacity group-hover:opacity-100 absolute top-2 border border-secondary-200 -right-3 p-1 rounded-full bg-secondary-50 flex items-center justify-center"
      onClick={onToggle}
      theme="clear"
    >
      {isCollapsed ? (
        <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  );
};
