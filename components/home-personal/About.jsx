'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiBrain, GiArtificialIntelligence } from 'react-icons/gi';
import { FaCode, FaServer, FaRocket, FaUserAstronaut, FaProjectDiagram, FaSmile } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython } from 'react-icons/si';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <></>
  );
};

function About() {
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setRadius(80);
      } else if (window.innerWidth < 768) {
        setRadius(100);
      } else {
        setRadius(120);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="about-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0E0E0E',
        color: '#fff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        fontFamily: 'inherit',
      }}
    >
      <StarryBackground />

      {/* Main Grid Container */}
      <div
        className="container responsive-grid"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: '1280px',
          width: '100%',
        }}
      >
        {/* --- LEFT PANEL: Profile Hologram --- */}
        <motion.div
          className="about-left-panel"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          {/* Header Line */}
          <div className="flex items-center gap-3 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 10px #00d2ff' }}></div>
            <h5 style={{ margin: 0, fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Identity_Core</h5>
          </div>

          {/* Profile Image & Role */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', width: '160px', height: '160px' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px dashed #00d2ff', animation: 'spin 10s linear infinite' }}></div>
              <img
                src="/assets/imgs/header/p2-min.jpg"
                alt="Profile"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', padding: '5px' }}
              />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Shakib</h3>
              <p style={{ margin: 0, color: '#00d2ff', fontSize: '0.9rem' }}>Full Stack Engineer</p>
            </div>
          </div>

          {/* Bio Text */}
          <div style={{ marginBottom: '2rem' }}>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
              I specialize in building fast, reliable, and user-friendly full-stack web applications. I bring ideas to life for businesses, startups, and product teams.
            </p>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>100%</h2>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>Client Satisfaction</span>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>10+</h2>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>Projects Done</span>
            </div>
          </div>
        </motion.div>


        {/* --- CENTER PANEL: The Brain/Core --- */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', perspective: '1000px' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Rotating Cube/Rings Effect */}
            <motion.div
              style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid rgba(0, 210, 255, 0.3)', borderRadius: '10%', boxSizing: 'border-box' }}
              animate={{ rotate: 360, rotateX: 180 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{ position: 'absolute', width: '80%', height: '80%', border: '1px solid rgba(0, 210, 255, 0.5)', borderRadius: '50%', boxSizing: 'border-box' }}
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* Core Icon */}
            <motion.div
              animate={{
                filter: ['drop-shadow(0 0 10px #00d2ff)', 'drop-shadow(0 0 30px #00d2ff)', 'drop-shadow(0 0 10px #00d2ff)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <GiBrain size={80} color="#00d2ff" />
            </motion.div>

            {/* Connecting Lines (Decorations) */}
            <div style={{ position: 'absolute', top: '50%', left: '-50%', width: '50%', height: '1px', background: 'linear-gradient(90deg, transparent, #00d2ff)' }}></div>
            <div style={{ position: 'absolute', top: '50%', right: '-50%', width: '50%', height: '1px', background: 'linear-gradient(270deg, transparent, #00d2ff)' }}></div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #00d2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Antigravity Thinking
            </h2>
            <div style={{ width: '200px', height: '4px', background: '#333', borderRadius: '2px', margin: '0 auto', overflow: 'hidden' }}>
              <motion.div
                style={{ width: '100%', height: '100%', background: '#00d2ff' }}
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            <p style={{ marginTop: '10px', fontSize: '0.8rem', letterSpacing: '2px' }}>LEARNING & GROWING: 99%</p>
          </div>
        </motion.div>


        {/* --- RIGHT PANEL: Floating Skills Sphere --- */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '300px' }}
        >
          {/* Central Hub in Right Panel */}
          <div style={{ position: 'relative', width: '300px', height: '300px' }}>
            {/* Orbit Container */}
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {/* Orbiting Icons */}
              {[FaCode, FaServer, FaRocket, SiReact, SiNextdotjs, SiNodedotjs, SiPython, GiArtificialIntelligence].map((Icon, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={i}
                    className="orbit-icon"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '50px',
                      height: '50px',
                      x: x,
                      y: y,
                      // Use translate to perfectly center the icon on its coordinate
                      translateX: '-50%',
                      translateY: '-50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 0 15px rgba(0, 210, 255, 0.2)'
                    }}
                    // Counter-rotate the icon so it stays upright
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon size={20} />
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Central Icon */}
            <div style={{ position: 'absolute', inset: 0, margin: 'auto', width: '80px', height: '80px', background: 'rgba(0, 210, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #00d2ff' }}>
              <FaUserAstronaut size={30} color="#00d2ff" />
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
            padding: 20px 0 !important;
          }
          .about-section {
            padding: 40px 10px !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
          h3 {
            font-size: 1.3rem !important;
          }
          .about-left-panel {
            backdrop-filter: none !important;
          }
          .orbit-icon {
            backdrop-filter: none !important;
          }
        }
        @media (min-width: 769px) {
          .about-left-panel {
            backdrop-filter: blur(10px);
          }
          .orbit-icon {
            backdrop-filter: blur(5px);
          }
        }
      `}</style>
    </section>
  );
}

export default About;
