import { useEffect, useState } from "react";
import "./Home.css";
import { getCategories, getSkills } from "../../services/mockApi.js";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating.jsx";

/**
 * Home page - highlights categories and recent skill swaps.
 */
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function load() {
      const cats = await getCategories();
      setCategories(cats);
      const list = await getSkills();
      setSkills(list.slice(0, 6)); // show recent sample
    }
    load();
  }, []);

  return (
    <main className="container">
      <section className="hero card">
        <h1>Skill-Swap</h1>
        <p className="lead">
          Pay with your skill to earn another skill. Find someone who needs what you offer and learn what you seek.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="button">Get Started</Link>
          <Link to="/developer" className="button secondary">Meet the Developer</Link>
        </div>
      </section>

      <section className="categories">
        <div className="section-head">
          <h2>Categories</h2>
          <p className="muted">Explore by topic to make better matches.</p>
        </div>
        <div className="grid grid-3">
          {categories.map(c => (
            <article key={c.id} className="card category-card">
              <h3>{c.name}</h3>
              <p className="muted">{c.description}</p>
              <div className="category-actions">
                <Link to={`/${c.id}`} className="button">Browse {c.name}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="recent">
        <div className="section-head">
          <h2>Recent swaps</h2>
          <p className="muted">Fresh postings from the community.</p>
        </div>
        <div className="grid grid-3">
          {skills.map(s => (
            <article key={s.id} className="card swap-card">
              <h3>
                {s.user} offers <span className="highlight">{s.offerSkill}</span>
              </h3>
              <p>
                Seeking: <strong>{s.seekSkill}</strong>
              </p>
              <p className="muted">Category: {s.category}</p>
              <Rating itemId={s.id} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
