import './About.css';

const INFO_CARDS = [
  { icon: '🎓', title: 'Degree',      body: 'B.Tech Computer Science & Engineering' },
  { icon: '📅', title: 'Graduating',  body: '2026' },
  { icon: '📊', title: 'CGPA',        body: '8.9' },
  { icon: '📍', title: 'Location',    body: 'Hyderabad, India' },
  { icon: '💻', title: 'Interests',   body: 'Web Dev · Java Full Stack' },
  { icon: '🔍', title: 'Looking For', body: 'Entry-level / Fresher roles' },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">About Me</span>
          <h2 className="section__title" id="about-heading">Who I Am</h2>
        </div>

        <div className="about__inner">
          {/* Left — bio */}
          <div className="about__text">
            <div className="about__avatar" aria-hidden="true">TK</div>

            <p>
              I am a 2026 Computer Science Engineering graduate with a CGPA of 8.9.
              I have been learning Java Full Stack Development and have knowledge of Java,
              Spring Boot, REST APIs, MySQL, HTML, CSS, JavaScript and React.
            </p>
            <p>
              I am currently looking for an entry-level opportunity where I can apply
              my skills and gain practical industry experience.
            </p>

            <div className="about__links">
              <a
                href="https://www.linkedin.com/in/triveni-karna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Karna-triveni"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="about__cards">
            {INFO_CARDS.map(({ icon, title, body }) => (
              <article key={title} className="about__card card">
                <span className="about__card-icon" aria-hidden="true">{icon}</span>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
