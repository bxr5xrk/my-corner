import { ThemeProvider } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}
