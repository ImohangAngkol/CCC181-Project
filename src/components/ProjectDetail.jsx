import { useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

/**
 * ProjectDetail.jsx (SkillDetail)
 * - Reads :id from the URL via useParams
 * - Finds skill from parent-provided array
 * - Allows status toggle and delete (calls callbacks from props)
 * - Navigates back to "/" after delete
 */

export default function ProjectDetail({ skills, onUpdateStatus, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find skill by id (memoize for efficiency)
  const skill = useMemo(
    () => skills.find((s) => s.id === Number(id)),
    [skills, id]
  );

  if (!skill) {
    return (
      <section>
        <h1 className="page-title">Skill Not Found</h1>
        <p className="muted">The skill you’re looking for may have been removed.</p>
        <Link to="/" className="btn">Back to List</Link>
      </section>
    );
  }

  const toggleStatus = () => {
    const next = skill.status === "Available" ? "Completed" : "Available";
    onUpdateStatus(skill.id, next);
  };

  const handleDelete = () => {
    onDelete(skill.id);
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1 className="page-title">{skill.title}</h1>
      <div className="detail">
        <div className="detail-row">
          <span className="label">Owner:</span>
          <span>{skill.skillOwner}</span>
        </div>
        <div className="detail-row">
          <span className="label">Status:</span>
          <span className={`badge ${skill.status === "Available" ? "badge-green" : "badge-gray"}`}>
            {skill.status}
          </span>
        </div>
        <div className="detail-row">
          <span className="label">Description:</span>
          <span>{skill.description}</span>
        </div>
      </div>

      <div className="detail-actions">
        <button className="btn btn-outline" onClick={toggleStatus}>
          Mark {skill.status === "Available" ? "Completed" : "Available"}
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <Link to="/" className="btn">Back to List</Link>
      </div>
    </section>
  );
}
