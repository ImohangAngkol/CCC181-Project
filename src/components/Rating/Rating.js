import React, { useState } from 'react';
import './Rating.css';

/**
 * Props:
 * - value: number (average rating)
 * - onRate: function(rating: number) => Promise<void> | void
 * - count: number (optional rating count)
 * - size: 'sm' | 'md' | 'lg' (default 'md')
 */
export default function Rating({ value = 0, onRate, count, size = 'md' }) {
  const [hover, setHover] = useState(null);
  const [busy, setBusy] = useState(false);
  const stars = [0, 1, 2, 3, 4];

  const handleClick = async (idx) => {
    if (!onRate || busy) return;
    setBusy(true);
    try {
      await onRate(idx + 1);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={`rating ${size}`} aria-label={`Average rating ${value} out of 5`}>
      {stars.map((s, idx) => {
        const filled = (hover !== null ? idx <= hover : idx < Math.round(value));
        return (
          <button
            key={idx}
            className={`star ${filled ? 'filled' : ''}`}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(idx)}
            aria-label={`Rate ${idx + 1} star${idx === 0 ? '' : 's'}`}
            disabled={busy}
            type="button"
          >
            ★
          </button>
        );
      })}
      <span className="rating-text">
        {value.toFixed(1)} {typeof count === 'number' ? `(${count})` : ''}
      </span>
    </div>
  );
}
