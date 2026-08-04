import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-nav/95 backdrop-blur-md border-b border-primary/30 shadow-lg">
      <div className="w-full px-4 sm:px-8 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <span className="text-lg sm:text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            Marouane Laamiri
          </span>
        </Link>
        <ul className="flex gap-4 sm:gap-10 text-sm sm:text-base font-medium text-gray-300">
          <li>
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-bold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-bold' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`hover:text-primary transition-colors ${isActive('/projects') ? 'text-primary font-bold' : ''}`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}