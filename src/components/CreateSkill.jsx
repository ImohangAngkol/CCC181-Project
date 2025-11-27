import { useState } from "react";

/**
 * CreateSkill.jsx
 * - Controlled form with local component state (useState)
 * - On submit, calls onCreate(newSkill) passed from App
 * - Navigating is handled by router links elsewhere
 */

export default function CreateSkill({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skillOwner, setSkillOwner] = useState("");
  const [status, setStatus] = useState("Available");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !skillOwner.trim()) return;

    onCreate({ title, description, skillOwner, status });

    // Reset form
    setTitle("");
    setDescription("");
    setSkillOwner("");
    setStatus("Available");
  };

  return (
    <section>
      <h1 className="page-title">Create Skill</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Teach Muay Thai"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="One-hour training session..."
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="owner">Skill Owner</label>
          <input
            id="owner"
            value={skillOwner}
            onChange={(e) => setSkillOwner(e.target.value)}
            placeholder="Andrew"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Available">Available</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="btn" type="submit">Add Skill</button>
        </div>
      </form>
    </section>
  );
}
