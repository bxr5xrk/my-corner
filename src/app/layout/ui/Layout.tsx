import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';

export const Layout = () => {
  return (
    <div className="grid h-screen w-screen grid-rows-autoFr space-y-5 overflow-y-auto">
      <Navbar />

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
