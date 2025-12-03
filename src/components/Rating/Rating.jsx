import { useEffect, useMemo, useState } from "react";
import "./Rating.css";
import { getRatings, postRating } from "../../services/mockApi.js";
import { StarIcon } from "@heroicons/react/24/solid";

/**
 * Rating component: 0–5 stars.
 * Props:
 * - itemId: string (the entity to rate)
 */
export default function Rating({ itemId }) {
  const [avg, setAvg] = useState(0);
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const stars = useMemo(() => [0, 1, 2, 3, 4], []);

  async function refresh() {
    const items = await getRatings(itemId);
    const c = items.length;
    const a = c ? items.reduce((acc, r) => acc + r.stars, 0) / c : 0;
    setCount(c);
    setAvg(Math.round(a * 10) / 10);
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  async function handleRate(starValue) {
    setSubmitting(true);
    try {
      await postRating(itemId, starValue + 1);
      await refresh();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rating">
      <div className="stars" role="radiogroup" aria-label="Rate this item">
        {stars.map(i => {
          const filled = (hover ?? avg - 1) >= i;
          return (
            <button
              key={i}
              className={`star-btn ${filled ? "filled" : ""}`}
              aria-label={`Rate ${i + 1} star${i === 0 ? "" : "s"}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => handleRate(i)}
              disabled={submitting}
            >
              <StarIcon className="star-icon" />
            </button>
          );
        })}
      </div>
      <div className="rating-meta">
        <span className="avg">{avg.toFixed(1)}</span>
        <span className="count">({count} ratings)</span>
      </div>
    </div>
  );
}
