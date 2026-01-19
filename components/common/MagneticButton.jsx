'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function MagneticButton({ children, href, className = '', onClick }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 }); // Magnetic strength
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const ButtonContent = (
        <motion.div
            className={`magnetic-btn ${className}`}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="btn-shine"></span>
            <span className="btn-content">{children}</span>

            <style jsx global>{`
        .magnetic-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 30px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          color: #fff;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease;
          z-index: 1;
        }

        .magnetic-btn:hover {
          border-color: var(--main-color, #fff);
          color: #fff;
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          transform: skewX(-25deg);
          transition: all 0.75s;
          pointer-events: none;
          z-index: -1;
        }

        .magnetic-btn:hover .btn-shine {
          animation: shine 0.75s;
        }

        @keyframes shine {
          100% {
            left: 200%;
          }
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick} style={{ textDecoration: 'none' }}>
                {ButtonContent}
            </a>
        );
    }

    return (
        <div onClick={onClick} style={{ display: 'inline-block' }}>
            {ButtonContent}
        </div>
    );
}

export default MagneticButton;
