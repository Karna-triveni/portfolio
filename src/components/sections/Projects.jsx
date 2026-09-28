import './Projects.css';

const PROJECTS = [
  {
    id: 'codeboard',
    title: 'CodeBoard',
    icon: '💻',
    type: 'Personal Project',
    description:
      'A session-based digital workspace that I am currently developing using React, Java, Spring Boot and MySQL.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    github: null,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    icon: '🗂️',
    type: 'Frontend Project',
    description:
      'A personal website created to practice HTML, CSS, JavaScript and React and to showcase my projects and learning.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Vite'],
    github: null,
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card card" aria-label={project.title}>
      <div className="project-card__accent" aria-hidden="true"></div>

      <div className="project-card__body">
        <header className="project-card__header">
          <span className="project-card__icon" aria-hidden="true">{project.icon}</span>
          <span className="project-card__type">{project.type}</span>
        </header>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__desc">{project.description}</p>

        <div className="tag-list project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {project.github && (
          <div className="project-card__actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section__header section__header--center">
          <span className="section__eyebrow">Projects</span>
          <h2 className="section__title" id="projects-heading">What I&apos;ve Built</h2>
          <p className="section__subtitle">
            Projects I have worked on for learning and practice.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
