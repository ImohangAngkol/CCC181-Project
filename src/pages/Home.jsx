import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h1>Trade your skill to learn another.</h1>
      <p>On SkillSwap, you pay with what you know and earn what you want to learn.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <Link className="btn btn-primary" to="/signup">Get started</Link>
        <Link className="btn" to="/skills">Browse skills</Link>
      </div>

      <div style={{ marginTop: 36 }} className="grid">
        <div className="card">
          <h3 style={{ color: 'var(--color-blue)' }}>Fair exchange</h3>
          <p>Time-for-time swaps. Teach an hour, learn an hour.</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--color-blue)' }}>Community-first</h3>
          <p>Grow alongside people who value curiosity and contribution.</p>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--color-blue)' }}>Real outcomes</h3>
          <p>Build portfolios, gain mentors, and expand your horizons.</p>
        </div>
      </div>
    </section>
  )
}
