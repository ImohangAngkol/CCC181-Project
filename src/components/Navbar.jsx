import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout, toggleTheme, theme } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="/logo.svg" alt="SkillSwap Logo" width="28" height="28" />
        <Link to="/" className="brand">SkillSwap</Link>
        <NavLink to="/" style={({isActive}) => ({ fontWeight: isActive ? '700' : '500' })}>Home</NavLink>
        <NavLink to="/skills" style={({isActive}) => ({ fontWeight: isActive ? '700' : '500' })}>Skills</NavLink>
        <NavLink to="/developer" style={({isActive}) => ({ fontWeight: isActive ? '700' : '500' })}>Developers</NavLink>
      </div>

      <div className="nav-right">
        <button className="btn" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        {user ? (
          <>
            <span style={{ color: 'var(--muted)' }}>Hi, {user.name}</span>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">Login</NavLink>
            <NavLink to="/signup" className="btn btn-primary">Sign up</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
