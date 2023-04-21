import { Suspense } from 'react';
import { ThemeProvider } from 'shared/ui/ThemeSwitcher';
import { AppRouter } from '../shared/config/router';

export default function App() {
  return (
    <Suspense fallback="">
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Suspense>
  );
}
