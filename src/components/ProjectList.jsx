import { Link } from "react-router-dom";

/**
 * ProjectList.jsx (SkillList)
 * - Receives skills array and callbacks via props from App
 * - Renders list; each item links to /skill/:id (client-side navigation)
 * - Includes a status toggle button and delete button
 */

export default function ProjectList({ skills, onUpdateStatus, onDelete }) {
  const toggleStatus = (skill) => {
    const next = skill.status === "Available" ? "Completed" : "Available";
    onUpdateStatus(skill.id, next);
  };

  return (
    <section>
      <h1 className="page-title">Skill List</h1>
      <div className="grid">
        {skills.length === 0 && (
          <p className="muted">No skills yet. Add one to get the exchange started.</p>
        )}

        {skills.map((skill) => (
          <article key={skill.id} className="card">
            <header className="card-header">
              <h2 className="card-title">
                <Link to={`/skill/${skill.id}`} className="link">
                  {skill.title}
                </Link>
              </h2>
              <span
                className={`badge ${skill.status === "Available" ? "badge-green" : "badge-gray"}`}
              >
                {skill.status}
              </span>
            </header>

            <p className="card-desc">{skill.description}</p>
            <p className="card-owner">Owner: {skill.skillOwner}</p>

            <div className="card-actions">
              <button className="btn btn-outline" onClick={() => toggleStatus(skill)}>
                Mark {skill.status === "Available" ? "Completed" : "Available"}
              </button>
              <button className="btn btn-danger" onClick={() => onDelete(skill.id)}>
                Delete
              </button>
              <Link to={`/skill/${skill.id}`} className="btn">
                View Detail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
