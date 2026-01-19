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

const skillOrbits = [
  {
    radius: 120, // Inner ring
    duration: 30, // Faster
    icons: [
      { Icon: FaPython, color: '#3776AB', name: 'Python' },
      { Icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
      { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
      { Icon: SiCplusplus, color: '#00599C', name: 'C++' },
    ],
  },
  {
    radius: 200, // Middle ring
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
    radius: 280, // Outer ring
    duration: 60, // Slower
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

function Skills() {
  return (
    <section className="skills-orbital section-padding position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="sec-head mb-30 has-text-left">
              <span className="sub-title main-color mb-5">My Expertise</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
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
          <div className="col-lg-7 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '600px' }}>
            {/* Central Glow/Icon */}
            <div className="position-absolute d-flex justify-content-center align-items-center z-index-2">
              <motion.div
                animate={{ boxShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 50px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="fz-30 fw-600">Dev</span>
              </motion.div>
            </div>

            {/* Orbit Rings */}
            {skillOrbits.map((orbit, i) => (
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
                  // trigonometry to place on circle border? No, if we rotate the RING, we just place them absolutely at correct angles on the ring.
                  // Actually easier: Place them at top center, then rotate a container for each item?
                  // Best way: Absolute position using transform.

                  return (
                    <motion.div
                      key={j}
                      className="skill-icon-wrapper position-absolute d-flex justify-content-center align-items-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        width: '50px',
                        height: '50px',
                        // Rotate to angle to place on ring, then translate OUT by radius
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${orbit.radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      {/* Counter-rotate the icon so it stays upright relative to the screen */}
                      <motion.div
                        animate={{ rotate: orbit.reverse ? 360 : -360 }}
                        transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: '45px',
                          height: '45px',
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
                        <item.Icon size={24} color={item.color} />
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
      text-gray {
          color: #cecece;
      }
      `}</style>
    </section>
  );
}

export default Skills;
