export default function SkillCard({ title, description, level = 'Beginner', color = 'var(--color-blue)' }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{title}</h3>
        <span
          style={{
            fontSize: 12,
            color: 'var(--muted)',
            padding: '4px 8px',
            borderRadius: 6,
            border: '1px solid var(--border)'
          }}
        >
          {level}
        </span>
      </div>
      <p>{description}</p>
      <div style={{ height: 6, borderRadius: 6, marginTop: 12, background: color, opacity: 0.25 }} />
    </div>
  )
}
