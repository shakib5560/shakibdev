'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Marq() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const itemsTop = [
    'Rest API', 'Express.js', 'FastAPI', 'Django', 'Next.js', 'React', 'Tailwind',
  ];

  const itemsBottom = [
    'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Deployment', 'System Design', 'Cloud',
  ];

  const marqueeTop = [...itemsTop, ...itemsTop, ...itemsTop, ...itemsTop];
  const marqueeBottom = [...itemsBottom, ...itemsBottom, ...itemsBottom, ...itemsBottom];

  const renderItem = (item, i, isOutline) => (
    <div key={i} className={`marq-item ${isOutline ? 'outline-mode' : 'filled-mode'}`}>
      <span className={isOutline ? 'text-outline' : 'text-filled'}>{item}</span>
      {isOutline
        ? <span className="separator-dot"></span>
        : <span className="separator-slash"></span>
      }
    </div>
  );

  return (
    <section className="marq-section">
      <div className="marq-container">
        <div className={`glass-panel${isMobile ? ' glass-panel--mobile' : ''}`}>
          {/* Top Row */}
          <div className="marq-wrapper mb-20">
            {isMobile ? (
              <div className="marq-content marq-css-left" style={{ display: 'flex', gap: '2rem' }}>
                {marqueeTop.map((item, i) => renderItem(item, i, true))}
              </div>
            ) : (
              <motion.div
                className="marq-content"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                style={{ display: "flex", gap: "2rem" }}
              >
                {marqueeTop.map((item, i) => renderItem(item, i, true))}
              </motion.div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="marq-wrapper">
            {isMobile ? (
              <div className="marq-content marq-css-right" style={{ display: 'flex', gap: '2rem' }}>
                {marqueeBottom.map((item, i) => renderItem(item, i, false))}
              </div>
            ) : (
              <motion.div
                className="marq-content"
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                style={{ display: "flex", gap: "2rem" }}
              >
                {marqueeBottom.map((item, i) => renderItem(item, i, false))}
              </motion.div>
            )}
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

        /* On mobile: remove expensive backdrop-filter & mask-image */
        .glass-panel--mobile {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          mask-image: none !important;
          -webkit-mask-image: none !important;
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

        /* CSS-only marquee animations for mobile */
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marq-css-left {
          animation: marquee-left 30s linear infinite;
          will-change: transform;
        }
        .marq-css-right {
          animation: marquee-right 30s linear infinite;
          will-change: transform;
        }

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
