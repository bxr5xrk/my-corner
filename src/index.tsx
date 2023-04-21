import { createRoot } from 'react-dom/client';
import App from './app/App';
import 'app/styles/index.css';
import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
