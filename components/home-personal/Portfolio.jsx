'use client';
import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaUserLock } from "react-icons/fa";
import { motion } from 'framer-motion';

function Portfolio() {
  function Playing() {
    if (window.innerWidth < 768) return;
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const cards = document.querySelectorAll('.cards .card-item');
      if (cards.length === 0) return;

      let stickDistance = 0;

      const firstCardST = ScrollTrigger.create({
        trigger: cards[0],
        start: 'center center',
      });

      const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'bottom bottom',
      });

      cards.forEach((card, index) => {
        const scale = 1 - (cards.length - index) * 0.025;
        const scaleDown = gsap.to(card, {
          scale: scale,
          transformOrigin: '50% ' + (lastCardST.start + stickDistance),
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'center center',
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: 'none',
          animation: scaleDown,
          toggleActions: 'restart none none reverse',
        });
      });
    }
  }

  useEffect(() => {
    Playing();
    return () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      }
    };
  }, []);

  const projects = [
    {
      id: "toygalaxy",
      title: "ToyGalaxy",
      tags: ["Vanilla JS", "Django"],
      desc: "Developed a full-stack eCommerce platform using Django and JavaScript, serving 2,000+ daily users with optimized performance.",
      img: "/assets/imgs/works/1/1-min.jpg",
      github: "https://github.com/shakib5560/ToyGalaxy",
      live: "https://www.toygalaxy.com.au/"
    },
    {
      id: "ainos",
      title: "AINOS",
      tags: ["Next JS", "Nest JS"],
      desc: "A minimalistic eCommerce website made with Next.js and Nest.js.",
      img: "/assets/imgs/works/1/alnos.png",
      github: "https://github.com/shakib5560/AINOS",
      live: "https://ainos-premium.netlify.app/",
      adminCredentials: {
        link: "https://ainos-premium.netlify.app/admin",
        email: "admin@test.com",
        password: "224466"
      }
    },
    {
      id: "atlania",
      title: "Atlania",
      tags: ["Next.js", "FastAPI", "Tailwind CSS"],
      desc: "A modern, full-stack blog platform featuring glassmorphism, bento grids, and integrated FastAPI backend.",
      img: "/assets/imgs/works/1/atlania-mockup.png",
      github: "https://github.com/shakib5560/Atlania",
      live: "https://atlania.vercel.app/"
    },
    {
      id: "tubex",
      title: "tubeX",
      tags: ["JavaScript", "Express JS", "MongoDB"],
      desc: "An open-source backend REST API for a video sharing platform, built with Node.js, Express, and MongoDB.",
      img: "/assets/imgs/works/1/tubex-min.png",
      github: "https://github.com/shakib5560/tubeX"
    },
    {
      id: "rinors",
      title: "Rinors.com",
      tags: ["Next Js", "MongoDB", "Node Js"],
      desc: "A full-stack application built with the Next.js T3 stack. A multi-vendor e-commerce handling over 10k monthly users.",
      img: "/assets/imgs/works/1/ringo-min.png",
      live: "https://rinors.com/"
    },
    {
      id: "carhub",
      title: "CarHub",
      tags: ["React.js", "Express.js"],
      desc: "Multi-vendor website where users can submit, edit, and remove their products with a streamlined dashboard.",
      img: "/assets/imgs/works/1/2-min.jpg",
      github: "https://github.com/shakib5560/CarHub-Multi-Vendor-eCommerce-website-by-React-TS"
    },

    {
      id: "servicobd",
      title: "servicoBD",
      tags: ["FastAPI", "Next JS", "MongoDB"],
      desc: "AI-Powered Service Finder designed to connect users with service providers using intelligent matching.",
      img: "/assets/imgs/works/1/u-min.png",
      github: "https://github.com/shakib5560/servicoBD_frontend"
    },
    {
      id: "listlive",
      title: "List-Live",
      tags: ["Django", "Next.js"],
      desc: "Powerful and visually stunning real estate multi-vendor platform for the Bangladesh market.",
      img: "/assets/imgs/works/1/4-min.jpg",
      github: "https://github.com/shakib5560/List-Live"
    },

    {
      id: "careerz",
      title: "career_z",
      tags: ["C++", "Groq AI"],
      desc: "Terminal-based AI career recommendation system powered by Groq LLM and PostgreSQL.",
      img: "/assets/imgs/works/1/cz-min.png",
      github: "https://github.com/shakib5560/career_z"
    }
  ];

  return (
    <>
      <section className="work-card section-padding pb-0">
        <div className="container">
          <div className="sec-head mb-80">
            <div className="d-flex align-items-center">
              <div>
                <span className="sub-title main-color mb-5">Featured Projects</span>
                <h3 className="fw-600 fz-50 text-u d-rotate wow responsive-h3">
                  <span className="rotate-text">
                    Selected <span className="fw-200">Works.</span>
                  </span>
                </h3>
              </div>
              <div className="ml-auto vi-more responsive-vi-more">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/shakib5560"
                  className="butn butn-sm butn-bord radius-30 d-flex align-items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View All</span>
                  <span className="ti-arrow-top-right"></span>
                </motion.a>
              </div>
            </div>
          </div>

          <div className="cards">
            {projects.map((project, index) => (
              <div className="card-item sub-bg mb-50 project-card" key={project.id} style={{
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.02)'
              }}>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="cont p-40 responsive-cont">
                      <div>
                        <div className="mb-20">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="tag mr-10 mb-10" style={{
                              fontSize: '11px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              padding: '4px 12px',
                              borderRadius: '20px',
                              color: '#ccc',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h4 className="fw-600 mb-20">{project.title}</h4>
                      </div>
                      <div>
                        <p className="fz-16 opacity-7 mb-30" style={{ lineHeight: '1.6' }}>
                          {project.desc}
                        </p>
                        <div className="d-flex align-items-center gap-4">
                          {project.github && (
                            <motion.a
                              whileHover={{ y: -3, color: '#fff' }}
                              target="_blank"
                              href={project.github}
                              className="d-flex align-items-center gap-2"
                              style={{ color: '#2e86de', transition: 'color 0.3s', cursor: 'pointer' }}
                            >
                              <span className="fz-14 fw-500">Source Code</span>
                              <FaGithub className='fz-18' />
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              whileHover={{ y: -5 }}
                              target="_blank"
                              href={project.live}
                              className="butn butn-sm butn-bg main-colorbg radius-30 d-flex align-items-center gap-2"
                              style={{ padding: '8px 20px', border: 'none', cursor: 'pointer' }}
                            >
                              <span className="fz-14 fw-600">Live Demo</span>
                              <FaExternalLinkAlt className="fz-12" />
                            </motion.a>
                          )}

                          {project.adminCredentials && (
                            <div className="admin-access-container" style={{ position: 'relative', display: 'inline-block' }}>
                              <motion.div
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                style={{ position: 'relative', zIndex: 10 }}
                              >
                                <h6
                                  className="d-flex align-items-center gap-2 mb-0"
                                  style={{
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    color: '#e63946',
                                    fontWeight: 600,
                                    border: '1px solid rgba(230, 57, 70, 0.3)',
                                    padding: '8px 16px',
                                    borderRadius: '30px',
                                    background: 'rgba(230, 57, 70, 0.1)'
                                  }}
                                >
                                  <FaUserLock /> Admin Access
                                </h6>

                                <motion.div
                                  variants={{
                                    rest: { opacity: 0, y: 10, pointerEvents: 'none', scale: 0.95 },
                                    hover: { opacity: 1, y: 0, pointerEvents: 'auto', scale: 1 }
                                  }}
                                  transition={{ duration: 0.2 }}
                                  style={{
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    marginBottom: '10px',
                                    background: '#1a1a1a',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    minWidth: '220px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(10px)'
                                  }}
                                >
                                  <div className="mb-2">
                                    <span style={{ fontSize: '11px', color: '#888', display: 'block' }}>Email</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <span style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>{project.adminCredentials.email}</span>
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <span style={{ fontSize: '11px', color: '#888', display: 'block' }}>Password</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <span style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>{project.adminCredentials.password}</span>
                                    </div>
                                  </div>
                                  <a
                                    href={project.adminCredentials.link}
                                    target="_blank"
                                    className="butn butn-sm w-100 text-center"
                                    style={{
                                      fontSize: '12px',
                                      padding: '6px',
                                      background: '#e63946',
                                      color: '#fff',
                                      borderRadius: '6px',
                                      display: 'block'
                                    }}
                                  >
                                    Login Dashboard
                                  </a>
                                  {/* Arrow */}
                                  <div style={{
                                    position: 'absolute',
                                    bottom: '-6px',
                                    left: '50%',
                                    marginLeft: '-6px',
                                    width: '12px',
                                    height: '12px',
                                    background: '#1a1a1a',
                                    borderRight: '1px solid rgba(255,255,255,0.1)',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    transform: 'rotate(45deg)'
                                  }}></div>
                                </motion.div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="img" style={{ padding: '20px' }}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}
                      >
                        <img src={project.img} alt={project.title} style={{ transition: 'transform 0.6s ease' }} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
      @media (max-width: 768px) {
        .responsive-h3 {
          font-size: 35px !important;
        }
        .responsive-cont {
          padding: 20px !important;
        }
        .sec-head .d-flex {
          flex-direction: column;
          align-items: flex-start !important;
        }
        .responsive-vi-more {
          margin-top: 20px;
          margin-left: 0 !important;
        }
        .project-card {
          backdrop-filter: none;
        }
      }
      @media (min-width: 769px) {
        .project-card {
          backdrop-filter: blur(10px);
        }
      }
    `}</style>
    </>
  );
}

export default Portfolio;
