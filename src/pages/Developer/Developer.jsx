import "./Developer.css";
import "../../styles/images/david.jpg";

export default function Developer() {
  return (
    <main className="container">
      <section className="card dev-card">
        <div className="dev-grid">
          <div className="dev-photo-wrap">
            <img
              src="../../styles/images/david.jpg"
              
              className="dev-photo"
            />
          </div>
          <div className="dev-content">
            <h2>Developer</h2>
            <p className="muted">
              Hi, I’m Andrew — solo developer and project owner behind Skill-Swap.
            </p>
            <p>
              I specialize in modern frontend architecture (React/Vite) with a focus on clean UI/UX,
              maintainable code, and thoughtful developer experience. I’m expanding into backend and
              browser-based game development, integrating networking concepts and hands-on troubleshooting.
            </p>
            <p>
              Skill-Swap is built to empower communities: trade skills, support each other’s growth,
              and make learning accessible. I’m always iterating—if you have ideas, let’s improve it together.
            </p>
            <div className="dev-meta">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">TypeScript-ready</span>
              <span className="tag">UI/UX</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
