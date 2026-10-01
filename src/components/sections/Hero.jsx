import './Hero.css';

export default function Hero() {
  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container hero__inner">

        {/* ── Left ── */}
        <div className="hero__content">
          <p className="hero__eyebrow">Java Full Stack Developer</p>

          <h1 className="hero__name">Triveni Karna</h1>

          <p className="hero__meta">
            Fresher&nbsp;&nbsp;·&nbsp;&nbsp;2026 CSE Graduate&nbsp;&nbsp;·&nbsp;&nbsp;Hyderabad
          </p>

          <p className="hero__description">
            2026 Computer Science Engineering graduate with hands-on experience
            in Java, Spring Boot, REST APIs, MySQL and React.js. Seeking an
            entry-level Java Full Stack Developer role.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={e => smoothScroll(e, '#projects')}
            >
              View Projects
            </a>
            <a
              href="/Triveni_Karna_Resume.pdf"
              className="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume PDF"
            >
              Download Resume
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karnatriveni43@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="hero__photo-wrap">
          <img
            src="/profile.png"
            alt="Triveni Karna – Java Full Stack Developer"
            className="hero__photo"
          />
        </div>

      </div>
    </section>
  );
}
