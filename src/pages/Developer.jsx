export default function Developer() {
  return (
    <section className="center" style={{ gap: 16, paddingTop: 24 }}>
      <div className="card" style={{ maxWidth: 640, width: '100%' }}>
        <h2 style={{ marginTop: 0 }}>Developers</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* >>> INSERT YOUR PICTURE HERE <<< */}
          {/* Example:
              <img src="/assets/andrew.jpg" alt="Andrew Daniel C. Corpuz" width="96" height="96" style={{ borderRadius: '50%', border: '2px solid var(--color-blue)' }} />
             Ensure the file is placed at: src/assets/andrew.jpg
          */}
          <div>
            <h3 style={{ margin: 0 }}>Andrew Daniel C. Corpuz</h3>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
