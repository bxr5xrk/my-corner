import { createRoot } from 'react-dom/client';
import App from './app/App';
import 'app/styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
