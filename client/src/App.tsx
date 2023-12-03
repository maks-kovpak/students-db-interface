import Header from './components/Header';
import Banner from './components/Banner';
import StudentsTable from './components/StudentsTable';

function App() {
  return (
    <>
      <Header />
      <Banner pageName="Home" message="Welcome to the main page!" />
      <StudentsTable />
    </>
  );
}

export default App;
