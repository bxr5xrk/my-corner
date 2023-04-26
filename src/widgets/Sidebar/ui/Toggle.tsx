import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button } from 'shared/ui/Button/Button';

interface ToggleProps {
  isCollapsed: boolean;
  onToggle: VoidFunction;
}

export const Toggle = ({ isCollapsed, onToggle }: ToggleProps) => {
  return (
    <Button
      data-testid="toggle"
      className="absolute -right-3 top-2 flex items-center justify-center rounded-full border border-secondary-200 bg-secondary-50 p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
