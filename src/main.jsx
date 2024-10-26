import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; //глобальні стилі
import 'modern-normalize'; //стилі з файлу нормалізації

import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
