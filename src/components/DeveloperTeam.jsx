/**
 * DeveloperTeam.jsx
 * - Single-member developer page (you!)
 * - Simple profile with links you can customize
 */

export default function DeveloperTeam() {
  return (
    <section>
      <h1 className="page-title">Developer Team</h1>
      <div className="profile-card">
        <img
          className="avatar"
          src="https://api.dicebear.com/9.x/identicon/svg?seed=Andrew"
          alt="Developer avatar"
        />
        <div>
          <h2>Andrew</h2>
          <p className="muted">
            Solo developer and project owner of Skill-Swap. Building community through skill exchange.
          </p>
          <ul className="list">
            <li><strong>Role:</strong> Frontend Developer</li>
            <li><strong>Stack:</strong> React, Vite, CSS, React Router</li>
            <li><strong>Focus:</strong> Modern UI/UX, clean components, interactive features</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
