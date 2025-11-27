import { Link, NavLink } from "react-router-dom";

/**
 * NavBar.jsx
 * - Uses NavLink for client-side navigation (no refresh)
 * - Receives theme state via props and toggles it
 * - Displays simple app stats from parent props
 */

export default function NavBar({ theme, toggleTheme, stats }) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Skill-Swap
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Skills
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? "active" : "")}>
          Create
        </NavLink>
        <NavLink to="/developer" className={({ isActive }) => (isActive ? "active" : "")}>
          Developer
        </NavLink>
      </nav>

      <div className="nav-right">
        <div className="stats">
          <span>Available: {stats.available}</span>
          <span>Completed: {stats.completed}</span>
          <span>Total: {stats.total}</span>
        </div>
        <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
}
