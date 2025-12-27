'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggleNav() {
    const navbarCollapse = document.querySelector('.navbar .navbar-collapse');
    navbarCollapse.classList.toggle('show');
  }

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar .navbar-collapse');
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#" onClick={(e) => smoothScroll(e, '#home')}>
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => smoothScroll(e, '#home')}>
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => smoothScroll(e, '#about')}>
                <span className="rolling-text">About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={(e) => smoothScroll(e, '#services')}>
                <span className="rolling-text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={(e) => smoothScroll(e, '#portfolio')}>
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={(e) => smoothScroll(e, '#skills')}>
                <span className="rolling-text">Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')}>
                <span className="rolling-text">Testimonials</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog" onClick={(e) => smoothScroll(e, '#blog')}>
                <span className="rolling-text">Blogs</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="#contact"
            className="butn butn-sm butn-bg text-black main-colorbg radius-5"
            onClick={(e) => smoothScroll(e, '#contact')}
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;