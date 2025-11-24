import React, { useState } from 'react';
import './Login.css';
import { login, logout } from '../../services/mockApi';

export default function Login() {
  const [email, setEmail] = useState('demo@skillswap.com');
  const [password, setPassword] = useState('password');
  const [status, setStatus] = useState('');
  const authUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('authUser'));
    } catch {
      return null;
    }
  })();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Signing in…');
    try {
      const res = await login(email, password);
      setStatus(`Welcome, ${res.user.name}!`);
    } catch (err) {
      setStatus(err.message || 'Login failed.');
    }
  };

  const handleLogout = async () => {
    setStatus('Signing out…');
    await logout();
    setStatus('Signed out.');
  };

  return (
    <section className="login" aria-labelledby="login-title">
      <h2 id="login-title">Login</h2>
      <p className="muted">Frontend-only login (mock). Use the demo credentials.</p>

      {!authUser ? (
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="demo@skillswap.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </label>

          <button type="submit" className="btn primary">Login</button>
          <div className="status">{status}</div>
        </form>
      ) : (
        <div className="logged-in">
          <p>You are logged in as <strong>{authUser.name}</strong>.</p>
          <button className="btn ghost" onClick={handleLogout}>Logout</button>
          <div className="status">{status}</div>
        </div>
      )}
    </section>
  );
}
