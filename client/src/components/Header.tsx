function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-200 rounded-lg mb-5">
      <a href="/" className="text-xl font-medium hover:text-blue-700 transition-colors">
        Home
      </a>
      <a href="/students" className="text-xl font-medium hover:text-blue-700 transition-colors">
        Students
      </a>
    </header>
  );
}

export default Header;
