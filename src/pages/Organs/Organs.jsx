import { useEffect, useState } from "react";
import "./Organs.css";
import { getSkills, postSwap } from "../../services/mockApi.js";
import Rating from "../../components/Rating/Rating.jsx";

/**
 * Organs page - sample content category.
 * Demonstrates filtered listing and posting.
 */
export default function Organs() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ offerSkill: "", seekSkill: "", user: "" });
  const [posting, setPosting] = useState(false);

  async function refresh() {
    const list = await getSkills({ category: "organs" });
    setSkills(list);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setPosting(true);
    try {
      const payload = {
        ...form,
        category: "organs",
      };
      await postSwap(payload);
      setForm({ offerSkill: "", seekSkill: "", user: "" });
      await refresh();
    } finally {
      setPosting(false);
    }
  }

  return (
    <main className="container">
      <section className="card">
        <h2>Organs</h2>
        <p className="muted">
          Share or learn skills related to organs—study techniques, care, and more.
        </p>
      </section>

      <section className="grid grid-3">
        {skills.map(s => (
          <article key={s.id} className="card">
            <h3>{s.user}</h3>
            <p>
              Offers: <strong>{s.offerSkill}</strong>
            </p>
            <p>
              Seeking: <strong>{s.seekSkill}</strong>
            </p>
            <Rating itemId={s.id} />
          </article>
        ))}
      </section>

      <section className="card form-section">
        <h3>Post a swap</h3>
        <form onSubmit={handleSubmit} className="swap-form">
          <div>
            <label htmlFor="user">Your name</label>
            <input
              id="user"
              value={form.user}
              onChange={e => setForm(f => ({ ...f, user: e.target.value }))}
              placeholder="e.g., Dana"
              required
            />
          </div>
          <div>
            <label htmlFor="offer">Skill you offer</label>
            <input
              id="offer"
              value={form.offerSkill}
              onChange={e => setForm(f => ({ ...f, offerSkill: e.target.value }))}
              placeholder="e.g., Anatomy flashcards coaching"
              required
            />
          </div>
          <div>
            <label htmlFor="seek">Skill you want to learn</label>
            <input
              id="seek"
              value={form.seekSkill}
              onChange={e => setForm(f => ({ ...f, seekSkill: e.target.value }))}
              placeholder="e.g., JavaScript basics"
              required
            />
          </div>
          <button className="button" disabled={posting}>
            {posting ? "Posting..." : "Post swap"}
          </button>
        </form>
      </section>
    </main>
  );
}
