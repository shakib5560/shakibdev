'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Marq() {
  const itemsTop = [
    'Rest API', 'Express.js', 'FastAPI', 'Django', 'Next.js', 'React', 'Tailwind',
  ];

  const itemsBottom = [
    'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Deployment', 'System Design', 'Cloud',
  ];

  // Duplicate for seamless loop
  const marqueeTop = [...itemsTop, ...itemsTop, ...itemsTop, ...itemsTop];
  const marqueeBottom = [...itemsBottom, ...itemsBottom, ...itemsBottom, ...itemsBottom];

  return (
    <section className="marq-section">
      <div className="marq-container">
        <div className="glass-panel">
          {/* Top Row - Outline Text - Left Scroll */}
          <div className="marq-wrapper mb-20">
            <motion.div
              className="marq-content"
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
              style={{ display: "flex", gap: "2rem" }} // Inline flex fix
            >
              {marqueeTop.map((item, i) => (
                <div key={i} className="marq-item outline-mode">
                  <span className="text-outline">{item}</span>
                  <span className="separator-dot"></span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Filled Text - Right Scroll */}
          <div className="marq-wrapper">
            <motion.div
              className="marq-content"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
              style={{ display: "flex", gap: "2rem" }} // Inline flex fix
            >
              {marqueeBottom.map((item, i) => (
                <div key={i} className="marq-item filled-mode">
                  <span className="text-filled">{item}</span>
                  <span className="separator-slash">/</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marq-section {
          padding: 6rem 0;
          overflow: hidden;
          background: transparent;
          position: relative;
          z-index: 10;
        }

        .marq-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .marq-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
          width: 100%;
        }

        .marq-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Outline Text Style */
        .text-outline {
          font-size: 3.5rem;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          transition: all 0.3s ease;
          line-height: 1;
        }

        .outline-mode:hover .text-outline {
          color: #fff;
          -webkit-text-stroke: 1px transparent;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }

        /* Filled Text Style */
        .text-filled {
          font-size: 3.5rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          line-height: 1;
          opacity: 0.9;
        }

        .filled-mode:hover .text-filled {
          color: var(--main-color, #4a90e2);
        }

        /* Separators */
        .separator-dot {
          width: 8px;
          height: 8px;
          background: var(--main-color, #4a90e2);
          border-radius: 50%;
          opacity: 0.5;
        }

        .separator-slash {
          font-size: 2.5rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.2);
        }
        
        .mb-20 {
          margin-bottom: 1.5rem;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .text-outline, .text-filled {
            font-size: 2.5rem;
          }
          .glass-panel {
            padding: 2rem 0;
          }
        }

        @media (max-width: 768px) {
          .text-outline, .text-filled {
            font-size: 1.8rem;
          }
          .marq-item {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Marq;
