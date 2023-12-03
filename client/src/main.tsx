import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentsProvider from './providers/StudentsProvider.tsx';
import GroupsProvider from './providers/GroupsProvider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StudentsProvider>
      <GroupsProvider>
        <RouterProvider router={router} />
      </GroupsProvider>
    </StudentsProvider>
  </React.StrictMode>
);
