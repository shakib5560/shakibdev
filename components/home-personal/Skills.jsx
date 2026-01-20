'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import MagneticButton from '@/components/common/MagneticButton';

function Skills() {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveRadius = (baseRadius) => {
    if (windowWidth < 480) return baseRadius * 0.5;
    if (windowWidth < 768) return baseRadius * 0.7;
    if (windowWidth < 1024) return baseRadius * 0.85;
    return baseRadius;
  };

  const getOrbitData = () => {
    return [
      {
        radius: getResponsiveRadius(120),
        duration: 30,
        icons: [
          { Icon: FaPython, color: '#3776AB', name: 'Python' },
          { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
          { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
          { Icon: SiCplusplus, color: '#00599C', name: 'C++' },
        ],
      },
      {
        radius: getResponsiveRadius(200),
        duration: 45,
        reverse: true,
        icons: [
          { Icon: FaReact, color: '#61DAFB', name: 'React' },
          { Icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
          { Icon: SiRedux, color: '#764ABC', name: 'Redux' },
          { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
          { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
          { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
        ],
      },
      {
        radius: getResponsiveRadius(280),
        duration: 60,
        icons: [
          { Icon: FaNodeJs, color: '#339933', name: 'Node.js' },
          { Icon: SiExpress, color: '#FFFFFF', name: 'Express' },
          { Icon: SiDjango, color: '#092E20', name: 'Django' },
          { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
          { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
          { Icon: FaDocker, color: '#2496ED', name: 'Docker' },
          { Icon: FaAws, color: '#FF9900', name: 'AWS' },
          { Icon: FaGitAlt, color: '#F05032', name: 'Git' },
        ],
      },
    ];
  };

  const orbits = getOrbitData();

  return (
    <section className="skills-orbital section-padding position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="sec-head mb-30 has-text-left">
              <span className="sub-title main-color mb-5">My Expertise</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow responsive-h3">
                <span className="rotate-text">
                  Professional <span className="fw-200">Skills.</span>
                </span>
              </h3>
            </div>
            <div className="text mb-40">
              <p className="fz-16 text-gray">
                I have honed my skills across the full stack, from crafting responsive frontends to architecting robust backends and managing scalable databases. Using modern technologies like React, Next.js, and Cloud services, I build solutions that are not only functional but also performant and future-proof.
              </p>
            </div>
            <MagneticButton
              href="/#contact"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Contact Me</span>
            </MagneticButton>
          </div>

          {/* Right Orbital Animation */}
          <div className="col-lg-7 position-relative d-flex justify-content-center align-items-center responsive-orbital-container" style={{ minHeight: '600px' }}>
            {/* Central Glow/Icon */}
            <div className="position-absolute d-flex justify-content-center align-items-center z-index-2">
              <motion.div
                animate={{ boxShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 50px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="fz-24 fw-600">Dev</span>
              </motion.div>
            </div>

            {/* Orbit Rings */}
            {orbits.map((orbit, i) => (
              <motion.div
                key={i}
                className="orbit-ring position-absolute rounded-circle border border-white-10"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                  zIndex: 1,
                }}
                animate={{ rotate: orbit.reverse ? -360 : 360 }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
              >
                {orbit.icons.map((item, j) => {
                  const angle = (360 / orbit.icons.length) * j;
                  return (
                    <motion.div
                      key={j}
                      className="skill-icon-wrapper position-absolute d-flex justify-content-center align-items-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '40px',
                        height: '40px',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${orbit.radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: orbit.reverse ? 360 : -360 }}
                        transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#1a1a1a',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                        }}
                        whileHover={{ scale: 1.2, borderColor: item.color, boxShadow: `0 0 15px ${item.color}` }}
                      >
                        <item.Icon size={20} color={item.color} />
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-white-10 {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        .text-gray {
          color: #cecece;
        }
        @media (max-width: 768px) {
          .responsive-h3 {
            font-size: 35px !important;
          }
          .responsive-orbital-container {
            minHeight: 400px !important;
            margin-top: 50px;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
