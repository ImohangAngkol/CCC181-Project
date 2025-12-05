import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = (e) => {
    e.preventDefault()
    const res = login(email, password)
    if (res.ok) navigate('/skills')
    else setError(res.error || 'Login failed')
  }

  return (
    <section className="center" style={{ paddingTop: 24 }}>
      <div className="card" style={{ width: '100%', maxWidth: 480 }}>
        <h2 style={{ marginTop: 0 }}>Login</h2>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Email
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          {error && <div style={{ color: 'var(--color-blue)' }}>{error}</div>}

          <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <p style={{ color: 'var(--muted)' }}>
          No account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </section>
  )
}
