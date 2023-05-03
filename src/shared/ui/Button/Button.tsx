import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cl } from 'shared/lib/cl';
import Spinner from '../Spinner';

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  isLoading?: boolean;
}

export const Button = ({
  className,
  children,
  isLoading,
  theme = 'clear',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cl(
        'cursor-pointer',
        theme === 'primary' && 'border p-2',
        theme === 'clear' && '',
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
