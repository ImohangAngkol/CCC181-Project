import "./Footer.css";

/**
 * Simple site footer with attribution.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          <strong>Skill-Swap</strong> — pay with your skill to earn another skill.
        </p>
        <p className="muted">© {year} Skill-Swap. All rights reserved.</p>
      </div>
    </footer>
  );
}
