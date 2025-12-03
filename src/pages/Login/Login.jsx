import { useState } from "react";
import "./Login.css";

/**
 * Login page (frontend only)
 * No real auth; just a mock form and client-side UX.
 */
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Fake delay as if calling an auth service
    await new Promise(res => setTimeout(res, 600));
    setLoading(false);
    setMessage("Logged in (mock). You can now post swaps and rate items.");
  }

  return (
    <main className="container">
      <section className="card login-card">
        <h2>Login</h2>
        <p className="muted">Frontend-only mock login.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="pwd">Password</label>
            <input
              id="pwd"
              type="password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              placeholder="••••••••"
              required
            />
          </div>
          <button className="button" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {message && <p className="success">{message}</p>}
      </section>
    </main>
  );
}
