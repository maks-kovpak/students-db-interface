import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentsProvider from './providers/StudentsProvider.tsx';
import GroupsProvider from './providers/GroupsProvider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import CreateStudentForm from './components/CreateStudentForm.tsx';
import StudentsTable from './components/StudentsTable.tsx';
import CreateGroupForm from './components/CreateGroupForm.tsx';
import GroupsTable from './components/GroupsTable.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Banner pageName="Home" message="Welcome to the main page!" />,
      },
      {
        path: '/students',
        element: (
          <>
            <Banner pageName="Students" message="Welcome to the students page!" createForm={<CreateStudentForm />} />
            <StudentsTable />
          </>
        ),
      },
      {
        path: '/groups',
        element: (
          <>
            <Banner pageName="Groups" message="Welcome to the groups page!" createForm={<CreateGroupForm />} />
            <GroupsTable />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StudentsProvider>
      <GroupsProvider>
        <RouterProvider router={router} />
      </GroupsProvider>
    </StudentsProvider>
  </React.StrictMode>
);
