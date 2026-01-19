'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ScrollReveal({ children, width = '100%', delay = 0.1 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom sweet cubic-bezier
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;
