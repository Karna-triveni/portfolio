import './Skills.css';

const SKILL_GROUPS = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'JDBC', 'REST APIs', 'Microservices', 'Spring Cloud Eureka'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'WordPress Basics'],
  },
  {
    id: 'database',
    label: 'Database',
    items: ['MySQL', 'SQL'],
  },
  {
    id: 'cs',
    label: 'CS Fundamentals',
    items: ['OOP', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'AWS EC2', 'AWS S3', 'AWS Lambda'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Technical Skills</span>
          <h2 className="section__title" id="skills-heading">Skills</h2>
        </div>

        <div className="skills__table">
          {SKILL_GROUPS.map(group => (
            <div key={group.id} className="skills__row">
              <dt className="skills__label">{group.label}</dt>
              <dd className="skills__items">
                {group.items.map((item, i) => (
                  <span key={item}>
                    {item}{i < group.items.length - 1 && <span className="skills__sep" aria-hidden="true"> · </span>}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
