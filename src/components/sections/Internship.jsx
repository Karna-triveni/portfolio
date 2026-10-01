import './Internship.css';

const AWS_SERVICES = [
  { name: 'EC2',    desc: 'Virtual compute instances' },
  { name: 'S3',     desc: 'Object storage' },
  { name: 'Lambda', desc: 'Serverless functions' },
  { name: 'IAM',    desc: 'Identity & access management' },
  { name: 'RDS',    desc: 'Managed relational database' },
  { name: 'VPC',    desc: 'Virtual networking' },
];

export default function Internship() {
  return (
    <section id="internship" className="section section--alt internship" aria-labelledby="internship-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Experience</span>
          <h2 className="section__title" id="internship-heading">Internship</h2>
        </div>

        <div className="exp__entry">
          <div className="exp__left">
            <span className="exp__period">May 2025 — Jul 2025</span>
          </div>
          <div className="exp__right">
            <h3 className="exp__role">AWS Cloud Technology Intern</h3>
            <p className="exp__company">SaRaj InnoTech Services Pvt. Ltd.</p>
            <p className="exp__desc">
              Completed an introductory AWS Cloud Technology internship, gaining
              foundational exposure to core AWS services and cloud infrastructure
              concepts. This was a guided introductory programme — not advanced
              professional AWS experience.
            </p>

            <div className="exp__services">
              <p className="exp__services-label">Services covered</p>
              <div className="exp__service-grid">
                {AWS_SERVICES.map(s => (
                  <div key={s.name} className="exp__service">
                    <span className="exp__service-name">{s.name}</span>
                    <span className="exp__service-desc">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
