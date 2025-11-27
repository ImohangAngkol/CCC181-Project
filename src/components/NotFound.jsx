import { Link } from "react-router-dom";

/**
 * NotFound.jsx
 * - Catch-all route for undefined paths
 */

export default function NotFound() {
  return (
    <section>
      <h1 className="page-title">Page Not Found</h1>
      <p className="muted">We couldn’t find that page. Try going back to the skill list.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}
