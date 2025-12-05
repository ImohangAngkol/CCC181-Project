import SkillCard from '../components/SkillCard.jsx'

const sampleSkills = [
  { title: 'React Fundamentals', description: 'Hooks, components, state, and routing.' },
  { title: 'UI/UX Basics', description: 'Wireframes, accessibility, color theory.' },
  { title: 'Node.js & Express', description: 'REST APIs, middleware, routing.' },
  { title: 'MongoDB & Mongoose', description: 'Schemas, queries, relationships.' },
  { title: 'TypeScript Essentials', description: 'Types, interfaces, generics.' },
  { title: 'Git & Collaboration', description: 'Branching, PRs, code reviews.' },
  { title: 'CSS Architecture', description: 'BEM, utility classes, responsive layouts.' },
  { title: 'Data Structures', description: 'Arrays, maps, sets, algorithmic thinking.' },
  { title: 'Public Speaking', description: 'Structure, delivery, presence.' },
  { title: 'Graphic Design', description: 'Composition, typography, branding.' },
  { title: 'SQL Basics', description: 'Joins, indexes, normalization.' },
  { title: 'Docker Intro', description: 'Containers, images, volumes.' },
]

export default function Skills() {
  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Explore skills to trade</h2>
      <p style={{ color: 'var(--muted)' }}>Offer what you’re great at, learn what you’ve always wanted.</p>
      <div className="grid" style={{ marginTop: 16 }}>
        {sampleSkills.slice(0, 12).map((s, idx) => (
          <SkillCard
            key={idx}
            title={s.title}
            description={s.description}
            level={idx % 3 === 0 ? 'Beginner' : idx % 3 === 1 ? 'Intermediate' : 'Advanced'}
            color="var(--color-blue)"
          />
        ))}
      </div>
    </section>
  )
}
