import App from './App.tsx';
import Banner from './components/Banner.tsx';
import CreateStudentForm from './components/CreateStudentForm.tsx';
import StudentsTable from './components/StudentsTable.tsx';
import CreateGroupForm from './components/CreateGroupForm.tsx';
import GroupsTable from './components/GroupsTable.tsx';

const routes = [
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
];

export default routes;
