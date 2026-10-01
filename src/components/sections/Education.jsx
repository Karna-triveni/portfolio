import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Education</span>
          <h2 className="section__title" id="education-heading">Academic Background</h2>
        </div>

        <div className="edu__entry">
          <div className="edu__left">
            <span className="edu__period">2022 — 2026</span>
          </div>
          <div className="edu__right">
            <h3 className="edu__degree">B.Tech, Computer Science &amp; Engineering</h3>
            <p className="edu__college">K.S.R.M College of Engineering, JNTUA · Kadapa, Andhra Pradesh</p>
            <p className="edu__cgpa">CGPA: <strong>8.9 / 10</strong></p>

            <div className="edu__details">
              <div className="edu__detail-row">
                <dt className="edu__detail-label">Core Subjects</dt>
                <dd className="edu__detail-value">Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks</dd>
              </div>
              <div className="edu__detail-row">
                <dt className="edu__detail-label">Research</dt>
                <dd className="edu__detail-value">Led academic research on AI image classification using CNN + Vision Transformers — presented at a conference (Paper ID: CLICK1301)</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
