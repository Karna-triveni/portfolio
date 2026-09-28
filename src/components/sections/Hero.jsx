import './Hero.css';

export default function Hero() {
  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
        ) || 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container hero__inner">

        {/* ── Left: text ── */}
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I&apos;m</p>

          <h1 className="hero__name">
            Triveni <span>Karna</span>
          </h1>

          <p className="hero__role">
            2026 Computer Science Engineering Graduate
          </p>

          <div className="hero__divider" aria-hidden="true"></div>

          <p className="hero__description">
            Interested in Web Development &amp; Java Full Stack Development.
            I have been learning Java, Spring Boot, React and related
            technologies, and I am looking for an opportunity to apply these
            skills in a professional environment.
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
              href="#contact"
              className="btn btn--outline"
              onClick={e => smoothScroll(e, '#contact')}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Right: real profile photo ── */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              src="/profile.png"
              alt="Triveni Karna"
              className="hero__photo-img"
            />
            <span className="hero__photo-badge">
              <span
                className="status-dot status-dot--green"
                aria-hidden="true"
              ></span>
              Open to Work
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
