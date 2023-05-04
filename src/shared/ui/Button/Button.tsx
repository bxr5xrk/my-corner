import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cl } from 'shared/lib/cl';
import Spinner from '../Spinner';

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  isLoading?: boolean;
  w?: 'full' | 'fit';
}

export const Button = ({
  className,
  children,
  isLoading,
  theme = 'clear',
  w = 'fit',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cl(
        theme === 'primary' &&
          'rounded-md border border-secondary-400 bg-secondary-200 px-4 py-1.5 text-sm font-semibold text-secondary-700 hover:bg-secondary-400',
        theme === 'clear' && '',
        w === 'fit' ? 'w-fit' : 'w-full',
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
