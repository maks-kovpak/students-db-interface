import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-200 rounded-lg mb-5">
      <NavLink to="/" className="text-xl font-bold hover:text-blue-700 transition-colors">
        Home
      </NavLink>

      <div className="flex gap-4">
        <NavLink to="/students" className="text-xl font-medium hover:text-blue-700 transition-colors">
          Students
        </NavLink>

        <NavLink to="/groups" className="text-xl font-medium hover:text-blue-700 transition-colors">
          Groups
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
