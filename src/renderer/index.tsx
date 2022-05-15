import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/app.global.scss';
import 'typeface-roboto';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
