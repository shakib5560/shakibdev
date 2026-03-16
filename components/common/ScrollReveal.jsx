'use client';
import React from 'react';

// Scroll animations removed for performance — renders children instantly
function ScrollReveal({ children, width = '100%' }) {
    return <div style={{ width }}>{children}</div>;
}

export default ScrollReveal;
