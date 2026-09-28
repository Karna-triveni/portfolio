import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'HTML',       icon: '🌐' },
      { name: 'CSS',        icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React.js',   icon: '⚛️' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java',        icon: '☕' },
      { name: 'Spring Boot', icon: '🌱' },
      { name: 'REST APIs',   icon: '🔗' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'SQL',   icon: '📋' },
    ],
  },
];

const EXPLORING = [
  { name: 'WordPress', icon: '📝' },
  { name: 'Shopify',   icon: '🛍️' },
];

function SkillChip({ name, icon, exploring = false }) {
  return (
    <div className={`skill-chip${exploring ? ' skill-chip--exploring' : ''}`}>
      <span className="skill-chip__icon" aria-hidden="true">{icon}</span>
      <span className="skill-chip__name">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section__header section__header--center">
          <span className="section__eyebrow">Skills</span>
          <h2 className="section__title" id="skills-heading">Technical Skills</h2>
          <p className="section__subtitle">
            Technologies I have studied and applied in my coursework and personal projects.
          </p>
        </div>

        <div className="skills__groups">
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className="skills__group">
              <div className="skills__category-label">
                <span className="skills__category-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skills__category-title">{group.category}</h3>
              </div>
              <div className="skills__grid">
                {group.skills.map(skill => (
                  <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}

          {/* Currently Exploring */}
          <div className="skills__group">
            <div className="skills__category-label">
              <span className="skills__category-icon" aria-hidden="true">🔭</span>
              <h3 className="skills__category-title">Currently Exploring</h3>
            </div>
            <div className="skills__grid">
              {EXPLORING.map(skill => (
                <SkillChip key={skill.name} name={skill.name} icon={skill.icon} exploring />
              ))}
            </div>
            <p className="skills__exploring-note">
              I am in the early stages of learning these platforms. Not professional experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
