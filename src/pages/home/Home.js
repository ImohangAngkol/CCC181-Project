import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home" aria-labelledby="home-title">
      <div className="home-hero">
        <h1 id="home-title">Skill-Swap</h1>
        <p className="subtitle">
          Trade skills, not money. Learn and teach within a community of curious minds.
        </p>
        <div className="cta-row">
          <Link to="/organs" className="btn primary">Explore Skills and Parts</Link>
          <Link to="/login" className="btn ghost">Login</Link>
        </div>
      </div>

      <section className="home-sections">
        <article className="card">
          <h3>Organs</h3>
          <p>Structured topics like Music, Singing, Dancing — each with parts to focus your learning exchange.</p>
          <Link to="/organs" className="link">Browse Skills →</Link>
        </article>
        <article className="card">
          <h3>Parts</h3>
          <p>Dive into detailed parts (Yessir) to teach or request specific lessons.</p>
          <Link to="/organs" className="link">See Parts →</Link>
        </article>
        <article className="card">
          <h3>Rate & Review</h3>
          <p>Rate topics from 0–5 stars so the best lessons rise to the top.</p>
          <Link to="/organs" className="link">Start rating →</Link>
        </article>
      </section>
    </section>
  );
}
