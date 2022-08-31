import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/app.global.scss';
import 'bootstrap/dist/js/bootstrap.min';
import 'typeface-roboto';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
