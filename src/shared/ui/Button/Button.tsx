import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cl } from 'shared/lib/cl';

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
}

export const Button = ({
  className,
  children,
  theme = 'clear',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cl(
        'cursor-pointer bg-primary-500',
        theme === 'primary' && 'border p-2',
        theme === 'clear' && '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
