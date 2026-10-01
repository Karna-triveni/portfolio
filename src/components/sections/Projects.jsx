import './Projects.css';

const PROJECTS = [
  {
    id: 'pocketspace',
    title: 'PocketSpace',
    subtitle: 'Temporary Multi-Device Workspace',
    type: 'Personal Project',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Spring Cloud Eureka'],
    description:
      'A session-based workspace that can be opened simultaneously on multiple devices using a shared session code. Designed around a Java Spring Boot back end with a full REST API layer, MySQL persistence via Spring Data JPA and Hibernate, and Eureka-based service discovery.',
    features: [
      'REST APIs for creating and fetching sessions',
      'Validation for invalid session codes',
      'Duplicate session-code prevention',
      'Expired and active session detection',
      'MySQL persistence with Spring Data JPA and Hibernate',
      'Eureka server and service discovery',
    ],
    github: 'https://github.com/Karna-triveni',
    demo: null,
  },
  {
    id: 'ai-images',
    title: 'AI-Generated Image Classification',
    subtitle: 'Advanced Classification Through Vision Transformers — Academic Research',
    type: 'Team Lead · Academic Research',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'Vision Transformer', 'NumPy', 'PIL', 'Streamlit'],
    description:
      'Led a team that designed and trained a hybrid CNN + Vision Transformer model for detecting and classifying AI-generated and manipulated images. Achieved 94.6% best accuracy. Applied Grad-CAM for explainability. Co-authored the research paper (Paper ID: CLICK1301), presented findings at an academic conference, and developed a Streamlit demo application.',
    features: [
      'Hybrid CNN + Vision Transformer architecture',
      'Best classification accuracy: 94.6%',
      'Grad-CAM for visual explainability',
      'Research paper co-authored — Paper ID: CLICK1301',
      'Presented at academic conference',
      'Streamlit demonstration application',
    ],
    github: null,
    demo: null,
  },
];

function Project({ project, index }) {
  return (
    <article className="project" aria-label={project.title}>
      <div className="project__meta">
        <span className="project__index">0{index + 1}</span>
        <span className="project__type">{project.type}</span>
      </div>

      <div className="project__body">
        <header className="project__header">
          <h3 className="project__title">{project.title}</h3>
          <p className="project__subtitle">{project.subtitle}</p>
        </header>

        <p className="project__stack">
          {project.stack.join(' · ')}
        </p>

        <p className="project__desc">{project.description}</p>

        <ul className="feature-list">
          {project.features.map(f => <li key={f}>{f}</li>)}
        </ul>

        {(project.github || project.demo) && (
          <div className="project__actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
                aria-label={`${project.title} on GitHub`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                Live Demo
              </a>
            )}
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
        <div className="section__header">
          <span className="section__eyebrow">Projects</span>
          <h2 className="section__title" id="projects-heading">What I&apos;ve Built</h2>
          <p className="section__subtitle">
            Personal and academic projects demonstrating Java back-end and full-stack development skills.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <Project key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
