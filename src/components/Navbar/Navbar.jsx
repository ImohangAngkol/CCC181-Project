import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./Navbar.css";

/**
 * Responsive navbar with brand and primary links.
 */
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          Skill-Swap
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/organs" className={({ isActive }) => (isActive ? "active" : "")}>
            Organs
          </NavLink>
          <NavLink to="/parts" className={({ isActive }) => (isActive ? "active" : "")}>
            Parts
          </NavLink>
          <NavLink to="/developer" className={({ isActive }) => (isActive ? "active" : "")}>
            Developer
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
