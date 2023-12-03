import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import StudentsProvider from './providers/StudentsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </React.StrictMode>
);
