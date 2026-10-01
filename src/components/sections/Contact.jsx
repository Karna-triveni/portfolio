import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'karnatriveni43@gmail.com',
    href: 'mailto:karnatriveni43@gmail.com',
    external: false,
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/triveni-karna',
    href: 'https://www.linkedin.com/in/triveni-karna',
    external: true,
  },
  {
    icon: 'gh',
    label: 'GitHub',
    value: 'github.com/Karna-triveni',
    href: 'https://github.com/Karna-triveni',
    external: true,
  },
  {
    icon: '↓',
    label: 'Resume',
    value: 'Triveni_Karna_Resume.pdf',
    href: '/Triveni_Karna_Resume.pdf',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--alt contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title" id="contact-heading">Get in Touch</h2>
          <p className="section__subtitle">
            Open to entry-level Java Full Stack Developer roles, internships and collaborations.
          </p>
        </div>

        <div className="contact__inner">
          {/* Left: links */}
          <div className="contact__info">
            <div className="contact__who">
              <h3>Triveni Karna</h3>
              <p className="contact__role">Java Full Stack Developer · Fresher</p>
              <p className="contact__location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Hyderabad, India
              </p>
            </div>

            <div className="contact__avail">
              <span className="status-dot status-dot--green contact__avail-dot" aria-hidden="true"></span>
              Open to entry-level opportunities
            </div>

            <ul className="contact__links" aria-label="Contact links">
              {CONTACT_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="contact__link-item"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className="contact__link-icon" aria-hidden="true">{link.icon}</span>
                    <div>
                      <span className="contact__link-label">{link.label}</span>
                      <span className="contact__link-value">{link.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="contact__cta">
            <h3 className="contact__cta-heading">Let&apos;s Connect</h3>
            <p className="contact__cta-body">
              If you have an entry-level role or opportunity that fits my profile,
              I would love to hear from you. Click below to email me directly
              through Gmail.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karnatriveni43@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__email-btn"
              aria-label="Email Triveni Karna via Gmail"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Me
            </a>

            <p className="contact__cta-note">
              Opens Gmail compose ·{' '}
              <a href="mailto:karnatriveni43@gmail.com" className="contact__direct-link">
                karnatriveni43@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
