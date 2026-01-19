'use client';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    setIsScrolled(bodyScroll > 100);

    // Update active section based on scroll position
    const sections = ['home', 'about', 'services', 'portfolio', 'skills', 'testimonials', 'blog'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Minimalist SVG Icons (24x24 pixel perfect)
  const icons = {
    home: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    user: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    services: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    portfolio: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    skills: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    blog: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    contact: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  };

  const navItems = [
    { id: 'home', icon: icons.home, label: 'Home' },
    { id: 'about', icon: icons.user, label: 'About' },
    { id: 'services', icon: icons.services, label: 'Services' },
    { id: 'portfolio', icon: icons.portfolio, label: 'Portfolio' },
    { id: 'skills', icon: icons.skills, label: 'Skills' },
    { id: 'blog', icon: icons.blog, label: 'Blog' }
  ];

  return (
    <>
      <nav className={`pill-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="pill-container">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => smoothScroll(e, '#home')}
            className="pill-logo"
            aria-label="Home"
          >
            <img src="/assets/imgs/logo-light.png" alt="logo" />
          </a>

          {/* Icon Navigation */}
          <div className="pill-nav-icons">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => smoothScroll(e, `#${item.id}`)}
                className={`pill-icon-link ${activeSection === item.id ? 'active' : ''}`}
                data-tooltip={item.label}
                aria-label={item.label}
                style={{ '--i': index }}
              >
                <div className="icon-wrapper">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, '#contact')}
            className="pill-cta"
            aria-label="Contact"
          >
            <span className="cta-icon">{icons.contact}</span>
            <span className="cta-text">Contact</span>
          </a>
        </div>
      </nav>

      <style jsx>{`
        /* Pill Navbar Container */
        .pill-navbar {
          position: fixed;
          top: 2rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 1rem;
        }

        .pill-navbar.scrolled {
          top: 1rem;
        }

        .pill-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1280px;
          padding: 0.75rem 2rem;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: pillFloat 6s ease-in-out infinite;
        }

        @keyframes pillFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Logo */
        .pill-logo {
          display: flex;
          align-items: center;
          padding: 0.25rem;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .pill-logo:hover {
          transform: scale(1.05);
        }

        .pill-logo img {
          height: 32px;
          width: auto;
          filter: brightness(1.2);
        }

        /* Icon Navigation */
        .pill-nav-icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex: 1;
        }

        .pill-icon-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.7);
          background: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          animation: iconFadeIn 0.5s ease backwards;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes iconFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pill-icon-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .pill-icon-link.active {
          color: #fff;
          background: linear-gradient(135deg, var(--main-color), var(--main-color-alt, #4a90e2));
          box-shadow: 
            0 4px 15px rgba(var(--main-color-rgb), 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .pill-icon-link:hover .icon-wrapper {
          transform: scale(1.1);
        }

        /* Tooltip */
        .pill-icon-link::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pill-icon-link:hover::after {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* CTA Button */
        .pill-cta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--main-color), var(--main-color-alt, #3a7bc8));
          color: white;
          border-radius: 100px;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 
            0 4px 15px rgba(var(--main-color-rgb), 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .pill-cta:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(var(--main-color-rgb), 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .pill-cta:active {
          transform: translateY(0) scale(0.98);
        }

        /* Responsive Design */
        @media (max-width: 1300px) {
          .pill-container {
            max-width: 95%;
          }
        }

        @media (max-width: 991px) {
          .pill-container {
            padding: 0.65rem 1.25rem;
            gap: 1rem;
          }

          .pill-nav-icons {
            gap: 0.25rem;
          }

          .pill-icon-link {
            width: 40px;
            height: 40px;
          }

          .pill-cta .cta-text {
            display: none;
          }

          .pill-cta {
            padding: 0.75rem;
          }
        }

        @media (max-width: 576px) {
          .pill-navbar {
            padding: 0 0.5rem;
          }
          
          .pill-container {
            padding: 0.65rem 1rem;
            width: 100%;
          }

          /* Hide less important icons on very small screens if needed */
          .pill-icon-link:nth-child(2), /* about */
          .pill-icon-link:nth-child(5) { /* skills */
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;