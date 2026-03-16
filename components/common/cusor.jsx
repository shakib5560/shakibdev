'use client';
import React, { useEffect, useState } from 'react';

function Cursor() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch / mobile — no custom cursor on touch screens
    if ('ontouchstart' in window || window.innerWidth < 768) {
      setIsTouch(true);
      return;
    }

    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
      const hoverAnim = this.querySelector('.hover-anim');
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };
    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
      el.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  }, []);

  // Don't render cursor element on touch/mobile devices
  if (isTouch) return null;

  return <div className="cursor"></div>;
}

export default Cursor;
