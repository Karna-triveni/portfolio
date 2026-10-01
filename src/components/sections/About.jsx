import './About.css';

const FACTS = [
  { label: 'Degree',       value: 'B.Tech, Computer Science & Engineering' },
  { label: 'Graduation',   value: '2026' },
  { label: 'CGPA',         value: '8.9 / 10' },
  { label: 'Location',     value: 'Hyderabad, India' },
  { label: 'Role',         value: 'Java Full Stack Developer' },
  { label: 'Looking For',  value: 'Entry-level / Fresher roles' },
];

export default function About() {
  return (
    <section id="about" className="section section--alt about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">About</span>
          <h2 className="section__title" id="about-heading">Triveni Karna</h2>
        </div>

        <div className="about__inner">
          {/* Left — bio */}
          <div className="about__bio">
            <p>
              I am a 2026 Computer Science Engineering graduate with a CGPA of 8.9,
              specialising in Java Full Stack Development. I have built back-end
              services using Java, Spring Boot, Spring Data JPA and REST APIs, worked
              with MySQL for data persistence, and developed front-end interfaces
              using React.js, JavaScript, HTML and CSS.
            </p>
            <p>
              I completed an AWS Cloud Technology internship at SaRaj InnoTech
              Services Pvt. Ltd., gaining introductory exposure to EC2, S3, Lambda,
              IAM, RDS and VPC. I also led an academic research project on AI image
              classification that was presented at a conference.
            </p>
            <p>
              I am actively seeking an entry-level Java Full Stack Developer role
              where I can apply my skills and grow with a team.
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
              <a
                href="/Triveni_Karna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn--sm"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right — clean fact table */}
          <div className="about__facts" aria-label="Quick facts">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="about__fact">
                <dt className="about__fact-label">{label}</dt>
                <dd className="about__fact-value">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
