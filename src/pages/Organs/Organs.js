import React, { useEffect, useState } from 'react';
import './Organs.css';
import { getOrgans, rateOrgan } from '../../services/mockApi';
import Rating from '../../components/Rating/Rating';

export default function Organs() {
  const [items, setItems] = useState([]);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    getOrgans()
      .then(data => mounted && setItems(data))
      .catch(() => setError('Failed to load organs.'));
    return () => { mounted = false; };
  }, []);

  const handleRate = async (id, r) => {
    setBusyId(id);
    setError('');
    try {
      const updated = await rateOrgan(id, r);
      setItems(prev => prev.map(i => (i.id === id ? updated : i)));
    } catch (e) {
      setError(e.message || 'Rating failed.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <section className="organs" aria-labelledby="organs-title">
      <div className="organs-header">
        <h2 id="organs-title">Organs & Parts</h2>
        <p className="muted">Browse learning exchange topics and rate them.</p>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="organs-grid">
        {items.map(item => (
          <article key={item.id} className="organ-card">
            <header className="card-header">
              <h3>{item.name}</h3>
              <span className="badge">{item.category}</span>
            </header>

            <p className="desc">{item.description}</p>

            <section className="parts">
              <h4>Parts</h4>
              <ul>
                {item.parts.map(p => <li key={p}>{p}</li>)}
              </ul>
            </section>

            <section className="rate-row">
              <Rating
                value={item.rating}
                count={item.ratingCount}
                onRate={(r) => handleRate(item.id, r)}
              />
              {busyId === item.id && <span className="saving">Saving…</span>}
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}
