import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',          href: '#hero' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Internship',    href: '#internship' },
  { label: 'Education',     href: '#education' },
  { label: 'Certifications',href: '#certifications' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]    = useState(false);
  const [scrolled, setScrolled]    = useState(false);
  const [activeSection, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const smoothScroll = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    }
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a href="#hero" className="navbar__logo" onClick={e => smoothScroll(e, '#hero')} aria-label="Triveni Karna – back to top">
          <span className="navbar__logo-name">Triveni Karna</span>
          <span className="navbar__logo-role">Java Full Stack</span>
        </a>

        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => smoothScroll(e, href)}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
              >{label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=karnatriveni43@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--sm navbar__cta"
        >
          Hire Me
        </a>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div id="mobile-menu" className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__mobile-link${activeSection === href.slice(1) ? ' navbar__mobile-link--active' : ''}`}
                onClick={e => smoothScroll(e, href)}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
              >{label}</a>
            </li>
          ))}
          <li>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karnatriveni43@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary navbar__mobile-cta"
                tabIndex={menuOpen ? 0 : -1}
              >
                Hire Me
              </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
