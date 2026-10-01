import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'nptel',
    title: 'Internet of Things',
    issuer: 'NPTEL',
    grade: 'Elite',
    desc: 'Completed the NPTEL IoT course with Elite grade, covering IoT architectures, protocols, and embedded systems fundamentals.',
  },
  {
    id: 'salesforce',
    title: 'AgentBlazer Champion Program',
    issuer: 'Salesforce Developer',
    grade: 'Certified',
    desc: 'Completed the Salesforce AgentBlazer Champion program covering Salesforce platform fundamentals and developer tools.',
  },
  {
    id: 'prompt',
    title: 'Advanced Prompt Engineering',
    issuer: 'Simplilearn SkillUp',
    grade: 'Certified',
    desc: 'Completed advanced prompt engineering training covering AI interaction techniques, chain-of-thought prompting, and LLM best practices.',
  },
];

const TRAINING = {
  title: 'Java Full Stack Development',
  subtitle: 'Spring Boot & REST APIs',
  desc: 'Completed comprehensive training in Java Full Stack Development focused on building back-end services with Spring Boot, designing RESTful APIs, and integrating front-end components with React.js.',
  topics: ['Java OOP', 'Spring Boot', 'REST API Design', 'Spring Data JPA', 'MySQL', 'React.js Basics'],
};

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications" aria-labelledby="certs-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Certifications &amp; Training</span>
          <h2 className="section__title" id="certs-heading">Credentials</h2>
        </div>

        {/* Certifications table */}
        <div className="certs__list">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.id} className="certs__item">
              <div className="certs__item-left">
                <span className="certs__issuer">{cert.issuer}</span>
                <span className="certs__grade">{cert.grade}</span>
              </div>
              <div className="certs__item-right">
                <h4 className="certs__title">{cert.title}</h4>
                <p className="certs__desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Training */}
        <div className="training">
          <h3 className="training__heading">Training</h3>
          <div className="training__entry">
            <div className="training__left">
              <span className="training__issuer">Training Programme</span>
            </div>
            <div className="training__right">
              <h4 className="training__title">{TRAINING.title}</h4>
              <p className="training__subtitle">{TRAINING.subtitle}</p>
              <p className="training__desc">{TRAINING.desc}</p>
              <div className="training__topics">
                {TRAINING.topics.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
