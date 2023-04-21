import { ReactNode } from 'react';
import { cl } from 'shared/lib/cl';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = ({ className, children }: PageProps) => {
  return (
    <main className={cl('mx-auto w-full max-w-7xl', className)}>
      {children}
    </main>
  );
};
