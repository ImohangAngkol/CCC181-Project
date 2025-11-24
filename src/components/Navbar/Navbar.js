import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-left">
        <Link to="/" className="brand">Skill-Swap</Link>
        <ul className="nav-links">
          <li className={pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={pathname === '/organs' ? 'active' : ''}><Link to="/organs">Organs & Parts</Link></li>
          <li className={pathname === '/login' ? 'active' : ''}><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
