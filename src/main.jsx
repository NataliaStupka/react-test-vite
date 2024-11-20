//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; //глобальні стилі
import 'modern-normalize'; //стилі з файлу нормалізації

import App from './components/App.jsx';
import { Toaster } from 'react-hot-toast'; //тостер(повідомлення)
import { AuthProvider } from './context/AuthProvider.jsx';
//<StrictMode> змушує кожний компонент монтуватися двічі (монтування > розмонтування > монтування).

createRoot(document.getElementById('root')).render(
  <>
    {/* AuthProvider обгортка для можливості передачі контексту (пропсів) */}
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* вспливаючі повідомлення */}
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        // Default options for specific types
        success: {
          duration: 1000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  </>
);
