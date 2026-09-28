import { useState } from 'react';
import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'karnatriveni43@gmail.com',
    href: 'mailto:karnatriveni43@gmail.com',
    external: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/triveni-karna',
    href: 'https://www.linkedin.com/in/triveni-karna',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Karna-triveni',
    href: 'https://github.com/Karna-triveni',
    external: true,
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header section__header--center">
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title" id="contact-heading">Get in Touch</h2>
          <p className="section__subtitle">
            I am open to entry-level opportunities, internships and collaborations.
            Feel free to reach out.
          </p>
        </div>

        <div className="contact__inner">

          {/* ── Left: info ── */}
          <div className="contact__info">
            <div className="contact__who">
              <h3>Triveni Karna</h3>
              <p className="contact__location">
                <svg
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Hyderabad, India
              </p>
            </div>

            <div className="contact__avail">
              <span
                className="status-dot status-dot--green contact__avail-dot"
                aria-hidden="true"
              ></span>
              <span>Available for opportunities</span>
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
                    <span className="contact__link-icon" aria-hidden="true">
                      {link.icon}
                    </span>
                    <div>
                      <span className="contact__link-label">{link.label}</span>
                      <span className="contact__link-value">{link.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form ── */}
          <div className="contact__form-wrap card">
            <h3>Send a Message</h3>
            <p>Fill in the form below and I will get back to you as soon as possible.</p>

            {submitted ? (
              <div className="contact__success" role="alert">
                <span className="contact__success-icon" aria-hidden="true">📬</span>
                <h3>Thanks for your message.</h3>
                <p>
                  This form is currently a demo and is not connected to an
                  email service. Please reach me directly at{' '}
                  <a
                    href="mailto:karnatriveni43@gmail.com"
                    className="contact__inline-link"
                  >
                    karnatriveni43@gmail.com
                  </a>
                </p>
                <button
                  className="btn btn--outline btn--sm"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                aria-label="Contact form"
                noValidate
              >
                <div className="contact__form-group">
                  <label htmlFor="c-name">
                    Your Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="c-email">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="c-message">
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Feel free to introduce yourself or share the opportunity"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--submit">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
