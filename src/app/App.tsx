import { ThemeProvider } from 'shared/ui/ThemeSwitcher';
import { AppRouter } from './providers/router';

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
