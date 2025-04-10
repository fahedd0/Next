'use client';

import { useEffect } from 'react';

export default function useRevealEffect() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-10',
        'transition-all',
        'duration-700'
      );
      observer.observe(el);
    });

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);
}
